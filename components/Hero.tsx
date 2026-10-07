'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { PHONE, WHATSAPP_URL } from '@/lib/site'
import { clipReveal, staggerContainer } from '@/lib/animations'

const words = ['Elite', 'Luxury', 'Transport']

export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', backgroundColor: '#0e0e0e' }}>
      <img
        src="/images/escalade-night.jpg"
        fetchPriority="high"
        alt=""
        aria-hidden
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 65%', opacity: 0.2 }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom right, #0e0e0e, rgba(14,14,14,0.9), rgba(26,5,5,0.8))' }} />

      <span aria-hidden style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', fontSize: 'clamp(120px,22vw,240px)', fontWeight: 900, color: 'rgba(192,57,43,0.035)', lineHeight: 1, userSelect: 'none', textTransform: 'uppercase', pointerEvents: 'none' }}>
        NYC
      </span>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '80rem', margin: '0 auto', padding: '7rem var(--gutter) 5rem' }}>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ color: '#c0392b', fontSize: '10px', letterSpacing: '5px', textTransform: 'uppercase', fontWeight: 500, marginBottom: '1.5rem' }}
        >
          NYC Black Car &amp; Airport Chauffeur Service
        </motion.h1>

        <motion.div variants={staggerContainer} initial="hidden" animate="visible" style={{ display: 'flex', flexDirection: 'column' }}>
          {words.map((word) => (
            <div key={word} style={{ overflow: 'hidden' }}>
              <motion.span
                variants={clipReveal}
                style={{
                  display: 'block',
                  fontSize: 'clamp(40px,10vw,110px)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  lineHeight: 0.92,
                  letterSpacing: '-0.03em',
                  color: word === 'Luxury' ? '#c0392b' : '#ffffff',
                }}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          style={{ marginTop: '1.5rem', color: '#888', fontSize: '14px', lineHeight: 1.7, maxWidth: '28rem' }}
        >
          Professional Cadillac Escalade service across all five boroughs. Punctual, polished, and personal — every ride.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', maxWidth: '32rem' }}
        >
          <a href={`tel:${PHONE}`} className="btn-primary" style={{ flex: '1 1 220px', justifyContent: 'center' }}>
            <Phone size={14} />
            Call to Book
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ flex: '1 1 220px', justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid #25D366', color: '#25D366', padding: '1rem 2rem', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none', transition: 'background-color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(37,211,102,0.1)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            💬 WhatsApp Us
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <div style={{ width: '2.5rem', height: '1px', backgroundColor: '#555' }} />
          <span style={{ fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', color: '#555' }}>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  )
}
