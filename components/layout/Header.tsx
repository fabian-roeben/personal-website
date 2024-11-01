import Link from "next/link"

export function Header() {
  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-medium">
            Fabian Roeben
          </Link>
          <div className="flex gap-6">
            <Link href="/#research" className="text-muted-foreground hover:text-red-700 duration-300">
              Research
            </Link>
            <Link 
              href="/cv.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-red-700 duration-300"
            >
              CV
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}