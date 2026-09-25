const aboutContent = `
I am a Postdoctoral Researcher at [ETH Zurich](https://lawecon.ethz.ch/) working at the intersection of AI and Economics. Two specific themes in my work are (i) building software, such as mobile apps, as platforms for large-scale RCTs to understand the impacts of AI and (ii) using advances in AI for measurement in causal inference.
`;

const affiliationsContent = [
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
  {
    name: "Immigration Policy Lab",
    url: "https://immigrationlab.org/",
  },
];

const educationContent = [
  {
    degree: "PhD Economics",
    institution: "University of Cologne",
    url: "https://wiso.uni-koeln.de/en/",
    year: "2026",
  },
  {
    degree: "MA Philosophy",
    institution: "University College London",
    url: "https://www.ucl.ac.uk/philosophy/",
    year: "2020",
  },
  {
    degree: "MSc Finance",
    institution: "Stockholm School of Economics",
    url: "https://www.hhs.se",
    year: "2019",
  },
  {
    degree: "BSc International Business",
    institution: "Maastricht University",
    url: "https://www.maastrichtuniversity.nl/about-um/faculties/school-business-and-economics",
    year: "2017",
  },
];

const resourcesContent = [
  {
    id: "zurich-summer-school-2026",
    description:
      "I helped organize the [Zurich Summer School in AI & Applied Economics](https://zrh-ai-econ.com/) and taught two lectures on using AI in research:",
    lectures: [
      {
        title: "Working with AI Agents",
        slides: "/resources/working-with-ai-agents.pdf",
      },
      {
        title: "Building Research Software with AI",
        slides: "/resources/building-research-software-with-ai.pdf",
      },
    ],
  },
];

const teachingContent = [
  "Experimental Methods (graduate)",
  "Survey Design (graduate)",
  "Project Seminar: Applied Econometrics (undergraduate)",
];

export const mainContentData = {
  about: aboutContent,
  education: educationContent,
  resources: resourcesContent,
  teaching: teachingContent,
  affiliations: affiliationsContent,
};
