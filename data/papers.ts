import { Paper } from "@/types/papers";

export const papers: Paper[] = [
  {
    title: "Measuring Belief-System Structure in Household Macroeconomic Expectations",
    category: "Selected Work in Progress",
    abstract: "Households differ not only in the levels of their macroeconomic expectations but also in how those expectations are organized: some households revise expectations about different macroeconomic outcomes jointly, while others treat each expectation separately. This belief-system structure shapes what any single forecast means, yet forecasts are usually read one at a time. Using 12-wave household panels from the public NY Fed Survey of Consumer Expectations, I show that a core component of this structure is measurable and stable: a validated index ranks households by how tightly their probability expectations move together, survives noise and reliability benchmarks, and is only partly explained by expectation levels, demographics, or response style. The ranking does not capture optimism or pessimism: households reporting a higher probability that unemployment will rise also report a higher probability that stock prices will rise. Inflation expectations sit loosest in the belief system: the expectation most central to policy communication is the one least connected to households' other macroeconomic beliefs. Structure also matters for interpretation: the same reported inflation expectation translates into different expected spending depending on the beliefs that move with it. A related pattern appears in the ECB Consumer Expectations Survey. Expectations surveys contain a second measurable layer beyond forecast levels, one that central banks monitoring household expectations currently leave unused.",
    links: [
      { name: "Data", url: "https://www.newyorkfed.org/microeconomics/sce#/" }
    ]
  },
  {
    title: "News Customization with AI",
    category: "Working Papers",
    status: "Revise & Resubmit, Review of Economic Studies",
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
    title: "AI as Organizational Intelligence",
    category: "Selected Work in Progress"
  },
  // {
  //   title: "Significance Slant",
  //   category: "Selected Work in Progress",
  //   authors: [
  //     { name: "Chris Roth", website: "https://sites.google.com/site/chrisrotheconomics" },
  //     { name: "Jakob Schmidhäuser", website: "https://schmidja123.github.io/"},
  //     { name: "Michaela Slotwinski", website: "https://sites.google.com/site/michaelaslotwinski/home"},
  //   ],
  // },
    {
    title: "Digital Support",
    category: "Selected Work in Progress",
    authors: [
      { name: "Elliott Ash", website: "https://elliottash.com/" },
      { name: "Marine Casalis", website: "https://pp.ethz.ch/people/marine-casalis.html"},
      { name: "Gloria Gennaro", website: "https://gloriagennaro.rbind.io/"},
      { name: "Dominik Hangartner", website: "https://pp.ethz.ch/people/dominik-hangartner.html"},
      { name: "Michael Jacobs", website: "https://pp.ethz.ch/people/michael-jacobs.html" },
    ],
  },
  {
    title: "Simulating Human Types",
    category: "Selected Work in Progress",
    links: [
      { name: "Data I", url: "https://huggingface.co/datasets/LLM-Digital-Twin/Twin-2K-500" },
      { name: "Data II", url: "https://huggingface.co/datasets/LLM-Digital-Twin/Twin-2K-500-Mega-Study" }
    ]
  },
  // {
  //   title: "The Asymmetric Response to Political Spin",
  //   category: "Selected Work in Progress",
  //   authors: [
  //     { name: "Felix Chopra", website: "https://www.felixchopra.com/" },
  //     { name: "Ingar Haaland", website: "https://sites.google.com/site/ingarhaaland/" },
  //     { name: "Chris Roth", website: "https://sites.google.com/site/chrisrotheconomics" },
  //     { name: "Vanessa Sticher", website: "https://vanessasticher.github.io/"},
  //   ],
  // },
  // {
  //   title: "Experts Under Pressure: Information Aggregation and Misallocation in Emergency Triage",
  //   category: "Selected Work in Progress",
  //   links: [
  //     { name: "Data I", url: "https://physionet.org/content/mimic-iv-ed/2.2/" },
  //     { name: "Data II", url: "https://physionet.org/content/mimiciv/3.1/" },
  //     { name: "Data III", url: "https://physionet.org/content/mimic-iv-note/2.2/" }
  //   ]
  // },
];