import { SectionHeader } from "../../ui/section-header";
import { motion, useAnimate } from "framer-motion";
import { CustomLink } from "@/components/ui/link";
import { mainContentData } from "@/data/content";

export function Education() {
  const [scope, animate] = useAnimate();

  const triggerAnimation = (hovering: boolean) => {
    animate(
      scope.current,
      {
        scaleY: hovering ? 1.07 : 1,
      },
      { type: "spring", stiffness: 300 }
    );
  };

  return (
    <section id="education">
      <SectionHeader title="EDUCATION" />
      <div
        className="flex"
        onMouseEnter={() => triggerAnimation(true)}
        onMouseLeave={() => triggerAnimation(false)}
      >
        <motion.div
          ref={scope}
          className="border-l-2 border-primary"
          style={{ transformOrigin: "center" }}
        />
        <ul className="list-disc list-inside text-muted-foreground pl-3 backdrop-blur-[1px]">
          {mainContentData.education.map((edu, index) => (
            <li key={index}>
              {edu.degree},{" "}
              <CustomLink href={edu.url}>{edu.institution}</CustomLink>,{" "}
              {edu.year}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}