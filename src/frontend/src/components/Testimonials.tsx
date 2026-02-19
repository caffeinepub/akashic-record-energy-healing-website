import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'The Akashic Record reading was profoundly transformative. I gained clarity on patterns that had been holding me back for years. The energy healing session that followed left me feeling lighter and more aligned than ever before.',
    rating: 5,
  },
  {
    name: 'Michael T.',
    text: 'I was skeptical at first, but the depth of insight from my reading was remarkable. The practitioner created such a safe, sacred space. I left with practical guidance and a renewed sense of purpose.',
    rating: 5,
  },
  {
    name: 'Elena R.',
    text: 'The energy healing session was unlike anything I\'ve experienced. I could feel blockages releasing and my energy flowing more freely. The combination with Akashic guidance provided both spiritual insight and tangible healing.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
            Client Experiences
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from those who have embarked on their healing journey through the Akashic Records
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 bg-card hover:shadow-glow transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-medium text-foreground">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
