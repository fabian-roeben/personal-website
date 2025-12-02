import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="-mx-4 border-t bg-white dark:bg-[hsl(215,50%,4%)]">
      <div className="container mx-auto px-4 py-4 max-w-(--breakpoint-xl)">
        <p className="text-muted-foreground text-sm md:text-left text-center">
          © {currentYear} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
