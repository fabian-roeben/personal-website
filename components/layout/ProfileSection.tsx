import Image from "next/image"
import { SocialLinks } from "../social/SocialLinks"

export function ProfileSection() {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <Image
        src="/profile-photo.jpg"
        alt="Profile"
        width={200}
        height={200}
        className="rounded-full shadow-sm transition-all duration-300 hover:shadow-lg"
        priority
      />
      <h1 className="mt-4 text-2xl font-bold">Fabian Roeben</h1>
      <p className="text-muted-foreground mt-2">Ph.D. Candidate in Economics</p>
      <p className="text-muted-foreground">at the University of Cologne</p>
      <SocialLinks className="mt-6" />
    </div>
  )
}