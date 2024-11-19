"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { CustomLink } from "../ui/link"
import { ThemeToggle } from "../ui/theme-toggle"
import { motion, useAnimation } from "framer-motion"

export function Header() {
  const controls = useAnimation()
  const prevScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > prevScrollY.current) {
        controls.start({
          top: -100,
          transition: { duration: 0.7 }
        })
      } else {
        controls.start({
          top: 0,
          transition: { duration: 0.7 }
        })
      }

      prevScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [controls])

  return (
    <div className="h-24">
      <motion.header
        animate={controls}
        initial={{ top: 0 }}
        style={{ position: "fixed", top: 0, width: "calc(100% - 2rem)", maxWidth: "64rem", left: "50%", transform: "translateX(-50%)" }}
        className="bg-white/80 dark:bg-gray-800/25 backdrop-blur-md shadow-lg dark:shadow-gray-950/80 rounded-xl z-[100] mt-4"
      >
        <nav className="container px-4 py-4 max-w-6xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold">
              <span className="inline-flex items-center">Fabian Roeben</span>
            </Link>
            <div className="flex gap-6">
              <Link
                href="/#research"
                className="text-base text-muted-foreground hover:text-accent-red duration-300 dark:duration-0"
              >
                Research
              </Link>
              <CustomLink href="/cv.pdf" className="text-base">
                CV
              </CustomLink>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </motion.header>
    </div>
  )
}