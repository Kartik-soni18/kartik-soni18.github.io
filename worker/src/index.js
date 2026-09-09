import { portfolioContext } from './context.js';
import { callLLM } from './llm.js';
import { json, parseActions } from './validation.js';
const maxBody = 2048; const maxMessage = 500;
function cors(request, env) { const origin = request.headers.get('Origin') || ''; const allowed = origin === env.PORTFOLIO_ORIGIN || /^http:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?$/.test(origin); return { allowed, headers: allowed ? { 'Access-Control-Allow-Origin': origin, 'Vary': 'Origin', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' } : {} }; }
const tools = [
  { type: 'function', function: { name: 'scroll', description: 'Navigate to a portfolio section. Use projects for project overview and a visual spotlight, skills for the technical toolkit.', parameters: { type: 'object', properties: { target: { type: 'string', enum: ['home', 'skills', 'projects', 'contact'] } }, required: ['target'], additionalProperties: false } } },
  { type: 'function', function: { name: 'click', description: 'Open an approved public profile or email link.', parameters: { type: 'object', properties: { target: { type: 'string', enum: ['github', 'linkedin', 'email'] } }, required: ['target'], additionalProperties: false } } },
  { type: 'function', function: { name: 'extract_contact', description: 'Read publicly displayed contact details.', parameters: { type: 'object', properties: {}, additionalProperties: false } } },
  { type: 'function', function: { name: 'extract_personal_info', description: 'Read publicly displayed professional profile details.', parameters: { type: 'object', properties: {}, additionalProperties: false } } }
];
function systemPrompt() { return `You are Kartik Soni's concise portfolio copilot. Context:\n${portfolioContext}\nUse the provided tools when the visitor wants navigation or an approved public link. For contact questions, answer directly from the provided public contact context without calling a tool. For project requests, call scroll with target projects and add a one-sentence overview in your response. For skills requests, call scroll with target skills and add a concise overview. You may provide a response and tool calls in the same turn. Never invent URLs, selectors, actions, private facts, or code.`; }
function fallbackMessage(actions) {
  const scrollTarget = actions.find(action => action.action === 'scroll')?.target;
  if (scrollTarget === 'projects') return 'I’ve brought the projects into view. Start with GuardianHealth for an AI workflow in production, or the Multi-Hop RAG Benchmark for retrieval evaluation.';
  if (scrollTarget === 'skills') return 'I’ve opened Kartik’s toolkit: AI orchestration and RAG sit alongside practical backend, cloud, and frontend engineering.';
  if (scrollTarget === 'contact') return 'I’ve opened the contact section so you can reach Kartik directly.';
  if (scrollTarget === 'home') return 'I’ve taken you back to the overview.';
  if (actions.some(action => action.action === 'extract_contact')) return 'Here are Kartik’s public contact details.';
  if (actions.some(action => action.action === 'extract_personal_info')) return 'Here is Kartik’s professional profile.';
  return 'I can help you explore Kartik’s work, skills, and contact details.';
}
export default { async fetch(request, env) {
  const policy = cors(request, env); if (request.method === 'OPTIONS') return new Response(null, { status: policy.allowed ? 204 : 403, headers: policy.headers });
  if (!policy.allowed) return json({ error: 'This origin is not allowed.' }, 403, policy.headers);
  if (request.method === 'GET' && new URL(request.url).pathname === '/health') return json({ ok: true }, 200, policy.headers);
  if (request.method !== 'POST' || new URL(request.url).pathname !== '/agent') return json({ error: 'Not found.' }, 404, policy.headers);
  if (!request.headers.get('Content-Type')?.toLowerCase().startsWith('application/json')) return json({ error: 'Content-Type must be application/json.' }, 415, policy.headers);
  if (Number(request.headers.get('Content-Length') || 0) > maxBody) return json({ error: 'Request is too large.' }, 413, policy.headers);
  const limiter = await env.AGENT_RATE_LIMIT.limit({ key: request.headers.get('cf-connecting-ip') || 'unknown' }); if (!limiter.success) return json({ error: 'Please wait a minute before asking again.' }, 429, policy.headers);
  let body; try { body = await request.json(); } catch { return json({ error: 'Invalid JSON.' }, 400, policy.headers); }
  if (!body || typeof body.message !== 'string' || !body.message.trim() || body.message.length > maxMessage) return json({ error: `Message must be 1–${maxMessage} characters.` }, 400, policy.headers);
  if (!env.LLM_API_KEY || !env.LLM_PROVIDER || !env.LLM_MODEL) return json({ error: 'Assistant is not configured.' }, 503, policy.headers);
  try { const result = await callLLM({ provider: env.LLM_PROVIDER, model: env.LLM_MODEL, apiKey: env.LLM_API_KEY, system: systemPrompt(), message: body.message.trim(), tools }); const actions = parseActions(result.toolCalls); return json({ actions, message: (result.content.trim() || fallbackMessage(actions)).slice(0, 500) }, 200, policy.headers); }
  catch (error) { console.error(JSON.stringify({ event: 'agent_error', message: error instanceof Error ? error.message : 'unknown' })); return json({ error: 'The assistant is temporarily unavailable.' }, 502, policy.headers); }
} };
