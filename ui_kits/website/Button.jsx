/* global React */

function Button({ children, variant = 'primary', size = 'md', onClick }) {
  const base = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    letterSpacing: '0.04em',
    borderRadius: 2,
    cursor: 'pointer',
    transition: 'background 180ms var(--ease-soft), color 180ms var(--ease-soft), border-color 180ms var(--ease-soft)',
  };
  const sizes = {
    sm: { padding: '10px 16px', fontSize: 13 },
    md: { padding: '14px 22px', fontSize: 14 },
    lg: { padding: '16px 26px', fontSize: 15 },
  };
  const variants = {
    primary: { background: 'var(--ink-0)', color: 'var(--paper-0)', border: '1px solid var(--ink-0)' },
    secondary: { background: 'transparent', color: 'var(--ink-1)', border: '1px solid var(--ink-2)' },
    accent: { background: 'transparent', color: 'var(--rust-0)', border: '1px solid var(--rust-0)' },
  };
  return (
    <button onClick={onClick} style={{ ...base, ...sizes[size], ...variants[variant] }}>
      {children}
    </button>
  );
}

function Field({ label, value, onChange, type = 'text', textarea = false, placeholder }) {
  const labelEl = (
    <span style={{
      fontFamily: 'var(--font-sans)',
      fontSize: 11, fontWeight: 500, letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 8,
    }}>{label}</span>
  );
  const sharedStyle = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '11px 0',
    fontFamily: 'var(--font-sans)',
    fontSize: 15,
    color: 'var(--ink-1)',
    background: 'transparent',
    border: 0,
    borderBottom: '1px solid var(--ink-4)',
    outline: 'none',
  };
  return (
    <label style={{ display: 'block' }}>
      {labelEl}
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
          style={{ ...sharedStyle, padding: '12px 0', resize: 'none', borderBottom: '1px solid var(--ink-4)' }}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          placeholder={placeholder}
          style={sharedStyle}
        />
      )}
    </label>
  );
}

window.Button = Button;
window.Field = Field;
