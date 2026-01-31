export default function ParallaxHeader({
  headerRef,
  title = "Header",
  backgroundImage,
}) {
  return (
    <header
      ref={headerRef}
      className="w-full h-full bg-red-400 bg-center bg-no-repeat bg-cover top-0 fixed -z-10 transition-all duration-[400ms] ease-[cubic-bezier(0,0,0,1)]"
    >
      <h1 className="w-full h-full p-0 m-0 uppercase text-center font-['Helvetica'] text-[150px] text-white flex items-center justify-center">
        {title}
      </h1>
    </header>
  );
}
