import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { PROJECTS } from '../data'

function Card({ p, index }) {
  const [hov, setHov] = useState(false)
  const [ref, vis]    = useInView()
  return (
    <div ref={ref} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{ opacity:vis?1:0, transform:vis?'translateY(0)':'translateY(28px)', translate:hov?'0 -4px':'0 0',
        transition:`opacity 0.6s ease ${index*0.08}s, transform 0.6s ease ${index*0.08}s, border-color 0.3s, translate 0.25s`,
        background:'rgba(13,27,42,0.82)', border:`1px solid ${hov?p.color+'44':'rgba(0,212,255,0.1)'}`,
        borderRadius:16, padding:'26px 24px', cursor:'default', backdropFilter:'blur(10px)', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:-28, right:-28, width:100, height:100, background:p.color+'20', borderRadius:'50%', filter:'blur(22px)', opacity:hov?1:0, transition:'opacity 0.3s ease', pointerEvents:'none' }} />
      <div style={{ fontSize:34, marginBottom:13 }}>{p.icon}</div>
      <h3 style={{ fontFamily:'Syne,sans-serif', fontWeight:700, fontSize:16, color:hov?p.color:'#E2E8F0', marginBottom:10, transition:'color 0.3s' }}>{p.title}</h3>
      <p style={{ color:'#8B9BB4', fontSize:13.5, lineHeight:1.75, marginBottom:16, fontFamily:'Outfit,sans-serif' }}>{p.desc}</p>
      <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
        {p.tags.map(t=><span key={t} style={{ background:p.color+'12', color:p.color, border:`1px solid ${p.color}35`, borderRadius:6, padding:'3px 10px', fontSize:11, fontFamily:'Fira Code,monospace' }}>{t}</span>)}
      </div>
      <div
  style={{
    position: 'absolute',
    top: 18,
    right: 18,
    display: 'flex',
    gap: 10,
    opacity: hov ? 1 : 0,
    transition: 'opacity 0.3s ease'
  }}
>

  <a
    href={p.link}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: p.color,
      fontSize: 12,
      fontFamily: 'Fira Code,monospace',
      textDecoration: 'none'
    }}
  >
    GitHub ↗
  </a>

  {p.live && (
    <a
      href={p.live}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: '#00FF88',
        fontSize: 12,
        fontFamily: 'Fira Code,monospace',
        textDecoration: 'none'
      }}
    >
      Live ↗
    </a>
  )}

</div>
    </div>
  )
}

export default function Projects() {
  const [ref, vis] = useInView()
  return (
    <section id="projects" style={{ padding:'108px 24px', maxWidth:1100, margin:'0 auto' }}>
      <div ref={ref} style={{ textAlign:'center', marginBottom:60, opacity:vis?1:0, transform:vis?'translateY(0)':'translateY(30px)', transition:'all 0.7s ease' }}>
        <p style={{ fontFamily:'Fira Code,monospace', fontSize:11, letterSpacing:'3px', color:'#00D4FF', marginBottom:12, textTransform:'uppercase' }}>03 / Projects</p>
        <h2 style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(30px,4vw,48px)', color:'#F1F5F9', letterSpacing:'-1px' }}>What I've Built</h2>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(290px,1fr))', gap:16 }}>
        {PROJECTS.map((p,i) => <Card key={p.title} p={p} index={i} />)}
      </div>
    </section>
  )
}
