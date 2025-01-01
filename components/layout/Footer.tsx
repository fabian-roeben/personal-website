export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto pl-4 lg:pl-16 py-4 max-w-6xl">
        <p className="text-muted-foreground text-xs">
          © {currentYear} Fabian Roeben
        </p>
      </div>
    </footer>
  )
}