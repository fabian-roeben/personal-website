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
          I am a Ph.D. Candidate in Economics at the{" "}<CustomLink className="underline" href="https://wiso.uni-koeln.de/en/">University of Cologne</CustomLink>{" "} and affiliated with the <CustomLink className="underline" href="https://econtribute.de/">ECONtribute Cluster of Excellence</CustomLink>, the <CustomLink className="underline" href="https://c-seb.de/en/">Center for Social and Economic Behavior (C-SEB)</CustomLink>, and the <CustomLink className="underline" href="https://gateway-unikoeln.de/en/">Gateway Excellence Start-up Center</CustomLink>. I am broadly interested in applied AI - both in adapting AI tools to econmic research and in the economic analysis of AI technologies. Currently, I work on how AI systems (i) shape media markets and (ii) can be leveraged to learn about narratives in economics.
        </p>
      </div>
    </section>
  );
}

