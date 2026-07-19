type CtaBlockProps = {
  title: string;
  text?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export default function CtaBlock({ title, text, buttonLabel = "Get in touch", buttonHref = "#" }: CtaBlockProps) {
  return (
    <div className="relative w-full overflow-hidden rounded-3xl bg-primary text-white p-8 py-16 sm:p-20 sm:py-28 flex flex-col items-start gap-6 sm:gap-8">
      <div
        className="absolute inset-0 opacity-30"
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
            "radial-gradient(ellipse 70% 90% at 80% 10%, rgba(255,255,255,0.08), transparent 60%)",
        }}
        aria-hidden
      />
      <h2 className="relative text-[clamp(2rem,6vw,4.5rem)] font-black leading-[1.02] tracking-tight uppercase max-w-225">
        {title}
      </h2>
      {text && <p className="relative text-base sm:text-lg text-white/70 max-w-140">{text}</p>}
      <a
        href={buttonHref}
        className="relative inline-flex items-center gap-3 px-7 py-4 sm:px-9 sm:py-5 bg-white text-primary text-sm sm:text-base font-bold uppercase tracking-wide rounded-full transition-transform duration-300 hover:scale-105"
      >
        {buttonLabel}
        <span aria-hidden>&rarr;</span>
      </a>
    </div>
  );
}
