// ─────────────────────────────────────────────────────────────────────────────
//  HOLOGRAPHIC FINTECH 3D CHART  — NEW COMPONENT
//
//  DESIGN:
//  ┌─ 6 Hexagonal prisms in STRICT BULLISH (ascending) arrangement
//  ├─ Circuit-board PCB grid beneath the chart
//  ├─ SVG trend arrow connecting prism tops (rising L→R)
//  ├─ Floating binary / data nodes animated
//  ├─ Glowing scan line sweeping across
//  └─ CSS-only 3D perspective — no external library needed
//
//  TWEAKING GUIDE:
//  • Prism heights → edit PRISMS array (must stay strictly ascending for bullish look)
//  • Prism colors  → change 'color' field (default neon green; last one is amber)
//  • Overall size  → change root div width/height (default 260×240)
//  • Rotation      → change rotateX value in chartStyle (default 8deg)
//  • Orbit speed   → change animation duration on hexFloat (default 4s)
// ─────────────────────────────────────────────────────────────────────────────

// ── PRISM DATA — strictly ascending heights (BULLISH trend) ─────────────────
const PRISMS = [
  { h: 28, color: '#00CC66', topW: 24, delay: 0    },
  { h: 40, color: '#00DD77', topW: 24, delay: 0.18 },
  { h: 55, color: '#00EE88', topW: 24, delay: 0.36 },
  { h: 70, color: '#00FF88', topW: 24, delay: 0.54 },
  { h: 88, color: '#00FF99', topW: 24, delay: 0.72 },
  { h: 110, color: '#FFB800',topW: 24, delay: 0.90 }, // tallest = amber highlight
]

const BINARY_NODES = [
  { text: '0x1F', x: '8%',  y: '12%', color: '#00D4FF', dur: 2.8 },
  { text: '1011', x: '80%', y: '8%',  color: '#FFB800', dur: 3.2 },
  { text: '0110', x: '88%', y: '55%', color: '#00FF88', dur: 2.5 },
  { text: '1100', x: '4%',  y: '60%', color: '#A78BFA', dur: 3.6 },
  { text: 'BUY',  x: '70%', y: '20%', color: '#00FF88', dur: 2.2 },
  { text: 'F&O',  x: '12%', y: '30%', color: '#FFB800', dur: 3.0 },
]

// ── Top hex cap (flat-top hexagon) ──────────────────────────────────────────
function HexCap({ color, width = 24 }) {
  const h = Math.round(width * 0.55)
  return (
    <div style={{
      width, height: h, flexShrink: 0,
      clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
      background: `linear-gradient(135deg, #ffffff22, ${color}cc, ${color})`,
      boxShadow: `0 0 18px ${color}99, 0 0 6px ${color}`,
      transform: 'scaleX(1.05)',
    }} />
  )
}

// ── Individual Hexagonal Prism ────────────────────────────────────────────────
function HexPrism({ h, color, topW, delay }) {
  const isLast = color === '#FFB800'
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      animation: `hexPulse 2.8s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    }}>
      {/* Top wick */}
      <div style={{
        width: 2, height: isLast ? 16 : 10,
        background: color,
        boxShadow: `0 0 8px ${color}`,
        marginBottom: 1,
      }} />
      {/* Hex cap */}
      <HexCap color={color} width={topW} />
      {/* Prism body */}
      <div style={{
        width: topW - 2, height: h,
        background: `linear-gradient(180deg, ${color} 0%, ${color}bb 35%, ${color}66 100%)`,
        boxShadow: `0 0 22px ${color}44, inset 3px 0 0 rgba(255,255,255,0.18), inset -3px 0 0 rgba(0,0,0,0.35)`,
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Circuit trace across body */}
        <div style={{ position:'absolute', top:'35%', left:3, right:3, height:1, background:`${color}44` }} />
        <div style={{ position:'absolute', top:'65%', left:3, right:3, height:1, background:`${color}33` }} />
        {/* Scan shimmer */}
        <div style={{
          position:'absolute', inset:0,
          background:`linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 40%, rgba(255,255,255,0.06) 100%)`,
          pointerEvents:'none',
        }} />
      </div>
      {/* Bottom base */}
      <div style={{
        width: topW + 4, height: 6,
        background: `linear-gradient(180deg, ${color}44, #00110822)`,
        boxShadow: `0 6px 14px rgba(0,0,0,0.55), 0 0 10px ${color}22`,
        borderRadius: '0 0 3px 3px',
      }} />
    </div>
  )
}

// ── Circuit Board Floor ───────────────────────────────────────────────────────
function CircuitBoard() {
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, height: '52%',
      backgroundImage: `
        linear-gradient(rgba(0,212,255,0.09) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,212,255,0.09) 1px, transparent 1px)
      `,
      backgroundSize: '18px 18px',
      transform: 'rotateX(62deg)',
      transformOrigin: 'bottom center',
      pointerEvents: 'none',
    }}>
      {/* Glowing dots at grid intersections (selected) */}
      {[{l:'20%',b:'30%'},{l:'50%',b:'55%'},{l:'75%',b:'30%'},{l:'88%',b:'55%'}].map((pos,i)=>(
        <div key={i} style={{
          position:'absolute', left:pos.l, bottom:pos.b,
          width:3, height:3, borderRadius:'50%',
          background:'rgba(0,212,255,0.7)',
          boxShadow:'0 0 6px rgba(0,212,255,0.8)',
        }} />
      ))}
    </div>
  )
}

// ── Rising Trend Arrow (SVG) ──────────────────────────────────────────────────
function TrendArrow() {
  // Points map to the tops of the 6 prisms (approx)
  const pts = '22,118 58,100 94,80 130,60 166,38 202,14'
  return (
    <svg style={{
      position:'absolute', bottom:52, left:'50%', transform:'translateX(-50%)',
      width:220, height:140, overflow:'visible', pointerEvents:'none',
    }}>
      <defs>
        <linearGradient id="trendG" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#00FF88" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FFB800" stopOpacity="1"   />
        </linearGradient>
        <filter id="glowF">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Trend line */}
      <polyline
        points={pts}
        fill="none"
        stroke="url(#trendG)"
        strokeWidth="2.5"
        strokeDasharray="6,3"
        filter="url(#glowF)"
        style={{ animation:'trendDash 3s ease forwards' }}
      />

      {/* Area fill below trend */}
      <polygon
        points={`${pts} 202,140 22,140`}
        fill="url(#trendG)"
        opacity="0.07"
      />

      {/* Arrow head at top-right */}
      <polygon
        points="202,14 193,26 211,24"
        fill="#FFB800"
        filter="url(#glowF)"
        style={{ filter:'drop-shadow(0 0 8px rgba(255,184,0,0.9))' }}
      />

      {/* BULLISH label */}
      <text x="160" y="8" fill="#00FF88" fontSize="9"
        fontFamily="Fira Code, monospace" opacity="0.8" letterSpacing="1">
        ▲ BULLISH
      </text>
    </svg>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function HolographicChart() {
  return (
    <div style={{
      position: 'relative',
      width: 260, height: 240,
      flexShrink: 0,
      perspective: 380,
      perspectiveOrigin: '50% 15%',
    }}>
      {/* Circuit board floor (perspective grid) */}
      <CircuitBoard />

      {/* Ambient glow center */}
      <div style={{
        position:'absolute', inset:0,
        background:'radial-gradient(ellipse at 50% 60%, rgba(0,255,136,0.06) 0%, transparent 70%)',
        pointerEvents:'none',
      }} />

      {/* Scan line sweeping vertically */}
      <div style={{
        position:'absolute', left:0, right:0, top:0, height:2,
        background:'linear-gradient(90deg, transparent, rgba(0,212,255,0.5), transparent)',
        animation:'scanLine 4s ease-in-out infinite',
        pointerEvents:'none',
      }} />

      {/* 3D Chart: prisms */}
      <div style={{
        position:'absolute', bottom:52, left:'50%',
        transform:'translateX(-50%) rotateX(8deg)',
        transformStyle:'preserve-3d',
        display:'flex', alignItems:'flex-end', gap:10,
        animation:'hexFloat 4s ease-in-out infinite',
      }}>
        {PRISMS.map((p, i) => (
          <HexPrism key={i} {...p} />
        ))}
      </div>

      {/* Rising trend arrow */}
      <TrendArrow />

      {/* Floating binary/data nodes */}
      {BINARY_NODES.map((n, i) => (
        <div key={i} style={{
          position:'absolute', left:n.x, top:n.y,
          color:n.color, fontFamily:'Fira Code, monospace', fontSize:9, fontWeight:500,
          opacity:0.4,
          animation:`bitFloat ${n.dur}s ease-in-out infinite`,
          animationDelay:`${i * 0.35}s`,
          pointerEvents:'none',
        }}>
          {n.text}
        </div>
      ))}

      {/* Label */}
      <div style={{
        position:'absolute', bottom:8, left:0, right:0,
        textAlign:'center', color:'#1E3A5F',
        fontFamily:'Fira Code, monospace', fontSize:10, letterSpacing:'2px',
      }}>
        FINANCE × TECHNOLOGY
      </div>
    </div>
  )
}
