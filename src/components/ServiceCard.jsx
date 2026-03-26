import React from 'react'
import {motion} from 'motion/react'

const ServiceCard = (props) => {
  
  return (
    <motion.div
     initial={{opacity:0,y:20}}
     whileInView={{opacity:1,y:0}}
     transition={{duration:0.5,delay:0.7}}
     viewport={{once:true}}
     className=' bg-gray-900 border border-gray-500 hover:border-[#ff6b35] hover:border-2 w-80 h-80 rounded-xl flex flex-col gap-y-5 p-10 items-center'>
        <img src={props.img} className='w-35'  />
        <h1 className='text-3xl text-[#ff6b35] font-Anton'>{props.title}</h1>
        <p className='text-white text-center'>{props.details}</p>
    </motion.div>
  )
}

export default ServiceCard
