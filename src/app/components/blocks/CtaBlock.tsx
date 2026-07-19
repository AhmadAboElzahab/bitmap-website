type CtaBlockProps = {
  title: string;
  text?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export default function CtaBlock({ title, text, buttonLabel = "Get in touch", buttonHref = "#" }: CtaBlockProps) {
  return (
    <div className="w-full py-10 sm:py-16 flex flex-col items-start gap-6 sm:gap-8">
      <h2 className="text-[clamp(2rem,7vw,5rem)] font-black leading-[1.02] tracking-tight uppercase max-w-[900px]">
        {title}
      </h2>
      {text && <p className="text-base sm:text-lg text-black/60 max-w-[560px]">{text}</p>}
      <a
        href={buttonHref}
        className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-primary text-white text-sm sm:text-base font-semibold uppercase tracking-wide rounded-full transition-transform hover:scale-105"
      >
        {buttonLabel}
        <span aria-hidden>&rarr;</span>
      </a>
    </div>
  );
}
