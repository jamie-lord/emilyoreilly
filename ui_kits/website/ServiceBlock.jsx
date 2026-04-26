/* global React, SpecimenPair */

function ServiceBlock({ index, eyebrow, title, lede, body, before, after, captionBefore, captionAfter, alt = false }) {
  const num = String(index).padStart(2, '0');
  return (
    <article style={{
      borderTop: '1px solid var(--rule)',
      padding: '96px 0',
      background: alt ? 'var(--paper-1)' : 'transparent',
    }}>
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '0 32px',
        display: 'grid',
        gridTemplateColumns: '160px 1fr',
        gap: 48,
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--ink-3)',
            letterSpacing: '0.06em',
          }}>
            {num} · {eyebrow}
          </div>
        </div>
        <div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 56,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: 'var(--ink-0)',
            fontWeight: 400,
            margin: '0 0 24px',
            maxWidth: '14ch',
            textWrap: 'balance',
          }}>{title}</h2>
          {lede && (
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 20,
              lineHeight: 1.5,
              color: 'var(--ink-1)',
              maxWidth: '60ch',
              margin: '0 0 20px',
            }}>{lede}</p>
          )}
          {body && body.map((p, i) => (
            <p key={i} style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 16,
              lineHeight: 1.65,
              color: 'var(--ink-2)',
              maxWidth: '64ch',
              margin: '0 0 14px',
            }}>{p}</p>
          ))}

          <div style={{ marginTop: 40 }}>
            <SpecimenPair before={before} after={after} captionBefore={captionBefore} captionAfter={captionAfter} />
          </div>
        </div>
      </div>
    </article>
  );
}

window.ServiceBlock = ServiceBlock;
