import { blockRegistry } from "./blocks";
import type { Block } from "../types";

type ParallaxContentProps = {
  blocks?: Block[];
};

export default function ParallaxContent({ blocks = [] }: ParallaxContentProps) {
  if (!blocks.length) return null;

  return (
    <section className="content relative z-10 bg-white flex flex-col gap-20 sm:gap-36 px-5 py-16 sm:px-10 sm:py-28 *:mx-auto *:w-full *:max-w-350">
      {blocks.map((block, index) => {
        const Block = blockRegistry[block.type as keyof typeof blockRegistry];
        if (!Block) return null;
        return (
          <div key={block.id ?? index} className="reveal-up">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <Block {...(block as any)} />
          </div>
        );
      })}
    </section>
  );
}
