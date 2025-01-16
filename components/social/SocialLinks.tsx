import { CustomLink } from "../ui/link"
import { Mail, Github, Linkedin, FileText, MapPin } from "lucide-react"
import CologneIcon from "../ui/icons/cologne-icon"
import { FaXTwitter } from "react-icons/fa6";

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>

      {/* Location */}
      <div className="flex items-center gap-3">
        {/* <MapPin size={20} strokeWidth={1.5}/> */}
        <CologneIcon className="w-6 h-6 -ml-0.5 -mt-0.5 fill-black dark:fill-white"/>
        <CustomLink href="https://wiso.uni-koeln.de/en/">University of Cologne</CustomLink>
      </div>
      
      {/* Email link */}
      <div className="flex items-center gap-3">
        <Mail size={20} strokeWidth={1.5} />
        <a 
          href="mailto:f.roeben@wiso.uni-koeln.de"
          className="hover:text-accent-red transition-all duration-300 dark:duration-0"
        >
          f.roeben[at]wiso.uni-koeln.de
        </a>
      </div>

      {/* CV link Social media icons */}
      <div className="flex items-center justify-start gap-4">

        {/* CV link */}
        <div className="flex items-center gap-3">
          <FileText size={20} strokeWidth={1.5}/>
          <CustomLink href="/cv_roeben.pdf">CV</CustomLink>
        </div>

        {/* Divider */}
        <div className="h-5 w-[1px] bg-border" aria-hidden="true" />

        {/* Social media icons */}
        <div className="flex items-center gap-3">
          <CustomLink href="https://github.com/fabian-roeben" aria-label="GitHub Profile" title="GitHub">
            <Github size={20} strokeWidth={1.5}/>
          </CustomLink>
          <CustomLink href="https://www.linkedin.com/in/fabianroeben" aria-label="LinkedIn Profile" title="LinkedIn">
            <Linkedin size={20} strokeWidth={1.5}/>
          </CustomLink>
          <CustomLink href="https://x.com/RoebenFabian" aria-label="X Profile" title="X (formerly Twitter)">
            <FaXTwitter size={20} strokeWidth={1.5}/>
          </CustomLink>
        </div>
      </div>

    </div>
  )
}