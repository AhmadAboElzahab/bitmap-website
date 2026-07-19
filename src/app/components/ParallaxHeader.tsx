type ParallaxHeaderProps = {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  backgroundImage?: string;
};

export default function ParallaxHeader({
  title = "Header",
  subtitle,
  eyebrow = "Dubai, UAE",
  backgroundImage,
}: ParallaxHeaderProps) {
  return (
    <header
      className="relative w-full min-h-screen sticky top-0 z-0 overflow-hidden bg-primary bg-no-repeat bg-cover bg-center"
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      {/* pure-CSS grid pattern, no image asset */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 45%, transparent 0%, var(--color-primary) 80%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.5) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-6 gap-5 sm:gap-7">
        <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-white/60 font-semibold">
          {eyebrow}
        </span>
        <h1 className="p-0 m-0 uppercase text-[clamp(2.75rem,11vw,10rem)] leading-[0.95] font-black text-white tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-[600px] text-sm sm:text-lg text-white/70 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em]">Scroll</span>
        <span className="w-px h-8 bg-white/30 animate-pulse" aria-hidden />
      </div>
    </header>
  );
}
