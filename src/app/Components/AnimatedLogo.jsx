"use client";

import { useEffect, useState } from "react";

export default function AnimatedLogo() {
  const [scrolled, setScrolled] = useState( typeof window !== "undefined"
    ? window.scrollY > 10
    : false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDesktop]);

  return (
    <div
      className={`
        fixed z-[60]
        transition-all duration-700 ease-in-out
        
        ${
          isDesktop
            ? scrolled
              ? "top-6 left-5 w-[140px]"
            : "-top-7 left-5 w-[45vw]"
            : "top-4 left-5 w-[120px]"
        }
      `}
    >
      <img
        src="/Assets/images/logo.png"
        alt="Logo"
        className="w-full h-auto"
      />
    </div>
  );
}