import { BookText } from 'lucide-react';
import { AnimatePresence, motion } from "framer-motion";
import { papers } from "@/data/papers";
import { SectionHeader } from "../../ui/section-header";
import { CustomLink } from "../../ui/link";
import { Paper, Author } from "@/types/papers";

interface ResearchProps {
  openAbstractIndex: number;
  toggleAbstract: (index: number) => void;
}

interface ResearchItemProps {
  paper: Paper;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function AuthorList({ authors }: { authors: Author[] }) {
  return (
    <span className="font-normal">
      {' '}(with {authors.map((author, i) => (
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
    </span>
  );
}

function ResearchItem({ paper, index, isOpen, onToggle }: ResearchItemProps) {
  return (
    <li>
      <h4 className="text-muted-foreground backdrop-blur-[1px]">
        {paper.titleLink ? (
          <CustomLink href={paper.titleLink} className="underline">{paper.title}</CustomLink>
        ) : (
          paper.title
        )}
        {paper.authors && paper.authors.length > 0 && (
          <AuthorList authors={paper.authors} />
        )}
      </h4>

      <div className="flex">
        {paper.status && (
          <p className="text-muted-foreground mt-0.5 backdrop-blur-[1px]">
            <em>{paper.status}</em>
            {paper.journal && <>,&nbsp;</>}
          </p>
        )}
        {paper.journal && (
          <p className="text-muted-foreground mt-0.5 backdrop-blur-[1px]">
            <em>{paper.journal}</em>, {paper.edition}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-x-2 gap-y-1 mt-0.5">
        {paper.abstract && (
          <motion.button
            onClick={onToggle}
            whileTap={{ scale: 0.95 }}
            className="text-left whitespace-nowrap cursor-pointer"
          >
            <span className="text-accent-red hover:text-accent-red-foreground transition-all duration-300 backdrop-blur-[1px]">
              {isOpen ? "[Abstract -]" : "[Abstract +]"}
            </span>
          </motion.button>
        )}
        {paper.links?.map((link, i) => (
          <CustomLink
            key={i}
            href={link.url}
            className="text-accent-red hover:text-accent-red-foreground transition-all duration-300 backdrop-blur-[1px] whitespace-nowrap"
          >
            [{link.name}]
          </CustomLink>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && paper.abstract && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 overflow-hidden text-muted-foreground bg-background/30 backdrop-blur-[1px] text-justify"
          >
            {paper.abstract}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export function Research({ openAbstractIndex, toggleAbstract }: ResearchProps) {
  const groupedPapers = papers.reduce((acc, paper) => {
    const category = paper.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(paper);
    return acc;
  }, {} as Record<Paper['category'], Paper[]>);

  const categoryOrder: Paper['category'][] = ["Job Market Paper", "Working Papers", "Selected Work in Progress", "Publications"];

   return (
     <section id="research">
      <SectionHeader title="RESEARCH" />
      {categoryOrder.map(category => (
        groupedPapers[category] && (
          <div key={category} className='mb-4'>
            <h3 className="mb-2">{category}</h3>
            <ul className="space-y-4">
              {groupedPapers[category].map((paper, index) => (
                <ResearchItem 
                  key={index}
                  paper={paper}
                  index={papers.indexOf(paper)}
                  isOpen={openAbstractIndex === papers.indexOf(paper)}
                  onToggle={() => toggleAbstract(papers.indexOf(paper))}
                />
              ))}
            </ul>
          </div>
        )
      ))}
     </section>
   );
 }