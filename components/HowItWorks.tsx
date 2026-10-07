'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'

const steps = [
  { num: '01', title: 'Contact Us', desc: 'Call, WhatsApp, or email with your pickup location, destination, and preferred date and time.' },
  { num: '02', title: 'Get Confirmation', desc: 'Receive a quote and booking confirmation within minutes. No hidden fees, no surprises.' },
  { num: '03', title: 'Ride in Style', desc: 'Your chauffeur arrives early, every time. Sit back, relax — your transport is handled.' },
]

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section ref={ref} style={{ backgroundColor: '#111111', padding: 'clamp(4rem, 12vw, 6rem) var(--gutter)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div className="section-label" style={{ marginBottom: '1rem' }}>How It Works</div>
        <h2 className="section-title" style={{ marginBottom: '4rem' }}>Three Steps.<br />That&apos;s All.</h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))', gap: '3rem' }}
        >
          {steps.map(({ num, title, desc }) => (
            <motion.div key={num} variants={fadeUp}>
              <div style={{ fontSize: '80px', fontWeight: 900, color: 'rgba(192,57,43,0.1)', lineHeight: 1, marginBottom: '-16px', userSelect: 'none' }}>{num}</div>
              <h3 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: '#fff', marginBottom: '0.75rem' }}>{title}</h3>
              <p style={{ fontSize: '14px', color: '#999', lineHeight: 1.7 }}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
