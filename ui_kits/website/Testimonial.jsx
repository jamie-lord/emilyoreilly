/* global React */

function Testimonial({ quote, name, role }) {
  return (
    <figure style={{ margin: 0, maxWidth: 720 }}>
      <blockquote style={{
        fontFamily: 'var(--font-display)',
        fontSize: 32,
        fontStyle: 'italic',
        fontWeight: 400,
        lineHeight: 1.25,
        color: 'var(--ink-0)',
        borderLeft: '2px solid var(--rust-0)',
        paddingLeft: 28,
        margin: 0,
      }}>
        {quote}
      </blockquote>
      <figcaption style={{
        marginTop: 18,
        paddingLeft: 30,
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: 'var(--ink-3)',
      }}>
        <span style={{ color: 'var(--ink-1)' }}>{name}</span>
        {role && <> &nbsp;·&nbsp; {role}</>}
      </figcaption>
    </figure>
  );
}

window.Testimonial = Testimonial;
