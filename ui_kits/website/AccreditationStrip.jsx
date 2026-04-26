/* global React */

function AccreditationStrip() {
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
      {/* Placeholder: ICON ACR mark */}
      <div title="Drop the official Icon Accredited Member logo into assets/marks/icon-acr.png" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 14px',
        border: '1px solid var(--archive-0)',
        background: 'rgba(46, 74, 71, 0.04)',
        borderRadius: 2,
      }}>
        <span style={{
          width: 28, height: 28, borderRadius: '50%',
          border: '1.5px solid var(--archive-0)',
          color: 'var(--archive-0)',
          fontFamily: 'var(--font-display)', fontStyle: 'italic',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14,
        }}>i</span>
        <div style={{ lineHeight: 1.2 }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 9, fontWeight: 600, letterSpacing: '0.22em', color: 'var(--archive-0)', textTransform: 'uppercase' }}>Accredited member</div>
          <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 13, color: 'var(--ink-1)' }}>Institute of Conservation</div>
        </div>
      </div>

      {/* Placeholder: IIC Fellow mark */}
      <div title="Drop the official IIC Fellow logo into assets/marks/iic-fellow.png" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 14px',
        border: '1px solid var(--ink-2)',
        background: 'rgba(46, 42, 36, 0.03)',
        borderRadius: 2,
      }}>
        <span style={{
          width: 28, height: 28, borderRadius: '50%',
          border: '1.5px solid var(--ink-2)',
          color: 'var(--ink-2)',
          fontFamily: 'var(--font-display)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, letterSpacing: '0.04em', fontWeight: 600,
        }}>IIC</span>
        <div style={{ lineHeight: 1.2 }}>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 9, fontWeight: 600, letterSpacing: '0.22em', color: 'var(--ink-2)', textTransform: 'uppercase' }}>Fellow</div>
          <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 13, color: 'var(--ink-1)' }}>Int'l Institute of Conservation</div>
        </div>
      </div>
    </div>
  );
}

window.AccreditationStrip = AccreditationStrip;
