import SectionHeading from "./SectionHeading";

type Service = {
  number: string;
  title: string;
  text: string;
};

type ServicesBlockProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  services: Service[];
};

export default function ServicesBlock({ eyebrow, title, text, services }: ServicesBlockProps) {
  return (
    <div className="w-full">
      <SectionHeading eyebrow={eyebrow} title={title} text={text} />
      <div className="mt-10 sm:mt-14 border-t border-black/10">
        {services.map((service) => (
          <div
            key={service.number}
            className="group grid grid-cols-[3rem_1fr] sm:grid-cols-[6rem_1fr_1fr] items-baseline gap-x-6 gap-y-2 py-6 sm:py-8 border-b border-black/10 transition-colors hover:bg-primary/[0.03]"
          >
            <span className="text-sm sm:text-base text-black/40 font-mono">{service.number}</span>
            <h3 className="text-xl sm:text-3xl font-bold tracking-tight">{service.title}</h3>
            <p className="col-span-2 sm:col-span-1 text-sm sm:text-base text-black/60 max-w-[420px]">
              {service.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
