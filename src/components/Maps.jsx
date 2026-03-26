import React from 'react'
import {motion} from 'motion/react'
const Maps = () => {
  return (
    <motion.div
     initial={{opacity:0,y:20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.6,delay:0.7}}
      viewport={{once:true}}
     className='pb-10 bg-gray-950 px-30 max-sm:px-10 '>
      <div className="  w-full h-[400px] rounded-xl overflow-hidden ">
  <iframe
    src="https://www.google.com/maps?q=gym&output=embed"
    className="w-full h-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Gym Location"
  ></iframe>
</div>
    </motion.div>
  )
}

export default Maps
