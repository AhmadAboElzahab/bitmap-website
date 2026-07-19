import ParallaxHeader from "./components/ParallaxHeader";
import ParallaxContent from "./components/ParallaxContent";
import ParallaxFooter from "./components/ParallaxFooter";
import type { Block, HeaderData } from "./types";

type ParallaxScrollProps = {
  header?: HeaderData;
  blocks?: Block[];
};

export default function ParallaxScroll({ header, blocks = [] }: ParallaxScrollProps) {
  return (
    <div>
      {/* margin must match the footer's height — it creates the scroll space that reveals it */}
      <div className="relative z-10 mb-[min(50rem,100svh)] shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        {header && <ParallaxHeader {...header} />}
        <ParallaxContent blocks={blocks} />
      </div>
      <ParallaxFooter />
    </div>
  );
}
