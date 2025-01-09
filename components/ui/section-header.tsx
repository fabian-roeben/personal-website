import { motion, useAnimate } from "framer-motion";

interface SectionHeaderProps {
  icon?: React.ReactNode;
  title: string;
}

export function SectionHeader({ icon, title }: SectionHeaderProps) {
  const [scope, animate] = useAnimate();
 
  const triggerAnimation = (hovering: boolean) => {
    if (scope.current) { // Only animate if we have a reference
      animate(scope.current, {
        scale: hovering ? 1.2 : 1,
        y: hovering ? -2 : 0
      }, { type: "spring", stiffness: 400 });
    }
  };

  return (
    <div className="flex items-center gap-2.5 mb-6">
      {icon && (
        <motion.div 
          ref={scope}
          onMouseEnter={() => triggerAnimation(true)}
          onMouseLeave={() => triggerAnimation(false)}
        >
          {icon}
        </motion.div>
      )}
      <h2
        onMouseEnter={() => icon && triggerAnimation(true)}
        onMouseLeave={() => icon && triggerAnimation(false)}
      >
        {title}
      </h2>
    </div>
  );
}