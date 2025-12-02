interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <h2 className="shrink-0">{title}</h2>
      <div className="h-px flex-1 bg-gradient-to-r from-border/50 to-transparent" />
    </div>
  );
}
