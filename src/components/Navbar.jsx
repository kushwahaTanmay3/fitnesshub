import React, { useState } from 'react'
import img from '../assets/gymlogo.png'
import {X,Menu} from 'lucide-react';
import {motion} from 'motion/react'
const Navbar = () => {
   const[siderbarOpen,setSiderbarOpen]=useState(false)

  return (
    <motion.div 
     initial={{opacity:0,y:-50}}
     animate={{opacity:1,y:0}}
     transition={{duration:0.6 ,ease:'easeOut'}}
     className=' font-Anton flex justify-between items-center z-999  bg-black text-white w-full h-20 px-6 md:px-12 fixed'>
      {/* logo */}

      <img className='w-30' src={img} alt="" />
      {/* Desktop Menu */}

      <ul className={`${!siderbarOpen?'max-sm:w-0 overflow-hidden':'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-[50%] max-sm:h-[50%]  max-sm:flex-col max-sm:bg-black max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>
        <X className="absolute top-5 right-5 cursor-pointer sm:hidden"  onClick={() => setSiderbarOpen(false)}/>
        <a className='hover:text-[#ff6b35]  hover:underline  hover:text-2xl ' onClick={() => setSiderbarOpen(false)} href="#home">HOME</a>
        <a className='hover:text-[#ff6b35]  hover:underline  hover:text-2xl ' onClick={() => setSiderbarOpen(false)} href="#about">ABOUT</a>
        <a className='hover:text-[#ff6b35]  hover:underline  hover:text-2xl ' onClick={() => setSiderbarOpen(false)} href="#services">SERVICES</a>
        <a className='hover:text-[#ff6b35]  hover:underline  hover:text-2xl ' onClick={() => setSiderbarOpen(false)} href="#trainers">TRAINERS</a>
        <a className='hover:text-[#ff6b35]  hover:underline  hover:text-2xl ' onClick={() => setSiderbarOpen(false)} href="#pricing">PRICING</a>
        <a className='hover:text-[#ff6b35]  hover:underline  hover:text-2xl ' onClick={() => setSiderbarOpen(false)} href="#contact">CONTACT</a>
      </ul>
      <Menu 
       onClick={() => setSiderbarOpen(true)} 
       className="sm:hidden cursor-pointer" 
      />
    </motion.div>
  )
}
export default Navbar
