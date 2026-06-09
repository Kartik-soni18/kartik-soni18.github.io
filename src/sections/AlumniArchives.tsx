import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Github } from 'lucide-react';
import { researchConfig } from '../config';

function getProjectMark(title: string) {
  return title
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 3)
    .toUpperCase();
}

export default function AlumniArchives() {
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean) as HTMLAnchorElement[];

    items.forEach((item) => {
      gsap.set(item, { opacity: 0, y: 32 });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const idx = items.indexOf(entry.target as HTMLAnchorElement);
          gsap.to(entry.target, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            delay: idx * 0.08,
            ease: 'power2.out',
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  if (!researchConfig.sectionLabel && researchConfig.projects.length === 0) {
    return null;
  }

  return (
    <section
      id="projects"
      style={{
        padding: '120px 5vw 140px',
        background:
          'linear-gradient(180deg, rgba(11, 15, 20, 0.92) 0%, rgba(8, 11, 15, 1) 100%)',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        {researchConfig.sectionLabel && (
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(218, 226, 232, 0.72)',
              marginBottom: 20,
            }}
          >
            {researchConfig.sectionLabel}
          </div>
        )}

        <div
          className="project-section-header"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.1fr) minmax(280px, 0.9fr)',
            gap: 32,
            alignItems: 'end',
            paddingBottom: 28,
            marginBottom: 32,
            borderBottom: '1px solid rgba(214, 222, 229, 0.14)',
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'EB Garamond', serif",
                fontWeight: 500,
                fontSize: 'clamp(40px, 5vw, 68px)',
                lineHeight: 1.05,
                letterSpacing: '-0.04em',
                color: '#f4f1eb',
                margin: 0,
              }}
            >
              Selected engineering work.
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(15px, 1.6vw, 18px)',
              lineHeight: 1.8,
              color: 'rgba(218, 226, 232, 0.78)',
              margin: 0,
              maxWidth: 520,
              justifySelf: 'end',
            }}
          >
            A concise view of product and platform work across AI systems, cloud
            infrastructure, and applied software engineering. Each card opens the
            live project first, with direct access to the corresponding GitHub repository.
          </p>
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-3"
          style={{ gap: 24 }}
        >
          {researchConfig.projects.map((project, i) => (
            <a
              key={`${project.title}-${i}`}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              href={project.websiteHref}
              target="_blank"
              rel="noreferrer"
              className="project-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: 360,
                padding: 28,
                border: '1px solid rgba(214, 222, 229, 0.12)',
                background:
                  'linear-gradient(180deg, rgba(20, 28, 34, 0.9) 0%, rgba(12, 17, 22, 0.96) 100%)',
                textDecoration: 'none',
                color: 'inherit',
                position: 'relative',
                overflow: 'hidden',
                transition:
                  'transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 36,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 999,
                    border: '1px solid rgba(199, 176, 141, 0.35)',
                    background: 'rgba(199, 176, 141, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: "'GeistMono', monospace",
                    fontSize: 15,
                    letterSpacing: '0.16em',
                    color: '#dfcfb6',
                  }}
                >
                  {getProjectMark(project.title)}
                </div>
                <span
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: 12,
                    color: 'rgba(196, 207, 214, 0.62)',
                  }}
                >
                  {project.year}
                </span>
              </div>

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(196, 207, 214, 0.64)',
                    marginBottom: 18,
                  }}
                >
                  {project.discipline}
                </div>

                <h3
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontWeight: 500,
                    fontSize: 34,
                    lineHeight: 1.08,
                    color: '#f7f4ee',
                    margin: '0 0 18px 0',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 16,
                    lineHeight: 1.85,
                    color: 'rgba(218, 226, 232, 0.78)',
                    margin: 0,
                  }}
                >
                  {project.summary}
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 10,
                    marginTop: 20,
                  }}
                >
                  {project.techStack.map((item) => (
                    <span
                      key={`${project.title}-${item}`}
                      style={{
                        fontFamily: "'GeistMono', monospace",
                        fontSize: 11,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#d7c8ae',
                        background: 'rgba(199, 176, 141, 0.08)',
                        border: '1px solid rgba(199, 176, 141, 0.18)',
                        padding: '7px 10px',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 22,
                  marginTop: 28,
                  borderTop: '1px solid rgba(214, 222, 229, 0.1)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontFamily: "'GeistMono', monospace",
                    fontSize: 13,
                    color: '#efe5d4',
                  }}
                >
                  <span>{project.websiteLabel}</span>
                  <ArrowUpRight size={16} strokeWidth={1.6} />
                </div>

                <a
                  href={project.githubHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  aria-label={`${project.title} GitHub repository`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    fontFamily: "'GeistMono', monospace",
                    fontSize: 12,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(218, 226, 232, 0.84)',
                    textDecoration: 'none',
                    padding: '9px 12px',
                    border: '1px solid rgba(214, 222, 229, 0.14)',
                    background: 'rgba(255, 255, 255, 0.02)',
                  }}
                >
                  <Github size={14} strokeWidth={1.8} />
                  <span>{project.githubLabel}</span>
                </a>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
