import Image from "next/image";

export default function ImageBlock({ src, alt = "", width = 1200, height = 800 }) {
  return (
    <div className="relative w-full max-w-[1200px]">
      <Image src={src} alt={alt} width={width} height={height} className="w-full h-auto" />
    </div>
  );
}
