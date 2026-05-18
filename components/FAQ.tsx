'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { fadeUp } from '@/lib/animations'

const faqs = [
  { q: 'How far in advance should I book?', a: 'We recommend 24 hours ahead for guaranteed availability, but same-day bookings are often possible — just call or WhatsApp us directly.' },
  { q: 'Do you track my flight for airport pickups?', a: 'Yes — we monitor all flights in real time. If your flight is delayed, we adjust at no extra charge.' },
  { q: 'How many passengers can the Suburban hold?', a: 'Up to 6 passengers comfortably, with generous luggage space in the rear.' },
  { q: 'What payment methods do you accept?', a: "Cash, Zelle, Venmo, and major credit cards. We'll confirm payment details when you book." },
  { q: 'Do you service New Jersey and Connecticut?', a: 'Yes — we serve Newark Airport (EWR) and can arrange tri-state area trips on request.' },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid #1e1e1e' }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', padding: '1.25rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
      >
        <span style={{ fontSize: '14px', color: '#fff', fontWeight: 500 }}>{q}</span>
        {open ? <Minus size={16} color="#c0392b" style={{ flexShrink: 0 }} /> : <Plus size={16} color="#c0392b" style={{ flexShrink: 0 }} />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ color: '#555', fontSize: '13px', lineHeight: 1.9, paddingBottom: '1.25rem' }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section ref={ref} style={{ backgroundColor: '#0e0e0e', padding: '6rem 2.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div className="section-label" style={{ marginBottom: '1rem' }}>FAQ</div>
        <h2 className="section-title" style={{ marginBottom: '3rem' }}>Common<br />Questions</h2>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ maxWidth: '45rem', borderTop: '1px solid #1e1e1e' }}
        >
          {faqs.map(({ q, a }) => <FAQItem key={q} q={q} a={a} />)}
        </motion.div>
      </div>
    </section>
  )
}
