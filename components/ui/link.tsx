import Link from "next/link";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function CustomLink({ href, children, className = "" }: CustomLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:text-red-700 duration-300 dark:duration-0 ${className}`}
    >
      {children}
    </Link>
  );
}