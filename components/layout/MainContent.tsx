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
      <div className="space-y-8 mt-6 md:mt-0">

        {/*About*/}
        <section id="about">
          <SectionHeader icon={<MdHome className="h-6 w-6" />} title="about" />
          <div className="space-y-5 text-muted-foreground">
            <p className="text-base leading-relaxed max-w-prose text-muted-foreground">
              Welcome! I am a Ph.D. Candidate in Economics at the{" "}
              <CustomLink className="underline" href="https://wiso.uni-koeln.de/en/">University of Cologne</CustomLink>
              {" "} and affiliated with the <CustomLink className="underline" href="https://econtribute.de/">ECONtribute Cluster of Excellence</CustomLink> and the <CustomLink className="underline" href="https://gateway-unikoeln.de/en/">Gateway Excellence Start-up Center</CustomLink>. 
              Much of my work leverages machine learning and natural language processing to address key questions in economics and finance. Currently, I am interested in how Large Language Models, in particular <CustomLink className="underline" href="https://www.ibm.com/think/insights/agentic-ai">Agentic AI</CustomLink>, (i) might shape media markets and (ii) can be leveraged to learn about narratives in economics.
            </p>

          </div>
        </section>
  
        {/*Education*/}
        <section id="education">
          <SectionHeader icon={<GraduationCap className="h-6 w-6" strokeWidth={2.5} />} title="education" />
          <ul className="list-disc list-inside text-muted-foreground">
            <li>Ph.D. Economics, <em>University of Cologne</em>, 2025 (expected)</li>
            <li>M.A. Philosophy, <em>University College London</em>, 2020</li>
            <li>M.Sc. Finance, <em>Stockholm School of Economics</em>, 2019</li>
            <li>B.Sc. International Business, <em>Maastricht University</em>, 2017</li>
          </ul>
        </section>
  
        {/*Research*/}
        <section id="research">
          <SectionHeader icon={<BookText className="h-6 w-6" strokeWidth={2.5} />} title="research" />
          <ul className="space-y-4">
            {papers.map((paper, index) => {
              const authors = paper.authors || [];
              return (
                <li key={index}>
                  <h4 className="text-muted-foreground">{index + 1}. {paper.title}</h4>
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
                  <div className="flex">
                    {paper.status && (
                      <p className="text-muted-foreground mt-0.5">
                        <em>{paper.status}</em>
                      </p>
                    )}
                    {paper.journal && (
                      <p className="text-muted-foreground mt-0.5">
                        ,&nbsp;<em>{paper.journal}</em>, {paper.edition}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2 mt-0.5">
                    {paper.abstract && (
                      <motion.button
                        onClick={() => toggleAbstract(index)}
                        whileTap={{ scale: 0.95 }}
                        className="w-[91px]"
                      >
                        <span className="text-accent-red hover:text-accent-red-foreground transition-all duration-300">
                          {openAbstractIndex === index ? "[Abstract -]" : "[Abstract +]"}
                        </span>
                      </motion.button>
                    )}
                    {paper.links?.map((link, i) => (
                      <motion.a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-accent-red hover:text-accent-red-foreground transition-all duration-300">
                          [{link.name}]
                        </span>
                      </motion.a>
                    ))}
                  </div>
                  <AnimatePresence>
                    {openAbstractIndex === index && paper.abstract && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-0.5 overflow-hidden text-muted-foreground"
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