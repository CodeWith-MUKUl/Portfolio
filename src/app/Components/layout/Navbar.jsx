"use client"
import { useState, useEffect } from "react";

import { RiArrowRightUpLine } from "@remixicon/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const current = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setTime(current);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    "Home",
    "Works",
    "About",
    "Projects",
    "Contact",
  ];

  return (
    <>
      <header className="navbar fixed top-0 left-0 z-50 w-full">
        <div className="max-w-[1800px] mx-auto px-5 md:px-10 py-5">
          <div className="flex items-center justify-between">
            
            <div> 
                         
            </div>

            <div className="flex items-center gap-3 md:gap-10">

            <div className="hidden md:block">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <p className="text-white font-medium text-md">
                    Available for project
                  </p>
                </div>

                <p className="text-gray-300 text-xs mt-1 ml-4 uppercase">
                  Early july 2026
                </p>
              </div>
              
              <div className="hidden md:block text-right">
                <h4 className="text-white font-semibold text-md">
                  {time}
                </h4>

                <p className="text-gray-300 text-xs">
                  (GMT+5:30)
                </p>
              </div>

              <a
                href="#contact"
                className="hidden md:flex items-center justify-center px-3 py-2 border border-white rounded-full text-white hover:bg-white/0 backdrop-blur-md hover:text-black transition-all duration-300"
              >
                LET'S TALK
              </a>

              <button
                onClick={() => setMenuOpen(true)}
                className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:border-white transition-all"
              >
                <Menu size={25} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 right-0 z-[100] h-screen w-full md:w-[60%] bg-black border-l border-zinc-800 transition-all duration-500 ease-in-out px-8 lg:w-[40%] ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-orange-500"></span>

            <p className="uppercase tracking-widest text-gray-400 text-sm">
              Menu
            </p>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-white"
          >
            <X size={30} />
          </button>
        </div>

        <div className="mt-1">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-between border-b border-zinc-800 px-3 py-5 md:py-4 xl:py-6"
            >
              <div className="flex items-center">
                <h2 className="text-[1.5rem] md:text-[2.2rem] font-bold uppercase text-[#d9d9d9] leading-none tracking-tighter xl:text-[2.5rem]">
                  {link}
                </h2>

                {index === 0 && (
                  <span className="w-2 h-2 bg-orange-500 ml-4"></span>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="absolute bottom-6 left-8 right-8 lg:bottom-4">
         <div>
           <p className="text-zinc-500 uppercase text-sm mb-3">
            (EMAIL)
          </p>

          <a
            href="mailto:mukul@example.com"
            className="text-orange-500 text-xl md:text-xl font-bold xl:text-2xl"
          >
            hello.mukulsaini@gmail.com
          </a>
         </div>
         <div className="mt-4">
           <p className="text-zinc-500 uppercase text-sm mb-3">
            (SOCILAS)
          </p>
          <div className="flex gap-10 ">
            
          <a
            href="mailto:mukul@example.com"
            className="text-white text-xl md:text-xl font-bold flex items-end justify-center gap-3 xl:text-2xl"
          >
            Instagram <span><RiArrowRightUpLine /></span>
          </a>
          
          <a
            href="mailto:mukul@example.com"
            className="text-white text-xl md:text-xl font-bold flex items-end justify-center gap-3"
          >
            Linkedin <span><RiArrowRightUpLine /></span>
          </a>
          </div>
         </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 z-[90] transition-all duration-500 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />
    </>
  );
} 
