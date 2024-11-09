import React, { useState } from 'react'
import { Header,Footer, Hero, Contact } from './components'
import { Project } from './components/Projects/Project';
import { Skill } from './components/Skills/Skill';
import Experience from './components/Experience/Experience';

const App = () => {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className='App'>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <main>
        <Hero/>
        <Project/>
        <Experience/>
        <Skill darkMode={darkMode}/>
        <Contact/>
      </main>
      <Footer  darkMode={darkMode}/>
    </div>
  )
}

export default App