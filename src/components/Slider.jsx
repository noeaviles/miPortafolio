import React from 'react'
import {Link} from 'react-scroll'

const Slider = () => {
  return (
    <div className='Slider'>
      <p className='Slider-welcome'>Hola<span className='Slider-signo'>!</span></p>
      <p className='Slider-name'><span className='Slider-signo'>Soy</span> Noe Aviles</p>
      <p className='Slider-subTitulo'>Frontend Developer</p>
      <Link className='Slider-btn' to="aboutMe" spy={true} smooth={true} offset={50} duration={500} >Conocéme</Link>
    </div>
  )
}

export default Slider