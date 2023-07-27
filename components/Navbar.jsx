import React, { useEffect, useState } from "react"
import { navLinks, options } from "./constants";
import Link from "next/link";

import { motion } from "framer-motion";
import { fadeIn, navVariants, slideIn, staggerContainer } from "./utils/motion";


const Navbar = () => {
  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState('system');


  if (typeof window !== "undefined") {
    const element = document.documentElement;

    useEffect(() => {
      switch (theme) {
        case 'dark':
          element.classList.add('dark');
          localStorage.setItem('theme', 'dark');
          break;
        case 'light':
          element.classList.remove('dark');
          localStorage.setItem('theme', 'light');
          break;
      
        default:
          localStorage.removeItem('theme');
          break;
      }
    }, [theme])
  }

 
  


  return (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="w-full flex items-center py-5 fixed top-0 z-20 sm:px-16 px-6">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto dark:border-b-2 border-b-2 border-[#272727] pb-4 duration-300">
        <Link 
        href='/' 
        className="text-[34px] dark:text-[#C0EEF2] text-[#73BBC9]  font-extrabold italic sm:ml-[4rem] ml-0 duration-300"
        onClick={() => {
          setActive("");
          window.scrollTo(0,0);
        }} 
        >
          Myka
        </Link>
        <div className="hidden lg:block duration-100 text-[#272727] dark:text-[#E9F8F9]">
              {options?.map(opt=>(
                <button 
                key={opt.text} 
                className={`w-10 h-10 rounded-full text-[19px] duration-300 ${theme === opt.text && 'dark:text-[#C0EEF2] text-[#73BBC9] '}`}
                onClick={()=> setTheme(opt.text)}
                >
                <ion-icon name={opt.icon}></ion-icon>
              </button>
              ))}
            </div>
        
        <ul className='list-none hidden lg:flex flex-row mr-[4rem] gap-10'>
          {navLinks.map((link) => (
            <li 
            key={link.id}
            className={`${
              active === link.title
              ? " dark:text-[#537FE7] text-[#73BBC9] "
              :" dark:text-[#E9F8F9] text-[#272727]"
            } hover:text-[#73BBC9] dark:hover:text-[#537FE7] text-[19px] font-medium cursor-pointer italic font-semibold `}
            onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>

          ))}
        </ul>

            {/* mobile nav */}

        <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 0.25}}
        className='lg:hidden flex flex-1 justify-end items-center pr-2  sm:mr-[4rem] mr-0 text-[#111]'>
          <div 
          className={`w-[28px] h-[28px]  object-contain cursor-pointer duration-300 dark:text-[#C0EEF2] text-[#73BBC9] ${toggle && 'hidden'}`}
           onClick={() => setToggle(!toggle)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
          </svg>
          </div>
          <motion.div 
           variants={slideIn('left', 'spring', 0.1 , 0.5)}
           initial="hidden"
           whileInView="show"
          className={`${!toggle ? "hidden" : "flex"} p-6 absolute top-0 right-0 w-full h-screen bg-[#272727] dark:bg-[#181823] z-10 flex justify-center items-center opacity-90`}
          >
            {/* theme color */}
          <div className="absolute lg:hidden top-5 left-0 duration-100 text-white opacity-100 dark:text-[#E9F8F9]">
              {options?.map(opt=>(
                <button 
                key={opt.text} 
                className={`w-10 h-10 rounded-full text-[30px] opacity-100 mx-2 duration-300 ${theme === opt.text && 'opacity-100 dark:text-[#C0EEF2] text-[#73BBC9] '}`}
                onClick={()=> setTheme(opt.text)}
                >
                <ion-icon name={opt.icon}></ion-icon>
              </button>
              ))}
            </div>
                {/* ======= */}
                {/* inside mobile nav bar */}
            <img 
                src={toggle ? 'close.svg' : 'menu.svg'}
                alt='menu'
                className='w-[28px] h-[28px] object-contain cursor-pointer absolute top-5 right-7 '
                onClick={() => setToggle(!toggle)}
                />
                <ul className='list-none flex justify-end items-start flex-col gap-20'>
                  
                {navLinks.map((Link, index) =>(
                  <motion.li
                  variants={fadeIn('right', 'spring', 0.3 * index, 0.75)}
                  initial="hidden"
                  whileInView="show"
                  key={Link.id}
                  className={`${
                    active === Link.title
                    ? "dark:text-[#537FE7]"
                    :"text-[#E9F8F9]"
                  } font-poppins font-medium cursor-pointer text-[36px]`}
                  onClick={() => {
                    setActive(Link.title);
                    setToggle(!toggle);
                  }}
                  >
                    <a href={`#${Link.id}`}>{Link.title}</a>
                  </motion.li>
                ))}
              </ul>
              </motion.div>
        </motion.div>

      </div>
    </motion.nav>
  )
}

export default Navbar;
