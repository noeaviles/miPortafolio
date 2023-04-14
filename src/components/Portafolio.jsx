import React from 'react'
import imgPort from '../assets/regatelecom.png'
import imgPort2 from '../assets/axioma.png'
import imgPort3 from '../assets/proyecto-axioma3.jpg'
import imgPort4 from '../assets/proyecto-crmBodas1.jpg'
import imgPort5 from '../assets/proyecto-crmBodas2.jpg'
import imgPort6 from '../assets/fbarquitectos.png'
import imgPort7 from '../assets/trotta.png'


const Portafolio = ( {handleModal} ) => {
  return (
    <div className='Portafolio' id="portafolio">
      <h2 className="Portafolio-titulo">Portafolio</h2>
      <div className='Portafolio-contenedorCards'>
        
        <div className="Portafolio-column">
            <div className="Portafolio-card" onClick={ () => handleModal(0)}>
              <img src={imgPort} alt="" />
            </div>
            <div className="Portafolio-card" onClick={ () => handleModal(1)}>
              <img src={imgPort2} alt="" />
            </div>
            <div className="Portafolio-card" onClick={ () => handleModal(2)}>
              <img src="./img/crmRegaTelecom.png" alt="" />
            </div>
        </div>
{
  /*
        <div className="Portafolio-column">
            <div className="Portafolio-card" onClick={ () => handleModal(3)}>
              <img src={imgPort4} alt="" />
            </div>
            <div className="Portafolio-card" onClick={ () => handleModal(4)}>
              <img src={imgPort5} alt="" />
            </div>
            
        </div>
  */
}
        <div className="Portafolio-column">
            <div className="Portafolio-card" onClick={ () => handleModal(5)}>
              <img src={imgPort6} alt="" />
            </div>
            <div className="Portafolio-card" onClick={ () => handleModal(6)}>
              <img src={imgPort7} alt="" />
            </div>
          
        </div>
     

      </div>
    </div>
  )
}

export default Portafolio