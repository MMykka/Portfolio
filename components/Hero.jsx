import React from "react"
import Link from "next/link";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full h-[900px] lg:h-screen mx-auto ">
      <div className="flex flex-col max-w-7xl mx-auto absolute top-[20%] inset-0 sm:px-16 px-6 sm:py-16 py-10 gap-5">
        <div className="flex lg:flex-row flex-col gap-10 lg:gap-20 justify-between items-center">
          <div className="flex-col">
            <h1 className="xl:text-[60px] text-[40px] dark:text-[#C0EEF2] text-[#272727] font-black italic mb-5 text-center lg:text-left">Front-End <span className="dark:text-[#537FE7] text-[#4F98CA]">React</span><br/> Developer</h1>
            <p className="text-center lg:text-left xl:text-[20px] text-[16px] text-[#272727] dark:text-[#E9F8F9] font-bold leading-5 lg:leading-10 mb-5 opacity-80">Hi, I’m Michael. A passionate Front-End React Developer<br className="hidden lg:block"/> Based in Lebanon.</p>
            <div className="flex gap-3 mb-10 lg:mb-20 justify-center lg:justify-start text-[#272727] dark:text-[#E9F8F9] ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              
            </div>
            <div className="flex flex-col lg:flex-row w-full items-center ">
              <h1 className="mx-auto text-[20px] text-[#272727] dark:text-[#E9F8F9] text-center lg:text-left font-bold lg:pl-0 pr-5 p-3 lg:border-r-2 lg:border-b-0 dark:border-[#E9F8F9] border-[#272727] border-b-2   lg:mr-10 mb-5 lg:mb-0">Dev Stack</h1>

              <div className="flex flex-wrap gap-3 md:gap-10 items-center ">
                <img className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px]" src="html.png" alt="html"/>
                <img className="w-[55px] h-[55px] xl:w-[70px] xl:h-[70px]" src="css.png" alt="html"/>
                <img className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px]" src="js.png" alt="html"/>
                <img className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px]" src="react-2.svg" alt="html"/>
                <img className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] bg-white rounded-full" src="nextjs.svg" alt="html"/>
                <img className="w-[40px] h-[40px]" src="tailwind.svg" alt="html"/>
            </div>
          </div>
          </div>
          <motion.div
          animate={{
            y: [0, 20, 0]
          }}
          transition={{
            duration:3.5,
            repeat: Infinity,
            repeatType: 'loop'
          }}

          className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]"
          >
            <img className="rounded-full w-[100%] dark:shadow-card shadow-cardd" src="mika.jpeg" alt="mika"/>
          </motion.div>
        </div>


      </div>
    </section>
  )
}

export default Hero;