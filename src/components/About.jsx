import React from 'react'
import img from '../assets/aboutsection.png'
import { Target,Eye} from "lucide-react";
import Head from './Head';
import {motion} from 'motion/react'
const About = () => {
  return (
    <div id='about' className='font-Anton '>
      <Head first={'About'} second={'Fitness Hub'}/>

     <div className='flex gap-30 max-sm:gap-5 items-center mx-20 max-sm:mx-5 max-sm:mt-10 max-sm:flex-col-reverse'>

     <div className='w-[50%] max-sm:w-auto max-sm:mb-10 flex flex-col gap-y-10 max-sm:gap-5'>

        <div >
          <motion.h1
           initial={{opacity:0,y:20}}
           whileInView={{opacity:1,y:0}}
           transition={{duration:0.5,delay:0.7}}
           viewport={{once:true}}
           className='text-3xl max-sm:text-2xl text-[#ff6b35] '>Where Fitness Meets Excellence</motion.h1>
          <motion.p
            initial={{opacity:0,y:20}}
             whileInView={{opacity:1,y:0}}
             transition={{duration:1,delay:0.7}}
             viewport={{once:true}}
           className=' text-white pt-5 font-poppins '>Welcome to Fitness Hub Gym, where we believe in transforming lives through fitness. Our state-of-the-art facility and expert trainers are dedicated to helping you achieve your fitness goals.</motion.p>
        </div>
        
        <div>
          <motion.h1
           initial={{opacity:0,y:20}}
           whileInView={{opacity:1,y:0}}
           transition={{duration:0.5,delay:0.7}}
           viewport={{once:true}}
          className='text-3xl max-sm:text-2xl text-[#ff6b35] flex gap-3 items-center'> <Target size={50} color="#ff6b35" /> Our Mission</motion.h1>
          <motion.p
             initial={{opacity:0,y:20}}
             whileInView={{opacity:1,y:0}}
             transition={{duration:1,delay:0.7}}
             viewport={{once:true}} 
          className='text-white pt-5 font-poppins'>To empower individuals to achieve their fitness potential through expert guidance and cutting-edge facilities.</motion.p>
        </div>

        <div>
            <motion.h1 
             initial={{opacity:0,y:20}}
             whileInView={{opacity:1,y:0}}
             transition={{duration:0.5,delay:0.7}}
             viewport={{once:true}}
             className='text-3xl max-sm:text-2xl text-[#ff6b35] flex gap-3 items-center '> <Eye size={50} color="#ff6b35" /> Our Vision</motion.h1>
            <motion.p
             initial={{opacity:0,y:20}}
             whileInView={{opacity:1,y:0}}
             transition={{duration:1,delay:0.7}}
             viewport={{once:true}}
             className='text-white pt-5 font-poppins '>To be the leading fitness destination that inspires healthy lifestyles and builds strong communities.</motion.p>
        </div>
     </div>
      <motion.img
       initial={{opacity:0,x:20}}
       whileInView={{opacity:1,x:0}}
       transition={{duration:0.8,delay:1.5}}
       viewport={{once:true}}
       src={img} className=' max-sm:w-80' />
      </div>
    </div>
  )
}

export default About
