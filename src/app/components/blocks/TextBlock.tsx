type TextBlockProps = {
  text: string;
};

export default function TextBlock({ text }: TextBlockProps) {
  return <p className="max-w-[800px]">{text}</p>;
}
