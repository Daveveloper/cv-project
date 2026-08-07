import React from 'react'
import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import PersonalProjects from './components/sections/PersonalProjects'
import Contact from './components/sections/Contact'
import ColorGame from './components/sections/ColorGame'
import Footer from './components/sections/Footer'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <section id="skills" className="bg-white">
          <div className="container section">
            <Skills />
          </div>
        </section>
        <Experience />
        <Projects />
        <PersonalProjects />
        <Contact />
        <ColorGame />
      </main>
      <Footer />
    </div>
  )
}

export default App 