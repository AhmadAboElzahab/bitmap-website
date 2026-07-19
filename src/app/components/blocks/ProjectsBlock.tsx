import Image from "next/image";
import SectionHeading from "./SectionHeading";

type Project = {
  name: string;
  category: string;
  year: string;
  image?: string;
};

type ProjectsBlockProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  projects: Project[];
};

export default function ProjectsBlock({ eyebrow, title, text, projects }: ProjectsBlockProps) {
  return (
    <div className="w-full">
      <SectionHeading eyebrow={eyebrow} title={title} text={text} />
      <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project) => (
          <div key={project.name} className="group cursor-pointer">
            <div className="relative w-full aspect-4/3 overflow-hidden rounded-2xl bg-primary">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse 90% 90% at 20% 20%, rgba(255,255,255,0.18), transparent 55%), radial-gradient(ellipse 80% 80% at 90% 100%, rgba(0,0,0,0.4), transparent 60%)",
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                      backgroundSize: "48px 48px",
                    }}
                  />
                  <span className="absolute bottom-5 left-6 text-white/90 text-[clamp(1.5rem,3vw,2.5rem)] font-black tracking-tight uppercase">
                    {project.name}
                  </span>
                </div>
              )}
              <span
                className="absolute top-5 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                aria-hidden
              >
                &#8599;
              </span>
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <h3 className="text-lg sm:text-2xl font-bold tracking-tight">{project.name}</h3>
              <span className="text-xs sm:text-sm text-black/40 whitespace-nowrap">{project.year}</span>
            </div>
            <span className="text-xs sm:text-sm uppercase tracking-wide text-black/50">
              {project.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
