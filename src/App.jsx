import './animations.css'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Skills   from './components/Skills'
import Projects from './components/Projects'
import Resume   from './components/Resume'
import Contact  from './components/Contact'

export default function App() {
  return (
    <div style={{ background:'#050A14', minHeight:'100vh', color:'#E2E8F0' }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Fira+Code:wght@300;400;500&family=Outfit:wght@300;400;500;600;700&display=swap');
      `}</style>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </div>
  )
}
