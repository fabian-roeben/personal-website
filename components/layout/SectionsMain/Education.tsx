import { GraduationCap } from 'lucide-react';
import { SectionHeader } from "../../ui/section-header";
import { motion, useAnimate } from "framer-motion";

export function Education() {
  const [scope, animate] = useAnimate();

  const triggerAnimation = (hovering: boolean) => {
    animate(scope.current, {
      scaleY: hovering ? 1.07 : 1,
    }, { type: "spring", stiffness: 300 });
  };

  return (
    <section id="education">
      <SectionHeader icon={<GraduationCap className="h-6 w-6" strokeWidth={2.5} />} title="Education" />
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
          <li>Ph.D. Economics, <em>University of Cologne</em>, 2025 (expected)</li>
          <li>M.A. Philosophy, <em>University College London</em>, 2020</li>
          <li>M.Sc. Finance, <em>Stockholm School of Economics</em>, 2019</li>
          <li>B.Sc. International Business, <em>Maastricht University</em>, 2017</li>
        </ul>
      </div>
    </section>
  );
}