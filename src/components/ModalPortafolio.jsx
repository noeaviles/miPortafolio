import React,{useState,useEffect} from 'react'
import datos from '../json/portafolio.json'
import img from '../assets/proyecto-1.jpg'

const ModalPortafolio = ( {activeModal,handleModal,id} ) => {
    const [data,SetData] = useState([]);

  useEffect(() => {
    const array = datos.filter( datos => datos.id === id  )
    console.log(array);
    SetData(array)
  }, [id])
  
  return (
    <div className={activeModal ? "Modal" : "hidden"} onClick={handleModal} >   
      {
        data.map( item => (
          <div className="Modal-content">
          <div className='Modal-close' onClick={handleModal}><span>X</span></div>
          <h3 className='Modal-h3'>{ item.title }</h3>
            <div className='Modal-info'>
              <div className="Modal-gallery">
                  <img src={item.urlImg} alt="" />
              </div>
              <div className="Modal-text">
                <div className="Modal-projectInfo">
                  <h4 className='Modal-h4'>Acerca del proyecto:</h4>
                  <p className='Modal-p'>{ item.info }</p>
                </div>
                <div className="Modal-projectDetails">
                  <h4 className='Modal-h4'>Detalles del proyecto:</h4>
                  <div className="Modal-DetailsTopics"><h5 className='Modal-h5'>Cliente:</h5><p className='Modal-p'> { item.cliente } </p></div>
                  <div className="Modal-DetailsTopics"><h5 className='Modal-h5'>Industria:</h5><p className='Modal-p'> { item.industry } </p></div>
                  <div className="Modal-DetailsTopics"><h5 className='Modal-h5'>Tecnologías:</h5><p className='Modal-p'>{ item.technologies }</p></div>
                  <div className="Modal-DetailsTopics"><h5 className='Modal-h5'>Fecha:</h5><p className='Modal-p'>{ item.date }</p></div>
                  <div className="Modal-DetailsTopics"><h5 className='Modal-h5'>URL</h5><a className='Modal-p Modal-red' href={item.url} Target="_blank">{ item.url }</a></div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
      
    </div>
  )
}

export default ModalPortafolio