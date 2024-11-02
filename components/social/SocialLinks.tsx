import { CustomLink } from "../ui/link"
import { Mail, Github, Linkedin, FileText } from "lucide-react"
import Link from "next/link"

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex items-center gap-2">
        <Mail className="h-4 w-4" />
        <a 
          href="mailto:f.roeben@wiso.uni-koeln.de"
          className="text-muted-foreground hover:text-red-700 transition-all duration-300 dark:duration-0"
        >
          f.roeben@wiso.uni-koeln.de
        </a>
      </div>

      <div className="flex items-center gap-2">
        <Github className="h-4 w-4" />
        <CustomLink href="https://github.com/fabian-roeben">GitHub</CustomLink>
      </div>

      <div className="flex items-center gap-2">
        <Linkedin className="h-4 w-4" />
        <CustomLink href="https://www.linkedin.com/in/fabianroeben">LinkedIn</CustomLink>
      </div>

      <div className="flex items-center gap-2">
        <FileText className="h-4 w-4" />
        <CustomLink href="/cv.pdf">CV</CustomLink>
      </div>
    </div>
  )
}