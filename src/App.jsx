import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Trainer from './components/Trainer'
import MemberShip from './components/MemberShip'
import Feedback from './components/Feedback'
import Contactus from './components/Contactus'
import {Toaster} from 'react-hot-toast'
import Maps from './components/Maps'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='bg-gray-900 h-full'>
      <Toaster/>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Trainer/>
      <MemberShip/>
      <Feedback/>
      <Contactus/>
      <Maps/>
      <Footer/>
    </div>
  )
}

export default App
