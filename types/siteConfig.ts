export interface SiteConfig {
  name: string;
  url: string;
  description: string;
  keywords: string[];
  jobTitle: string;
  location: string;
  locationLink: string;
  email: string;
  cv: string;
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    googleScholar: string;
  };
  profileImage: {
    src: string;
    alt: string;
  };
}
