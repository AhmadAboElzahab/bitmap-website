type TextBlockProps = {
  text: string;
};

export default function TextBlock({ text }: TextBlockProps) {
  return <p className="max-w-175 text-base sm:text-lg text-black/70 leading-relaxed">{text}</p>;
}
