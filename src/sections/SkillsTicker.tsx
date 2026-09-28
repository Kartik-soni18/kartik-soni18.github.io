import { Braces, Network, Workflow } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
const toolkits = [
  { icon: Workflow, title: 'Applied AI', text: 'From a prompt to a working system.', skills: ['Python', 'LangGraph', 'LLM orchestration', 'RAG', 'Evaluation'] },
  { icon: Braces, title: 'Product engineering', text: 'Useful interfaces. Reliable services.', skills: ['TypeScript', 'React', 'SvelteKit', 'FastAPI', 'SQL'] },
  { icon: Network, title: 'Cloud & infrastructure', text: 'Built to run beyond the prototype.', skills: ['OCI', 'AWS', 'Docker', 'Kubernetes', 'CI/CD'] },
];
export default function SkillsTicker() {
  const ref = useReveal<HTMLElement>();
  return <section id="skills" data-agent-section="skills" className="skills-section" ref={ref}><div className="page-width"><div className="section-heading" data-reveal><div><span className="eyebrow">02 / THE TOOLKIT</span><h2>Across the stack.<br /><em>Close to the problem.</em></h2></div><p>Computer Science &amp; Engineering, IIT Kanpur.<br />Working at the intersection of AI, product,<br />and cloud infrastructure.</p></div><div className="toolkit-grid">{toolkits.map(({icon: Icon, title, text, skills}) => <article className="toolkit-card" key={title} data-reveal><Icon size={24} strokeWidth={1.4} /><h3>{title}</h3><p>{text}</p><div className="toolkit-tags">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div></div></section>;
}
