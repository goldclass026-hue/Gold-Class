'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wind, Wifi, Plug, Briefcase } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { staggerContainer, scaleIn, fadeUp } from '@/lib/animations'

interface Feature { icon: LucideIcon; name: string }

const features: Feature[] = [
  { icon: Wind, name: 'Climate Control' },
  { icon: Wifi, name: 'Free WiFi' },
  { icon: Plug, name: 'USB Charging' },
  { icon: Briefcase, name: 'XL Luggage' },
]

export default function Fleet() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="fleet" ref={ref} style={{ backgroundColor: '#0e0e0e', padding: '6rem 2.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div className="section-label" style={{ marginBottom: '1rem' }}>The Fleet</div>
        <h2 className="section-title" style={{ marginBottom: '3rem' }}>One Vehicle.<br />Zero Compromise.</h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ position: 'relative', width: '100%', aspectRatio: '16/7', overflow: 'hidden', backgroundColor: '#1c1c1c', border: '1px solid #1e1e1e' }}
        >
          <img
            src="/images/escalade-street.jpg"
            alt="Black Cadillac Escalade"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14,14,14,0.8), transparent)' }} />
          <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
            <div style={{ color: '#c0392b', fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase' }}>Chevrolet</div>
            <div style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>Suburban SUV</div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', backgroundColor: '#1e1e1e', marginTop: '1px' }}
        >
          {features.map(({ icon: Icon, name }) => (
            <motion.div key={name} variants={scaleIn} style={{ backgroundColor: '#111111', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Icon size={18} color="#c0392b" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
