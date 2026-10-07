'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wind, Wifi, Plug, Briefcase, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { staggerContainer, scaleIn, fadeUp } from '@/lib/animations'

interface Feature { icon: LucideIcon; name: string }

const gallery = [
  { src: '/images/escalade-front.jpg', alt: 'Black Cadillac Escalade front view at a private residence' },
  { src: '/images/escalade-grille.jpg', alt: 'Cadillac Escalade grille and headlight detail' },
  { src: '/images/escalade-side.jpg', alt: 'Black Cadillac Escalade side profile' },
  { src: '/images/escalade-trees.jpg', alt: 'Black Cadillac Escalade three-quarter front view' },
]

const features: Feature[] = [
  { icon: Sparkles, name: 'Starlight Roof' },
  { icon: Wind, name: 'Climate Control' },
  { icon: Wifi, name: 'Free WiFi' },
  { icon: Plug, name: 'USB Charging' },
  { icon: Briefcase, name: 'XL Luggage' },
]

export default function Fleet() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="fleet" ref={ref} style={{ backgroundColor: '#0e0e0e', padding: 'clamp(4rem, 12vw, 6rem) var(--gutter)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div className="section-label" style={{ marginBottom: '1rem' }}>The Fleet</div>
        <h2 className="section-title" style={{ marginBottom: '3rem' }}>One Vehicle.<br />Zero Compromise.</h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="fleet-hero"
          style={{ position: 'relative', width: '100%', overflow: 'hidden', backgroundColor: '#1c1c1c', border: '1px solid #1e1e1e' }}
        >
          <img
            src="/images/escalade-street.jpg"
            loading="lazy"
            alt="Black Cadillac Escalade"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(14,14,14,0.8), transparent)' }} />
          <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
            <div style={{ color: '#c0392b', fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase' }}>Cadillac</div>
            <div style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em' }}>Escalade</div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1px', backgroundColor: '#1e1e1e', marginTop: '1px' }}
        >
          {gallery.map(({ src, alt }) => (
            <motion.div key={src} variants={scaleIn} style={{ aspectRatio: '4/5', overflow: 'hidden', backgroundColor: '#1c1c1c' }}>
              <img src={src} alt={alt} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1px', backgroundColor: '#1e1e1e', marginTop: '1px' }}
        >
          {features.map(({ icon: Icon, name }) => (
            <motion.div key={name} variants={scaleIn} style={{ backgroundColor: '#111111', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Icon size={18} color="#c0392b" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>{name}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', marginTop: '1px', backgroundColor: '#0a0d12', border: '1px solid #1e1e1e' }}
        >
          <div style={{ aspectRatio: '4/5', maxHeight: '32rem', width: '100%', overflow: 'hidden' }}>
            <img src="/images/starlight-headliner.jpg" alt="Starlight headliner — fiber-optic star lights across the ceiling" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ padding: 'clamp(2rem, 6vw, 3.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="section-label" style={{ marginBottom: '1rem' }}>Starlight Headliner</div>
            <h3 className="section-title" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1.25rem' }}>Ride Under<br />The Stars</h3>
            <p style={{ color: '#999', fontSize: '14px', lineHeight: 1.8, maxWidth: '26rem' }}>
              Hundreds of fiber-optic star lights glow across the ceiling — a touch usually reserved for ultra-luxury cars.
              Perfect for proms, weddings, anniversaries and late-night rides through the city.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
