import { useState, useEffect } from 'react'
import { PERSONAL } from '../data'

const LINKS = ['about','skills','projects','resume','contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })
  return (
    <nav style={{
      position:'fixed', top:0, left:0, right:0, zIndex:100,
      padding:'14px 32px', display:'flex', alignItems:'center', justifyContent:'space-between',
      background: scrolled ? 'rgba(5,10,20,0.93)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,212,255,0.1)' : 'none',
      transition:'all 0.3s ease', animation:'fadeInDown 0.7s ease',
    }}>
      <div onClick={() => window.scrollTo({top:0,behavior:'smooth'})}
        style={{fontFamily:'Syne,sans-serif',fontSize:22,fontWeight:800,cursor:'pointer'}}>
        <span style={{color:'#00D4FF'}}>{PERSONAL.initials[0]}</span>
        <span style={{color:'#F1F5F9'}}>{PERSONAL.initials[1]}</span>
        <span style={{color:'#FFB800'}}>.</span>
      </div>
      <div style={{display:'flex',gap:22,alignItems:'center',flexWrap:'wrap'}}>
        {LINKS.map(l => (
          <button key={l} onClick={() => go(l)}
            style={{background:'none',border:'none',cursor:'pointer',color:'#94A3B8',fontFamily:'Syne,sans-serif',fontSize:12.5,fontWeight:600,textTransform:'capitalize',transition:'color 0.2s'}}
            onMouseEnter={e=>e.target.style.color='#00D4FF'}
            onMouseLeave={e=>e.target.style.color='#94A3B8'}>
            {l}
          </button>
        ))}
        <button onClick={() => go('contact')}
          style={{background:'rgba(0,212,255,0.08)',border:'1px solid rgba(0,212,255,0.3)',color:'#00D4FF',borderRadius:8,padding:'7px 16px',cursor:'pointer',fontFamily:'Syne,sans-serif',fontSize:12,fontWeight:700,transition:'all 0.2s'}}
          onMouseEnter={e=>{e.currentTarget.style.background='rgba(0,212,255,0.18)';e.currentTarget.style.transform='translateY(-1px)'}}
          onMouseLeave={e=>{e.currentTarget.style.background='rgba(0,212,255,0.08)';e.currentTarget.style.transform='translateY(0)'}}>
          Hire Me
        </button>
      </div>
    </nav>
  )
}
