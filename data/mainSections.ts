import { About } from "@/components/layout/SectionsMain/About";
import { Education } from "@/components/layout/SectionsMain/Education";
import { Research } from "@/components/layout/SectionsMain/Research";
import { Teaching } from "@/components/layout/SectionsMain/Teaching";
import { FC } from "react";

interface Section {
  id: string;
  component: FC<any>;
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
  {
    id: "teaching",
    component: Teaching,
  },
];
