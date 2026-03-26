import React from 'react'
import Head from './Head'
import TrainerCard from './TrainerCard'
import trainji1 from "../assets/trainerji1.png";
import trainji2 from "../assets/trainerji2.png";
import trainji3 from "../assets/trainerji3.png";
import trainji4 from "../assets/trainerji4.png";
import {motion} from 'motion/react'
const Trainer = () => {
  const trainersData = [
    {
      id: 1,
      name: "Harshit Fit",
      image: trainji1,
      role: "Strength ",
      experience: "5+ years experience"
    },
    {
      id: 2,
      name: "Kritarth Pandey",
      image: trainji2,
      role: "Yoga & Flexibility",
      experience: "1+ years experience"
    },
    {
      id: 3,
      name: "Shubham Jha",
      image: trainji3,
      role: "CrossFit & HIIT",
      experience: "2+ years experience"
    },
    {
      id: 4,
      name: "Monster Aarav",
      image: trainji4,
      role: "Bodybulding",
      experience: "2+ years experience"
    },
  ];
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      id='trainers' className='h-auto pb-10'>
      <Head first={'Expert'} second={'Trainer'} />

      <div className='mt-10 mx-20 max-sm:mx-10 grid max-sm:grid-rows-2 max-sm:grid-cols-2 max-sm:gap-5  max-sm:gap-y-3 grid-rows-1  grid-cols-4 '>
        {trainersData.map((trainer) => (
          <TrainerCard
            key={trainer.id}
            image={trainer.image}
            title={trainer.name}
            role={trainer.role}
            exp={trainer.experience}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Trainer