"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { papers } from "@/data/papers";


export function MainContent() {
    const [openAbstracts, setOpenAbstracts] = useState<Record<number, boolean>>({});
  
    const toggleAbstract = (index: number) => {
      setOpenAbstracts(prev => ({
        ...prev,
        [index]: !prev[index]
      }));
    };
  
    return (
      <div className="space-y-8">
        <section id="about">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Welcome! I am a Ph.D. candidate in Economics at{" "}
              <a 
                href="https://wiso.uni-koeln.de/en/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-700 duration-300"
              >
                University of Cologne
              </a>
              . My research focuses on [Research Areas].
              I am particularly interested in [Specific Interests].
            </p>
          </div>
        </section>
  
        <div className="border-t border-gray-200" />
  
        <section id="education">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Ph.D. Economics, <em>University of Cologne</em>, 2025 (expected)</li>
            <li>M.A. Philosophy, <em>University College London</em>, 2020</li>
            <li>M.Sc. Finance, <em>Stockholm School of Economics</em>, 2019</li>
            <li>B.Sc. International Business, <em>Maastricht University</em>, 2017</li>
          </ul>
        </section>
  
        <div className="border-t border-gray-200" />
  
        <section id="research">
          <h2 className="text-2xl font-bold mb-4">Research</h2>
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
                            <a href={author.website} 
                            className="hover:text-red-700 transition-all duration-300"
                            target="_blank" 
                            rel="noopener noreferrer">
                              {author.name}
                            </a>
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
                        href={link.url}                      >
                        <span className="text-red-700 dark:text-white">[{link.name}]</span>
                      </a>
                    ))}
                  </div>
                  <AnimatePresence>
                    {openAbstracts[index] && paper.abstract && (
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