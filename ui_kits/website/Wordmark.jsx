/* global React */

function Wordmark({ size = 'md', light = false }) {
  const sizes = {
    sm: { name: 16, acr: 9, gap: 4 },
    md: { name: 22, acr: 10, gap: 6 },
    lg: { name: 28, acr: 11, gap: 8 },
  };
  const s = sizes[size];
  const ink = light ? 'var(--paper-0)' : 'var(--ink-0)';
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: s.gap,
      fontFamily: 'var(--font-display)',
      color: ink,
      letterSpacing: '0.04em',
    }}>
      <span style={{ fontSize: s.name, fontVariant: 'small-caps', fontWeight: 400 }}>
        Emily O'Reilly
      </span>
      <span style={{
        fontFamily: 'var(--font-sans)',
        fontSize: s.acr,
        fontWeight: 500,
        letterSpacing: '0.22em',
        color: 'var(--rust-0)',
        textTransform: 'uppercase',
      }}>
        ACR
      </span>
    </div>
  );
}

window.Wordmark = Wordmark;
