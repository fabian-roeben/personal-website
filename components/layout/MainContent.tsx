"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { papers } from "@/data/papers";
import { SectionHeader } from "../ui/section-header";
import { CustomLink } from "../ui/link";
import { GraduationCap, BookText } from 'lucide-react';
import { MdHome } from "react-icons/md";


export function MainContent() {
    const [openAbstractIndex, setOpenAbstractIndex] = useState<number>(-1);
  
    const toggleAbstract = (index: number) => {
      setOpenAbstractIndex(currentIndex => currentIndex === index ? -1 : index);
    };
  
    return (
      <div className="space-y-8">
        <section id="about">
          <SectionHeader icon={<MdHome className="h-6 w-6" />} title="About" />
          <div className="space-y-4 text-muted-foreground">
            <p>
              Welcome! I am a Ph.D. Candidate in Economics at the{" "}
              <CustomLink href="https://wiso.uni-koeln.de/en/">University of Cologne</CustomLink>
              {" "} and Associated Member at the <CustomLink href="https://econtribute.de/">ECONtribute Cluster of Excellence</CustomLink>. Much of my work leverages machine learning and natural language processing to address key questions in economics and finance. Currently, I am particularly interested in how LLMs (i) might shape media markets and (ii) can be leveraged to learn about narratives in economics.
            </p>
          </div>
        </section>
  
        <div className="border-t border-gray-200" />
  
        <section id="education">
          <SectionHeader icon={<GraduationCap className="h-6 w-6" strokeWidth={2.5} />} title="Education" />
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Ph.D. Economics, <em><CustomLink href="https://wiso.uni-koeln.de/en/">University of Cologne</CustomLink></em>, 2025 (expected)</li>
            <li>M.A. Philosophy, <em><CustomLink href="https://www.ucl.ac.uk/philosophy/">University College London</CustomLink></em>, 2020</li>
            <li>M.Sc. Finance, <em><CustomLink href="https://www.hhs.se/" className="">Stockholm School of Economics</CustomLink></em>, 2019</li>
            <li>B.Sc. International Business, <em><CustomLink href="https://www.maastrichtuniversity.nl/about-um/faculties/school-business-and-economics">Maastricht University</CustomLink></em>, 2017</li>
          </ul>
        </section>
  
        <div className="border-t border-gray-200" />
  
        <section id="research">
          <SectionHeader icon={<BookText className="h-6 w-6" strokeWidth={2.5} />} title="Research" />
          <ul className="space-y-4">
            {papers.map((paper, index) => {
              const authors = paper.authors || [];
              return (
                <li key={index}>
                  <h3 className="font-bold">{index + 1}. {paper.title}</h3>
                  {authors.length > 0 && (
                    <p className="text-muted-foreground mt-0.5">
                      (with {authors.map((author, i) => (
                        <span key={i}>
                          {author.website ? (
                            <CustomLink href={author.website}>{author.name}</CustomLink>
                          ) : (
                            author.name
                          )}
                          {i < authors.length - 2 
                            ? ", "
                            : i === authors.length - 2 
                            ? " and "
                            : ""}
                        </span>
                      ))})
                    </p>
                  )}
                  {paper.citation && (
                    <p className="mt-0.5">
                      <em>{paper.citation}</em>
                    </p>
                  )}
                  <div className="flex gap-2 mt-0.5">
                    {paper.abstract && (
                      <button
                        onClick={() => toggleAbstract(index)}
                      >
                        <span className="text-red-700 dark:text-white">[Abstract]</span>
                      </button>
                    )}
                    {paper.links?.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <span className="text-red-700 dark:text-white">[{link.name}]</span>
                      </a>
                    ))}
                  </div>
                  <AnimatePresence>
                    {openAbstractIndex === index && paper.abstract && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-0.5 overflow-hidden"
                      >
                        {paper.abstract}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    );
  }