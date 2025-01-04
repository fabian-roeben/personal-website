export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t">
      <div className="container mx-auto px-0 py-4 max-w-screen-xl">
        <p className="text-muted-foreground text-sm md:text-left text-center">
          © {currentYear} Fabian Roeben
        </p>
      </div>
    </footer>
  )
}