type ParallaxHeaderProps = {
  title?: string;
  backgroundImage?: string;
};

export default function ParallaxHeader({
  title = "Header",
  backgroundImage,
}: ParallaxHeaderProps) {
  return (
    <header
      className="w-full  min-h-screen sticky top-0 z-0 bg-primary bg-no-repeat bg-cover bg-center"
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      <h1 className="w-full h-full p-0 m-0 uppercase text-center text-[clamp(2.5rem,10vw,9.5rem)] text-white flex items-center justify-center">
        {title}
      </h1>
    </header>
  );
}
