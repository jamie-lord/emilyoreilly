/* global React, Wordmark, AccreditationStrip */

function Footer({ onNavigate }) {
  return (
    <footer style={{
      borderTop: '1px solid var(--rule)',
      background: 'var(--paper-1)',
      padding: '64px 32px 32px',
      marginTop: 96,
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr',
          gap: 48,
          paddingBottom: 48,
          borderBottom: '1px solid var(--rule)',
        }}>
          <div>
            <Wordmark size="lg" />
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 18,
              lineHeight: 1.5,
              color: 'var(--ink-2)',
              marginTop: 18,
              maxWidth: '36ch',
            }}>
              Paper conservation by appointment. Studio in Wales — work undertaken nationally and for
              international collections.
            </p>
            <div style={{ marginTop: 24 }}>
              <AccreditationStrip />
            </div>
          </div>

          <div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11, fontWeight: 500, letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--ink-3)',
              marginBottom: 16,
            }}>The studio</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['About', 'about'], ['Conservation services', 'services'], ['Testimonials', 'testimonials'], ['Blog', 'blog'], ['FAQs', 'faqs']].map(([label, id]) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={(e) => { e.preventDefault(); onNavigate(id); }} style={{
                    fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--ink-1)',
                    border: 0, paddingBottom: 1,
                  }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 11, fontWeight: 500, letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--ink-3)',
              marginBottom: 16,
            }}>Get in touch</div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.7, color: 'var(--ink-1)' }}>
              <a href="mailto:emily@emilyoreilly.co.uk" style={{ color: 'var(--rust-0)', borderBottom: '1px solid var(--rust-0)' }}>emily@emilyoreilly.co.uk</a>
              <div style={{ color: 'var(--ink-2)', marginTop: 6 }}>By appointment, Mon&ndash;Thu</div>
              <div style={{ color: 'var(--ink-3)', marginTop: 6, fontSize: 13, fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>Wales, United Kingdom</div>
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 24,
          fontFamily: 'var(--font-sans)',
          fontSize: 11,
          letterSpacing: '0.04em',
          color: 'var(--ink-3)',
        }}>
          <span>© 2026 Emily O'Reilly ACR</span>
          <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontSize: 13 }}>
            Conservation is about caring for clients' treasures.
          </span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
