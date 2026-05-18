'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { slideInLeft, slideInRight } from '@/lib/animations'

interface Borough { name: string; note: string; muted?: boolean }

const boroughs: Borough[] = [
  { name: 'Manhattan', note: 'All Areas' },
  { name: 'Brooklyn', note: 'All Areas' },
  { name: 'Queens', note: 'JFK · LGA Included' },
  { name: 'The Bronx', note: 'All Areas' },
  { name: 'Staten Island', note: 'On Request' },
  { name: 'New Jersey', note: 'EWR Transfers', muted: true },
]

export default function ServiceArea() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="area" ref={ref} style={{ backgroundColor: '#0e0e0e', padding: '6rem 2.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div className="section-label" style={{ marginBottom: '1rem' }}>Service Area</div>
        <h2 className="section-title" style={{ marginBottom: '3rem' }}>We Cover<br />All of NYC</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{ position: 'relative', backgroundColor: '#1c1c1c', border: '1px solid #1e1e1e', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
          >
            <div style={{ position: 'relative', width: '12rem', height: '14rem', opacity: 0.25 }}>
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '2.5rem', height: '8rem', border: '1px solid #888', borderRadius: '2px' }} />
              <div style={{ position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)', width: '5rem', height: '4rem', border: '1px solid #888', borderRadius: '2px' }} />
              <div style={{ position: 'absolute', top: '2rem', right: '0.5rem', width: '4rem', height: '5rem', border: '1px solid #888', borderRadius: '2px' }} />
              <div style={{ position: 'absolute', top: 0, right: 0, width: '3.5rem', height: '2.5rem', border: '1px solid #888', borderRadius: '2px' }} />
            </div>
            <div style={{ position: 'absolute', top: '38%', left: '48%', color: '#c0392b', fontSize: '1.5rem' }}>◆</div>
            <div style={{ position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)', fontSize: '9px', color: '#555', letterSpacing: '3px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>New York City</div>
          </motion.div>

          <motion.div variants={slideInRight} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            {boroughs.map(({ name, note, muted }) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid #1e1e1e' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0, backgroundColor: muted ? '#555' : '#c0392b' }} />
                <span style={{ fontSize: '1rem', fontWeight: 600, color: muted ? '#555' : '#fff' }}>{name}</span>
                <span style={{ marginLeft: 'auto', fontSize: '10px', color: '#555', letterSpacing: '1px' }}>{note}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
