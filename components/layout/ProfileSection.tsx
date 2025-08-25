'use client'
import Image from "next/image"
import { SocialLinks } from "../social/SocialLinks"
import { useLayoutEffect, useRef, useState } from "react"

export function ProfileSection() {
  const [loaded, setLoaded] = useState(false)
  const [animate, setAnimate] = useState(true)
  const imgRef = useRef<HTMLImageElement | null>(null)

  useLayoutEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true)
      setAnimate(false)
    }
  }, [])

  return (
    <div className="flex flex-col items-start text-left md:items-start md:text-left border border-gray-200 rounded-lg w-full md:w-[380px] shadow-sm hover:shadow-md transition-shadow duration-300 md:fixed">
      <div className="relative w-full aspect-[9/10] overflow-hidden">
        <Image
          ref={imgRef}
          src="https://utfs.io/f/Y1PlqwjQNgrhNlGVfXQPqUrzoXGgc5bKaSTF72l4EfC08m1w"
          alt="Portrait of Fabian Roeben"
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'><rect width='16' height='16' fill='%23c7c7c7'/></svg>"
          className={`rounded-t-lg object-cover ${animate ? "transition-opacity" : ""} transition-transform duration-500 ease-in-out motion-safe:hover:scale-105 ${loaded ? "opacity-100" : "opacity-0"}`}
          priority={true}
          onLoadingComplete={() => setLoaded(true)}
        />
        <div className="absolute bottom-0 left-0 right-0 pb-3 pt-10 bg-gradient-to-t from-black/60 via-black/40 to-transparent text-center z-20">
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