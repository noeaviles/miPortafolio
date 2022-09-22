import React from 'react'
import About from './About'
import Asider from './Asider'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import Portafolio from './Portafolio'
import Slider from './Slider'

const Home = () => {
  return (
    <div className='Home'>
        <Asider/>
        <main className='Home-main'>
          <Header/>
          <About/>
          <Portafolio/>
          <Contact/>
          <Footer/>
        </main>
    </div>
  )
}

export default Home