import { AnimatePresence, motion } from "framer-motion";
import { papers } from "@/data/papers";
import { SectionHeader } from "../../ui/section-header";
import { CustomLink } from "../../ui/link";
import { Paper, Author, PaperCategory } from "@/types/papers";

export interface ResearchProps {
  openAbstractTitle: string | null;
  toggleAbstract: (title: string) => void;
}

interface ResearchItemProps {
  paper: Paper;
  isOpen: boolean;
  onToggle: () => void;
}

/** Display order for paper categories */
const CATEGORY_ORDER: PaperCategory[] = [
  "Job Market Paper",
  "Working Papers",
  "Selected Work in Progress",
  "Publications",
];

/** Pre-computed paper groupings (papers data is static) */
const groupedPapers = papers.reduce<Partial<Record<PaperCategory, Paper[]>>>(
  (acc, paper) => {
    const category = paper.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category]!.push(paper);
    return acc;
  },
  {}
);

function AuthorList({ authors }: { authors: Author[] }) {
  return (
    <span className="font-normal">
      {" "}
      (with{" "}
      {authors.map((author, i) => (
        <span key={author.name}>
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
      ))}
      )
    </span>
  );
}

function ResearchItem({ paper, isOpen, onToggle }: ResearchItemProps) {
  return (
    <li>
      <h4 className="text-muted-foreground backdrop-blur-[1px]">
        {paper.titleLink ? (
          <CustomLink href={paper.titleLink} className="underline">
            {paper.title}
          </CustomLink>
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
        {paper.links?.map((link) => (
          <CustomLink
            key={link.url}
            href={link.url}
            className="text-accent-red hover:text-accent-red-foreground transition-all duration-300 backdrop-blur-[1px] whitespace-nowrap"
          >
            [{link.name}]
          </CustomLink>
        ))}
      </div>

      {paper.media && paper.media.length > 0 && (
        <p className="text-muted-foreground backdrop-blur-[1px]">
          <em>Media:</em>{" "}
          {paper.media.map((link, index) => (
            <span key={link.url}>
              <CustomLink href={link.url} className="underline">
                {link.name}
              </CustomLink>
              {index < paper.media!.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      )}

      <AnimatePresence>
        {isOpen && paper.abstract && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 overflow-hidden text-muted-foreground bg-background/30 backdrop-blur-[1px] text-left md:text-justify"
          >
            {paper.abstract}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export function Research({ openAbstractTitle, toggleAbstract }: ResearchProps) {
  return (
    <section id="research">
      <SectionHeader title="RESEARCH" />
      {CATEGORY_ORDER.map(
        (category) =>
          groupedPapers[category] && (
            <div key={category} className="mb-4">
              <h3 className="mb-2">{category}</h3>
              <ul className="space-y-4">
                {groupedPapers[category]!.map((paper) => (
                  <ResearchItem
                    key={paper.title}
                    paper={paper}
                    isOpen={openAbstractTitle === paper.title}
                    onToggle={() => toggleAbstract(paper.title)}
                  />
                ))}
              </ul>
            </div>
          )
      )}
    </section>
  );
}
