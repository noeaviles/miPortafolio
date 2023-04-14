import React,{useState,useEffect} from 'react'
import About from './About'
import Asider from './Asider'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import Portafolio from './Portafolio'
import RiseLoader from "react-spinners/RiseLoader";
import ModalPortafolio from './ModalPortafolio'

const Home = () => {
  const [loanding,setLoandig] = useState(false);
  const [activeModal,setActiveModal] = useState(false);
  const [id,setId] = useState();

  useEffect( () =>{
    setLoandig(true);
    setTimeout( () =>{
      setLoandig(false);
    }, 2000 )
  },[] )

  const handleModal = (id) =>{
    setActiveModal(!activeModal);
    setId(id);
  }
  
  return (
    <>

    {
      loanding ? 
      <div className="Snipper">
        <RiseLoader color={"rgba(214, 69, 54, 1)"}  size={50} /> 
      </div>
      :
      <div className='Home'>
          <Asider/>
          <main className='Home-main'>
          <Header/>
          <About/>
          <Portafolio handleModal={handleModal}/>
          <Contact/>
          <Footer/>
        </main>
        <ModalPortafolio activeModal={activeModal} handleModal={handleModal} id={id}/>
      </div>
    }
    

    </>
    
  )
}

export default Home