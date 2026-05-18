export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#080808', borderTop: '1px solid #1e1e1e', padding: '2.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontSize: '1rem', fontWeight: 900, letterSpacing: '-0.02em' }}>
            <span style={{ color: '#fff' }}>GOLD</span>
            <span style={{ color: '#c0392b' }}>STAR</span>
          </span>
          <span style={{ fontSize: '8px', color: '#555', letterSpacing: '3px', textTransform: 'uppercase', marginTop: '2px' }}>Transport · NYC</span>
        </div>
        <p style={{ fontSize: '11px', color: '#555' }}>
          © {new Date().getFullYear()} GoldStar Transport. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#" style={{ fontSize: '11px', color: '#555', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#555')}>Privacy</a>
          <a href="#" style={{ fontSize: '11px', color: '#555', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#555')}>Terms</a>
        </div>
      </div>
    </footer>
  )
}
