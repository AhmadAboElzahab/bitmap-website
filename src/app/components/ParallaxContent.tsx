import { blockRegistry } from "./blocks";
import type { Block } from "../types";

type ParallaxContentProps = {
  blocks?: Block[];
};

export default function ParallaxContent({ blocks = [] }: ParallaxContentProps) {
  if (!blocks.length) return null;

  return (
    <section className="content h-500 min-h-500 bg-white relative z-[1] flex flex-col gap-10 p-10">
      {blocks.map((block, index) => {
        const Block = blockRegistry[block.type as keyof typeof blockRegistry];
        if (!Block) return null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return <Block key={block.id ?? index} {...(block as any)} />;
      })}
    </section>
  );
}
