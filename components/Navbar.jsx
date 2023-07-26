import React, { useEffect, useState } from "react"
import { navLinks, options } from "./constants";
import Link from "next/link";

import { motion } from "framer-motion";
import { navVariants } from "./utils/motion";


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

      

        <div className='lg:hidden flex flex-1 justify-end items-center pr-2  sm:mr-[4rem] mr-0 text-[#111 '>
          <img 
           src={toggle ? 'close.svg' : 'menu.svg'}
           alt='menu'
           className='w-[28px] h-[28px]  object-contain cursor-pointer'
           onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? "hidden" : "flex"} p-6 absolute top-0 right-0 min-w-[400px] h-screen bg-[#000] z-10 flex justify-center items-center`}>
          <div className="absolute lg:hidden top-5 left-0 duration-100 text-[#272727] dark:text-[#E9F8F9]">
              {options?.map(opt=>(
                <button 
                key={opt.text} 
                className={`w-10 h-10 rounded-full text-[30px] mx-2 duration-300 ${theme === opt.text && 'dark:text-[#C0EEF2] text-[#73BBC9] '}`}
                onClick={()=> setTheme(opt.text)}
                >
                <ion-icon name={opt.icon}></ion-icon>
              </button>
              ))}
            </div>
            <img 
                src={toggle ? 'close.svg' : 'menu.svg'}
                alt='menu'
                className='w-[28px] h-[28px] object-contain cursor-pointer absolute top-5 right-7 '
                onClick={() => setToggle(!toggle)}
                />
                <ul className='list-none flex justify-end items-start flex-col gap-20'>
                  
                {navLinks.map((Link) =>(
                  <li
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
                  </li>
                ))}
              </ul>
              </div>
        </div>

      </div>
    </motion.nav>
  )
}

export default Navbar;
