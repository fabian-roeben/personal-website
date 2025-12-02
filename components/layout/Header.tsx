"use client";

import Link from "next/link";
import { CustomLink } from "../ui/link";
import { ThemeToggle } from "../ui/theme-toggle";
import { useScrollHide } from "@/lib/hooks/useScrollHide";

export function Header() {
  const headerRef = useScrollHide<HTMLElement>();

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only scroll to top if already on home page, otherwise navigate normally
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      window.history.replaceState(null, "", "/");
    }
  };

  return (
    <div className="h-24">
      <header
        ref={headerRef}
        className="fixed w-[calc(100%-2rem)] max-w-(--breakpoint-xl) left-1/2 -translate-x-1/2 bg-white/80 dark:bg-gray-800/25 backdrop-blur-md shadow-lg dark:shadow-gray-950/80 rounded-lg z-100 mt-4 transition-transform duration-700 ease-in-out"
      >
        <nav className="container px-4 py-4 max-w-(--breakpoint-xl)">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={handleHomeClick}
              className="flex items-center gap-2 md:gap-3"
            >
              <span className="font-medium">Fabian Roeben</span>
            </Link>
            <div className="flex items-center gap-3 md:gap-5">
              <Link
                href="/#research"
                className="text-muted-foreground hover:text-accent-red duration-300 dark:duration-0"
              >
                Research
              </Link>
              {/* TODO: Uncomment when Software section is ready
              <Link
                href="/software"
                className="hidden md:block text-muted-foreground hover:text-accent-red duration-300 dark:duration-0"
              >
                Software
              </Link>
              */}
              <CustomLink href="/cv_roeben.pdf">CV</CustomLink>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
