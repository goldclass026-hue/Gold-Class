'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield } from 'lucide-react'
import { slideInLeft, slideInRight } from '@/lib/animations'

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-15% 0px' })

  return (
    <section id="about" ref={ref} style={{ backgroundColor: '#0e0e0e', padding: 'clamp(4rem, 12vw, 6rem) var(--gutter)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div className="section-label" style={{ marginBottom: '1rem' }}>About</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div variants={slideInLeft} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#1c1c1c', aspectRatio: '4/5' }}>
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80"
                alt="Abdul Rehman — Professional Driver"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', backgroundColor: '#c0392b' }} />
              <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem' }}>
                <div style={{ color: '#c0392b', fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase' }}>Professional Driver</div>
                <div style={{ color: '#fff', fontSize: '1.25rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', marginTop: '2px' }}>Abdul Rehman</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={slideInRight} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <div style={{ color: '#c0392b', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1rem' }}>10+ Years NYC Experience</div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Your Driver,<br />Not Just a Car</h2>
            <p style={{ color: '#888', fontSize: '14px', lineHeight: 1.9, marginBottom: '1rem' }}>
              Abdul Rehman has been navigating New York City&apos;s streets for over a decade, providing reliable,
              professional transportation to clients who demand the best. From JFK to Manhattan galas —
              punctuality is personal.
            </p>
            <p style={{ color: '#888', fontSize: '14px', lineHeight: 1.9, marginBottom: '2rem' }}>
              Every ride in the GoldClass Escalade is a seamless, private experience — clean vehicle,
              no surprises, always on time.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', border: '1px solid #1e1e1e', padding: '0.75rem 1rem' }}>
              <Shield size={14} color="#c0392b" style={{ flexShrink: 0 }} />
              <span style={{ color: '#888', fontSize: '11px', letterSpacing: '1px' }}>Licensed & Insured — NYC TLC Compliant</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
