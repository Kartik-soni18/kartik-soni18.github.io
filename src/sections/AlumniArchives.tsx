import { ArrowUpRight, Check, Globe, MessageSquare, MousePointer2, Send, Sparkles } from 'lucide-react';
import { researchConfig } from '../config';
import { useReveal } from '../hooks/useReveal';

function openBrowserAgent() {
  window.dispatchEvent(new CustomEvent('portfolio-assistant:open'));
}

function BrowserPreview() {
  return <div className="project-preview browser-preview" aria-label="Illustrative browser agent workflow">
    <div className="preview-caption"><Globe size={14} /> BROWSER AGENT <span>INTERFACE PREVIEW</span></div>
    <div className="mini-browser">
      <div className="browser-toolbar"><span className="window-dots"><i /><i /><i /></span><span className="address-bar">kartik-soni18.github.io</span><Globe size={12} /></div>
      <div className="browser-content"><div className="mini-profile"><span>KS.</span><span>Work &nbsp; About &nbsp; Contact</span></div><div className="mini-title">Built with intent.<br /><em>Made to work.</em></div><div className="mini-blocks"><div /><div /><div /></div><div className="scan-line" /><MousePointer2 className="demo-cursor" size={23} fill="currentColor" /></div>
    </div>
    <div className="demo-command"><span className="command-icon"><Sparkles size={16} /></span><div><small>YOUR INTENT</small><p>Show me Kartik’s projects</p></div><span className="command-check"><Check size={15} /></span></div>
    <div className="workflow-steps"><span><i /> Understand</span><span><i /> Navigate</span><span><i /> Verify</span></div>
  </div>;
}
function ChatPreview() {
  return <div className="project-preview chat-preview" aria-label="Illustrative support agent conversation">
    <div className="preview-caption"><MessageSquare size={14} /> SUPPORT AGENT <span>INTERFACE PREVIEW</span></div>
    <div className="demo-chat">
      <div className="demo-chat-header"><span className="chat-avatar"><Sparkles size={17} /></span><div><strong>Spur support</strong><small><i /> Here to help</small></div><span>···</span></div>
      <div className="demo-chat-body"><span className="chat-time">EXAMPLE CONVERSATION</span><p className="demo-bubble demo-user">Can I pick up where I left off?</p><p className="demo-bubble demo-reply">Of course. Your conversation is saved, so you can return whenever you need.</p><span className="demo-grounding"><Check size={12} /> Persistent conversation context</span><div className="typing-indicator"><i /><i /><i /></div></div>
      <div className="demo-chat-input"><span>Ask a question…</span><Send size={14} /></div>
    </div>
    <div className="chat-preview-note"><span className="status-dot" /> Context-aware. Built for continuity.</div>
  </div>;
}

export default function AlumniArchives() {
  const ref = useReveal<HTMLElement>();
  const support = researchConfig.projects.find(project => project.title === 'Spur AI Live Chat Agent')!;
  const others = researchConfig.projects.filter(project => project !== support);
  return <section id="projects" data-agent-section="projects" className="projects-section" ref={ref}>
    <div className="page-width">
      <div className="section-heading" data-reveal><div><span className="eyebrow">01 / SELECTED WORK</span><h2>Agents that<br /><em>do the work.</em></h2></div><p>Two explorations in useful AI.<br />One makes the browser actionable.<br />The other makes support feel effortless.</p></div>
      <article className="featured-project" data-reveal data-profile-project="Browser Agent">
        <BrowserPreview />
        <div className="project-copy"><div className="project-topline"><span>01 / BROWSER AUTOMATION</span><Globe size={18} /></div><h3>Browser Agent</h3><p>An AI copilot that turns natural language into navigation, public-link actions, and profile answers. Try it right here on this portfolio.</p><ul className="project-highlights"><li><Check size={14} /> Natural language, real browser actions</li><li><Check size={14} /> Validated tools and an explicit action allowlist</li><li><Check size={14} /> React frontend with a Cloudflare Worker backend</li></ul><div className="project-stack"><span>React</span><span>TypeScript</span><span>Cloudflare Workers</span><span>Tool calling</span></div><div className="project-actions"><button className="button button-dark" onClick={openBrowserAgent}>Try the agent <ArrowUpRight size={16} /></button><a className="text-link" href="https://github.com/Kartik-soni18/kartik-soni18.github.io" target="_blank" rel="noreferrer" aria-label="Browser Agent GitHub repository">Source code <ArrowUpRight size={15} /></a></div></div>
      </article>
      <article className="featured-project support-project" data-reveal data-profile-project={support.title}>
        <ChatPreview />
        <div className="project-copy"><div className="project-topline"><span>02 / CUSTOMER EXPERIENCE</span><MessageSquare size={18} /></div><h3>Chat Support<br />Agent</h3><p>{support.summary}</p><ul className="project-highlights"><li><Check size={14} /> FAQ-grounded answers with input guardrails</li><li><Check size={14} /> Saved conversations and session resume</li><li><Check size={14} /> Redis caching, token budgets, and timeouts</li></ul><div className="project-stack">{['SvelteKit', 'TypeScript', 'SQLite', 'Redis'].map(item => <span key={item}>{item}</span>)}</div><div className="project-actions"><a className="button button-dark" href={support.websiteHref} target="_blank" rel="noreferrer" aria-label="Chat Support Agent: Open demo">Open demo <ArrowUpRight size={16} /></a><a className="text-link" href={support.githubHref} target="_blank" rel="noreferrer" aria-label="Chat Support Agent GitHub repository">Source code <ArrowUpRight size={15} /></a></div></div>
      </article>
      <div className="other-projects" data-reveal><div className="other-projects-heading"><h3>More experiments.</h3><span className="eyebrow">THE REST OF THE NOTEBOOK</span></div><ul>{others.map((project, index) => <li key={project.title} data-profile-project={project.title}><span className="archive-number">0{index + 3}</span><a href={project.githubHref} target="_blank" rel="noreferrer"><strong>{project.title}</strong><span>{project.discipline}</span><ArrowUpRight size={19} /></a></li>)}</ul></div>
    </div>
  </section>;
}
