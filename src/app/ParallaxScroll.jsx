"use client";

import { useEffect, useRef } from "react";

export default function ParallaxScroll() {
  const scrollAnimateRef = useRef(null);
  const scrollAnimateMainRef = useRef(null);
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const footerHeight = 300;
    const contentHeight = 1000;
    const heightDocument = windowHeight + contentHeight + footerHeight - 20;

    // Set initial heights
    if (scrollAnimateRef.current && scrollAnimateMainRef.current) {
      scrollAnimateRef.current.style.height = `${heightDocument}px`;
      scrollAnimateMainRef.current.style.height = `${heightDocument}px`;
    }

    if (headerRef.current) {
      headerRef.current.style.height = `${windowHeight}px`;
    }

    if (wrapperRef.current) {
      wrapperRef.current.style.marginTop = `${windowHeight}px`;
    }

    // Scroll footer function
    const scrollFooter = (scrollY) => {
      if (footerRef.current) {
        const scrollThreshold = heightDocument - windowHeight - footerHeight;
        if (scrollY >= scrollThreshold) {
          footerRef.current.style.bottom = "0px";
        } else {
          footerRef.current.style.bottom = `-${footerHeight}px`;
        }
      }
    };

    // Initial footer position
    scrollFooter(window.scrollY);

    // Scroll handler
    const handleScroll = () => {
      const scroll = window.scrollY;

      // Move main container
      if (scrollAnimateMainRef.current) {
        scrollAnimateMainRef.current.style.top = `-${scroll}px`;
      }

      // Header background parallax
      if (headerRef.current) {
        const bgPosition = 50 - (scroll * 100) / heightDocument;
        headerRef.current.style.backgroundPositionY = `${bgPosition}%`;
      }

      // Footer scroll
      scrollFooter(scroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={scrollAnimateRef} id="scroll-animate" className="overflow-hidden">
      <div
        ref={scrollAnimateMainRef}
        id="scroll-animate-main"
        className="w-full left-0 fixed transition-all duration-[400ms] ease-[cubic-bezier(0,0,0,1)]"
      >
        <div
          ref={wrapperRef}
          className="wrapper-parallax mb-[300px] shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
          <header
            ref={headerRef}
            className="w-full h-full bg-center bg-no-repeat bg-cover top-0 fixed -z-10 transition-all duration-[400ms] ease-[cubic-bezier(0,0,0,1)]"
            style={{
              backgroundImage:
                "url(https://raw.githubusercontent.com/hudsonmarinho/header-and-footer-parallax-effect/master/assets/images/bg-header.jpg)",
              backgroundPositionY: "50%",
            }}
          >
            <h1 className="w-full h-full p-0 m-0 uppercase text-center font-['Helvetica'] text-[150px] text-white flex items-center justify-center">
              Header
            </h1>
          </header>

          <section className="content h-[1000px] min-h-[1000px] bg-[#ededed] relative z-[1]">
            <h1 className="w-full h-full p-0 m-0 uppercase text-center font-['Helvetica'] text-[150px] text-[#999] flex items-center justify-center">
              Content
            </h1>
          </section>

          <footer
            ref={footerRef}
            className="w-full h-[300px] bg-gray-500 -bottom-[300px] fixed z-0 transition-all duration-[400ms] ease-[cubic-bezier(0,0,0,1)]"
          >
            <h1 className="w-full h-full p-0 m-0 uppercase text-center font-['Helvetica'] text-[150px] text-white flex items-center justify-center">
              Footer
            </h1>
          </footer>
        </div>
      </div>
    </div>
  );
}
