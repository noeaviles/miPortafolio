import React from 'react'
import html from '../assets/html5.png'
import css from '../assets/css-3.png'
import javascript from '../assets/js.png'
import reactjs from '../assets/atom.png'
import imgMysql from '../assets/mysql.png'
import sass from '../assets/sass.png'
import git from '../assets/git.png'
import figma from '../assets/figma.png'
import xd from '../assets/experience.png'
import photoshop from '../assets/photoshop.png'


const About = () => {
  return (
    <div className='About'>

      <div className="About-text">
          <h2 className="About-titulo">Acerca de mi</h2>
          <h3 className='About-name'>Soy <span className='About-red'>Noe Aviles</span> un fronted developer</h3>
          <p className='About-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae esse veniam ab sequi vero atque beatae. Magni a neque qui cum dolore nisi debitis eius at, tempora consequuntur harum facilis!</p>
          <p className='About-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laudantium in aspernatur quibusdam minus at exercitationem aliquam sapiente eligendi nihil, </p>
          <div className='About-personalInfo'>
            <p><span className='About-red'>Correo:</span> noe.alexander.aviles@gmail.com</p>
            <div className="About-btn">Download CV</div>
          </div>
       </div>

       <div className='About-lenguage'>
           <h4 className='About-h4'>Lenguajes y herramientas</h4>
          <div className='About-tool'>
            <div className="About-icon"><img src={html} alt="" /></div>
            <div className="About-icon"><img src={css} alt="" /></div>
            <div className="About-icon"><img src={javascript} alt="" /></div>
            <div className="About-icon"><img src={reactjs} alt="" /></div>
            <div className="About-icon"><img src={imgMysql} alt="" /></div>
            <div className="About-icon"><img src={sass} alt="" /></div>
            <div className="About-icon"><img src={git} alt="" /></div>
            <div className="About-icon"><img src={figma} alt="" /></div>
            <div className="About-icon"><img src={xd} alt="" /></div>
            <div className="About-icon"><img src={photoshop} alt="" /></div>
          </div>
       </div>
        
    </div>
  )
}

export default About