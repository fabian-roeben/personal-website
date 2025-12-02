import {
  EducationItem,
  TeachingItem,
  Affiliations,
  SoftwareProject,
} from "@/types/content";

const aboutContent = `
I am a Ph.D. candidate in Economics at the [University of Cologne](https://wiso.uni-koeln.de/en/) working at the intersection of applied AI and behavioral economics. Two specific themes in my work are (i) building mobile apps as platforms for large-scale RCTs to understand the impacts of AI and (ii) using advances in AI / ML / NLP to find low-dimensional representations of the world from high-dimensional data.
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

const softwareIntro = `
Much of my research relies on custom software, from mobile news apps for large-scale field experiments to ML and NLP pipelines that score papers and construct latent traits from rich data. I maintain reusable codebases for experimental platforms, measurement pipelines, and LLM-based tools such as multi-agent rewriting and reflective prompt optimization. You can find selected projects and links to code on my software page and GitHub.
`;

const softwareProjects: SoftwareProject[] = [
  {
    title: "NewsShift",
    description:
      "An AI-powered news platform that lets readers customize article characteristics — such as complexity, sentiment, and opinion level — while preserving factual accuracy. Built on research showing that customization increases news satisfaction without harming knowledge or polarization.",
    links: [
      { name: "Website", url: "https://www.news-shift.com/" },
      { name: "Mobile App - Coming soon!", url: "#" },
    ],
  },
];

export const mainContentData = {
  about: aboutContent,
  education: educationContent,
  teaching: teachingContent,
  affiliations: affiliationsContent,
  softwareIntro,
  softwareProjects,
};
