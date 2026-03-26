import React from 'react'
import ServiceCard from './ServiceCard'
import personal from '../assets/Icons/personal.png'
import weight from '../assets/Icons/weight.png'
import cardio from '../assets/Icons/cardio.png'
import yoga from '../assets/Icons/yoga.png'
import kcal from '../assets/Icons/kcal.png'
import Head from './Head'
const Services = () => {

const servicesData = [
  {
    id: 1,
    title: "Personal Training",
    description:
      "One-on-one sessions with certified trainers to achieve your specific fitness goals with personalized workout plans.",
    image:personal,
  },
  {
    id: 2,
    title: "Weight Training",
    description:
      "Build strength and muscle mass with our comprehensive weight training equipment and expert guidance.",
    image:weight,
  },
  {
    id: 3,
    title: "Cardio Training",
    description:
      "Improve your cardiovascular health with our state-of-the-art cardio machines and group classes.",
    image:cardio,
  },
  {
    id: 4,
    title: "CrossFit",
    description:
      "High-intensity functional training that pushes your limits and builds overall fitness.",
    image:kcal,
  },
  {
    id: 5,
    title: "Yoga",
    description:
      "Find balance and flexibility with our yoga classes led by experienced instructors.",
    image:yoga,
  },
];
  return (
    <div id='services' className='bg-gray-950 pt-3 pb-10'>
      <Head first={'Our'} second={'Services'}/>
     <div className='mx-20 sm:mx-50 pt-10 grid sm:grid-rows-2 gap-10  grid-cols-1 sm:grid-cols-3 '>
      {
        servicesData.map((service)=>(
         <ServiceCard title={service.title} details={service.description} img={service.image} />
        ))
      }
     </div>
    </div>
  )
}

export default Services
