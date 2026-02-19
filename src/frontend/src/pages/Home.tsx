import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Sparkles, Heart, BookOpen } from 'lucide-react';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x1080.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="inline-flex items-center justify-center mb-6">
              <Sparkles className="h-12 w-12 text-primary animate-float" />
            </div>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 text-balance">
              Unlock the Wisdom of Your Soul
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Journey through the Akashic Records and experience profound energy healing. 
              Discover your soul's path, release blockages, and embrace your highest potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="text-base px-8">
                  Book Your Session
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-base px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Akashic Records</h3>
              <p className="text-muted-foreground leading-relaxed">
                Access the infinite library of your soul's journey. Gain clarity on past patterns, 
                present challenges, and future possibilities.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Energy Healing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Release energetic blockages and restore balance to your mind, body, and spirit 
                through gentle, transformative healing sessions.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                <Sparkles className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Soul Guidance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Receive personalized insights and practical guidance to navigate your spiritual 
                path with confidence and grace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step toward healing, clarity, and transformation. 
            Book your personalized session today.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-base px-8">
              Schedule a Session
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
