import React from 'react'
import {motion} from 'motion/react'
const TrainerCard = ({key,image, title, role, exp }) => {
  const index={key};
  return (
    <motion.div
      initial={{opacity:0,y:20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.8,delay:0.2*index}}
      viewport={{once:true}}
     className="flex justify-center">
      <div className="bg-gray-950 w-72 h-[430px] rounded-2xl 
      hover:shadow-lg hover:shadow-[#ff6b35] 
      transition duration-300 
      flex flex-col overflow-hidden">

        <img 
          src={image} 
          className='h-80 object-contain hover:scale-105  rounded-2xl'
        />

        <div className="flex flex-col gap-y-2 text-white items-center p-4">
          <h1 className="font-Anton text-2xl">{title}</h1>
          <p className="font-poppins text-lg text-[#ff6b35]">{role}</p>
          <p className="font-poppins text-gray-400 text-sm">{exp}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default TrainerCard
