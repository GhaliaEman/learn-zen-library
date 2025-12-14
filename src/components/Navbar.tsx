import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, BookOpen, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Book Catalog", path: "/catalog" },
  { name: "Digital Library", path: "/digital" },
  { name: "Services", path: "/services" },
  { name: "Events", path: "/events" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <BookOpen className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="hidden sm:block">
            <span className="font-serif text-lg font-bold text-foreground">EduLibrary</span>
            <span className="block text-xs text-muted-foreground">Knowledge Center</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary rounded-md hover:bg-muted"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/catalog" className="hidden sm:block">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/login" className="hidden sm:block">
            <Button variant="outline" size="sm">
              Login
            </Button>
          </Link>
          <Link to="/login" className="hidden sm:block">
            <Button size="sm">Join Library</Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 border-t border-border/50",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container flex flex-col gap-1 py-4 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-primary rounded-md hover:bg-muted"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-2 mt-4 px-4">
            <Link to="/login" className="flex-1">
              <Button variant="outline" className="w-full">Login</Button>
            </Link>
            <Link to="/login" className="flex-1">
              <Button className="w-full">Join Library</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
