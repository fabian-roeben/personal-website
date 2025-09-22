import { CustomLink } from "../ui/link";
import { Mail, Github, Linkedin, FileText, GraduationCap } from "lucide-react";
import CologneIcon from "../ui/icons/cologne-icon";
import { FaXTwitter } from "react-icons/fa6";
import { siteConfig } from "@/data/siteConfig";

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* Location */}
      <div className="flex items-center gap-3">
        <CologneIcon className="w-6 h-6 -ml-0.5 -mt-0.5 fill-black dark:fill-white" />
        <CustomLink href={siteConfig.locationLink}>
          {siteConfig.location}
        </CustomLink>
      </div>

      {/* Email link */}
      <div className="flex items-center gap-3">
        <Mail size={20} strokeWidth={1.5} />
        <a
          href={`mailto:${siteConfig.email}`}
          className="hover:text-accent-red transition-all duration-300 dark:duration-0"
        >
          {siteConfig.email.replace("@", "[at]")}
        </a>
      </div>

      {/* CV link Social media icons */}
      <div className="flex items-center justify-start gap-4">
        {/* CV link */}
        <div className="flex items-center gap-3">
          <FileText size={20} strokeWidth={1.5} />
          <CustomLink href={siteConfig.cv}>CV</CustomLink>
        </div>

        {/* Divider */}
        <div className="h-5 w-px bg-border" aria-hidden="true" />

        {/* Social media icons */}
        <div className="flex items-center gap-3">
          <CustomLink
            href={siteConfig.socials.github}
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <Github size={20} strokeWidth={1.5} />
          </CustomLink>
          <CustomLink
            href={siteConfig.socials.linkedin}
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <Linkedin size={20} strokeWidth={1.5} />
          </CustomLink>
          <CustomLink
            href={siteConfig.socials.twitter}
            aria-label="X Profile"
            title="X (formerly Twitter)"
          >
            <FaXTwitter size={20} strokeWidth={1.5} />
          </CustomLink>
          <CustomLink
            href={siteConfig.socials.googleScholar}
            aria-label="Google Scholar Profile"
            title="Google Scholar"
          >
            <GraduationCap size={24} strokeWidth={1.5} />
          </CustomLink>
        </div>
      </div>
    </div>
  );
}