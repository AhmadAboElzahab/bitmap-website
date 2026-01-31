export default function ParallaxFooter({
  footerRef,
  title = "Footer",
  children,
}) {
  return (
    <footer
      ref={footerRef}
      className="w-full h-[800px] bg-black -bottom-[800px] pl-[100px] fixed z-0 transition-all duration-[400ms] ease-[cubic-bezier(0,0,0,1)]"
    >
      <span className=" h-full p-0 m-0  text-center  text-[29.5vw] w-fit  text-white flex items-center font-black -tracking-wide justify-center">
        bitmap
      </span>
    </footer>
  );
}
