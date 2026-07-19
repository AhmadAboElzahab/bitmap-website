type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export default function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
  return (
    <div className="max-w-[900px]">
      {eyebrow && (
        <span className="block mb-3 text-xs sm:text-sm uppercase tracking-[0.2em] text-primary font-semibold">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-black leading-[1.05] tracking-tight uppercase">
        {title}
      </h2>
      {text && (
        <p className="mt-4 text-base sm:text-lg text-black/60 max-w-[650px]">{text}</p>
      )}
    </div>
  );
}
