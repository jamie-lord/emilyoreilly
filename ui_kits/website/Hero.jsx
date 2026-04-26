/* global React, Specimen */

function Hero({ onPrimary }) {
  return (
    <section style={{
      padding: '80px 32px 120px',
      maxWidth: 1280,
      margin: '0 auto',
    }}>
      <div style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 11, fontWeight: 500, letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: 'var(--ink-3)',
        marginBottom: 24,
      }}>
        Paper conservation studio · Wales · est. 2017
      </div>

      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(48px, 7vw, 96px)',
        fontWeight: 400,
        lineHeight: 1.02,
        letterSpacing: '-0.025em',
        color: 'var(--ink-0)',
        margin: '0 0 28px',
        maxWidth: '14ch',
        textWrap: 'balance',
      }}>
        Caring for paper, with patience.
      </h1>

      <p style={{
        fontFamily: 'var(--font-serif)',
        fontStyle: 'italic',
        fontSize: 22,
        lineHeight: 1.5,
        color: 'var(--ink-2)',
        maxWidth: '52ch',
        margin: '0 0 40px',
      }}>
        Twenty-five years working with collections of international importance, and items of great
        sentimental value. The same care for both.
      </p>

      <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 80 }}>
        <button onClick={onPrimary} style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 14, fontWeight: 500, letterSpacing: '0.04em',
          padding: '15px 26px',
          background: 'var(--ink-0)', color: 'var(--paper-0)',
          border: '1px solid var(--ink-0)', borderRadius: 2, cursor: 'pointer',
        }}>
          Discuss your piece &nbsp;→
        </button>
        <button style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 14, fontWeight: 500, letterSpacing: '0.04em',
          padding: '15px 26px',
          background: 'transparent', color: 'var(--ink-1)',
          border: '1px solid var(--ink-2)', borderRadius: 2, cursor: 'pointer',
        }}>
          See conservation services
        </button>
      </div>

      {/* Hero specimen pair — the most important image on the site */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 32,
        marginTop: 40,
      }}>
        <Specimen
          aspect="3/4"
          alt="At the bench"
          label="At the bench — the studio in north light"
        />
        <Specimen
          aspect="3/4"
          alt="Watercolour treatment in progress"
          label="A 19th-century watercolour, mid-treatment"
        />
      </div>
    </section>
  );
}

window.Hero = Hero;
