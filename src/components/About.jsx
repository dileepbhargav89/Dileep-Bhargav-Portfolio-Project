import { useInView } from '../hooks/useInView'
import { PERSONAL, PILLARS } from '../data'

export default function About() {
  const [ref, vis] = useInView()
  return (
    <section id="about" ref={ref} style={{ padding:'108px 24px', maxWidth:1100, margin:'0 auto', opacity:vis?1:0, transform:vis?'translateY(0)':'translateY(40px)', transition:'all 0.85s ease' }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:60, alignItems:'center' }}>
        <div>
          <p style={{ fontFamily:'Fira Code,monospace', fontSize:11, letterSpacing:'3px', color:'#00D4FF', marginBottom:12, textTransform:'uppercase' }}>01 / About Me</p>
          <h2 style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(30px,4vw,48px)', lineHeight:1.12, letterSpacing:'-1px', color:'#F1F5F9', marginBottom:24 }}>
            Where Code<br /><span style={{ color:'#00D4FF' }}>Meets Capital</span>
          </h2>
          <p style={{ color:'#94A3B8', lineHeight:1.9, fontSize:14.5, fontFamily:'Outfit,sans-serif', marginBottom:14 }}>
            I'm a <span style={{ color:'#00D4FF', fontWeight:600 }}>final year CSE student at {PERSONAL.university}</span> living at the crossroads of software engineering, AI, and financial markets. My work spans full-stack applications, data analytics, and systematic trading.
          </p>
          <p style={{ color:'#94A3B8', lineHeight:1.9, fontSize:14.5, fontFamily:'Outfit,sans-serif', marginBottom:14 }}>
            As Co-Founder &amp; Fintech Head of <span style={{ color:'#FFB800', fontWeight:700 }}>FiNIT — The Student Finance Club</span> at MANIT, I lead sessions on algorithmic trading, derivatives, and financial modeling for 30+ members.
          </p>
          <p style={{ color:'#94A3B8', lineHeight:1.9, fontSize:14.5, fontFamily:'Outfit,sans-serif', marginBottom:28 }}>
            I actively trade <span style={{ color:'#00FF88', fontWeight:600 }}>Indian F&amp;O, Forex, MCX &amp; Crypto</span> using systematic strategies. My mission: build AI-powered fintech platforms leveraging Web3 and advanced analytics.
          </p>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            {['📍 Bhopal, MP', `🎓 MANIT CSE '26`, '🏦 FiNIT Co-Founder', `CGPA: ${PERSONAL.cgpa}`].map(t => (
              <span key={t} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:8, padding:'6px 13px', color:'#64748B', fontSize:12.5, fontFamily:'Outfit,sans-serif' }}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:13 }}>
          {PILLARS.map(p => (
            <div key={p.title}
              style={{ display:'flex', alignItems:'center', gap:15, background:'rgba(13,27,42,0.75)', border:`1px solid ${p.color}20`, borderLeft:`3px solid ${p.color}`, borderRadius:11, padding:'14px 20px', backdropFilter:'blur(10px)', transition:'transform 0.22s ease', cursor:'default' }}
              onMouseEnter={e=>e.currentTarget.style.transform='translateX(5px)'}
              onMouseLeave={e=>e.currentTarget.style.transform='translateX(0)'}>
              <span style={{ fontSize:26, flexShrink:0 }}>{p.icon}</span>
              <div>
                <div style={{ fontFamily:'Syne,sans-serif', fontWeight:700, color:'#E2E8F0', fontSize:13.5, marginBottom:3 }}>{p.title}</div>
                <div style={{ fontFamily:'Fira Code,monospace', color:'#475569', fontSize:11 }}>{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
