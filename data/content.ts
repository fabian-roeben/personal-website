import { EducationItem, TeachingItem, Affiliations } from "@/types/content";

const aboutContent = `
I am a Ph.D. Candidate in Economics at the [University of Cologne](https://wiso.uni-koeln.de/en/) working at the intersection of economics and AI—both using AI in economic research and studying AI as an economic force. Methodologically, I use LLMs and text-as-data, machine learning, causal inference, and experiments and surveys.
`;

const affiliationsContent: Affiliations[] = [
  {
    name: "ECONtribute",
    url: "https://econtribute.de/",
  },
  {
    name: "C-SEB",
    url: "https://c-seb.de/en/",
  },
  {
    name: "Gateway Cologne",
    url: "https://gateway-unikoeln.de/en/",
  },
];

const educationContent: EducationItem[] = [
  {
    degree: "Ph.D. Economics",
    institution: "University of Cologne",
    url: "https://wiso.uni-koeln.de/en/",
    year: "2026 (expected)",
  },
  {
    degree: "M.A. Philosophy",
    institution: "University College London",
    url: "https://www.ucl.ac.uk/philosophy/",
    year: "2020",
  },
  {
    degree: "M.Sc. Finance",
    institution: "Stockholm School of Economics",
    url: "https://www.hhs.se",
    year: "2019",
  },
  {
    degree: "B.Sc. International Business",
    institution: "Maastricht University",
    url: "https://www.maastrichtuniversity.nl/about-um/faculties/school-business-and-economics",
    year: "2017",
  },
];

const teachingContent: TeachingItem[] = [
  "Experimental Methods (graduate)",
  "Survey Design (graduate)",
  "Project Seminar: Applied Econometrics (undergraduate)",
];

export const mainContentData = {
  about: aboutContent,
  education: educationContent,
  teaching: teachingContent,
  affiliations: affiliationsContent,
};
