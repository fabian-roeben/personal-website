import { ReactNode } from "react";

export interface EducationItem {
  degree: string;
  institution: string;
  url: string;
  year: string;
}

export type TeachingItem = string;

export interface Affiliations {
  name: string;
  url: string;
}
