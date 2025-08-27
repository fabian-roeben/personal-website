import { SectionHeader } from "../../ui/section-header";
import { mainContentData } from "@/data/content";

export function Teaching() {
  return (
    <section id="teaching">
      <SectionHeader title="TEACHING" />
      <div>
        <ul className="list-decimal list-inside text-muted-foreground backdrop-blur-[1px]">
          {mainContentData.teaching.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}