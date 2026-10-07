'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Stat { end: number; suffix: string; label: string }

const stats: Stat[] = [
  { end: 500, suffix: '+', label: 'Rides Completed' },
  { end: 5, suffix: '★', label: 'Average Rating' },
  { end: 10, suffix: '+', label: 'Years in NYC' },
  { end: 24, suffix: '/7', label: 'Available' },
]

function Counter({ end, suffix, label }: Stat) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const startTime = performance.now()
    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(end)
    }
    requestAnimationFrame(tick)
  }, [inView, end])

  return (
    <div ref={ref} style={{ padding: '3rem 2rem', borderRight: '1px solid #1e1e1e' }} className="last:border-r-0">
      <div style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', fontWeight: 900, lineHeight: 1, color: '#fff' }}>
        {count}<span style={{ color: '#c0392b' }}>{suffix}</span>
      </div>
      <div style={{ marginTop: '0.5rem', fontSize: '10px', color: '#555', letterSpacing: '3px', textTransform: 'uppercase' }}>{label}</div>
    </div>
  )
}

export default function Stats() {
  return (
    <section style={{ backgroundColor: '#111', borderTop: '1px solid #1e1e1e', borderBottom: '1px solid #1e1e1e' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
        {stats.map(s => <Counter key={s.label} {...s} />)}
      </div>
    </section>
  )
}
