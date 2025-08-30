import { ReactNode } from "react";

export interface EducationItem {
  degree: string;
  institution: string;
  institutionShort: string;
  url: string;
  year: string;
}

export type TeachingItem = string;

export interface Affiliations {
  name: string;
  url: string;
}
