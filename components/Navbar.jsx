import React, { useState } from "react"
import { navLinks } from "./constants";
import Link from "next/link";


const Navbar = () => {
  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);


  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 sm:px-16 px-6">
      <div className="w-full flex justify-between items-center max-w-[1440px] mx-auto border-b-2 pb-4">
        <Link 
        href='/' 
        className="text-[34px] text-[#C0EEF2] font-extrabold italic sm:ml-[4rem] ml-0"
        onClick={() => {
          setActive("");
          window.scrollTo(0,0);
        }} 
        >
          Myka
        </Link>
        <ul className='list-none hidden lg:flex flex-row mr-[4rem] gap-20'>
          {navLinks.map((link) => (
            <li 
            key={link.id}
            className={`${
              active === link.title
              ? "text-[#537FE7]"
              :"text-[#E9F8F9]"
            } hover:text-[#537FE7] text-[21px] font-medium cursor-pointer italic font-semibold `}
            onClick={() => setActive(link.title)}
            >
              <a>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='lg:hidden flex flex-1 justify-end items-center pr-2  sm:mr-[4rem] mr-0'>
          <img 
           src={toggle ? 'close.svg' : 'menu.svg'}
           alt='menu'
           className='w-[28px] h-[28px] object-contain cursor-pointer'
           onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? "hidden" : "flex"} p-6 absolute top-0 right-0 min-w-[400px] h-screen bg-[#000] z-10 flex justify-center items-center`}>
            <img 
                src={toggle ? 'close.svg' : 'menu.svg'}
                alt='menu'
                className='w-[28px] h-[28px] object-contain cursor-pointer absolute top-5 right-7'
                onClick={() => setToggle(!toggle)}
                />
                <ul className='list-none flex justify-end items-start flex-col gap-20'>
                  
                {navLinks.map((Link) =>(
                  <li
                  key={Link.id}
                  className={`${
                    active === Link.title
                    ? "text-[#537FE7]"
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
    </nav>
  )
}

export default Navbar;
