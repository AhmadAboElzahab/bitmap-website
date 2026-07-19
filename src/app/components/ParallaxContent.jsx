import { blockRegistry } from "./blocks";

export default function ParallaxContent({ blocks = [] }) {
  if (!blocks.length) return null;

  return (
    <section className="content h-500 min-h-500 bg-white relative z-[1] flex flex-col gap-10 p-10">
      {blocks.map((block, index) => {
        const Block = blockRegistry[block.type];
        if (!Block) return null;
        return <Block key={block.id ?? index} {...block} />;
      })}
    </section>
  );
}
