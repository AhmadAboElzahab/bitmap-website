type TextBlockProps = {
  text: string;
};

export default function TextBlock({ text }: TextBlockProps) {
  return (
    <p className="max-w-[800px]">
      {text} Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Perspiciatis provident, ullam accusamus dignissimos similique mollitia,
      hic
    </p>
  );
}
