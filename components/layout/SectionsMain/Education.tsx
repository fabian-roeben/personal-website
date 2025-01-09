import { LibraryBig } from 'lucide-react';
import { SectionHeader } from "../../ui/section-header";
import { motion, useAnimate } from "framer-motion";
import { CustomLink } from "@/components/ui/link";

export function Education() {
  const [scope, animate] = useAnimate();

  const triggerAnimation = (hovering: boolean) => {
    animate(scope.current, {
      scaleY: hovering ? 1.07 : 1,
    }, { type: "spring", stiffness: 300 });
  };

  return (
    <section id="education">
      {/* <SectionHeader icon={<LibraryBig size={24} strokeWidth={1.5} className='dark:fill-[#5f4c3c] fill-[#B08968]'/>} title="EDUCATION" /> */}
      <SectionHeader title="EDUCATION" />
      <div 
        className="flex"
        onMouseEnter={() => triggerAnimation(true)}
        onMouseLeave={() => triggerAnimation(false)}
      >
        <motion.div
          ref={scope}
          className="border-l-2 border-primary"
          style={{ transformOrigin: 'center' }}
        />
        <ul className="list-disc list-inside text-muted-foreground pl-3 backdrop-blur-[1px]">
          <li>Ph.D. Economics, <span className="md:hidden"><CustomLink href="https://wiso.uni-koeln.de/en/">U. Cologne</CustomLink>, 2025 (exp.)</span><span className="hidden md:inline"><CustomLink href="https://wiso.uni-koeln.de/en/">University of Cologne</CustomLink>, 2025 (expected)</span></li>
          <li>M.A. Philosophy, <span className="md:hidden"><CustomLink href="https://www.ucl.ac.uk/philosophy/">UCL</CustomLink></span><span className="hidden md:inline"><CustomLink href="https://www.ucl.ac.uk/philosophy/">University College London</CustomLink></span>, 2020</li>
          <li>M.Sc. Finance, <span className="md:hidden"><CustomLink href="https://www.hhs.se">SSE</CustomLink></span><span className="hidden md:inline"><CustomLink href="https://www.hhs.se">Stockholm School of Economics</CustomLink></span>, 2019</li>
          <li>B.Sc. <span className="md:hidden">Intl. Business, <CustomLink href="https://www.maastrichtuniversity.nl/about-um/faculties/school-business-and-economics">U. Maastricht</CustomLink></span><span className="hidden md:inline">International Business, <CustomLink href="https://www.maastrichtuniversity.nl/about-um/faculties/school-business-and-economics">Maastricht University</CustomLink></span>, 2017</li>        </ul>
      </div>
    </section>
  );
}