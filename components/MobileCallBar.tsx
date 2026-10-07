import { Phone } from 'lucide-react'
import { PHONE, WHATSAPP_URL } from '@/lib/site'

const btn: React.CSSProperties = { flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', height: '48px', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none' }

export default function MobileCallBar() {
  return (
    <div
      className="md:hidden"
      style={{ position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 40, display: 'flex', gap: '8px', padding: '8px 8px calc(8px + env(safe-area-inset-bottom))', backgroundColor: 'rgba(14,14,14,0.96)', borderTop: '1px solid #1e1e1e', backdropFilter: 'blur(12px)' }}
    >
      <a href={`tel:${PHONE}`} style={{ ...btn, backgroundColor: '#c0392b', color: '#fff' }}>
        <Phone size={16} /> Call
      </a>
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ ...btn, backgroundColor: '#25D366', color: '#0e0e0e' }}>
        💬 WhatsApp
      </a>
    </div>
  )
}
