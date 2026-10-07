'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'About', href: '#about' },
  { label: 'Areas', href: '#area' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          backdropFilter: 'blur(12px)',
          transition: 'background-color 0.3s, border-color 0.3s',
          backgroundColor: scrolled ? 'rgba(14,14,14,0.95)' : 'transparent',
          borderBottom: scrolled ? '1px solid #1e1e1e' : '1px solid transparent',
        }}
      >
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '1rem var(--gutter)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '-0.02em' }}>
              <span style={{ color: '#fff' }}>GOLD</span>
              <span style={{ color: '#c0392b' }}>CLASS</span>
            </span>
            <span style={{ fontSize: '8px', color: '#555', letterSpacing: '3px', textTransform: 'uppercase', marginTop: '2px' }}>Chauffeur · NYC</span>
          </a>

          <ul className="hidden md:flex" style={{ listStyle: 'none', gap: '2rem', alignItems: 'center' }}>
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} style={{ fontSize: '11px', color: '#888', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#c0392b')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#888')}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn-primary hidden md:inline-flex">Book Now</a>

          <button
            className="md:hidden"
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', width: '44px', height: '44px', marginRight: '-10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'fixed', inset: 0, zIndex: 40, backgroundColor: '#0e0e0e', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}
          >
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                style={{ fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', color: '#fff', textDecoration: 'none', letterSpacing: '-0.05em' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#c0392b')}
                onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
              >{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary" style={{ marginTop: '1rem' }}>Book Now</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
