"use client";
import { useState } from "react";
import { About } from "./SectionsMain/About";
import { Education } from "./SectionsMain/Education";
import { Research } from "./SectionsMain/Research";

export function MainContent() {
  const [openAbstractIndex, setOpenAbstractIndex] = useState<number>(-1);

  const toggleAbstract = (index: number) => {
    setOpenAbstractIndex(currentIndex => currentIndex === index ? -1 : index);
  };

  return (
    <div className="space-y-8 mt-6 md:mt-0">
      <About />
      <Education />
      <Research 
        openAbstractIndex={openAbstractIndex} 
        toggleAbstract={toggleAbstract} 
      />
    </div>
  );
}