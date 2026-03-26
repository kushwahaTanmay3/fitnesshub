import React from 'react'
import Head from './Head'
import img1 from '../assets/gym1.png'
import img2 from '../assets/gym2.png'
import img3 from '../assets/gym3.png'
import {motion} from 'motion/react'
const Feedback = () => {
  return (
    <div className='pb-10  '>
      <Head first={'What Our'} second={'Members'}/> 

     <div className='flex max-sm:flex-col gap-x-10 max-sm:gap-y-5 items-center justify-center mt-10 mx-50 max-sm:mx-10 '>
        <motion.div
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8,delay:0.7}}
        viewport={{once:true}}
        className=' bg-gray-950  w-80 max-sm:w-full  h-95 hover:shadow-lg hover:shadow-[#ff6b35] rounded-xl flex flex-col items-center justify-center gap-y-5'>
        <img src={img1} className='w-20 border-4 border-[#ff6b35] rounded-full' />
        <p>⭐⭐⭐⭐</p>
        <p className='text-white px-4 text-center'>"PowerFit Gym has completely transformed my life. The trainers are amazing and the facilities are top-notch!"</p>
        <p className='font-Anton  text-[#ff6b35] text-2xl '>David Wilson</p>
      </motion.div>
        <motion.div
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8,delay:1.4}}
        viewport={{once:true}}
         className=' bg-gray-950  w-80  max-sm:w-full  h-95 hover:shadow-lg hover:shadow-[#ff6b35] rounded-xl flex flex-col items-center justify-center gap-y-5'>
        <img src={img2} className='w-25 h-25 border-4 border-[#ff6b35] rounded-full' />
        <p>⭐⭐⭐⭐</p>
        <p className='text-white px-4 text-center'>"The community here is incredible. I've made lifelong friends while achieving my fitness goals!"</p>
        <p className='font-Anton text-[#ff6b35] text-2xl '>Jessica Martinez</p>
      </motion.div>
        <motion.div
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.8,delay:2.1}}
        viewport={{once:true}}
        className=' bg-gray-950  w-80  max-sm:w-full h-95 hover:shadow-lg hover:shadow-[#ff6b35] rounded-xl flex flex-col items-center justify-center gap-y-5'>
        <img src={img3} className='w-30 border-4 border-[#ff6b35]  rounded-full' />
        <p>⭐⭐⭐⭐</p>
        <p className='text-white px-4 text-center'>"Best investment in my health! The variety of classes and equipment keeps me motivated every day."</p>
        <p className='font-Anton text-[#ff6b35] text-2xl '>Robert Taylor</p>
      </motion.div>
     </div>

    </div>
  )
}

export default Feedback
