import { About } from "@/components/layout/SectionsMain/About";
import { Education } from "@/components/layout/SectionsMain/Education";
import { Research } from "@/components/layout/SectionsMain/Research";
import { Teaching } from "@/components/layout/SectionsMain/Teaching";
// import { Software } from "@/components/layout/SectionsMain/Software";
import { ComponentType } from "react";

interface Section {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: ComponentType<any>;
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
