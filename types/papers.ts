export interface Author {
  name: string;
  website?: string;
}

export interface Link {
  name: string;
  url: string;
}

export type PaperCategory =
  | "Selected Work in Progress"
  | "Working Papers"
  | "Publications"
  | "Job Market Paper";

export interface Paper {
  title: string;
  category: PaperCategory;
  authors?: Author[];
  status?: string;
  journal?: string;
  edition?: string;
  links?: Link[];
  media?: Link[];
  abstract?: string;
  titleLink?: string;
}
