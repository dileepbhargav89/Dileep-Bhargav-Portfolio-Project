// ─────────────────────────────────────────────────────────────────────────────
//  HERO SECTION
//  Additions vs v2:
//  • Real profile photo (ProfilePhoto.jsx)
//  • "MANIT Bhopal" badge (distinct, with border glow on hover)
//  • "FiNIT — The Student Finance Club" badge below MANIT
//  • Updated title: "Final year CSE student" + CGPA 6.33
//  • HolographicChart instead of old FinTech3D
// ─────────────────────────────────────────────────────────────────────────────
import NetworkCanvas      from './NetworkCanvas'
import ProfilePhoto       from './ProfilePhoto'
import HolographicChart   from './HolographicChart'
import Typewriter         from './Typewriter'
import { PERSONAL, STATS } from '../data'

// ── Small CTA button helper ───────────────────────────────────────────────────
function CTA({ onClick, children, variant='primary' }) {
  const base = { borderRadius:11, padding:'13px 28px', fontFamily:'Syne,sans-serif', fontSize:13, fontWeight:700, cursor:'pointer', transition:'all 0.22s ease', border:'none' }
  const variants = {
    primary: { background:'linear-gradient(135deg,#00D4FF,#0055CC)', color:'#050A14', fontWeight:800, boxShadow:'0 0 28px rgba(0,212,255,0.35)' },
    gold:    { background:'rgba(255,184,0,0.1)', border:'1px solid rgba(255,184,0,0.3)', color:'#FFB800' },
    ghost:   { background:'transparent', border:'1px solid rgba(0,212,255,0.28)', color:'#CBD5E1' },
  }
  const s = { ...base, ...variants[variant] }
  return (
    <button onClick={onClick} style={s}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0) scale(1)'}>
      {children}
    </button>
  )
}

// ── Institutional Badge ───────────────────────────────────────────────────────
function Badge({ emoji, text, color, glow }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display:'inline-flex', alignItems:'center', gap:7,
        background: `rgba(${color},0.07)`,
        border: `1px solid rgba(${color},${hov ? 0.55 : 0.28})`,
        borderRadius:100, padding:'5px 14px',
        boxShadow: hov ? `0 0 14px rgba(${color},0.3)` : 'none',
        transition:'all 0.25s ease', cursor:'default',
      }}
    >
      <span style={{fontSize:13}}>{emoji}</span>
      <span style={{ color:`rgb(${color})`, fontSize:10, fontFamily:'Fira Code,monospace', letterSpacing:'1px', fontWeight:600 }}>
        {text}
      </span>
    </div>
  )
}

import { useState } from 'react'

export default function Hero() {
  const go = id => document.getElementById(id)?.scrollIntoView({behavior:'smooth'})
  return (
    <section style={{
      position:'relative', minHeight:'100vh',
      display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden',
    }}>
      {/* ── Background ── */}
      <NetworkCanvas />
      <div style={{ position:'absolute', inset:0, backgroundImage:'linear-gradient(rgba(0,212,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,255,0.025) 1px,transparent 1px)', backgroundSize:'48px 48px' }} />
      <div style={{ position:'absolute', top:'35%', left:'50%', transform:'translate(-50%,-50%)', width:700, height:700, background:'radial-gradient(circle,rgba(0,212,255,0.06) 0%,transparent 70%)', pointerEvents:'none' }} />

      {/* ── Content row ── */}
      <div style={{
        position:'relative', zIndex:2,
        display:'flex', alignItems:'center', justifyContent:'center',
        gap:56, padding:'100px 28px 60px', maxWidth:1100, margin:'0 auto', flexWrap:'wrap',
      }}>

        {/* LEFT: text */}
        <div style={{ flex:1, minWidth:300, maxWidth:580, animation:'fadeInUp 0.9s ease' }}>

          {/* Photo + badges column */}
          <div style={{ display:'flex', alignItems:'flex-start', gap:20, marginBottom:22, flexWrap:'wrap' }}>
            <ProfilePhoto />
            <div style={{ display:'flex', flexDirection:'column', gap:9, paddingTop:4 }}>
              {/* Availability */}
              <div style={{ display:'inline-flex', alignItems:'center', gap:7, background:'rgba(0,212,255,0.07)', border:'1px solid rgba(0,212,255,0.22)', borderRadius:100, padding:'5px 14px' }}>
                <span style={{ width:6, height:6, borderRadius:'50%', background:'#00FF88', boxShadow:'0 0 8px #00FF88', display:'inline-block', animation:'pulse 2s infinite' }} />
                <span style={{ color:'#94A3B8', fontSize:10, fontFamily:'Fira Code,monospace', letterSpacing:'1.5px' }}>AVAILABLE FOR OPPORTUNITIES</span>
              </div>

              {/* ── MANIT Bhopal badge (NEW) ── */}
              <Badge emoji="🎓" text="MANIT BHOPAL" color="0,212,255" />

              {/* ── FiNIT badge (NEW) ── */}
              <Badge emoji="🏦" text="FiNIT — THE STUDENT FINANCE CLUB MANIT BHOPAL" color="255,184,0" />
            </div>
          </div>

          {/* Name */}
          <h1 style={{ fontFamily:'Syne,sans-serif', fontSize:'clamp(44px,7vw,80px)', fontWeight:800, lineHeight:1.05, letterSpacing:'-2px', marginBottom:14, color:'#F1F5F9' }}>
            {PERSONAL.firstName}<br />
            <span style={{ background:'linear-gradient(135deg,#00D4FF,#0066FF)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
              {PERSONAL.lastName}
            </span>
          </h1>

          {/* Typewriter */}
          <div style={{ fontFamily:'Syne,sans-serif', fontWeight:600, marginBottom:14, minHeight:'1.5em', fontSize:'clamp(17px,2.4vw,24px)' }}>
            <Typewriter />
          </div>

          {/* ── Academic title (UPDATED) ── */}
          <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:16 }}>
            <span style={{ color:'#334155', fontFamily:'Fira Code,monospace', fontSize:12 }}>●</span>
            <span style={{ color:'#64748B', fontFamily:'Outfit,sans-serif', fontSize:14 }}>
              {PERSONAL.title} @{' '}
              <span style={{ color:'#00D4FF', fontWeight:600 }}>{PERSONAL.university}</span>
              <span style={{ color:'#475569', marginLeft:10, fontSize:12 }}>
                CGPA: <span style={{ color:'#FFB800', fontWeight:700 }}>{PERSONAL.cgpa}</span>
              </span>
            </span>
          </div>

          <p style={{ color:'#64748B', fontSize:15, maxWidth:520, lineHeight:1.85, fontFamily:'Outfit,sans-serif', marginBottom:32 }}>
            Building AI-powered fintech platforms at the intersection of code &amp; capital.
            Co-Founder &amp; Fintech Head of <span style={{ color:'#FFB800', fontWeight:600 }}>FiNIT</span> — the student finance club at MANIT.
          </p>

          {/* CTAs */}
          <div style={{ display:'flex', gap:12, flexWrap:'wrap', marginBottom:44 }}>
            <CTA onClick={() => go('projects')} variant="primary">View My Work ↗</CTA>
            <CTA onClick={() => go('resume')}   variant="gold">View Resume</CTA>
            <CTA onClick={() => go('contact')}  variant="ghost">Contact Me</CTA>
          </div>

          {/* Stats — UPDATED CGPA */}
          <div style={{ display:'flex', gap:'clamp(16px,4vw,48px)', flexWrap:'wrap', paddingTop:28, borderTop:'1px solid rgba(255,255,255,0.05)' }}>
            {STATS.map(({ value, label }) => (
              <div key={label} style={{ textAlign:'center' }}>
                <div style={{ fontFamily:'Fira Code,monospace', fontWeight:700, color:'#00D4FF', fontSize:'clamp(20px,2.4vw,30px)', lineHeight:1 }}>{value}</div>
                <div style={{ color:'#475569', fontSize:10, marginTop:5, letterSpacing:'1.2px', textTransform:'uppercase' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Holographic 3D chart */}
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:10, flexShrink:0 }}>
          <HolographicChart />
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position:'absolute', bottom:24, left:'50%', display:'flex', flexDirection:'column', alignItems:'center', gap:5, animation:'bounce 2.2s infinite', transform:'translateX(-50%)' }}>
        <span style={{ color:'#1E293B', fontSize:10, fontFamily:'Fira Code,monospace', letterSpacing:'3px' }}>SCROLL</span>
        <div style={{ width:1, height:36, background:'linear-gradient(to bottom,rgba(0,212,255,0.45),transparent)' }} />
      </div>
    </section>
  )
}
