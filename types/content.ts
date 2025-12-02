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

export interface SoftwareLink {
  name: string;
  url: string;
}

export interface SoftwareAsset {
  src: string;
  alt: string;
}

export interface SoftwareProject {
  title: string;
  description: string;
  links: SoftwareLink[];
  asset?: SoftwareAsset;
}
