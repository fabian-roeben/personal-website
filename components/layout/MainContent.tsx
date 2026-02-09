"use client";
import { useState } from "react";
import { mainSections } from "@/data/mainSections";
import { papers } from "@/data/papers";

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
      {mainSections.map((section) => {
        if (section.id === "research") {
          const Component = section.component;
          return (
            <Component
              key={section.id}
              openAbstractTitle={openAbstractTitle}
              toggleAbstract={toggleAbstract}
            />
          );
        }
        const Component = section.component;
        return <Component key={section.id} />;
      })}
    </div>
  );
}