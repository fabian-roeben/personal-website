import { CustomLink } from "../ui/link";
import { Mail, Github, Linkedin, FileText, GraduationCap, MapPin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {/* Location */}
      <div className="flex items-center gap-3">
        <MapPin size={20} strokeWidth={1.5} />
        <CustomLink href={siteConfig.locationLink}>
          {siteConfig.location}
        </CustomLink>
      </div>

      {/* Email link */}
      <div className="flex items-center gap-3">
        <Mail size={20} strokeWidth={1.5} />
        <CustomLink
          href={`mailto:${siteConfig.email}`}
          aria-label={`Email ${siteConfig.name}`}
        >
          {siteConfig.email.replace("@", "[at]")}
        </CustomLink>
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
