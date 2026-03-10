// ─────────────────────────────────────────────────────────────────────────────
//  RESUME SECTION — MULTI-TAB INTERFACE  (v3.1 — BUG FIX)
//
//  ROOT CAUSE OF BUG:
//  The old code used useInView (IntersectionObserver) inside TabPanel to
//  control whether timeline entries were visible (opacity:1) or hidden (opacity:0).
//  For the FIRST tab (SDE), this worked fine because it rendered on page load
//  while the user was scrolling through the page normally.
//  For tabs 2 & 3 (Analyst / Trader), when clicked, the section was ALREADY
//  inside the viewport. The IntersectionObserver fires only when an element
//  ENTERS the viewport — since the element was already there when mounted,
//  the callback sometimes didn't fire reliably, leaving vis=false permanently,
//  so all timeline entries stayed at opacity:0 / translateX(-16px).
//
//  THE FIX:
//  Replace useInView inside TabPanel with a useEffect + setTimeout.
//  When visible prop becomes true → wait 60ms → set vis=true → entries animate in.
//  When visible becomes false → reset vis=false so re-clicking re-animates.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react'
import { useInView } from '../hooks/useInView'
import { RESUME_TABS } from '../data'

const TAB_KEYS = ['sde', 'analyst', 'trader']

const CAT_COLOR = {
  Language:        '#00D4FF',
  Framework:       '#A78BFA',
  Library:         '#FFB800',
  Database:        '#FF6B6B',
  Tool:            '#00D4FF',
  'CS Fundamentals':'#94A3B8',
  CS:              '#94A3B8',
  Skill:           '#FFB800',
  Research:        '#A78BFA',
  Finance:         '#00FF88',
  Tools:           '#00D4FF',
}

// ── Animated skill bar ────────────────────────────────────────────────────────
function SkillRow({ name, pct, cat, visible, delay }) {
  const color = CAT_COLOR[cat] || '#00D4FF'
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:6 }}>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <span style={{ fontFamily:'Outfit,sans-serif', color:'#CBD5E1', fontSize:13 }}>{name}</span>
          <span style={{ fontFamily:'Fira Code,monospace', fontSize:9, color, background:`${color}15`, border:`1px solid ${color}30`, borderRadius:4, padding:'1px 6px' }}>{cat}</span>
        </div>
        <span style={{ fontFamily:'Fira Code,monospace', fontSize:11, color }}>{pct}%</span>
      </div>
      <div style={{ background:'rgba(255,255,255,0.06)', borderRadius:4, height:6, overflow:'hidden' }}>
        <div style={{
          height:'100%',
          width: visible ? `${pct}%` : '0%',
          background:`linear-gradient(90deg,${color},${color}66)`,
          borderRadius:4,
          boxShadow:`0 0 10px ${color}44`,
          transition:`width 1.4s cubic-bezier(0.4,0,0.2,1) ${delay}s`,
        }} />
      </div>
    </div>
  )
}

// ── Timeline entry ────────────────────────────────────────────────────────────
function TimelineEntry({ item, idx, vis }) {
  return (
    <div style={{
      position:'relative',
      marginBottom:36,
      opacity: vis ? 1 : 0,
      transform: vis ? 'translateX(0)' : 'translateX(-18px)',
      transition:`opacity 0.55s ease ${idx * 0.13 + 0.05}s, transform 0.55s ease ${idx * 0.13 + 0.05}s`,
    }}>
      {/* Dot */}
      <div style={{
        position:'absolute', left:-26, top:6,
        width:12, height:12, borderRadius:'50%',
        background:item.color,
        boxShadow:`0 0 12px ${item.color}`,
        border:'2px solid #050A14',
      }} />

      <div style={{ fontFamily:'Fira Code,monospace', fontSize:10, color:'#334155', marginBottom:5 }}>
        {item.period}
      </div>

      <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:3 }}>
        <span style={{ fontSize:16 }}>{item.icon}</span>
        <span style={{ fontFamily:'Syne,sans-serif', fontWeight:700, color:'#E2E8F0', fontSize:14.5 }}>{item.role}</span>
      </div>

      <div style={{ fontFamily:'Outfit,sans-serif', color:item.color, fontSize:12.5, fontWeight:600, marginBottom:10 }}>
        {item.org}
      </div>

      <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:6 }}>
        {item.points.map((pt, pi) => (
          <li key={pi} style={{ display:'flex', alignItems:'flex-start', gap:8, color:'#64748B', fontSize:13, fontFamily:'Outfit,sans-serif', lineHeight:1.65 }}>
            <span style={{ color:item.color, flexShrink:0, marginTop:5, fontSize:7 }}>◆</span>
            {pt}
          </li>
        ))}
      </ul>
    </div>
  )
}

// ── Tab Panel ─────────────────────────────────────────────────────────────────
function TabPanel({ tabKey, visible }) {
  const tab = RESUME_TABS[tabKey]

  // ── BUG FIX: use setTimeout instead of IntersectionObserver ──────────────
  // IntersectionObserver doesn't reliably fire when the section is already
  // in the viewport at mount time (tabs 2 & 3 scenario).
  const [vis, setVis] = useState(false)

  useEffect(() => {
    let timer
    if (visible) {
      // Short delay lets the DOM paint before transitions start
      timer = setTimeout(() => setVis(true), 60)
    } else {
      // Reset so re-clicking the tab re-runs the animation
      setVis(false)
    }
    return () => clearTimeout(timer)
  }, [visible])
  // ─────────────────────────────────────────────────────────────────────────

  if (!visible) return null

  return (
    <div style={{ animation:'tabSlideIn 0.4s ease forwards' }}>

      {/* Tagline */}
      <p style={{ color:'#64748B', fontFamily:'Outfit,sans-serif', fontSize:14.5, lineHeight:1.8, marginBottom:40, maxWidth:620 }}>
        <span style={{ color:tab.color, marginRight:8 }}>{tab.icon}</span>
        {tab.tagline}
      </p>

      {/* Two-column grid */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(310px,1fr))', gap:48 }}>

        {/* ── LEFT: Experience timeline ── */}
        <div>
          <h3 style={{ fontFamily:'Syne,sans-serif', fontWeight:700, color:'#94A3B8', fontSize:11, letterSpacing:'2px', textTransform:'uppercase', marginBottom:28 }}>
            Experience &amp; Projects
          </h3>

          <div style={{ position:'relative', paddingLeft:28 }}>
            {/* Vertical line */}
            <div style={{
              position:'absolute', left:8, top:0, bottom:0, width:1,
              background:`linear-gradient(to bottom, ${tab.color}55, ${tab.color}05)`,
            }} />

            {/* Entries — vis is now correctly true for all tabs */}
            {tab.experience.map((item, i) => (
              <TimelineEntry key={i} item={item} idx={i} vis={vis} />
            ))}
          </div>
        </div>

        {/* ── RIGHT: Skills + Certs + Download ── */}
        <div>
          <h3 style={{ fontFamily:'Syne,sans-serif', fontWeight:700, color:'#94A3B8', fontSize:11, letterSpacing:'2px', textTransform:'uppercase', marginBottom:20 }}>
            Core Skills
          </h3>

          <div style={{ background:'rgba(13,27,42,0.7)', border:`1px solid ${tab.color}18`, borderRadius:16, padding:'22px 20px', marginBottom:22 }}>
            {tab.skills.map((s, i) => (
              <SkillRow key={s.name} {...s} visible={vis} delay={i * 0.07 + 0.1} />
            ))}
          </div>

          <div style={{ background:'rgba(13,27,42,0.5)', border:`1px solid ${tab.color}18`, borderRadius:16, padding:'20px 20px' }}>
            <h4 style={{ fontFamily:'Syne,sans-serif', fontWeight:700, color:tab.color, fontSize:11, letterSpacing:'1.5px', textTransform:'uppercase', marginBottom:14 }}>
              Certifications &amp; Achievements
            </h4>
            {tab.certs.map(c => (
              <div key={c.label} style={{ display:'flex', alignItems:'flex-start', gap:10, marginBottom:11 }}>
                <span style={{ fontSize:15, flexShrink:0 }}>{c.icon}</span>
                <span style={{ fontFamily:'Outfit,sans-serif', color:'#64748B', fontSize:13, lineHeight:1.6 }}>{c.label}</span>
              </div>
            ))}
          </div>

          {/* Download button */}
          <a href={tab.downloadUrl} download
            style={{
              display:'inline-flex', alignItems:'center', gap:10, marginTop:22,
              background:`linear-gradient(135deg,${tab.color}18,${tab.color}08)`,
              border:`1px solid ${tab.color}50`,
              borderRadius:12, padding:'13px 24px', width:'100%', justifyContent:'center',
              color:tab.color, fontFamily:'Syne,sans-serif', fontSize:13.5, fontWeight:700,
              textDecoration:'none', cursor:'pointer', transition:'all 0.25s ease',
              boxShadow:`0 0 18px ${tab.color}15`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = `linear-gradient(135deg,${tab.color}28,${tab.color}14)`
              e.currentTarget.style.transform  = 'translateY(-2px)'
              e.currentTarget.style.boxShadow  = `0 0 30px ${tab.color}35`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = `linear-gradient(135deg,${tab.color}18,${tab.color}08)`
              e.currentTarget.style.transform  = 'translateY(0)'
              e.currentTarget.style.boxShadow  = `0 0 18px ${tab.color}15`
            }}>
            <span style={{ fontSize:18 }}>⬇</span>
            {tab.downloadLabel}
          </a>
        </div>
      </div>
    </div>
  )
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function Resume() {
  const [active, setActive] = useState('sde')
  const [ref, vis]          = useInView(0.05)

  return (
    <section id="resume" ref={ref} style={{
      padding:'108px 24px',
      background:'rgba(5,10,20,0.6)',
      opacity: vis ? 1 : 0,
      transform: vis ? 'translateY(0)' : 'translateY(40px)',
      transition:'all 0.85s ease',
    }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom:52 }}>
          <p style={{ fontFamily:'Fira Code,monospace', fontSize:11, letterSpacing:'3px', color:'#00D4FF', marginBottom:12, textTransform:'uppercase' }}>
            04 / Resume
          </p>
          <h2 style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(30px,4vw,48px)', color:'#F1F5F9', letterSpacing:'-1px', marginBottom:6 }}>
            Multi-Role Experience
          </h2>
          <p style={{ color:'#475569', fontFamily:'Outfit,sans-serif', fontSize:14 }}>
            Select your area of interest — each tab has a dedicated resume.
          </p>
        </div>

        {/* Tab buttons */}
        <div style={{ display:'flex', gap:10, marginBottom:44, flexWrap:'wrap' }}>
          {TAB_KEYS.map(key => {
            const tab      = RESUME_TABS[key]
            const isActive = active === key
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                style={{
                  display:'flex', alignItems:'center', gap:9,
                  padding:'12px 26px', borderRadius:12, cursor:'pointer',
                  fontFamily:'Syne,sans-serif', fontSize:13, fontWeight:700,
                  transition:'all 0.25s ease',
                  background: isActive ? `${tab.color}18` : 'rgba(13,27,42,0.8)',
                  border:     isActive ? `2px solid ${tab.color}` : '2px solid rgba(255,255,255,0.07)',
                  color:      isActive ? tab.color : '#64748B',
                  boxShadow:  isActive ? `0 0 22px ${tab.color}33, inset 0 0 14px ${tab.color}10` : 'none',
                  transform:  isActive ? 'translateY(-2px)' : 'translateY(0)',
                }}>
                <span style={{ fontSize:17 }}>{tab.icon}</span>
                <span>{tab.fullLabel}</span>
                {isActive && (
                  <span style={{
                    width:6, height:6, borderRadius:'50%',
                    background: tab.color,
                    boxShadow: `0 0 8px ${tab.color}`,
                    animation: 'pulse 2s infinite',
                  }} />
                )}
              </button>
            )
          })}
        </div>

        {/* Divider */}
        <div style={{ height:1, background:'rgba(255,255,255,0.06)', marginBottom:44 }} />

        {/* Tab panels */}
        {TAB_KEYS.map(key => (
          <TabPanel key={key} tabKey={key} visible={active === key} />
        ))}

      </div>
    </section>
  )
}
