'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { staggerContainer, scaleIn } from '@/lib/animations'

const testimonials = [
  { quote: 'Abdul is always on time — I trust him for every JFK trip. Clean car, no fuss, professional every time.', author: 'James R.', role: 'Corporate Client · Manhattan' },
  { quote: "Booked him for my daughter's prom. He showed up 20 minutes early in a spotless Suburban. Highly recommend.", author: 'Maria G.', role: 'Event Client · Brooklyn' },
  { quote: "Best driver in NYC, period. I've used many services — none compare to the reliability of GoldStar.", author: 'David K.', role: 'Frequent Rider · Queens' },
]

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section ref={ref} style={{ backgroundColor: '#111111', padding: '6rem 2.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div className="section-label" style={{ marginBottom: '1rem' }}>Testimonials</div>
        <h2 className="section-title" style={{ marginBottom: '3rem' }}>What Clients<br />Say</h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}
        >
          {testimonials.map(({ quote, author, role }) => (
            <motion.div key={author} variants={scaleIn} style={{ backgroundColor: '#0e0e0e', border: '1px solid #1e1e1e', padding: '1.75rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ color: '#c0392b', letterSpacing: '3px', fontSize: '13px', marginBottom: '1.25rem' }}>★★★★★</div>
              <p style={{ color: '#888', fontSize: '13px', lineHeight: 1.9, fontStyle: 'italic', flex: 1, marginBottom: '1.5rem' }}>&ldquo;{quote}&rdquo;</p>
              <div>
                <div style={{ color: '#c0392b', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>{author}</div>
                <div style={{ color: '#555', fontSize: '10px', letterSpacing: '1px', marginTop: '2px' }}>{role}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
