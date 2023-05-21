import React,{useState} from 'react'

const Contact = () => {
  const [formulario,setFormulario] = useState(true);

  const handleForm = (e)=> {
      e.preventDefault();
      setFormulario(false)
  }
  return (
    <div className='Contact' id="contact">
      <h2 className="Contact-titulo">Contactame</h2>
      <div className="Contact-container">
        <div className="Contact-text">
          <p>Si te intereso mi trabajo y requieres más informacion puedes llenar este formulario, con mucho gusto me pondre en contacto =) </p>
        </div>
        <div className="Contact-Form">
          <form action="" onSubmit={handleForm} name="contact" method="POST" data-netlify="true" >
            <div className='Contact-inputs'>
              <input type="text" placeholder='Nombre' className='Contact-input'/>
              <input type="text" placeholder='email' className='Contact-input'/>
            </div>
            <textarea className='Contact-textArea' placeholder='Escriba su comentario...'></textarea>
           {
            formulario === true ?  <input type="submit" className='Contact-btn'/> : <p className='Contact-p'>Mensaje enviado</p>
           }
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact