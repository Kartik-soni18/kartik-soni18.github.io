import { footerConfig } from '../config';

export default function Footer() {
  if (!footerConfig.heading && footerConfig.columns.length === 0) {
    return null;
  }

  return (
    <footer
      id="footer"
      style={{
        padding: footerConfig.heading ? '150px 5vw 60px' : '88px 5vw 52px',
        background: 'linear-gradient(180deg, #081018 0%, #05070a 100%)',
        position: 'relative',
        zIndex: 2,
        borderTop: '1px solid rgba(214, 222, 229, 0.1)',
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {footerConfig.heading && (
          <h2
            style={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 500,
              fontSize: 'clamp(40px, 5vw, 80px)',
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
              color: '#f4f1eb',
              marginBottom: 72,
            }}
          >
            {footerConfig.heading}
          </h2>
        )}

        {footerConfig.columns.length > 0 && (
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: 60, marginBottom: footerConfig.heading ? 120 : 72 }}
          >
            {footerConfig.columns.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col" style={{ gap: 16 }}>
                {column.title && (
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 12,
                      fontWeight: 300,
                      letterSpacing: '3px',
                      textTransform: 'uppercase',
                      color: '#dadada',
                      opacity: 0.4,
                      marginBottom: 8,
                    }}
                  >
                    {column.title}
                  </span>
                )}
                {column.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="nav-link"
                    style={{ width: 'fit-content' }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        )}

        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between"
          style={{
            paddingTop: 24,
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            gap: 16,
          }}
        >
          {footerConfig.copyright && (
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 200,
                fontSize: 12,
                color: '#dadada',
                opacity: 0.4,
              }}
            >
              {footerConfig.copyright}
            </span>
          )}
          {footerConfig.bottomLinks.length > 0 && (
            <div className="flex items-center" style={{ gap: 24 }}>
              {footerConfig.bottomLinks.map((bottomLink) => (
                <a
                  key={bottomLink.label}
                  href={bottomLink.href || '#'}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 200,
                    fontSize: 12,
                    color: '#dadada',
                    opacity: 0.4,
                    textDecoration: 'none',
                    transition: 'opacity 0.3s',
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = '0.8'; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = '0.4'; }}
                >
                  {bottomLink.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
