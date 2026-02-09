import { About } from "@/components/layout/SectionsMain/About";
import { Education } from "@/components/layout/SectionsMain/Education";
import { Research, ResearchProps } from "@/components/layout/SectionsMain/Research";
import { Teaching } from "@/components/layout/SectionsMain/Teaching";
import { ComponentType } from "react";

type Section =
  | { id: "research"; component: ComponentType<ResearchProps> }
  | { id: "about" | "education" | "teaching"; component: ComponentType };

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
