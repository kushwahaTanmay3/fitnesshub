import React from 'react'
import {motion} from 'motion/react'
const Head = (props) => {
  return (
    <motion.div
     initial={{opacity:0,y:20}}
     whileInView={{opacity:1,y:0}}
     transition={{duration:0.5,delay:0.7}}
     viewport={{once:true}}
     >
       <h1 className=' font-Anton text-white text-center max-sm:text-3xl text-4xl m-auto mt-10  pb-4 w-70 max-sm:w-55'>{props.first}
         <span className='text-[#ff6b35] ml-1'>{props.second}</span>
      </h1>
      <hr className="h-2 bg-[#ff6b35] border-none  w-35 mx-auto rounded-3xl" />
    </motion.div>
  )
}

export default Head
