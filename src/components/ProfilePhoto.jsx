// ─────────────────────────────────────────────────────────────────────────────
//  PROFILE PHOTO
//  • Photo is loaded from /public/photo.jpg (copied from your upload)
//  • Spinning conic-gradient ring + glow halo on hover / always subtle
//  • Scale-up + glow intensify on hover
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from 'react'

export default function ProfilePhoto() {
  const [hov, setHov] = useState(false)

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative', width: 148, height: 148, flexShrink: 0,
        cursor: 'default',
        transition: 'transform 0.35s ease',
        transform: hov ? 'scale(1.08)' : 'scale(1)',
      }}
    >
      {/* Spinning conic-gradient ring */}
      <div style={{
        position: 'absolute', inset: -3, borderRadius: '50%',
        background: 'conic-gradient(from 0deg, #00D4FF, #FFB800, #00FF88, #A78BFA, #00D4FF)',
        animation: 'spinRing 4s linear infinite',
        opacity: hov ? 1 : 0.6,
        transition: 'opacity 0.35s ease',
      }} />

      {/* Dark gap */}
      <div style={{ position: 'absolute', inset: 2, borderRadius: '50%', background: '#050A14' }} />

      {/* Glow halo */}
      <div style={{
        position: 'absolute', inset: -16, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,255,0.28), transparent 70%)',
        opacity: hov ? 1 : 0.35,
        transition: 'opacity 0.35s ease',
        animation: 'glowPulse 2.8s ease-in-out infinite',
        pointerEvents: 'none',
      }} />

      {/* Photo frame */}
      <div style={{
        position: 'absolute', inset: 5, borderRadius: '50%',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0D1B2A, #112233)',
      }}>
        {/*
          Photo is served from /public/photo.jpg
          If the image fails to load, the fallback initials "DB" will show.
        */}
        <img
          src="/photo.jpg"
          alt="Dileep Bhargav"
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'top center',
            display: 'block',
          }}
          onError={e => {
            // Fallback: hide img and show initials
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        {/* Fallback initials (hidden when photo loads) */}
        <div style={{
          display: 'none', position: 'absolute', inset: 0,
          alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 36,
            background: 'linear-gradient(135deg, #00D4FF, #0066FF)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>DB</div>
        </div>
      </div>
    </div>
  )
}
