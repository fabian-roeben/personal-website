export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-4 max-w-screen-xl">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Fabian Roeben
        </p>
      </div>
    </footer>
  )
}