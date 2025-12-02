import { About } from "@/components/layout/SectionsMain/About";
import { Education } from "@/components/layout/SectionsMain/Education";
import { Research, ResearchProps } from "@/components/layout/SectionsMain/Research";
import { Teaching } from "@/components/layout/SectionsMain/Teaching";
// import { Software } from "@/components/layout/SectionsMain/Software";
import { ComponentType } from "react";

type SectionComponent = ComponentType | ComponentType<ResearchProps>;

interface Section {
  id: string;
  component: SectionComponent;
}

export const mainSections: Section[] = [
  {
    id: "about",
    component: About,
  },
  {
    id: "education",
    component: Education,
  },
  {
    id: "research",
    component: Research,
  },
  // {
  //   id: "software",
  //   component: Software,
  // },
  {
    id: "teaching",
    component: Teaching,
  },
];
