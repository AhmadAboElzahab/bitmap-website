import ParallaxScroll from "./ParallaxScroll";

type Block = {
  id: string;
  type: string;
  text?: string;
  [key: string]: unknown;
};

const header = { title: "Header" };

const blocks: Block[] = [
  {
    id: "intro",
    type: "text",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos et esse officiis minus optio qui adipisci necessitatibus culpa, voluptatibus asperiores eius consequatur, cum a quas distinctio ex doloribus voluptates repudiandae.",
  },
];

export default function Home() {
  return (
    <main>
      <ParallaxScroll header={header} blocks={blocks} />
    </main>
  );
}
