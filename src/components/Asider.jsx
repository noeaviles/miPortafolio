import React,{useState} from 'react'
import logo from '../assets/logo.jpg'

const Asider = () => {
    const [menuActivo, setMenuActivo] = useState(false)
    
    const handleMenu = ()=> {
        setMenuActivo (!menuActivo);
        console.log(menuActivo);
        
    }

  return (
    <div className='Asider'>
            <div className='Asider-container'>
                <div className='Asider-info' >
                    <div className='Asider-logo'>
                        <div className='Asider-picture'></div>
                        <h1 className='Asider-title'>NOE AVILES</h1>
                    </div> 

                </div>

                <div className="Asider-socialMedia">
                        <a href=""><div className='Asider-icono'><i className="fa-brands fa-linkedin"></i></div></a>
                        <a href=""><div className='Asider-icono'><i className="fa-brands fa-github"></i></div></a>
                </div>

                <nav className='Asider-nav'>
                    <div className='Asider-menu' onClick={ () => handleMenu()}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </nav>
                <ul className = {menuActivo ? `Asider-ul` : "Asider-ulHidden"} > 
                        <li className='Asider-li Asider-isActive'>Home</li>
                        <li className='Asider-li'>Sobre mi</li>
                        <li className='Asider-li'>Portafolio</li>
                        <li className='Asider-li'>Contacto</li>
                </ul>
            </div>
           
    </div>
  )
}

export default Asider