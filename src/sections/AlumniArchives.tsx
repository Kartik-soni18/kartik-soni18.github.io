import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight, Github, ShieldCheck, Sparkles } from 'lucide-react';
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
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean) as HTMLElement[];

    items.forEach((item) => {
      gsap.set(item, { opacity: 0, y: 32 });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const idx = items.indexOf(entry.target as HTMLElement);
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
      className="projects-section"
      style={{
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="projects-shell">
        {researchConfig.sectionLabel && (
          <div className="project-kicker">{researchConfig.sectionLabel}</div>
        )}

        <div className="project-grid">
          {researchConfig.projects.map((project, i) => (
            <article
              key={`${project.title}-${i}`}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="project-card"
              style={{ '--project-image': `url(${project.imagePath})` } as React.CSSProperties}
            >
              <div className="project-card-media" aria-hidden="true">
                <span>{getProjectMark(project.title)}</span>
                <span>{project.year}</span>
              </div>

              <div className="project-card-body">
                <div className="project-card-topline">
                  <span>{project.discipline}</span>
                  <span>{project.language}</span>
                </div>

                <div style={{ flex: 1 }}>
                  <h3>{project.title}</h3>

                  <p className="project-repo-description">
                    <Sparkles size={14} strokeWidth={1.8} aria-hidden="true" />
                    <span>{project.repoDescription}</span>
                  </p>

                  <p className="project-summary">
                    {project.summary}
                  </p>

                  <ul className="project-highlights">
                    {project.highlights.map((highlight) => (
                      <li key={`${project.title}-${highlight}`}>
                        <ShieldCheck size={15} strokeWidth={1.8} aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="project-stack">
                    {project.techStack.map((item) => (
                      <span key={`${project.title}-${item}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="project-actions"
                >
                  <a
                    href={project.websiteHref}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action"
                    aria-label={`${project.title}: ${project.websiteLabel}`}
                  >
                    <span>{project.websiteLabel}</span>
                    <ArrowUpRight size={16} strokeWidth={1.6} />
                  </a>

                  <a
                    href={project.githubHref}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="project-action project-action-secondary"
                  >
                    <Github size={14} strokeWidth={1.8} />
                    <span>{project.githubLabel}</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
