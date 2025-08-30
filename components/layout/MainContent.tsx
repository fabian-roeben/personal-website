"use client";
import { useState } from "react";
import { mainSections } from "@/data/mainSections";
import { papers } from "@/data/papers";

export function MainContent() {
  const jobMarketPaperIndex = papers.findIndex(
    (paper) => paper.category === "Job Market Paper"
  );
  const [openAbstractIndex, setOpenAbstractIndex] = useState<number>(jobMarketPaperIndex);

  const toggleAbstract = (index: number) => {
    setOpenAbstractIndex(currentIndex => currentIndex === index ? -1 : index);
  };

  return (
    <div className="space-y-8 mt-6 md:mt-0">
      {mainSections.map(({ id, component: Component }) => {
        if (id === "research") {
          return (
            <Component
              key={id}
              openAbstractIndex={openAbstractIndex}
              toggleAbstract={toggleAbstract}
            />
          );
        }
        return <Component key={id} />;
      })}
    </div>
  );
}