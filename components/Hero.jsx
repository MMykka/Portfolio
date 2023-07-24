import React from "react"
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-[900px] lg:h-screen mx-auto ">
      <div className="flex flex-col max-w-7xl mx-auto absolute top-[20%] inset-0 sm:px-16 px-6 sm:py-16 py-10 gap-5">
        <div className="flex lg:flex-row flex-col gap-10 lg:gap-20 justify-between items-center">
          <div className="flex-col">
            <h1 className="xl:text-[60px] text-[40px] text-[#C0EEF2] font-black italic mb-5 text-center lg:text-left">Front-End <span className="text-[#537FE7]">React</span><br/> Developer</h1>
            <p className="text-center lg:text-left xl:text-[20px] text-[16px] text-[#E9F8F9] font-bold leading-5 lg:leading-10 mb-5 opacity-80">Hi, I’m Michael. A passionate Front-End React Developer<br className="hidden lg:block"/> Based in Lebanon.</p>
            <div className="flex gap-3 mb-10 lg:mb-20 justify-center lg:justify-start">
              <img className="w-[40px] h-[40px] cursor-pointer" src="ln.png"/> 
              <img onClick={() => window.open('https://github.com/MMykka', "_blank")} className="w-[40px] h-[40px] rounded-full cursor-pointer" src="github.png" />
            </div>
            <div className="flex flex-col lg:flex-row w-full items-center ">
              <h1 className="mx-auto text-[20px] text-[#E9F8F9] text-center lg:text-left font-bold lg:pl-0 pr-5 p-3 lg:border-r-2 lg:border-b-0 border-b-2 lg:mr-10 mb-5 lg:mb-0">Dev Stack</h1>

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
          <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]">
            <img className="rounded-full w-[100%] shadow-card" src="mika.jpeg" alt="mika"/>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Hero;