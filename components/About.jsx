import React from "react"
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import { services } from "./constants";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='sm:w-[250px] w-full'>
      <div
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card '
        >
          <div 
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='bg-[#181823] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
              <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
              <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
              
          </div>
        </div>
    </Tilt>
  )
}

const About = () => {
  return (
    <section className="max-w-7xl mx-auto sm:px-16 px-6 sm:py-16 py-10">
      <div className="flex flex-col mx-auto w-full">
        <p className="sm:text-[20px] text-[14px] text-[#E9F8F9] font-bold opacity-80 uppercase tracking-wider">Introduction</p>
        <h2 className="text-[#C0EEF2] italic font-black md:text-[70px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
      </div>
      <p className='mt-4 text-[#E9F8F9] text-[19px] opacity-80 max-w-3xl leading-[35px] font-bold'>
      I'm a skilled <span className="span-highlight">Front-End</span> developer with experience in JavaScript, and expertise in frameworks like <span className="span-highlight">React</span>, <span className="span-highlight">Next.js</span>, and <span className="span-highlight">Node.js</span>. I help awesome people to build ambitious yet accessible web projects, and specialize in designing modern websites for <span className="span-highlight">startups with TASTE</span>.
      </p>
      <div className='mt-20 flex flex-wrap gap-10 justify-center mx-auto px-10 sm:px-0'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </section>
  )
}

export default About;