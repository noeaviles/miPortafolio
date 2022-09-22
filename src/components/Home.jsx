import React,{useState,useEffect} from 'react'
import About from './About'
import Asider from './Asider'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import Portafolio from './Portafolio'
import RiseLoader from "react-spinners/RiseLoader";

const Home = () => {
  const [loanding,setLoandig] = useState(false);

  useEffect( () =>{
    setLoandig(true);
    setTimeout( () =>{
      setLoandig(false);
    }, 2000 )

  },[] )
  
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
          <Portafolio/>
          <Contact/>
          <Footer/>
        </main>
      </div>
    }

    </>
    
  )
}

export default Home