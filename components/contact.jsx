import React from "react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "./utils/motion"

export default function Contact() {
  return (
    <motion.section 
    variants={staggerContainer()}
    initial='hidden'
    whileInView='show'
    viewport={{once: true, amount: 0.25}}
    className="max-w-7xl h-screen mx-auto sm:px-16 px-6 sm:py-16 py-10 flex items-center"
    >
       <motion.div
       variants={fadeIn("up", "spring",0.5, 3.5)}
       className="flex flex-col mx-auto w-full flex items-center ">
        <p className="sm:text-[20px] text-[14px] text-[#E9F8F9] font-bold opacity-80 uppercase tracking-wider">What's next?</p>
        <h2 className="text-[#C0EEF2] italic font-black md:text-[70px] sm:text-[50px] xs:text-[40px] text-[30px]">Get In Touch</h2>
        <p className="mt-4 text-[#E9F8F9] text-[15px] sm:text-[19px] opacity-80 max-w-3xl leading-[35px] font-bold text-center">I'm Currently open to new opportunities and eager to take on exciting projects. Let's work together to build remarkable web applications.</p>
        <motion.button
        variants={fadeIn("up", "spring",0.5, 6)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="p-5 px-10 bg-[#C0EEF2] rounded-2xl mt-10 text-[#181823] font-bold text-[16px] sm:text-[20px]"
        >
          Say hello!
        </motion.button>
        <div>

        </div>
      </motion.div>
    </motion.section>
  )
}