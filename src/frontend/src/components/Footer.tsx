import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'akashic-healing'
  );

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-3">Akashic Healing</h3>
            <p className="text-sm text-muted-foreground">
              Guiding souls through the wisdom of the Akashic Records and the transformative power of energy healing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-3">Connect</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Ready to begin your healing journey?
            </p>
            <a
              href="/contact"
              className="text-sm text-primary hover:text-accent transition-colors font-medium"
            >
              Book a session →
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Akashic Healing. Built with{' '}
            <Heart className="h-4 w-4 text-primary fill-primary" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
