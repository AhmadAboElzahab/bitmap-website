type ParallaxFooterProps = {
  title?: string;
  children?: React.ReactNode;
};

export default function ParallaxFooter({}: ParallaxFooterProps) {
  return (
    <footer className="w-full h-[min(50rem,100svh)] bg-black fixed bottom-0 z-0 overflow-hidden">
      <span className="h-full -translate-x-1 p-0 m-0 text-center text-[29.5vw] w-full text-white flex items-center font-black tracking-tight justify-center whitespace-nowrap">
        bitmap
      </span>
    </footer>
  );
}
