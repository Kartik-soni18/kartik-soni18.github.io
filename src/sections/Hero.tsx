import { ArrowDown, Github, Linkedin } from 'lucide-react';
import LiquidGlassButton from '../components/LiquidGlassButton';
import { heroConfig } from '../config';

export default function Hero() {
  if (!heroConfig.title) {
    return null;
  }

  return (
    <section
      id="hero"
      data-agent-section="home"
      data-profile-name={heroConfig.title}
      data-profile-about="Software engineer building AI-driven workflows and cloud-scale systems."
      className="hero-section relative w-full overflow-hidden"
    >
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-shell relative z-10 pointer-events-none">
        <div className="hero-copy">
          <div className="hero-kicker">Kartik Soni <span>·</span> Software engineer / AI systems</div>
          <h1>Engineering products<br />that <em>think.</em></h1>

          <p className="hero-lede">{heroConfig.subtitleLine1}</p>
          <p className="hero-subline">{heroConfig.subtitleLine2}</p>

          <dl className="hero-proof" aria-label="Professional profile highlights">
            <div><dt>Current</dt><dd>Oracle Cloud Infrastructure</dd></div>
            <div><dt>Focus</dt><dd>AI systems &amp; backend</dd></div>
            <div><dt>Education</dt><dd>IIT Kanpur, CSE</dd></div>
          </dl>

          <div className="hero-actions pointer-events-auto">
            {heroConfig.ctaText && (
              <LiquidGlassButton
                onClick={() => {
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {heroConfig.ctaText}
              </LiquidGlassButton>
            )}
            <a
              href="https://github.com/Kartik-soni18"
              target="_blank"
              rel="noreferrer"
              className="hero-icon-link"
              aria-label="GitHub profile"
              data-agent-action="github"
            >
              <Github size={18} strokeWidth={1.7} />
            </a>
            <a
              href="https://www.linkedin.com/in/kartik-soni-380476167"
              target="_blank"
              rel="noreferrer"
              className="hero-icon-link"
              aria-label="LinkedIn profile"
              data-agent-action="linkedin"
            >
              <Linkedin size={18} strokeWidth={1.7} />
            </a>
          </div>
        </div>

        <div className="hero-scroll-cue pointer-events-auto">
          <button
            type="button"
            aria-label="Scroll to projects"
            onClick={() => {
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ArrowDown size={17} strokeWidth={1.7} />
          </button>
        </div>
      </div>
    </section>
  );
}
