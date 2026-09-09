import type { AgentAction } from './agent-actions';

const sections: Record<string, Extract<AgentAction, { action: 'scroll' }>['target']> = { home: 'home', about: 'home', skills: 'skills', projects: 'projects', project: 'projects', contact: 'contact' };

export function localRoute(message: string): AgentAction | null {
  const value = message.trim().toLowerCase().replace(/[^a-z\s]/g, ' ');
  if (!value) return null;
  if (/\bgithub\b/.test(value)) return { action: 'click', target: 'github' };
  if (/\blinkedin\b/.test(value)) return { action: 'click', target: 'linkedin' };
  if (/\bemail\b/.test(value) && /\b(open|send|email)\b/.test(value)) return { action: 'click', target: 'email' };
  if (/\b(contact|reach|email)\b/.test(value) && /\b(how|what|contact|reach)\b/.test(value)) return { action: 'extract_contact' };
  if (/\b(tell me about kartik|who is kartik|personal info)\b/.test(value)) return { action: 'extract_personal_info' };
  for (const [word, target] of Object.entries(sections)) if (new RegExp(`\\b${word}\\b`).test(value) && /^(show|go|take|open|scroll|projects|skills|contact|about|home)/.test(value)) return { action: 'scroll', target };
  return null;
}
