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
    <div className="demo-command"><span className="command-icon"><Sparkles size={16} /></span><div><small>YOUR INTENT</small><p>Compare the details on this page</p></div><span className="command-check"><Check size={15} /></span></div>
    <div className="workflow-steps"><span><i /> Observe</span><span><i /> Execute</span><span><i /> Continue</span></div>
  </div>;
}
function ChatPreview() {
  return <div className="project-preview chat-preview" aria-label="Illustrative support agent conversation">
    <div className="preview-caption"><MessageSquare size={14} /> SUPPORT AGENT <span>INTERFACE PREVIEW</span></div>
    <div className="demo-chat">
      <div className="demo-chat-header"><span className="chat-avatar"><Sparkles size={17} /></span><div><strong>Support desk</strong><small><i /> Here to help</small></div><span>···</span></div>
      <div className="demo-chat-body"><span className="chat-time">EXAMPLE CONVERSATION</span><p className="demo-bubble demo-user">My order arrived with missing items.</p><p className="demo-bubble demo-reply">Tell me which items are missing. You can share a photo so we can review your order.</p><span className="demo-grounding"><Check size={12} /> Evidence → investigation → human review</span><div className="typing-indicator"><i /><i /><i /></div></div>
      <div className="demo-chat-input"><span>Ask a question…</span><Send size={14} /></div>
    </div>
    <div className="chat-preview-note"><span className="status-dot" /> Text, voice & photos. One support flow.</div>
  </div>;
}

export default function AlumniArchives() {
  const ref = useReveal<HTMLElement>();
  const support = researchConfig.projects.find(project => project.title === 'Chat Support Agent')!;
  const others = researchConfig.projects.filter(project => project !== support);
  return <section id="projects" data-agent-section="projects" className="projects-section" ref={ref}>
    <div className="page-width">
      <div className="section-heading" data-reveal><div><span className="eyebrow">01 / SELECTED WORK</span><h2>Agents that<br /><em>do the work.</em></h2></div><p>Two explorations in useful AI.<br />One makes the browser actionable.<br />The other makes support feel effortless.</p></div>
      <article className="featured-project" data-reveal data-profile-project="Browser Agent">
        <BrowserPreview />
        <div className="project-copy"><div className="project-topline"><span>01 / BROWSER AUTOMATION</span><Globe size={18} /></div><h3>Browser Agent</h3><p>An experimental browser agent for everyday web tasks. A Python agent loop observes Chrome, asks a model for Playwright actions, and carries task context across steps.</p><ul className="project-highlights"><li><Check size={14} /> Chrome control through CDP and Playwright</li><li><Check size={14} /> Pruned accessibility trees for page observations</li><li><Check size={14} /> Persistent browser state, memory, and context</li></ul><div className="project-stack"><span>Python</span><span>Playwright</span><span>Node.js</span><span>OpenRouter</span></div><div className="project-actions"><a className="button button-dark" href="https://github.com/Kartik-soni18/Web-Agent" target="_blank" rel="noreferrer" aria-label="Browser Agent GitHub repository">View project <ArrowUpRight size={16} /></a><a className="text-link" href="https://github.com/Kartik-soni18/Web-Agent#setup-and-run" target="_blank" rel="noreferrer">Setup guide <ArrowUpRight size={15} /></a></div></div>
      </article>
      <article className="featured-project support-project" data-reveal data-profile-project={support.title}>
        <ChatPreview />
        <div className="project-copy"><div className="project-topline"><span>02 / CUSTOMER EXPERIENCE</span><MessageSquare size={18} /></div><h3>Chat Support<br />Agent</h3><p>{support.summary}</p><ul className="project-highlights"><li><Check size={14} /> Text, voice, and photo-based complaint intake</li><li><Check size={14} /> Router-led investigation and human review</li><li><Check size={14} /> Live replies and backend activity via SSE</li></ul><div className="project-stack">{['React', 'TypeScript', 'Redis', 'Postgres'].map(item => <span key={item}>{item}</span>)}</div><div className="project-actions"><a className="button button-dark" href={support.websiteHref} target="_blank" rel="noreferrer" aria-label="Chat Support Agent GitHub repository">View project <ArrowUpRight size={16} /></a><a className="text-link" href={`${support.githubHref}#run-locally`} target="_blank" rel="noreferrer" aria-label="Chat Support Agent setup guide">Setup guide <ArrowUpRight size={15} /></a></div></div>
      </article>
      <div className="portfolio-demo" data-reveal><span><Sparkles size={16} /> Want to explore this portfolio with AI?</span><button className="text-link" onClick={openBrowserAgent}>Try the portfolio copilot <ArrowUpRight size={15} /></button></div>
      <div className="other-projects" data-reveal><div className="other-projects-heading"><h3>More experiments.</h3><span className="eyebrow">THE REST OF THE NOTEBOOK</span></div><ul>{others.map((project, index) => <li key={project.title} data-profile-project={project.title}><span className="archive-number">0{index + 3}</span><a href={project.githubHref} target="_blank" rel="noreferrer"><strong>{project.title}</strong><span>{project.discipline}</span><ArrowUpRight size={19} /></a></li>)}</ul></div>
    </div>
  </section>;
}
