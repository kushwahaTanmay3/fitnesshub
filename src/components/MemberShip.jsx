import React from 'react'
import Head from './Head'
import {motion} from 'motion/react'
const MemberShip = () => {
  return (
    <div id='pricing' className='bg-gray-950 pt-2 pb-15'>
    <Head first={'MemberShip'} second={'Plans'}/>
    <motion.div
     initial={{opacity:0,y:20}}
     whileInView={{opacity:1,y:0}}
     transition={{duration:0.5,delay:0.7}}
     viewport={{once:true}}
     className='mt-10 mx-50 max-sm:mx-10 flex max-sm:flex-col  max-sm:items-center max-sm:gap-y-10 justify-around'> 
        {/* basic plan */}
        <div className=' max-sm:w-full bg-gray-900 text-white hover:shadow-lg hover:shadow-[#ff6b35] w-80 h-135 rounded-2xl py-10 px-5 flex flex-col items-center justify-around transition duration-300 hover:-translate-y-2 '>
            <div className='font-Anton text-3xl'>Basic plan</div>
            <div>
                <span className='align-top '>₹</span>
                <span className=' text-5xl font-bold text-[#ff6b35]'>300</span>
                <span className='text-2xl'>/month</span>
            </div>
            <div className=' max-sm:w-full flex flex-col gap-y-6'>
                <p className='border-b border-gray-500 pb-1'>✅Access to gym equipment</p>
                <p className='border-b border-gray-500 pb-1'>✅2 group classes per month</p>
                <p className='border-b border-gray-500 pb-1'>❌Free fitness assessment</p>
                <p className='border-b border-gray-500 pb-1'>❌Personal training</p>
            </div>
            <a className='mt-5 border-2 border-[#ff6b35] hover:bg-[#ff6b35] hover:text-white transition duration-300 hover:-translate-y-2  font-bold text-xl text-[#ff6b35] rounded-4xl px-8 py-4' href="#contact">Join Now</a>
        </div>

        {/* Standard Plan */}
        <div className='max-sm:w-full bg-gray-900 border-2 border-[#ff6b35] text-white hover:shadow-lg hover:shadow-[#ff6b35] w-80 h-135 rounded-2xl py-10 px-5 flex flex-col items-center justify-around transition duration-300 hover:-translate-y-4 '>
            <div className='font-Anton text-3xl'> Standard plan</div>
            <div>
                <span className='align-top '>₹</span>
                <span className=' text-5xl font-bold text-[#ff6b35]'>500</span>
                <span className='text-2xl'>/month</span>
            </div>
            <div className='max-sm:w-full flex flex-col gap-y-6'>
                <p className='border-b border-gray-500 pb-1'>✅Access to gym equipment</p>
                <p className='border-b border-gray-500 pb-1'>✅Unlimited group classes</p>
                <p className='border-b border-gray-500 pb-1'>✅Free fitness assessment</p>
                <p className='border-b border-gray-500 pb-1'>❌Personal training</p>
            </div>
            <a className='mt-5 border-2 border-[#ff6b35] hover:bg-[#ff6b35] hover:text-white transition duration-300 hover:-translate-y-2  font-bold text-xl text-[#ff6b35] rounded-4xl px-8 py-4' href="#contact">Join Now</a>
        </div>
        {/* Premium Plan */}
        <div className='max-sm:w-full bg-gray-900 text-white hover:shadow-lg hover:shadow-[#ff6b35] w-80 h-135 rounded-2xl py-10 px-5 flex flex-col items-center justify-around transition duration-300 hover:-translate-y-2'>
            <div className='font-Anton text-3xl'> Premium plan</div>
            <div>
                <span className='align-top '>₹</span>
                <span className=' text-5xl font-bold text-[#ff6b35]'>700</span>
                <span className='text-2xl'>/month</span>
            </div>
            <div className='max-sm:w-full flex flex-col gap-y-6'>
                <p className='border-b border-gray-500 pb-1'>✅Access to gym equipment</p>
                <p className='border-b border-gray-500 pb-1'>✅2 group classes per month</p>
                <p className='border-b border-gray-500 pb-1'>✅Free fitness assessment</p>
                <p className='border-b border-gray-500 pb-1'>✅8 personal training sessions</p>
            </div>
            <a className='mt-5 border-2 border-[#ff6b35] hover:bg-[#ff6b35] hover:text-white transition duration-300 hover:-translate-y-2  font-bold text-xl text-[#ff6b35] rounded-4xl px-8 py-4' href="#contact">Join Now</a>
        </div>

    </motion.div>
    </div>
  )
}

export default MemberShip
