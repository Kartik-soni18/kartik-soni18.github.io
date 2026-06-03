import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Skill {
  name: string;
  category: string;
}

const skillsData: Skill[][] = [
  // Row 1: Languages
  [
    { name: 'Python', category: 'Lang' },
    { name: 'C', category: 'Lang' },
    { name: 'C++', category: 'Lang' },
    { name: 'JavaScript', category: 'Lang' },
    { name: 'TypeScript', category: 'Lang' },
    { name: 'SQL', category: 'Lang' },
    { name: 'Bash', category: 'Lang' },
    { name: 'Haskell', category: 'Lang' },
    { name: 'Ruby', category: 'Lang' },
  ],
  // Row 2: AI/ML
  [
    { name: 'LangChain', category: 'AI/ML' },
    { name: 'LangGraph', category: 'AI/ML' },
    { name: 'LLM Orchestration', category: 'AI/ML' },
    { name: 'RAG', category: 'AI/ML' },
    { name: 'scikit-learn', category: 'AI/ML' },
    { name: 'SymPy', category: 'AI/ML' },
    { name: 'Together AI', category: 'AI/ML' },
    { name: 'Machine Learning', category: 'AI/ML' },
  ],
  // Row 3: Frontend
  [
    { name: 'React 19', category: 'Frontend' },
    { name: 'Streamlit', category: 'Frontend' },
    { name: 'Oracle JET', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'shadcn/ui', category: 'Frontend' },
    { name: 'HTML/CSS', category: 'Frontend' },
  ],
  // Row 4: Backend
  [
    { name: 'FastAPI', category: 'Backend' },
    { name: 'Express', category: 'Backend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Backend' },
    { name: 'ChromaDB', category: 'Backend' },
    { name: 'Pydantic', category: 'Backend' },
    { name: 'REST APIs', category: 'Backend' },
    { name: 'JWT', category: 'Backend' },
  ],
  // Row 5: DevOps/Cloud
  [
    { name: 'AWS Lambda', category: 'Cloud' },
    { name: 'API Gateway', category: 'Cloud' },
    { name: 'CloudWatch', category: 'Cloud' },
    { name: 'AWS SAM', category: 'Cloud' },
    { name: 'Docker', category: 'Cloud' },
    { name: 'Kubernetes', category: 'Cloud' },
    { name: 'Jenkins', category: 'Cloud' },
    { name: 'GitHub Actions', category: 'Cloud' },
    { name: 'Git', category: 'Cloud' },
    { name: 'OCI', category: 'Cloud' },
  ],
  // Row 6: Tools
  [
    { name: 'NumPy', category: 'Tools' },
    { name: 'Pandas', category: 'Tools' },
    { name: 'Matplotlib', category: 'Tools' },
    { name: 'pix2tex', category: 'Tools' },
    { name: 'LaTeX', category: 'Tools' },
    { name: 'G-Eval', category: 'Tools' },
    { name: 'Presidio', category: 'Tools' },
  ],
];

const categoryColors: Record<string, string> = {
  Lang: '#c8aa82',
  'AI/ML': '#e8a87c',
  Frontend: '#8fbc8f',
  Backend: '#87ceeb',
  Cloud: '#d4a574',
  Tools: '#b0a0c0',
};

function TickerRow({
  skills,
  direction,
  speed,
}: {
  skills: Skill[];
  direction: 'left' | 'right';
  speed: number;
}) {
  // Triple the skills for seamless infinite scroll
  const tripled = [...skills, ...skills, ...skills];

  return (
    <div
      className="ticker-row"
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative',
        padding: '10px 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
      }}
    >
      <div
        className="ticker-track"
        style={{
          display: 'inline-flex',
          animation: `ticker-${direction} ${speed}s linear infinite`,
        }}
      >
        {tripled.map((skill, i) => (
          <div
            key={`${skill.name}-${i}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '0 28px',
              borderRight: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <span
              style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: 13,
                fontWeight: 400,
                color: categoryColors[skill.category] || '#dadada',
                opacity: 0.9,
              }}
            >
              ▲
            </span>
            <span
              style={{
                fontFamily: "'GeistMono', monospace",
                fontSize: 15,
                fontWeight: 300,
                color: '#ffffff',
                letterSpacing: '-0.3px',
              }}
            >
              {skill.name}
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 10,
                fontWeight: 300,
                color: categoryColors[skill.category] || '#dadada',
                opacity: 0.6,
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
              }}
            >
              {skill.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsTicker() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    if (!section || !heading) return;

    gsap.set(heading, { opacity: 0, y: 30 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(heading, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power3.out',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        padding: '120px 0 80px',
        background: '#0a0a0a',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 5vw' }}>
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
          Skills
        </div>
        <div
          className="mb-12"
          style={{
            width: '100%',
            height: 1,
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        />
        <h2
          ref={headingRef}
          className="mb-16"
          style={{
            fontFamily: "'EB Garamond', serif",
            fontWeight: 400,
            fontSize: 'clamp(28px, 3.5vw, 52px)',
            lineHeight: 1.15,
            letterSpacing: '-1px',
            color: '#ffffff',
            margin: 0,
            textWrap: 'balance',
          }}
        >
          Technical toolkit, continuously expanding.
        </h2>
      </div>

      {/* Ticker rows */}
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <TickerRow skills={skillsData[0]} direction="left" speed={35} />
        <TickerRow skills={skillsData[1]} direction="right" speed={40} />
        <TickerRow skills={skillsData[2]} direction="left" speed={30} />
        <TickerRow skills={skillsData[3]} direction="right" speed={38} />
        <TickerRow skills={skillsData[4]} direction="left" speed={42} />
        <TickerRow skills={skillsData[5]} direction="right" speed={32} />
      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes ticker-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes ticker-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
