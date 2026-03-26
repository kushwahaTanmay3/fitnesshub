import React from 'react'
import img from '../assets/heroSec.png'
import {motion} from 'motion/react'

const Hero = () => {
  return (
<div id='home' className=' font-Anton w-full h-auto pt-30 pb-10 max-sm:pb-20 max-sm:pl-2 px-20 bg-[#ff6b35] flex gap-10 max-sm:gap-2  '>
  <motion.img
   initial={{opacity:0,y:20}}
   whileInView={{opacity:1,y:0}}
   transition={{duration:0.5,delay:0.7}}
   viewport={{once:true}}
   src={img} className='max-sm:w-68 max-sm:h-95  w-180  rounded-xl' />
  <motion.div
   initial={{opacity:0,x:20}}
   whileInView={{opacity:1,x:0}}
   transition={{duration:0.8,delay:1}}
   viewport={{once:true}}
   className='text-gray-800 text-2xl w-auto h-auto flex-col  max-sm:pt-15 '>
   <h1 className='max-sm:m-5 m-10 max-sm:text-4xl text-8xl'> Transform </h1>
   <h1 className='max-sm:m-4 m-8 max-sm:text-3xl text-6xl'>Your Body</h1>
   <h1 className='max-sm:m-2 m-6 max-sm:text-2xl text-4xl'>Today</h1>
   <p className=' m-3 text-sm text-gray-900 max-sm:text-[12px]'>Join the ultimate fitness experience with expert trainers and state-of-the-art equipment</p>
   <button onClick={() => window.location.href = "#contact"} className=' mt-5 ml-40 max-sm:mt-2 max-sm:ml-10 max-sm:text-sm bg-black text-white p-2 rounded-2xl hover:scale-105 transition-all'>Join Now</button>
  </motion.div>
</div>
  )
}

export default Hero
