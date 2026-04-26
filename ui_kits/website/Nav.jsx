/* global React, Wordmark */

function Nav({ current, onNavigate }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'blog', label: 'Blog' },
    { id: 'faqs', label: 'FAQs' },
  ];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: scrolled ? 'rgba(251, 247, 240, 0.92)' : 'var(--paper-0)',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--rule)' : '1px solid transparent',
      transition: 'background 320ms var(--ease-considered), border-color 320ms var(--ease-considered)',
    }}>
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '20px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} style={{ border: 0 }}>
          <Wordmark size="md" />
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); onNavigate(item.id); }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 13,
                fontWeight: 400,
                color: current === item.id ? 'var(--ink-0)' : 'var(--ink-2)',
                borderBottom: current === item.id ? '1px solid var(--rust-0)' : '1px solid transparent',
                paddingBottom: 3,
                transition: 'color 180ms var(--ease-soft), border-color 180ms var(--ease-soft)',
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 13,
              fontWeight: 500,
              color: 'var(--rust-0)',
              borderBottom: '1px solid var(--rust-0)',
              paddingBottom: 3,
              letterSpacing: '0.04em',
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

window.Nav = Nav;
