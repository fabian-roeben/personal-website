import { ReactNode } from "react";

export interface Author {
  name: string;
  website?: string;
}

export interface Link {
  name: string;
  url: string;
}

export interface Paper {
  title: string;
  category: "Selected Work in Progress" | "Working Papers" | "Publications" | "Job Market Paper";
  authors?: Author[];
  status?: string;
  journal?: string;
  edition?: string;
  links?: Link[];
  abstract?: string;
}