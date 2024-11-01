import { Mail, Github, Linkedin, FileText } from "lucide-react"

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
          className="text-muted-foreground hover:text-red-700 transition-all duration-300"
        >
          f.roeben@wiso.uni-koeln.de
        </a>
      </div>

      <div className="flex items-center gap-2">
        <Github className="h-4 w-4" />
        <a 
          href="https://github.com/fabian-roeben" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-red-700 transition-all duration-300"
        >
          GitHub
        </a>
      </div>

      <div className="flex items-center gap-2">
        <Linkedin className="h-4 w-4" />
        <a 
          href="https://www.linkedin.com/in/fabianroeben" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-red-700 transition-all duration-300"
        >
          LinkedIn
        </a>
      </div>

      <div className="flex items-center gap-2">
        <FileText className="h-4 w-4" />
        <a 
          href="/cv.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-red-700 transition-all duration-300"
        >
          CV
        </a>
      </div>
    </div>
  )
}