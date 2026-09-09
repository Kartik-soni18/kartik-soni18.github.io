export async function callLLM({ provider, model, apiKey, system, message, tools }) {
  const headers = { 'Content-Type': 'application/json' }; let url; let body;
  if (provider === 'aicredits') { url = 'https://api.aicredits.in/v1/chat/completions'; headers.Authorization = `Bearer ${apiKey}`; body = { model, messages: [{ role: 'system', content: system }, { role: 'user', content: message }], tools, tool_choice: 'auto', max_tokens: 300 }; }
  else if (provider === 'openai') { url = 'https://api.openai.com/v1/chat/completions'; headers.Authorization = `Bearer ${apiKey}`; body = { model, messages: [{ role: 'system', content: system }, { role: 'user', content: message }], tools, tool_choice: 'auto', max_tokens: 300 }; }
  else if (provider === 'anthropic') { url = 'https://api.anthropic.com/v1/messages'; headers['x-api-key'] = apiKey; headers['anthropic-version'] = '2023-06-01'; body = { model, system, messages: [{ role: 'user', content: message }], max_tokens: 300 }; }
  else if (provider === 'google') { url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`; body = { systemInstruction: { parts: [{ text: system }] }, contents: [{ role: 'user', parts: [{ text: message }] }], generationConfig: { maxOutputTokens: 300, responseMimeType: 'application/json' } }; }
  else if (provider === 'openrouter') { url = 'https://openrouter.ai/api/v1/chat/completions'; headers.Authorization = `Bearer ${apiKey}`; body = { model, messages: [{ role: 'system', content: system }, { role: 'user', content: message }], tools, tool_choice: 'auto', max_tokens: 300 }; }
  else throw new Error('Unsupported LLM provider');
  const response = await fetch(url, { method: 'POST', headers, body: JSON.stringify(body), signal: AbortSignal.timeout(10_000) });
  if (!response.ok) throw new Error(`Provider error: ${response.status}`);
  const data = await response.json();
  if (provider === 'anthropic') return { content: data.content?.find(part => part.type === 'text')?.text || '', toolCalls: [] };
  if (provider === 'google') return { content: data.candidates?.[0]?.content?.parts?.[0]?.text || '', toolCalls: [] };
  const messageData = data.choices?.[0]?.message;
  if (!messageData) throw new Error('Provider returned no message');
  return { content: typeof messageData.content === 'string' ? messageData.content : '', toolCalls: messageData.tool_calls || [] };
}
