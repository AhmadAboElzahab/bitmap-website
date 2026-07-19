import type { RefObject } from "react";

type ParallaxHeaderProps = {
  headerRef: RefObject<HTMLElement | null>;
  title?: string;
  backgroundImage?: string;
};

export default function ParallaxHeader({
  headerRef,
  title = "Header",
  backgroundImage,
}: ParallaxHeaderProps) {
  return (
    <header
      ref={headerRef}
      className="w-full h-screen bg-red-400 bg-center bg-no-repeat bg-cover top-0 fixed -z-10 transition-all duration-[400ms] ease-[cubic-bezier(0,0,0,1)]"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      <h1 className="w-full h-full p-0 m-0 uppercase text-center text-[150px] text-white flex items-center justify-center">
        {title}
      </h1>
    </header>
  );
}
