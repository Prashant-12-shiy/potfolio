import React from 'react'
import "./Hero.css"
import HeroImg from "../../assets/me.jpg"

export const Hero = () => {
  return (
    <div className='hero' id='hero'>
        <div className='image-side'>
            <img className='border-slate-500 border-8 dark:border-0 rounded-full object-contain' src={HeroImg} alt="" />
        </div>
        <div className='hero-content'>
            <h1 >Hello World! I'm Prashant Thapa,</h1>

            <p>a passionate Web Developer. Dive into my portfolio to discover simplicity meets innovation. Let's create something extraordinary together!</p>

            <a href="#skills"><button className='skill-button'>Skills
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
              </svg>
            </button></a>

            <div className='social-icon'>
                
            </div>
        </div>
    </div>
  )
}
