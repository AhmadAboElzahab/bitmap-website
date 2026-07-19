"use client";

import { useRef } from "react";
import { useParallaxConfig } from "./hooks/useParallaxConfig";
import { useParallaxScroll } from "./hooks/useParallaxScroll";
import ParallaxHeader from "./components/ParallaxHeader";
import ParallaxContent from "./components/ParallaxContent";
import ParallaxFooter from "./components/ParallaxFooter";
import type { Block, HeaderData } from "./types";

type ParallaxScrollProps = {
  header?: HeaderData;
  blocks?: Block[];
};

export default function ParallaxScroll({ header, blocks = [] }: ParallaxScrollProps) {
  const scrollAnimateMainRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  const { windowHeight, footerHeight, heightDocument } = useParallaxConfig();

  useParallaxScroll({
    scrollAnimateMainRef,
    headerRef,
    footerRef,
    heightDocument,
    windowHeight,
    footerHeight,
  });

  return (
    <div id="scroll-animate" className="overflow-hidden h-[calc(100vh+2780px)]">
      <div
        ref={scrollAnimateMainRef}
        id="scroll-animate-main"
        className="w-full left-0 fixed h-[calc(100vh+2780px)] transition-all duration-[400ms] ease-[cubic-bezier(0,0,0,1)]"
      >
        <div className="wrapper-parallax pt-[100vh] mb-[300px] shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          {header && <ParallaxHeader headerRef={headerRef} {...header} />}
          <ParallaxContent blocks={blocks} />

          <ParallaxFooter footerRef={footerRef} />
        </div>
      </div>
    </div>
  );
}
