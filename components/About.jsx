import React from "react"
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import { services } from "./constants";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "./utils/motion";

import { SectionWrapper } from "./hoc";


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
    scale={1.15}
    className='sm:w-[240px] w-full'>
      <motion.div
          variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-cardd dark:shadow-card '
        >
          <div 
          
            className='dark:bg-[#181823] bg-[#D4ECDD] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
              <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
              <h3 className='text-[#272727] dark:text-white text-[20px] font-bold text-center'>{title}</h3>
              
          </div>
        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <motion.section
    variants={staggerContainer()}
    initial='hidden'
    whileInView='show'
    viewport={{once: true, amount: 0.25}}
    className="max-w-7xl mx-auto sm:px-16 px-6 sm:py-16 py-10">
      <motion.div
      variants={textVariant()}
      className="flex flex-col mx-auto w-full"
      >
        <p className="sm:text-[20px] text-[14px] text-[#272727] dark:text-[#E9F8F9] font-bold opacity-80 uppercase tracking-wider">Introduction</p>
        <h2 className=" text-[#73BBC9] dark:text-[#C0EEF2] italic font-black md:text-[70px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
      </motion.div>
      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-[#272727] dark:text-[#E9F8F9] text-[19px] opacity-80 max-w-3xl leading-[35px] font-bold'
      >
          I'm a skilled <span className="span-highlight">Front-End</span> developer with experience in JavaScript, and expertise in frameworks like <span className="span-highlight">React</span>, <span className="span-highlight">Next.js</span>, and <span className="span-highlight">Node.js</span>. I help awesome people to build ambitious yet accessible web projects, and specialize in designing modern websites for <span className="span-highlight">startups with TASTE</span>.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 justify-center mx-auto px-10 sm:px-0'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </motion.section>
  )
}

export default SectionWrapper(About, "about");