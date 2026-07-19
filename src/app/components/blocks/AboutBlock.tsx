import SectionHeading from "./SectionHeading";

type AboutBlockProps = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
};

export default function AboutBlock({ eyebrow, title, paragraphs }: AboutBlockProps) {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="flex flex-col gap-4 sm:gap-6 justify-center">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-base sm:text-lg text-black/70 leading-relaxed max-w-[560px]">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}
