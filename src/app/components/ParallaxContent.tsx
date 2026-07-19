import { blockRegistry } from "./blocks";
import type { Block } from "../types";

type ParallaxContentProps = {
  blocks?: Block[];
};

export default function ParallaxContent({ blocks = [] }: ParallaxContentProps) {
  if (!blocks.length) return null;

  return (
    <section className="content relative z-10 bg-white flex flex-col gap-5 p-5 sm:gap-10 sm:p-10">
      {blocks.map((block, index) => {
        const Block = blockRegistry[block.type as keyof typeof blockRegistry];
        if (!Block) return null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return <Block key={block.id ?? index} {...(block as any)} />;
      })}
    </section>
  );
}
