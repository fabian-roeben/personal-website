import { EducationItem, TeachingItem } from "@/types/content";

const aboutContent = `
I am a Ph.D. Candidate in Economics at the [University of Cologne](https://wiso.uni-koeln.de/en/) and affiliated with the [ECONtribute Cluster of Excellence](https://econtribute.de/), the [Center for Social and Economic Behavior (C-SEB)](https://c-seb.de/en/), and the [Gateway Excellence Start-up Center](https://gateway-unikoeln.de/en/). I am broadly interested in applied AI - both in adapting AI tools to econmic research and in the economic analysis of AI technologies. Currently, I work on how AI systems (i) shape media markets and (ii) can be leveraged to learn about narratives in economics.
`;

const educationContent: EducationItem[] = [
  {
    degree: "Ph.D. Economics",
    institution: "University of Cologne",
    institutionShort: "U. Cologne",
    url: "https://wiso.uni-koeln.de/en/",
    year: "2025 (expected)",
  },
  {
    degree: "M.A. Philosophy",
    institution: "University College London",
    institutionShort: "UCL",
    url: "https://www.ucl.ac.uk/philosophy/",
    year: "2020",
  },
  {
    degree: "M.Sc. Finance",
    institution: "Stockholm School of Economics",
    institutionShort: "SSE",
    url: "https://www.hhs.se",
    year: "2019",
  },
  {
    degree: "B.Sc. International Business",
    institution: "Maastricht University",
    institutionShort: "U. Maastricht",
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
};
