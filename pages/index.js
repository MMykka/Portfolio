import React from "react"
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/contact";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";


export default function Home() {
  
  return (
    <div className="dark:bg-[#181823] bg-[#EFFFFB] duration-300" >
      <Navbar/>
      <Hero/>
      <About/>
      <Work/>
      <Contact/>
    </div>
  )
}
