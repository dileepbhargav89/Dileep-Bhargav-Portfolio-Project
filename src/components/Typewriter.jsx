import { useState, useEffect } from 'react'
import { ROLES } from '../data'

export default function Typewriter() {
  const [idx, setIdx]   = useState(0)
  const [text, setText] = useState('')
  const [del, setDel]   = useState(false)
  useEffect(() => {
    const cur = ROLES[idx]
    const t = del
      ? setTimeout(() => { setText(s => s.slice(0,-1)); if (text.length===1){setDel(false);setIdx(i=>(i+1)%ROLES.length)} }, 55)
      : setTimeout(() => { setText(cur.slice(0,text.length+1)); if (text===cur) setTimeout(()=>setDel(true),2000) }, 90)
    return () => clearTimeout(t)
  }, [text, del, idx])
  return (
    <span style={{ color: '#00D4FF' }}>
      {text}<span style={{ animation:'blink 1s step-end infinite' }}>|</span>
    </span>
  )
}
