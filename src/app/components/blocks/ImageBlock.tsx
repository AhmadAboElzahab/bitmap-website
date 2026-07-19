import Image from "next/image";

type ImageBlockProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

export default function ImageBlock({
  src,
  alt = "",
  width = 1200,
  height = 800,
}: ImageBlockProps) {
  return (
    <div className="relative w-full max-w-[1200px]">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto"
      />
    </div>
  );
}
