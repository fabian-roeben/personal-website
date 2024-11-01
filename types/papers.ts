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
  authors?: Author[];
  citation?: string;
  journal?: string;
  year?: number;
  links?: Link[];
  abstract?: string;
}