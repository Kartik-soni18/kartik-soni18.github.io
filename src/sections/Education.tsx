import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  detail: string;
  year: string;
}

const educationData: EducationItem[] = [
  {
    institution: "Indian Institute of Technology (IIT) Kanpur",
    location: "Kanpur, India",
    degree: "B.Tech Computer Science and Engineering",
    detail: "CPI: 7.2/10",
    year: "2021 – 2025",
  },
  {
    institution: "Nalanda Academy, Kota",
    location: "Kota, India",
    degree: "Senior Secondary (CBSE XII)",
    detail: "92.8%",
    year: "2021",
  },
  {
    institution: "AECS No.4, Rawatbhata",
    location: "Rawatbhata, India",
    degree: "Secondary (CBSE X)",
    detail: "96% | Certificate of Merit in Mathematics (100/100)",
    year: "2019",
  },
];

const achievements = [
  "AIR 723 in JEE Mains 2021 (top 0.06%, 99.94th percentile) among 1,000,000+ candidates",
  "AIR 768 in JEE Advanced 2021",
  "KVPY Scholarship — AIR 322 (SA, 2020) & AIR 1291 (SX, 2021)",
  "NTSE Scholar 2019 (NCERT)",
  "Merit Position in JSO/JMO 2018",
];

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const achievementsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];
    const observers: IntersectionObserver[] = [];

    items.forEach((item, index) => {
      gsap.set(item, { opacity: 0, y: 40 });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(item, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: index * 0.15,
                ease: 'power3.out',
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(item);
      observers.push(observer);
    });

    // Achievements animation
    if (achievementsRef.current) {
      gsap.set(achievementsRef.current, { opacity: 0, y: 30 });
      const achObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(achievementsRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
              });
              achObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      achObserver.observe(achievementsRef.current);
      observers.push(achObserver);
    }

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      style={{
        padding: '120px 5vw',
        background: '#0a0a0a',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Section header */}
        <div
          className="mb-6"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            fontWeight: 300,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#dadada',
            opacity: 0.6,
          }}
        >
          Education
        </div>
        <div
          className="mb-16"
          style={{
            width: '100%',
            height: 1,
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        />

        {/* Education cards */}
        <div className="flex flex-col" style={{ gap: 0 }}>
          {educationData.map((edu, i) => (
            <div
              key={edu.institution}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="flex flex-col md:flex-row md:items-baseline justify-between"
              style={{
                padding: '36px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                gap: '16px',
              }}
            >
              <div style={{ flex: '1 1 60%' }}>
                <h3
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontWeight: 400,
                    fontSize: 'clamp(22px, 2.5vw, 32px)',
                    lineHeight: 1.2,
                    letterSpacing: '-0.5px',
                    color: '#ffffff',
                    margin: '0 0 8px 0',
                  }}
                >
                  {edu.institution}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 200,
                    fontSize: 14,
                    color: '#dadada',
                    opacity: 0.6,
                    margin: 0,
                  }}
                >
                  {edu.location}
                </p>
              </div>
              <div style={{ flex: '1 1 30%' }}>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: 15,
                    color: '#c8aa82',
                    margin: '0 0 4px 0',
                  }}
                >
                  {edu.degree}
                </p>
                <p
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontWeight: 300,
                    fontSize: 13,
                    color: '#dadada',
                    opacity: 0.7,
                    margin: 0,
                  }}
                >
                  {edu.detail}
                </p>
              </div>
              <div style={{ flex: '0 0 auto' }}>
                <span
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontWeight: 400,
                    fontSize: 13,
                    color: '#dadada',
                    opacity: 0.4,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {edu.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div ref={achievementsRef} style={{ marginTop: 80 }}>
          <div
            className="mb-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 300,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#dadada',
              opacity: 0.6,
            }}
          >
            Academic Achievements
          </div>
          <div className="flex flex-col" style={{ gap: 16 }}>
            {achievements.map((ach, i) => (
              <div
                key={i}
                className="flex items-start"
                style={{ gap: 16 }}
              >
                <span
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: 13,
                    color: '#c8aa82',
                    opacity: 0.8,
                    marginTop: 2,
                  }}
                >
                  ▲
                </span>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 200,
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: '#dadada',
                    margin: 0,
                    opacity: 0.85,
                  }}
                >
                  {ach}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
