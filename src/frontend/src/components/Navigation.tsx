import { useState } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Sparkles className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
            <span className="font-serif text-xl font-semibold text-foreground">
              Akashic Healing
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <Button className="ml-4" variant="default">
                Book Session
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-1 border-t border-border/40">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full" variant="default">
                  Book Session
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
