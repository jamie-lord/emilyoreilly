/* global React */

function BlogCard({ date, title, excerpt, onOpen }) {
  return (
    <article style={{
      borderTop: '1px solid var(--rule)',
      padding: '32px 0',
      display: 'grid',
      gridTemplateColumns: '160px 1fr',
      gap: 32,
      cursor: onOpen ? 'pointer' : 'default',
    }} onClick={onOpen}>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--ink-3)',
        letterSpacing: '0.04em',
      }}>{date}</div>
      <div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 28,
          lineHeight: 1.15,
          letterSpacing: '-0.012em',
          color: 'var(--ink-0)',
          fontWeight: 400,
          margin: '0 0 10px',
        }}>{title}</h3>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 15,
          color: 'var(--ink-2)',
          lineHeight: 1.6,
          margin: 0,
          maxWidth: '60ch',
        }}>{excerpt}</p>
      </div>
    </article>
  );
}

window.BlogCard = BlogCard;
