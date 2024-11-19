import Link from "next/link";
import { cn } from "@/lib/utils";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function CustomLink({ 
  href, 
  children, 
  className,
  external = false,
  ...props 
}: CustomLinkProps) {
  const isExternal = external || href.startsWith('http');
  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "text-muted-foreground hover:text-accent-red transition-colors duration-300",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}