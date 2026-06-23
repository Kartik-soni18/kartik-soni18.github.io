import { ArrowDown, Github, Linkedin } from 'lucide-react';
import AmberCascades from './AmberCascades';
import LiquidGlassButton from '../components/LiquidGlassButton';
import { heroConfig } from '../config';

export default function Hero() {
  if (!heroConfig.title) {
    return null;
  }

  return (
    <section
      id="hero"
      className="hero-section relative w-full overflow-hidden"
    >
      <AmberCascades />
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-shell relative z-10 pointer-events-none">
        <div className="hero-copy">
          <div className="hero-kicker">Software Engineer / AI Systems</div>
          <h1>{heroConfig.title}</h1>

          <p className="hero-lede">{heroConfig.subtitleLine1}</p>
          <p className="hero-subline">{heroConfig.subtitleLine2}</p>

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
            >
              <Github size={18} strokeWidth={1.7} />
            </a>
            <a
              href="https://www.linkedin.com/in/kartik-soni-380476167"
              target="_blank"
              rel="noreferrer"
              className="hero-icon-link"
              aria-label="LinkedIn profile"
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
