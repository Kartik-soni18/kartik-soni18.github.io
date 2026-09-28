import { ArrowUpRight } from 'lucide-react';
import { footerConfig } from '../config';
import { useReveal } from '../hooks/useReveal';
export default function Footer() {
  const ref = useReveal<HTMLElement>();
  return <footer id="footer" data-agent-section="contact" ref={ref}><div className="page-width"><div className="footer-main" data-reveal><div><span className="eyebrow">03 / SAY HELLO</span><h2>Have something<br /><em>in mind?</em></h2><a className="footer-email" href="mailto:kartik18badmera@gmail.com" data-contact-email="kartik18badmera@gmail.com" data-agent-action="email">kartik18badmera@gmail.com <ArrowUpRight size={22} /></a></div><div className="footer-aside"><p>Always interested in thoughtful products,<br />interesting systems, and good conversations.</p><a href="https://www.linkedin.com/in/kartik-soni-380476167" target="_blank" rel="noreferrer" data-contact-linkedin="https://www.linkedin.com/in/kartik-soni-380476167" data-agent-action="linkedin">LinkedIn <ArrowUpRight size={16} /></a><a href="https://github.com/Kartik-soni18" target="_blank" rel="noreferrer" data-contact-github="https://github.com/Kartik-soni18">GitHub <ArrowUpRight size={16} /></a></div></div><div className="footer-bottom"><span>{footerConfig.copyright}</span><a href="#hero">BACK TO TOP ↑</a></div></div></footer>;
}
