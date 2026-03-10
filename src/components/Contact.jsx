import { useInView } from '../hooks/useInView'
import { CONTACTS } from '../data'

export default function Contact() {
  const [ref, vis] = useInView()
  return (
    <section id="contact" ref={ref} style={{ padding:'108px 24px', background:'rgba(5,10,20,0.55)', opacity:vis?1:0, transform:vis?'translateY(0)':'translateY(40px)', transition:'all 0.85s ease' }}>
      <div style={{ maxWidth:700, margin:'0 auto', textAlign:'center' }}>
        <p style={{ fontFamily:'Fira Code,monospace', fontSize:11, letterSpacing:'3px', color:'#00D4FF', marginBottom:12, textTransform:'uppercase' }}>05 / Contact</p>
        <h2 style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(28px,4vw,48px)', letterSpacing:'-1px', color:'#F1F5F9', lineHeight:1.15, marginBottom:16 }}>
          Let's Build Something<br /><span style={{ color:'#00D4FF' }}>Extraordinary</span>
        </h2>
        <p style={{ color:'#64748B', fontSize:15, lineHeight:1.85, margin:'0 auto 48px', fontFamily:'Outfit,sans-serif', maxWidth:500 }}>
          Open to full-time roles, freelance projects, quant trading collaborations, and fintech startup opportunities.
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:13, marginBottom:44 }}>
          {CONTACTS.map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              style={{ background:'rgba(13,27,42,0.82)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:12, padding:'17px 20px', display:'flex', alignItems:'center', gap:13, textDecoration:'none', transition:'all 0.22s ease' }}
              onMouseEnter={e=>{ e.currentTarget.style.borderColor=l.color+'50'; e.currentTarget.style.transform='translateY(-3px)' }}
              onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.transform='translateY(0)' }}>
              <span style={{ fontSize:21 }}>{l.icon}</span>
              <div style={{ textAlign:'left' }}>
                <div style={{ color:'#94A3B8', fontSize:10, fontFamily:'Fira Code,monospace', marginBottom:2, letterSpacing:'1.5px', textTransform:'uppercase' }}>{l.label}</div>
                <div style={{ color:'#E2E8F0', fontSize:13, fontFamily:'Outfit,sans-serif', fontWeight:600 }}>{l.handle}</div>
              </div>
            </a>
          ))}
        </div>
        <div style={{ borderTop:'1px solid rgba(255,255,255,0.05)', paddingTop:28, color:'#1E293B', fontSize:12, fontFamily:'Fira Code,monospace' }}>
          Designed &amp; Built by <span style={{ color:'#00D4FF' }}>Dileep Bhargav</span> · 2025 · MANIT Bhopal
        </div>
      </div>
    </section>
  )
}
