import Link from "next/link";
import { cn } from "@/lib/utils";

interface CustomLinkProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
  external?: boolean;
  title?: string;
}

export function CustomLink({
  href,
  children,
  className,
  external = false,
  title,
  ...props
}: CustomLinkProps) {
  const isExternal =
    external || href.startsWith("http") || href.endsWith(".pdf");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      title={title}
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
