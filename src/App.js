import React from 'react'
import Home from './Event/Home'
import Header from './Event/Header/Header'
import About from './Event/About'
import Speakers from './Event/Speakers'
import Host from './Event/Host'




import { BrowserRouter as Router , Route, Routes  } from 'react-router-dom'
import Footer from './Event/Footer'

const App = () => {
  return (
<div>
<Header/>
     <Home/>
     <About />
    <Speakers/>
     <Host/>
     <Footer/>
   
</div>
    
  
 
  )
}

export default App
