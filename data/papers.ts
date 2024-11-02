import { Paper } from "@/types/papers";

export const papers: Paper[] = [
  {
    title: "AI Customization and the Market for News",
    authors: [
      { name: "Felix Chopra", website: "https://www.felixchopra.com/" },
      { name: "Ingar Haaland", website: "https://sites.google.com/site/ingarhaaland/" },
      { name: "Chris Roth", website: "https://sites.google.com/site/chrisrotheconomics" },
      { name: "Vanessa Sticher"},
    ],
    citation: "Work in Progress",
    abstract: "We study individual preferences in news consumption through a specially designed website that uses an optimized system of Large Language Models to enable users to customize news articles.",
    links: [
      { name: "PDF", url: "/papers/paper.pdf" },
      { name: "TailorMadeTimes", url: "https://tailormadetimes.com" },
    ]
  },
  {
    title: "Macroeconomic Expectations and Household Types: Evidence from Panel Data",
    citation: "Work in Progress",
    abstract: "Using consumer expectations data, I show that households have systematically different subjective models of the macroeconomy. This differentially affects economic decisions, such as planned consumption.",
    links: [
      { name: "Data", url: "https://www.newyorkfed.org/microeconomics/sce#/" },
    ]
  },
  {
    title: "Unraveling Sovereign Risk: Narrative Evidence from Earnings Calls",
    authors: [
      { name: "Nicolas Röver", website: "https://sites.google.com/view/nicolasroever/" },
    ],
    citation: "Work in Progress",
    abstract: "Based on financial text data, we measure investor expectations towards sovereign bond markets and find that bond prices are often driven by unfounded investor pessimism, not economic fundamentals.",
    links: [
      { name: "Data", url: "/papers/paper.pdf" },
    ]
  },
  {
    title: "Digging Deeper into The Impact of Capital Flow Management: Evidence from A New Dataset",
    authors: [
      { name: "Dimitre Milkov" },
      { name: "Niamh Sheridan" }
    ],
    citation: "Work in Progress",
    abstract: "We investigate the intensity of capital controls and their effectiveness in influencing capital flows across borders. This analysis is based on a new hybrid — quantitative and text — dataset created by the IMF.",
  },
];