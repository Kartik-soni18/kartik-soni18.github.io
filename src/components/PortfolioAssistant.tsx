import { useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, Bot, BriefcaseBusiness, Mail, Send, Sparkles, X } from 'lucide-react';
import { agentConfig } from '../config';
import { executeAgentAction, type AgentAction } from '../lib/agent-actions';

type Message = { role: 'assistant' | 'user'; text: string };
const initial: Message[] = [{ role: 'assistant', text: "Hi — I can help you explore Kartik's work, skills, and contact details." }];
const allowed = new Set(['scroll', 'click', 'extract_contact', 'extract_personal_info', 'answer']);
function validAction(value: unknown): value is AgentAction {
  if (!value || typeof value !== 'object' || !('action' in value) || !allowed.has(String(value.action))) return false;
  const item = value as Record<string, unknown>;
  if (item.action === 'scroll') return ['home', 'skills', 'projects', 'contact'].includes(String(item.target));
  if (item.action === 'click') return ['github', 'linkedin', 'email'].includes(String(item.target));
  return item.action !== 'answer' || typeof item.message === 'string';
}
function validResponse(value: unknown): value is { actions: AgentAction[]; message: string } {
  if (!value || typeof value !== 'object') return false;
  const result = value as Record<string, unknown>;
  return typeof result.message === 'string' && Array.isArray(result.actions) && result.actions.every(validAction);
}

export default function PortfolioAssistant() {
  const [open, setOpen] = useState(false); const [input, setInput] = useState(''); const [messages, setMessages] = useState<Message[]>(initial); const [loading, setLoading] = useState(false); const inputRef = useRef<HTMLInputElement>(null);
  const reply = (text: string) => setMessages(current => [...current, { role: 'assistant', text }]);
  async function submit(event: FormEvent) {
    event.preventDefault(); const question = input.trim(); if (!question || loading) return;
    setMessages(current => [...current, { role: 'user', text: question }]); setInput('');
    if (!agentConfig.apiUrl) { reply('The AI copilot is not configured yet. Add the Worker URL to enable questions and navigation.'); return; }
    setLoading(true);
    try {
      const response = await fetch(`${agentConfig.apiUrl.replace(/\/$/, '')}${agentConfig.apiPath}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: question }), signal: AbortSignal.timeout(12_000) });
      const data: unknown = await response.json().catch(() => null); if (!response.ok || !validResponse(data)) throw new Error('Invalid response');
      const statuses = data.actions.map(executeAgentAction); reply(data.message || statuses.join(' '));
    } catch { reply('The assistant is temporarily unavailable. You can still browse the portfolio normally.'); } finally { setLoading(false); }
  }
  function runSuggestion(question: string) {
    setInput(question);
    window.setTimeout(() => inputRef.current?.form?.requestSubmit(), 0);
  }
  return <aside className="portfolio-assistant" aria-label="AI portfolio assistant">
    {open && <section className="agent-panel" aria-label="AI Portfolio Assistant"><header><div className="agent-title"><span className="agent-orb"><Sparkles size={15}/></span><div><span className="agent-eyebrow">Portfolio copilot</span><h2>Find the signal.</h2></div></div><button type="button" className="agent-icon-button" onClick={() => setOpen(false)} aria-label="Minimize assistant"><X size={18}/></button></header><div className="agent-shortcuts"><button type="button" onClick={() => runSuggestion('Show me the projects')}><BriefcaseBusiness size={15}/>Explore projects<ArrowUpRight size={14}/></button><button type="button" onClick={() => runSuggestion('How can I contact Kartik?')}><Mail size={15}/>Get in touch<ArrowUpRight size={14}/></button></div><div className="agent-messages" aria-live="polite">{messages.map((message, index) => <p key={index} className={`agent-message agent-message-${message.role}`}>{message.text}</p>)}{loading && <p className="agent-status">Thinking…</p>}</div><form onSubmit={submit}><label className="sr-only" htmlFor="assistant-message">Ask a question</label><input ref={inputRef} id="assistant-message" value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about work, skills, or contact" maxLength={500} disabled={loading}/><button type="submit" aria-label="Send message" disabled={loading || !input.trim()}><Send size={17}/></button></form></section>}
    <button type="button" className="agent-launcher" onClick={() => { setOpen(value => !value); window.setTimeout(() => inputRef.current?.focus(), 0); }} aria-expanded={open} aria-controls="assistant-message"><span className="agent-launcher-icon"><Bot size={19}/></span><span><small>Ask Kartik's</small>{open ? 'Close copilot' : 'AI copilot'}</span></button>
  </aside>;
}
