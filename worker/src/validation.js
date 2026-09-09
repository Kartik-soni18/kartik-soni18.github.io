const sections = new Set(['home', 'skills', 'projects', 'contact']);
const links = new Set(['github', 'linkedin', 'email']);
export function parseAction(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  if (value.action === 'scroll' && sections.has(value.target)) return { action: 'scroll', target: value.target };
  if (value.action === 'click' && links.has(value.target)) return { action: 'click', target: value.target };
  if (value.action === 'extract_contact' || value.action === 'extract_personal_info') return { action: value.action };
  if (value.action === 'answer' && typeof value.message === 'string') return { action: 'answer', message: value.message.slice(0, 500) };
  return null;
}
export function parseActions(toolCalls) {
  if (!Array.isArray(toolCalls)) return [];
  return toolCalls.map(call => {
    try { return parseAction({ action: call.function?.name, ...JSON.parse(call.function?.arguments || '{}') }); }
    catch { return null; }
  }).filter(Boolean).slice(0, 2);
}
export function json(body, status, headers) { return new Response(JSON.stringify(body), { status, headers: { ...headers, 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' } }); }
