import { motion } from "framer-motion";

interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
}

export function SectionHeader({ icon, title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <motion.div
        whileHover={{ 
          scale: 1.2,
          y: -2,
          transition: { type: "spring", stiffness: 400 }
        }}
      >
        {icon}
      </motion.div>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
}