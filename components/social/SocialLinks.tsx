import { CustomLink } from "../ui/link"
import { Mail, Github, Linkedin, FileText, FileUser } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6";

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      
      {/* Email link */}
      <div className="flex items-center gap-2">
        <Mail className="h-4 w-4" />
        <a 
          href="mailto:f.roeben@wiso.uni-koeln.de"
          className="text-muted-foreground hover:text-accent-red transition-all duration-300 dark:duration-0"
        >
          f.roeben[at]wiso.uni-koeln.de
        </a>
      </div>

      {/* CV link Social media icons */}
      <div className="flex items-center justify-start gap-4">

        {/* CV link */}
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          <CustomLink href="/cv_roeben.pdf">CV</CustomLink>
        </div>

        {/* Divider */}
        <div className="h-5 w-[1px] bg-border" aria-hidden="true" />

        {/* Social media icons */}
        <CustomLink href="https://github.com/fabian-roeben" aria-label="GitHub Profile">
          <Github className="h-4 w-4" />
        </CustomLink>
        <CustomLink href="https://www.linkedin.com/in/fabianroeben" aria-label="LinkedIn Profile">
          <Linkedin className="h-4 w-4" />
        </CustomLink>
        <CustomLink href="https://x.com/RoebenFabian" aria-label="X Profile">
          <FaXTwitter className="h-4 w-4" />
        </CustomLink>
      </div>

    </div>
  )
}