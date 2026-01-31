"use client";

import { useEffect } from "react";

export function useParallaxScroll({
  scrollAnimateRef,
  scrollAnimateMainRef,
  headerRef,
  footerRef,
  wrapperRef,
  heightDocument,
  windowHeight,
  footerHeight,
}) {
  useEffect(() => {
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
  }, [
    scrollAnimateRef,
    scrollAnimateMainRef,
    headerRef,
    footerRef,
    wrapperRef,
    heightDocument,
    windowHeight,
    footerHeight,
  ]);
}
