import { SectionHeader } from "../../ui/section-header";

export function Teaching() {

  return (
    <section id="teaching">
      {/* <SectionHeader icon={<LibraryBig size={24} strokeWidth={1.5} className='dark:fill-[#5f4c3c] fill-[#B08968]'/>} title="TEACHING" /> */}
      <SectionHeader title="TEACHING" />
      <div 
      >
        <ul className="list-decimal list-inside text-muted-foreground backdrop-blur-[1px]">
          <li>Experimental Methods (graduate)</li>
          <li>Survey Design (graduate)</li>
          <li>Project Seminar: Applied Econometrics (undergraduate)</li>        
        </ul>
      </div>
    </section>
  );
}