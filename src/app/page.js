"use client"
import 'lenis/dist/lenis.css'
import { ReactLenis, useLenis } from 'lenis/react'
import Navbar from "./Components/layout/Navbar";
import Hero from "./Components/Sections/Hero";
import Footer from "./Components/layout/Footer";
import About from "./Components/Sections/About";
import AnimatedLogo from "./Components/AnimatedLogo";
import Work from './Components/Sections/Work';
import Whyme from './Components/Sections/Whyme';
export default function Home() {
  const lenis = useLenis((lenis) => {})
  return (
   <div>
   <ReactLenis root />
   <AnimatedLogo/>
      <Navbar/>
      <Hero/>
      <About/>
      <Work/>
      <Whyme/>
      <Footer/>
  </div>
  );
}
