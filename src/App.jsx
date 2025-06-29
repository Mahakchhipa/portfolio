import React from 'react'

import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const App = () => {
  return (
    <div>
       <Navbar/>
       <Herosection/>
       <About/>
       <Projects/>
       <Skills/>
    </div>
  )
}

export default App
