import { useInView } from '../hooks/useInView'
import { SKILLS_DATA } from '../data'

function Bar({ name, level, color, visible, delay }) {
  return (
    <div style={{ marginBottom:14 }}>
      <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
        <span style={{ color:'#CBD5E1', fontSize:12, fontFamily:'Fira Code,monospace' }}>{name}</span>
        <span style={{ color, fontSize:11, fontFamily:'Fira Code,monospace' }}>{level}%</span>
      </div>
      <div style={{ background:'rgba(255,255,255,0.07)', borderRadius:4, height:5, overflow:'hidden' }}>
        <div style={{ height:'100%', width:visible?`${level}%`:'0%', background:`linear-gradient(90deg,${color},${color}77)`, borderRadius:4, boxShadow:`0 0 8px ${color}55`, transition:`width 1.3s cubic-bezier(0.4,0,0.2,1) ${delay}s` }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, vis] = useInView()
  const badges = ['Python','JavaScript','C++','React','Node.js','MongoDB','SQL','Pandas','NumPy','LSTM','F&O Trading','Quant','Web3','DSA','Power BI','Excel']
  return (
    <section id="skills" ref={ref} style={{ padding:'108px 24px', background:'rgba(5,10,20,0.55)', opacity:vis?1:0, transform:vis?'translateY(0)':'translateY(40px)', transition:'all 0.85s ease' }}>
      <div style={{ maxWidth:1100, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:60 }}>
          <p style={{ fontFamily:'Fira Code,monospace', fontSize:11, letterSpacing:'3px', color:'#00D4FF', marginBottom:12, textTransform:'uppercase' }}>02 / Skills</p>
          <h2 style={{ fontFamily:'Syne,sans-serif', fontWeight:800, fontSize:'clamp(30px,4vw,48px)', color:'#F1F5F9', letterSpacing:'-1px' }}>Technical Arsenal</h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))', gap:20 }}>
          {Object.entries(SKILLS_DATA).map(([cat, { color, skills }], ci) => (
            <div key={cat} style={{ background:'rgba(13,27,42,0.85)', border:`1px solid ${color}18`, borderRadius:16, padding:'24px 20px', backdropFilter:'blur(10px)' }}>
              <h3 style={{ fontFamily:'Syne,sans-serif', color, fontSize:10.5, fontWeight:700, marginBottom:20, letterSpacing:'0.8px', textTransform:'uppercase' }}>{cat}</h3>
              {skills.map((s, si) => <Bar key={s.name} {...s} color={color} visible={vis} delay={ci*0.15+si*0.08} />)}
            </div>
          ))}
        </div>
        <div style={{ marginTop:36, display:'flex', flexWrap:'wrap', gap:9, justifyContent:'center' }}>
          {badges.map(b => (
            <span key={b}
              style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', borderRadius:100, padding:'5px 13px', color:'#64748B', fontSize:11, fontFamily:'Fira Code,monospace', cursor:'default', transition:'all 0.2s' }}
              onMouseEnter={e=>{e.target.style.color='#00D4FF';e.target.style.borderColor='rgba(0,212,255,0.3)';e.target.style.background='rgba(0,212,255,0.07)'}}
              onMouseLeave={e=>{e.target.style.color='#64748B';e.target.style.borderColor='rgba(255,255,255,0.08)';e.target.style.background='rgba(255,255,255,0.04)'}}>
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
