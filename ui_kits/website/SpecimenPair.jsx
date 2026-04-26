/* global React */

// A "specimen" image slot. If src is set, render it; otherwise render a labelled mount.
function Specimen({ src, alt, label, aspect = '4/3', frame = true }) {
  const frameStyle = frame ? {
    boxShadow: '0 1px 0 #fff inset, 0 0 0 1px rgba(28, 26, 23, 0.10), 0 18px 30px -22px rgba(28, 26, 23, 0.30)',
    background: 'var(--paper-1)',
    padding: 14,
  } : {};
  return (
    <figure style={{ margin: 0 }}>
      <div style={{ aspectRatio: aspect, ...frameStyle, position: 'relative' }}>
        {src ? (
          <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            background: 'var(--paper-3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--ink-3)',
            fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14,
            letterSpacing: '0.04em',
          }}>
            {alt || 'photograph'}
          </div>
        )}
      </div>
      {label && (
        <figcaption style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 12, fontStyle: 'italic',
          letterSpacing: '0.04em',
          color: 'var(--ink-3)',
          marginTop: 12,
        }}>{label}</figcaption>
      )}
    </figure>
  );
}

function SpecimenPair({ before, after, captionBefore, captionAfter }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32,
    }}>
      <Specimen src={before} alt="Before treatment" label={captionBefore || 'Before treatment'} />
      <Specimen src={after} alt="After treatment" label={captionAfter || 'After treatment'} />
    </div>
  );
}

window.Specimen = Specimen;
window.SpecimenPair = SpecimenPair;
