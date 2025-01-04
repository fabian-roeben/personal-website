"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { CustomLink } from "../ui/link"
import { ThemeToggle } from "../ui/theme-toggle"

export function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY
          const scrollDifference = currentScrollY - lastScrollY.current
          
          if (headerRef.current) {
            // Only hide header if we're not at the top and scrolling down
            if (scrollDifference > 5 && currentScrollY > 100) {
              headerRef.current.classList.add('header-hidden')
            } 
            // Show header when scrolling up or at the top
            else if (scrollDifference < -5 || currentScrollY < 100) {
              headerRef.current.classList.remove('header-hidden')
            }
          }
          
          lastScrollY.current = currentScrollY
          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="h-24">
      <header
        ref={headerRef}
        className="fixed w-[calc(100%-2rem)] max-w-screen-xl left-1/2 -translate-x-1/2 bg-white/80 dark:bg-gray-800/25 backdrop-blur-md shadow-lg dark:shadow-gray-950/80 rounded-lg z-[100] mt-4 transition-transform duration-700 ease-in-out"
      >
        <nav className="container px-4 py-4 max-w-screen-xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 md:gap-3">
              <span className="font-medium">Fabian Roeben</span>
            </Link>
            <div className="flex items-center gap-3 md:gap-5">
              <Link
                href="/#research"
                className="text-muted-foreground hover:text-accent-red duration-300 dark:duration-0"
              >
                Research
              </Link>
              <CustomLink href="/cv_roeben.pdf">
                CV
              </CustomLink>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}