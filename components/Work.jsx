import React from "react"
import Link from "next/link";
import { projects } from "./constants";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "./utils/motion";
import { SectionWrapper } from "./hoc";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, github}) => {
  return (
  <motion.div 
  variants={fadeIn("up", "spring", index * 0.5, 1)}
  className="shadow-cardd dark:shadow-card">
    <div className="p-5 w-full mx-auto bg-[#73BBC9] dark:bg-[#C0EEF2] rounded-2xl flex flex-col lg:flex-row gap-5">
      <div className="w-full">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
      </div>
      <div className="mt-1 sm:mt-5 w-full p-5 flex flex-col justify-center">
            <h3 className="text-[#272727] dark:text-[#181823] font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-[#272727] dark:text-[#181823] font-bold text-[16px] sm:text-[20px]">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] text-[#272727] dark:text-[#181823]`}>
                #{tag.name}
              </p>
            ))}
          </div>
          <div className="w-full flex mt-5 gap-3">
            <motion.button
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
             onClick={() => window.open(source_code_link, "_blank")}  className="cursor-pointer bg-[#272727] dark:bg-[#181823] p-3 flex gap-2 rounded-2xl px-5 text-[#E9F8F9] font-bold "
             >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
                <h1 className="sm:block hidden" >Live Demo</h1>
            </motion.button >
            <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => window.open(github, "_blank")} className="cursor-pointer bg-[#272727] dark:bg-[#181823] p-3 flex gap-3 rounded-2xl px-5  text-[#E9F8F9] font-bold "
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="25" height="25" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <h1 className="sm:block hidden">Github</h1>
            </motion.button>
        </div>
      </div>
    </div>
  </motion.div>
  )
}

const Work = () => {

  return (
    <motion.section
    variants={staggerContainer()}
    initial='hidden'
    whileInView='show'
    viewport={{once: true, amount: 0.25}}
    className="max-w-7xl mx-auto sm:px-16 px-6">
      <motion.div variants={textVariant()}>
      <p className='sm:text-[20px] text-[14px] text-[#272727] dark:text-[#E9F8F9] font-bold opacity-80 uppercase tracking-wider'>My work</p>
      <h2 className=' text-[#73BBC9] dark:text-[#C0EEF2] italic font-black md:text-[70px] sm:text-[50px] xs:text-[40px] text-[30px]'>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
      <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-[#272727] dark:text-[#E9F8F9] text-[19px] opacity-80 max-w-3xl leading-[35px] font-bold">
          Following projects showcases my <span className="span-highlight">skills and experience </span>through
          <span className="span-highlight"> real-world </span> examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve <span className="span-highlight">complex problems</span>, work with <span className="span-highlight">different technologies</span>, and <span className="span-highlight">manage projects</span> effectively.
      </motion.p>
    </div>
      <div className="flex flex-col mt-20 gap-7 p-5 sm:p-20 sm:pb-5 lg:p-0">
        {projects.map((project, index) => (
            <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
            />
        ))}
      </div>
      <div className="text-right w-full mt-1 sm:mt-1 lg:mt-3">
        <h1 className="sm:text-[20px] text-[14px] text-[#272727] dark:text-[#E9F8F9] font-bold opacity-80 uppercase tracking-wider ">
          See More
        </h1>
      </div>
    </motion.section>
  )
}

export default SectionWrapper(Work, "work");