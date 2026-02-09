import { Paper } from "@/types/papers";

export const papers: Paper[] = [
  {
    title: "Macroeconomic Expectations and Household Types: Evidence from Panel Data",
    category: "Selected Work in Progress",
    abstract: "Using expectations panel data of 11,302 US households, I analyze households' subjective models of macroeconomic outcomes and show that those models differentially affect planned consumption. To do this, I first use cluster analysis to classify households into types based on the interdependence of their expectations of four key macroeconomic variables: inflation, unemployment, interest rates, and stock prices. I find that households can be clustered into five types, of which three can be interpreted meaningfully: the first forms expectations consistent with economic concepts and the second consistent with a simple affective heuristic. The third seems to form expectations in isolation without interrelating variables. Second, I investigate the behavioral relevance of belonging to a type by analyzing the impact of households' inflation expectations on planned consumption. I find that the first and third - consistent with intertemporal substitution - increase planned spending with an increase in inflation expectations. The second - consistent with an income effect or precautionary saving - decreases planned spending. This research has policy implications for monetary and fiscal authorities seeking to influence household consumption patterns through policy measures.",
    links: [
      { name: "Data", url: "https://www.newyorkfed.org/microeconomics/sce#/" }
    ]
  },
  {
    title: "News Customization with AI",
    category: "Working Papers",
    abstract: "We introduce a new method to study news preferences by unbundling presentation from coverage. In our AI-powered news app, users can customize article characteristics, such as complexity or extent of opinion, while holding the underlying news event constant. In large-scale field experiments, we find that customization leads to better matching between the news consumed and stated preferences, increasing news satisfaction. While a significant fraction of users demand politically aligned news, the majority of users display high and persistent demand for less opinionated and more fact-driven news. By contrast, users not offered customization keep consuming news misaligned with their stated preferences.",
    authors: [
      { name: "Felix Chopra", website: "https://www.felixchopra.com/" },
      { name: "Ingar Haaland", website: "https://sites.google.com/site/ingarhaaland/" },
      { name: "Chris Roth", website: "https://sites.google.com/site/chrisrotheconomics" },
      { name: "Vanessa Sticher", website: "https://vanessasticher.github.io/"},
    ],
    titleLink: "/papers/TMT.pdf",
    links: [
      { name: "Instructions", url: "/papers/tmt_instructions_appendix.pdf"},
      { name: "CESifo WP", url: "https://www.ifo.de/en/cesifo/publications/2025/working-paper/news-customization-ai"},
      { name: "Mobile App", url: "https://www.news-shift.com/" },
    ],
    media: [
      { name: "FAZ", url: "https://fazarchiv.faz.net/faz-portal/document?uid=FAZ__FD02025120150103336566028" },
    ]
  },
  {
    title: "How Far Do Latent Traits Travel?",
    category: "Selected Work in Progress",
    links: [
      { name: "Data I", url: "https://huggingface.co/datasets/LLM-Digital-Twin/Twin-2K-500" },
      { name: "Data II", url: "https://huggingface.co/datasets/LLM-Digital-Twin/Twin-2K-500-Mega-Study" }
    ]
  },
  {
    title: "The Asymmetric Response to Political Spin",
    category: "Selected Work in Progress",
    authors: [
      { name: "Felix Chopra", website: "https://www.felixchopra.com/" },
      { name: "Ingar Haaland", website: "https://sites.google.com/site/ingarhaaland/" },
      { name: "Chris Roth", website: "https://sites.google.com/site/chrisrotheconomics" },
      { name: "Vanessa Sticher", website: "https://vanessasticher.github.io/"},
    ],
  },
  {
    title: "Experts Under Pressure: Information Aggregation and Misallocation in Emergency Triage",
    category: "Selected Work in Progress",
    links: [
      { name: "Data I", url: "https://physionet.org/content/mimic-iv-ed/2.2/" },
      { name: "Data II", url: "https://physionet.org/content/mimiciv/3.1/" },
      { name: "Data III", url: "https://physionet.org/content/mimic-iv-note/2.2/" }
    ]
  },
  // {
  //   title: "Self-Revising Language Models for Learning Economic Decision Rules",
  //   category: "Selected Work in Progress",
  //   links: [
  //     { name: "Data", url: "https://github.com/jcpeterson/choices13k" },
  //   ]
  // },
  // {
  //   title: "Location Traps",
  //   category: "Selected Work in Progress",
  //   authors: [
  //     { name: "Chris Roth", website: "https://sites.google.com/site/chrisrotheconomics" },
  //     { name: "Sebastian Siegloch", website: "https://sites.google.com/view/siegloch/"},
  //   ],
  // },
];