import { Paper } from "@/types/papers";

export const papers: Paper[] = [
  {
    title: "Measuring the Structure of Household Macroeconomic Expectations",
    category: "Selected Work in Progress",
    abstract: "Households differ in what they expect and in how their macroeconomic expectations move together. I use 12 survey waves for 6,550 respondents in the New York Fed Survey of Consumer Expectations to study within-household comovement among expectations for inflation, unemployment, saving-account rates, and stock prices. Households differ systematically in whether their unemployment, saving-rate, and stock-price probabilities rise and fall together, producing a persistent probability-alignment ranking. Inflation expectations are only weakly aligned with these three probability reports and do not support a comparably persistent ranking. Alignment is not an optimism-pessimism factor: unemployment and stock-price probabilities tend to rise together. The pattern persists after accounting for response style, and alignment measured in the first six waves predicts joint expectation movements and same-direction revisions in the next six. Similar within-person comovement appears in the ECB Consumer Expectations Survey, although respondent rankings are less persistent. Across households, the relationship between inflation expectations and planned spending is about one quarter flatter at higher probability alignment. This is consistent with a given inflation expectation carrying different spending signals depending on the household's other macro expectations. Repeated observations thus reveal household-specific structure that analyses of one expectation at a time miss.",
    links: [
      { name: "Data I", url: "https://www.newyorkfed.org/microeconomics/sce#/" },
      { name: "Data II", url: "https://www.ecb.europa.eu/stats/ecb_surveys/consumer_exp_survey/html/index.en.html"}
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
      { name: "Chris Roth", website: "https://cproth.com/" },
      { name: "Vanessa Sticher", website: "https://vanessasticher.github.io/"},
    ],
    titleLink: "/papers/TMT.pdf",
    links: [
      { name: "Instructions", url: "/papers/tmt_instructions_appendix.pdf"},
      { name: "CESifo WP", url: "https://www.ifo.de/en/cesifo/publications/2025/working-paper/news-customization-ai"},
      { name: "Mobile App", url: "https://www.news-shift.com/" },
    ],
    media: [
      { name: "FAZ", url: "https://fazarchiv.faz.net/document?id=FAZ__b0a89b2dd2a2a76318943c4deef4058a85cff298" },
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
      { name: "Gloria Gennaro", website: "http://gloriagennaro.rbind.io/"},
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