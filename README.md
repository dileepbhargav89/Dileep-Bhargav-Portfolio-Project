# Dileep Bhargav — Portfolio v3

## What's New in v3
- ✅ **Real profile photo** loaded from `/public/photo.jpg`
- ✅ **MANIT Bhopal badge** — distinct badge with border-glow hover effect (above FiNIT)
- ✅ **FiNIT badge** — displayed below MANIT badge with amber glow
- ✅ **Updated**: "Final year CSE student" title · CGPA 6.33
- ✅ **Holographic 3D Chart** — Hexagonal prisms in BULLISH ascending arrangement + circuit board floor + SVG trend arrow
- ✅ **Multi-tab Resume** — SDE / Data Analyst / Trader tabs with real data from your PDFs
- ✅ **Three PDF downloads** — All 3 resumes included in `/public/`
- ✅ **Preserved** particle network canvas background

---

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:5173
```

---

## File Structure

```
dileep-portfolio-v3/
├── public/
│   ├── photo.jpg              ← Your passport photo
│   ├── SDE_Resume.pdf         ← SDE resume download
│   ├── DataAnalyst_Resume.pdf ← Data Analyst resume download
│   └── Quant_Resume.pdf       ← Trader resume download
├── src/
│   ├── App.jsx
│   ├── animations.css         ← All @keyframes here
│   ├── data.js                ← All content here ← EDIT THIS
│   ├── index.css
│   ├── main.jsx
│   ├── hooks/useInView.js
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx           ← MANIT badge + FiNIT badge + photo
│       ├── ProfilePhoto.jsx   ← Spinning ring, glow, hover
│       ├── HolographicChart.jsx ← NEW 3D hex prisms + circuit board
│       ├── NetworkCanvas.jsx  ← PRESERVED original background
│       ├── Typewriter.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Resume.jsx         ← 3-tab SDE/Analyst/Trader
│       └── Contact.jsx
```

---

## Tweaking the 3D Holographic Chart

Open `src/components/HolographicChart.jsx`:

| What | Where |
|---|---|
| Prism heights (must stay strictly ascending) | `PRISMS` array — `h` field |
| Prism colors | `PRISMS` array — `color` field |
| Last prism highlight color | `color: '#FFB800'` on last entry |
| 3D perspective depth | `perspective: 380` on root div |
| Float animation speed | `hexFloat 4s` in animation |
| Trend arrow points | `pts` string in `TrendArrow` |
| Binary node labels | `BINARY_NODES` array |

---

## Deploy to Vercel

```bash
git init && git add . && git commit -m "portfolio v3"
git remote add origin https://github.com/dileepbhargav89/portfolio.git
git push -u origin main
# → vercel.com → Import repo → Deploy
```

PDFs will be served automatically from `/public/` on Vercel.

Built with ❤️ by Dileep Bhargav | MANIT Bhopal 2025
