import Link from "next/link"
import Image from "next/image"
import { CustomLink } from "../ui/link"

export function Header() {
  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <span className="inline-flex items-center">Fabian Roeben</span>
          </Link>
          <div className="flex gap-6">
            <Link href="/#research" className="text-muted-foreground hover:text-red-700 duration-300">
              Research
            </Link>
            <CustomLink href="/cv.pdf">CV</CustomLink>
          </div>
        </div>
      </nav>
    </header>
  )
}