"use client";
import { useState } from "react";
import { papers } from "@/data/papers";
import { About } from "./SectionsMain/About";
import { Education } from "./SectionsMain/Education";
import { Research } from "./SectionsMain/Research";
import { Resources } from "./SectionsMain/Resources";
import { Teaching } from "./SectionsMain/Teaching";

export function MainContent() {
  const jobMarketPaper = papers.find(
    (paper) => paper.category === "Job Market Paper"
  );
  const [openAbstractTitle, setOpenAbstractTitle] = useState<string | null>(jobMarketPaper?.title || null);

  const toggleAbstract = (title: string) => {
    setOpenAbstractTitle(currentTitle => currentTitle === title ? null : title);
  };

  return (
    <div className="space-y-8 mt-6 md:mt-0">
      <About />
      <Education />
      <Research
        openAbstractTitle={openAbstractTitle}
        toggleAbstract={toggleAbstract}
      />
      <Resources />
      <Teaching />
    </div>
  );
}
