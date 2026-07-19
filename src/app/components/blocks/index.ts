import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";
import ServicesBlock from "./ServicesBlock";
import StatsBlock from "./StatsBlock";
import AboutBlock from "./AboutBlock";
import ProjectsBlock from "./ProjectsBlock";
import CtaBlock from "./CtaBlock";
import ContactBlock from "./ContactBlock";

export const blockRegistry = {
  text: TextBlock,
  image: ImageBlock,
  services: ServicesBlock,
  stats: StatsBlock,
  about: AboutBlock,
  projects: ProjectsBlock,
  cta: CtaBlock,
  contact: ContactBlock,
};
