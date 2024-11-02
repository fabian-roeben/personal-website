import Image from "next/image"
import { SocialLinks } from "../social/SocialLinks"

export function ProfileSection() {
  return (
    <div className="flex flex-col items-start text-left md:items-start md:text-left border border-gray-200 rounded-lg w-full md:w-[280px] shadow-sm hover:shadow-md">
      <div className="relative w-full aspect-square">
        <Image
          src="/profile-photo.jpg"
          alt="Profile"
          fill
          sizes="(max-width: 768px) 100vw, 280px"
          className="rounded-t-lg object-cover"
          priority={true}
        />
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Fabian Roeben</h1>
        <p className="text-muted-foreground mt-0.5">Ph.D. Candidate in Economics</p>
        <p className="text-muted-foreground">at the University of Cologne</p>
        <SocialLinks className="mt-4" />
      </div>
    </div>
  )
}