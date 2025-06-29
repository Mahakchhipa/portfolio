import React from 'react'

import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const App = () => {
  return (
    <div>
       <Navbar/>
       <Herosection/>
       <About/>
       <Projects/>
       <Skills/>
       <Experience/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App
