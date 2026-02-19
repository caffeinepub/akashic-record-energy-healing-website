import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { BookOpen, Heart, Sparkles, Clock } from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: 'Akashic Record Reading',
    duration: '60 minutes',
    description:
      'Dive deep into your soul\'s history and gain clarity on life patterns, relationships, and your spiritual path. Receive personalized insights and guidance from your Akashic Records.',
    features: [
      'Access to your soul\'s records',
      'Insight into past life patterns',
      'Guidance on current challenges',
      'Understanding of soul contracts',
      'Recorded session for reflection',
    ],
  },
  {
    icon: Heart,
    title: 'Energy Healing Session',
    duration: '75 minutes',
    description:
      'Experience deep relaxation and energetic balance through intuitive energy healing. Release blockages, restore harmony to your chakras, and align your energy field.',
    features: [
      'Chakra balancing and clearing',
      'Auric field cleansing',
      'Release of energetic blockages',
      'Grounding and protection techniques',
      'Integration guidance',
    ],
  },
  {
    icon: Sparkles,
    title: 'Combined Reading & Healing',
    duration: '90 minutes',
    description:
      'The ultimate transformative experience combining Akashic Record insights with energy healing. Understand the root causes of imbalances and heal them in the same session.',
    features: [
      'Comprehensive Akashic reading',
      'Targeted energy healing',
      'Soul-level transformation',
      'Practical integration tools',
      'Extended support and guidance',
    ],
  },
];

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
            Healing Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the session that resonates with your soul's needs. Each offering is designed 
            to support your unique healing journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="border-border/50 bg-card hover:shadow-glow transition-all duration-300 flex flex-col"
                >
                  <CardHeader>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="font-serif text-2xl mb-2">
                      {service.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      {service.duration}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-medium text-foreground mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted-foreground">
                            <Sparkles className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto">
                      <Link to="/contact">
                        <Button className="w-full" variant="default">
                          Book This Session
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
              What to Expect
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                All sessions are conducted in a safe, sacred space—either in person or via video call. 
                You'll receive a confirmation email with preparation guidelines to help you get the 
                most from your session.
              </p>
              <p>
                Sessions can be recorded (with your permission) so you can revisit the insights and 
                guidance. Many clients find it helpful to listen again as they integrate the healing.
              </p>
              <p>
                If you're unsure which session is right for you, feel free to reach out. I'm happy 
                to discuss your needs and help you choose the best option for your journey.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/contact">
                <Button size="lg" className="text-base px-8">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
