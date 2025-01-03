import Image from "next/image"
import { SocialLinks } from "../social/SocialLinks"

export function ProfileSection() {
  return (
    <div className="flex flex-col items-start text-left md:items-start md:text-left border border-gray-200 rounded-lg w-full md:w-[380px] shadow-sm hover:shadow-md transition-shadow duration-300 md:fixed">
      <div className="relative w-full aspect-[9/10]">
        <Image
          src="https://utfs.io/f/Y1PlqwjQNgrhNlGVfXQPqUrzoXGgc5bKaSTF72l4EfC08m1w"
          alt="Profile"
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="rounded-t-lg object-cover"
          priority={true}
        />
        {/* Overlay text on the photo */}
        <div className="absolute bottom-0 left-0 right-0 pb-3 pt-10 bg-gradient-to-t from-black/60 via-black/40 to-transparent text-center">
          <h1 className="text-white">FABIAN ROEBEN</h1>
          <p className="font-light text-lg text-white">
            Ph.D. Candidate in Economics
          </p>
        </div>
      </div>
      <div className="bg-background rounded-b-lg p-4">
        <SocialLinks />
      </div>
    </div>
  )
}