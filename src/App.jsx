// import { useState } from 'react'


import Sidenav from './Components/Sidenav'
import Home from './Components/Home'
import Work from './Components/Work'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Skill from './Components/Skill'
import Profile from './Components/Profile'


function App() {
  

  return (
    <>
      <Sidenav />
      <Home />
      <Profile/>
      <Work />
      <Skill />
      <Projects />
      <Contact />

    </>
  )
}

export default App
