import React from 'react'
import Head from './Head'
import Location from '../assets/Location.png'
import Phone from '../assets/Phone.png'
import Email from '../assets/Email.png'
import Form from './Form'
import {motion} from 'motion/react'
const Contactus = () => {
  const icons = [
  {
    name: "facebook",
    svg: (
      <svg fill="white" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2V9.8c0-2 1.2-3.2 3-3.2.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.3l-.4 2.9h-1.9v7A10 10 0 0 0 22 12" />
      </svg>
    ),
  },
  {
    name: "instagram",
    svg: (
      <svg fill="white" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" />
      </svg>
    ),
  },
  {
    name: "twitter",
    svg: (
      <svg fill="white" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M22 5.8c-.7.3-1.4.5-2.2.6.8-.5 1.3-1.2 1.6-2-.7.4-1.5.7-2.3.9A3.8 3.8 0 0 0 12 8.1c0 .3 0 .6.1.9A10.7 10.7 0 0 1 3 4.9a3.8 3.8 0 0 0 1.2 5c-.6 0-1.1-.2-1.6-.4v.1c0 1.9 1.4 3.6 3.3 4-.3.1-.7.2-1 .2-.2 0-.5 0-.7-.1.5 1.6 2 2.8 3.7 2.8A7.6 7.6 0 0 1 2 18.6 10.7 10.7 0 0 0 7.8 20c7 0 10.8-5.8 10.8-10.8v-.5c.7-.5 1.3-1.1 1.8-1.9z" />
      </svg>
    ),
  },
  {
    name: "youtube",
    svg: (
      <svg fill="white" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M23.5 6.2s-.2-1.6-.9-2.3c-.9-.9-2-1-2.5-1.1C16.8 2.5 12 2.5 12 2.5h0s-4.8 0-8.1.3c-.5 0-1.6.2-2.5 1.1-.7.7-.9 2.3-.9 2.3S0 8.1 0 10v2c0 1.9.5 3.8.5 3.8s.2 1.6.9 2.3c.9.9 2.2.9 2.8 1C6.8 19.5 12 19.5 12 19.5s4.8 0 8.1-.3c.5 0 1.6-.2 2.5-1.1.7-.7.9-2.3.9-2.3s.5-1.9.5-3.8v-2c0-1.9-.5-3.8-.5-3.8zM9.5 14.5v-5l5 2.5-5 2.5z" />
      </svg>
    ),
  },
];
  return (
    <div id='contact' className='bg-gray-950 py-10 '>
     <Head first={'Get In '} second={'Touch'}/>
     <div className='mt-10 mx-40 max-sm:mx-20 flex max-sm:flex-col  justify-around max-sm:items-center'>
      <motion.div
       initial={{opacity:0,x:-30}}
      whileInView={{opacity:1,x:0}}
      transition={{duration:0.6,delay:0.9}}
      viewport={{once:true}}
       className='flex flex-col gap-7 max-sm:items-start '> 
        <div > 
          <p className='text-[#ff6b35] font-Anton text-2xl mb-2 flex items-center'> <img src={Location} />Address</p>
           <p className='text-white font-poppins font-bold '>123 Fitness Street New York, NY 10001</p>
        </div>
        <div > 
          <p className='text-[#ff6b35] font-Anton text-2xl mb-2 flex items-center'> <img src={Phone} />Phone</p>
           <p className='text-white font-poppins font-bold'>(555) 123-4567</p>
        </div>

        <div > 
          <p className='text-[#ff6b35] font-Anton text-2xl mb-2 flex items-center'> <img src={Email} />Email</p>
           <p className='text-white font-poppins font-bold'>info@powerfitgym.com</p>
        </div>

        <div className='mt-5' > 
          <p className='text-[#ff6b35] font-Anton text-3xl mb-2 flex items-center'>Follow Us</p>
          
          
          <div className="flex gap-5">
           {icons.map((icon, index) => (
            <div
            key={index}
            className="bg-[#ff6b35] w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition duration-300"
           >
           {icon.svg}
           </div>
           ))}
          </div>
        </div>
      </motion.div>

      <Form/>

     </div>
    </div>
  )
}

export default Contactus
