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
    <p className="text-muted-foreground mt-0.5 backdrop-blur-[1px]">
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
  );
}

function ResearchItem({ paper, index, isOpen, onToggle }: ResearchItemProps) {
  return (
    <li>
      {/* <h4 className="text-muted-foreground backdrop-blur-[1px]">{index + 1}. {paper.title}</h4> */}
      <h4 className="text-muted-foreground backdrop-blur-[1px]">{paper.title}</h4>
      
      {paper.authors && paper.authors.length > 0 && (
        <AuthorList authors={paper.authors} />
      )}

      <div className="flex">
        {paper.status && (
          <p className="text-muted-foreground mt-0.5 backdrop-blur-[1px]">
            <em>{paper.status}</em>
          </p>
        )}
        {paper.journal && (
          <p className="text-muted-foreground mt-0.5 backdrop-blur-[1px]">
            ,&nbsp;<em>{paper.journal}</em>, {paper.edition}
          </p>
        )}
      </div>

      <div className="flex gap-2 mt-0.5">
        {paper.abstract && (
          <motion.button
            onClick={onToggle}
            whileTap={{ scale: 0.95 }}
            className="w-[91px] md:w-[102px]"
          >
            <span className="text-accent-red hover:text-accent-red-foreground transition-all duration-300 backdrop-blur-[1px]">
              {isOpen ? "[Abstract -]" : "[Abstract +]"}
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
            <span className="text-accent-red hover:text-accent-red-foreground transition-all duration-300 backdrop-blur-[1px]">
              [{link.name}]
            </span>
          </motion.a>
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
  return (
    <section id="research">
      <SectionHeader icon={<BookText className="h-6 w-6" strokeWidth={1.5} />} title="RESEARCH" />
      <ul className="space-y-4">
        {papers.map((paper, index) => (
          <ResearchItem 
            key={index}
            paper={paper}
            index={index}
            isOpen={openAbstractIndex === index}
            onToggle={() => toggleAbstract(index)}
          />
        ))}
      </ul>
    </section>
  );
}