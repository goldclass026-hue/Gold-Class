'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone } from 'lucide-react'
import { slideInLeft, slideInRight } from '@/lib/animations'

const PHONE = '+19170000000'
const EMAIL = 'goldstartransport@email.com'
const WA_URL = `https://wa.me/${PHONE.replace('+', '')}?text=Hi%20Abdul%2C%20I%27d%20like%20to%20book%20a%20ride`

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: '#1c1c1c',
  border: '1px solid #1e1e1e',
  color: '#fff',
  fontSize: '13px',
  padding: '0.875rem 1rem',
  outline: 'none',
  fontFamily: 'inherit',
}

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  const fd = new FormData(e.currentTarget)
  const subject = encodeURIComponent(`Booking Request from ${fd.get('name')}`)
  const body = encodeURIComponent(`Name: ${fd.get('name')}\nPhone: ${fd.get('phone')}\nPickup: ${fd.get('pickup')}\nDestination: ${fd.get('destination')}\nDate/Time: ${fd.get('datetime')}\nNotes: ${fd.get('notes')}`)
  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="contact" ref={ref} style={{ backgroundColor: '#111111', padding: '6rem 2.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div className="section-label" style={{ marginBottom: '1rem' }}>Contact</div>
        <h2 className="section-title" style={{ marginBottom: '3rem' }}>Book Your<br />Ride Today</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          <motion.div variants={slideInLeft} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href={`tel:${PHONE}`} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', backgroundColor: '#1c1c1c', border: '1px solid #1e1e1e', padding: '1.5rem', textDecoration: 'none', transition: 'border-color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#c0392b')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = '#1e1e1e')}>
              <Phone size={22} color="#c0392b" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '9px', color: '#555', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '4px' }}>Call Direct</div>
                <div style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 700 }}>+1 (917) 000-0000</div>
              </div>
            </a>

            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', backgroundColor: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.25)', padding: '1.5rem', textDecoration: 'none', transition: 'background-color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(37,211,102,0.16)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(37,211,102,0.08)')}>
              <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>💬</span>
              <div>
                <div style={{ fontSize: '9px', color: '#555', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '4px' }}>WhatsApp</div>
                <div style={{ color: '#25D366', fontSize: '1.25rem', fontWeight: 700 }}>Message Us Now</div>
              </div>
            </a>

            <p style={{ color: '#555', fontSize: '12px', lineHeight: 1.9, paddingTop: '0.5rem' }}>
              Available 24/7 · Response within minutes<br />
              Serving all NYC boroughs + NJ/CT on request
            </p>
          </motion.div>

          <motion.form variants={slideInRight} initial="hidden" animate={inView ? 'visible' : 'hidden'} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <input style={inputStyle} name="name" placeholder="Your Name" required />
              <input style={inputStyle} name="phone" placeholder="Phone Number" />
            </div>
            <input style={inputStyle} name="pickup" placeholder="Pickup Location" required />
            <input style={inputStyle} name="destination" placeholder="Destination" required />
            <input style={inputStyle} name="datetime" placeholder="Date & Time" required />
            <textarea style={{ ...inputStyle, height: '7rem', resize: 'none' }} name="notes" placeholder="Additional notes (flight number, passengers, luggage...)" />
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.25rem', border: 'none', cursor: 'pointer' }}>
              Send Booking Request
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
