import { Hand } from 'lucide-react';
import HandIcon from '../../ui/icons/hand';
import { SectionHeader } from "../../ui/section-header";
import { CustomLink } from "../../ui/link";

export function About() {
  return (
    <section id="about">
      {/* <SectionHeader icon={<HandIcon className='dark:fill-[#d4b204] fill-[#FFDE34]'/>} title="WELCOME!" /> */}
      <SectionHeader title="WELCOME!" />
      <div className="space-y-5 text-muted-foreground">
        <p className="leading-relaxed backdrop-blur-[1px] text-justify">
          I am a Ph.D. Candidate in Economics at the{" "}<CustomLink className="underline" href="https://wiso.uni-koeln.de/en/">University of Cologne</CustomLink>{" "} and affiliated with the <CustomLink className="underline" href="https://econtribute.de/">ECONtribute Cluster of Excellence</CustomLink>, the <CustomLink className="underline" href="https://c-seb.de/en/">Center for Social and Economic Behavior (C-SEB)</CustomLink>, and the <CustomLink className="underline" href="https://gateway-unikoeln.de/en/">Gateway Excellence Start-up Center</CustomLink>. Much of my work leverages machine learning and natural language processing to address key questions in economics and finance. Currently, I am interested in how AI systems (i) might shape media markets and (ii) can be leveraged to learn about narratives in economics.
        </p>
      </div>
    </section>
  );
}

