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
    <div className='About' id="aboutMe">
      <div className="About-text">
          <h2 className="About-titulo">Acerca de mi</h2>
          <div className="About-content">
          <div className="About-description">
            <h3 className='About-name'>Soy <span className='About-red'>Noe Aviles</span> un fronted developer</h3>
            <p className='About-p'>Apasionado por la tecnología y el desarrollo web, me encanta crear aplicaciones que tengan un impacto positivo en la vida de las personas.</p>
            <p className='About-p'>Siempre estoy en constante aprendizaje y me considero una persona autodidacta, ya que las tecnologías y las tendencias están en constante cambio. Por ello, me encanta estar actualizado y aprender nuevas habilidades para poder aplicarlas en mis proyectos.</p>
            <p className='About-p'>Me motiva mucho colaborar en proyectos desafiantes que me permitan aplicar mis habilidades y trabajar con otros desarrolladores que tengan diferentes perspectivas, ya que esto me permite seguir creciendo como persona y profesional.</p>
          </div>
          <div className='About-personalInfo'>
            <p><span className='About-red'>Correo:</span> noe.alexander.aviles@gmail.com</p>
            <a href='https://drive.google.com/file/d/1pdDrjtikv2EBMsAp7fRFBYt8FmaqnYO6/view?usp=sharing' Target="_blank"><div className="About-btn">Download CV</div></a>
          </div>
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