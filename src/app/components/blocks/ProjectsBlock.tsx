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
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-black/5">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5" />
              )}
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
