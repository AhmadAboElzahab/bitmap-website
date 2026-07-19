"use client";

import { useEffect, type RefObject } from "react";

type UseParallaxScrollParams = {
  scrollAnimateMainRef: RefObject<HTMLDivElement | null>;
  headerRef: RefObject<HTMLElement | null>;
  footerRef: RefObject<HTMLElement | null>;
  heightDocument: number;
  windowHeight: number;
  footerHeight: number;
};

export function useParallaxScroll({
  scrollAnimateMainRef,
  headerRef,
  footerRef,
  heightDocument,
  windowHeight,
  footerHeight,
}: UseParallaxScrollParams) {
  useEffect(() => {
    // Scroll footer function
    const scrollFooter = (scrollY: number) => {
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
  }, [heightDocument, windowHeight, footerHeight]);
}
