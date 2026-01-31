"use client";

import { useRef } from "react";
import { useParallaxConfig } from "./hooks/useParallaxConfig";
import { useParallaxScroll } from "./hooks/useParallaxScroll";
import ParallaxHeader from "./components/ParallaxHeader";
import ParallaxContent from "./components/ParallaxContent";
import ParallaxFooter from "./components/ParallaxFooter";

export default function ParallaxScroll() {
  const scrollAnimateRef = useRef(null);
  const scrollAnimateMainRef = useRef(null);
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const wrapperRef = useRef(null);

  const { windowHeight, footerHeight, contentHeight, heightDocument } =
    useParallaxConfig();

  useParallaxScroll({
    scrollAnimateRef,
    scrollAnimateMainRef,
    headerRef,
    footerRef,
    wrapperRef,
    heightDocument,
    windowHeight,
    footerHeight,
  });

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
          <ParallaxHeader headerRef={headerRef} />
          <ParallaxContent />

          <ParallaxFooter footerRef={footerRef} />
        </div>
      </div>
    </div>
  );
}
