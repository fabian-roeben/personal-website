import Image from "next/image"
import { SocialLinks } from "../social/SocialLinks"

export function ProfileSection() {
  return (
    <div className="flex flex-col items-start text-left md:items-start md:text-left border border-gray-200 rounded-xl w-full md:w-[290px] shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative w-full aspect-square">
        <Image
          src="https://utfs.io/f/Y1PlqwjQNgrhNlGVfXQPqUrzoXGgc5bKaSTF72l4EfC08m1w"
          alt="Profile"
          fill
          sizes="(max-width: 768px) 100vw, 280px"
          className="rounded-t-xl object-cover"
          priority={true}
        />
      </div>
      <div className="bg-background rounded-b-xl p-5">
        <h1 className="font-serif tracking-tight">Fabian Roeben</h1>
        <p className="text-base mt-1.5 text-muted-foreground">
          Ph.D. Candidate in Economics at the University of Cologne
        </p>
        <SocialLinks className="mt-5" />
      </div>
    </div>
  )
}