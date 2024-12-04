import { MdHome } from "react-icons/md";
import { SectionHeader } from "../../ui/section-header";
import { CustomLink } from "../../ui/link";

export function About() {
  return (
    <section id="about">
      <SectionHeader icon={<MdHome className="h-6 w-6" />} title="About" />
      <div className="space-y-5 text-muted-foreground">
        <p className="text-base leading-relaxed max-w-prose text-muted-foreground backdrop-blur-[1px]">
          Welcome! I am a Ph.D. Candidate in Economics at the{" "}<CustomLink className="underline" href="https://wiso.uni-koeln.de/en/">University of Cologne</CustomLink>{" "} and affiliated with the <CustomLink className="underline" href="https://econtribute.de/">ECONtribute Cluster of Excellence</CustomLink> and the <CustomLink className="underline" href="https://gateway-unikoeln.de/en/">Gateway Excellence Start-up Center</CustomLink>. Much of my work leverages machine learning and natural language processing to address key questions in economics and finance. Currently, I am interested in how Large Language Models, in particular <CustomLink className="underline" href="https://www.ibm.com/think/insights/agentic-ai">Agentic AI</CustomLink>, (i) might shape media markets and (ii) can be leveraged to learn about narratives in economics.
        </p>
      </div>
    </section>
  );
}