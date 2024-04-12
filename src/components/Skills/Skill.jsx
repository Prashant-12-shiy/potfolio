import React, { useEffect, useState } from 'react';
import "./Skill.css"
import html_light from "../../assets/html_light.png"
import html_dark from "../../assets/html_dark.png"
import css_light from "../../assets/css_light.png"
import css_dark from "../../assets/css_dark.png"
import javascript_light from "../../assets/javascript_loght.png"
import javascript_dark from "../../assets/javascript_dark.png"
import react from "../../assets/react.png"
import tailwind from "../../assets/tailwind.png"
import figma from "../../assets/figma.png"


export const Skill = ({darkMode}) => {

    const skillsItems = [
        {img: darkMode ? html_dark : html_light, title: 'HTML'},
        {img: darkMode ? css_dark : css_light, title: 'CSS'},
        {img: darkMode ? javascript_dark : javascript_light, title: 'JavaSCript'},
        {img: react, title: 'React'},
        {img: tailwind, title: 'Tailwind'},
        {img: figma, title: 'Figma'},
    ]

  return (
    <div className='skills' id='skills'>
        <div>
            <h1>Skills</h1>
        </div>
        <div className={`skills-item `}>
                {skillsItems.map((item, index) => (
                    <div key={index} className={`${darkMode ? "dark-mode" : "light-mode"}`}>
                    <img src={item.img} alt="" />
                    <h2>{item.title}</h2>
                    </div>
                ))}
        </div>
    </div>
  )
}
