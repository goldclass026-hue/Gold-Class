'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plane, Building2, PartyPopper, Clock, Hotel, Moon } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

interface Service { icon: LucideIcon; name: string; desc: string }

const services: Service[] = [
  { icon: Plane, name: 'Airport Transfers', desc: 'JFK, LGA, EWR — meet & greet, flight tracking, no surcharge for delays.' },
  { icon: Building2, name: 'Corporate Travel', desc: 'Impress clients with punctual, professional transport. Invoicing available.' },
  { icon: PartyPopper, name: 'Events & Occasions', desc: 'Weddings, galas, proms, nights out — arrive in style, leave a memory.' },
  { icon: Clock, name: 'Hourly Hire', desc: 'Book by the hour for shopping trips, tours, or multi-stop city runs.' },
  { icon: Hotel, name: 'Hotel Transfers', desc: 'Seamless connections to all major Manhattan and outer-borough hotels.' },
  { icon: Moon, name: 'Night Out', desc: 'Safe, reliable late-night pickup — no surge pricing, always on time.' },
]

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="services" ref={ref} style={{ backgroundColor: '#111111', padding: '6rem 2.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div className="section-label" style={{ marginBottom: '1rem' }}>Services</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h2 className="section-title">What We<br />Offer</h2>
          <p style={{ color: '#555', fontSize: '14px', maxWidth: '18rem', lineHeight: 1.7, textAlign: 'right' }}>Professional transport solutions tailored to every occasion</p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', backgroundColor: '#1e1e1e' }}
        >
          {services.map(({ icon: Icon, name, desc }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              style={{ backgroundColor: '#111111', padding: '2.25rem', position: 'relative', overflow: 'hidden', cursor: 'default' }}
              onMouseEnter={e => {
                const bar = e.currentTarget.querySelector('.hover-bar') as HTMLElement
                if (bar) bar.style.height = '100%'
                e.currentTarget.style.backgroundColor = '#1c1c1c'
              }}
              onMouseLeave={e => {
                const bar = e.currentTarget.querySelector('.hover-bar') as HTMLElement
                if (bar) bar.style.height = '0'
                e.currentTarget.style.backgroundColor = '#111111'
              }}
            >
              <div className="hover-bar" style={{ position: 'absolute', left: 0, top: 0, width: '2px', height: 0, backgroundColor: '#c0392b', transition: 'height 0.3s' }} />
              <Icon size={28} color="#c0392b" style={{ marginBottom: '1.25rem' }} />
              <h3 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: '#fff', marginBottom: '0.5rem' }}>{name}</h3>
              <p style={{ fontSize: '12px', color: '#555', lineHeight: 1.8 }}>{desc}</p>
              <div style={{ marginTop: '1.25rem', color: '#c0392b', fontSize: '1.125rem' }}>→</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
