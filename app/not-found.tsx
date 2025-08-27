import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-foreground">
      <div className="mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-12 h-12 text-destructive"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
          />
        </svg>
      </div>
      <p className="text-xl mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="text-destructive border border-destructive px-4 py-2 rounded-md transition-colors duration-300 hover:bg-destructive hover:text-destructive-foreground"
      >
        Go back to {siteConfig.name}&apos;s website
      </Link>
    </div>
  );
}