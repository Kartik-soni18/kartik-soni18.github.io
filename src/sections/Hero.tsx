import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Pause, Play } from 'lucide-react';
import { heroConfig } from '../config';

export default function Hero() {
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    document.documentElement.dataset.motion = paused ? 'paused' : 'running';
    return () => { delete document.documentElement.dataset.motion; };
  }, [paused]);
  return (
    <section id="hero" data-agent-section="home" data-profile-name="Kartik Soni" data-profile-about={heroConfig.subtitleLine1} className="hero-section">
      <div className="hero-shell page-width">
        <div className="hero-copy">
          <div className="eyebrow hero-enter"><span className="status-dot" /> SOFTWARE ENGINEER · IIT KANPUR</div>
          <h1 className="hero-enter">Thoughtful systems.<br /><span>Intelligent</span><br />experiences.</h1>
          <p className="hero-lede hero-enter">I’m Kartik. I build AI agents that turn intent into action, and cloud systems that make it scale.</p>
          <div className="hero-actions hero-enter">
            <a className="button button-dark" href="#projects">Explore the work <ArrowDown size={16} /></a>
            <a className="text-link" href="https://github.com/Kartik-soni18" target="_blank" rel="noreferrer" data-agent-action="github">GitHub <ArrowUpRight size={16} /></a>
          </div>
          <div className="hero-current hero-enter"><span className="current-mark">O</span><div><span>Currently building at</span><strong>Oracle Cloud Infrastructure</strong></div></div>
        </div>
        <div className="system-visual hero-enter" aria-label="Illustration of an agent turning intent into action">
          <div className="system-top"><span className="eyebrow">THE AGENT LOOP</span><span className="system-version">01 / SYSTEMS IN MOTION</span></div>
          <div className="orbit-scene" aria-hidden="true">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
            <div className="orbit-core"><span>ks</span><small>INTENT → ACTION</small></div>
            <div className="orbit-node node-one"><span>01</span>Understand</div>
            <div className="orbit-node node-two"><span>02</span>Reason</div>
            <div className="orbit-node node-three"><span>03</span>Act</div>
            <div className="orbit-node node-four"><span>04</span>Verify</div>
            <div className="orbit-traveler"><i /></div>
          </div>
          <div className="system-bottom"><span><i /> Human intent. Useful outcomes.</span><button className="motion-toggle" type="button" aria-pressed={paused} onClick={() => setPaused(value => !value)} aria-label={paused ? "Resume animations" : "Pause animations"}>{paused ? <Play size={10} /> : <Pause size={10} />} {paused ? "RESUME" : "PAUSE"}</button></div>
        </div>
      </div>
      <div className="hero-baseline page-width"><span>AI AGENTS / PRODUCT ENGINEERING / CLOUD SYSTEMS</span><a href="#projects">SCROLL TO EXPLORE <ArrowDown size={13} /></a></div>
    </section>
  );
}
