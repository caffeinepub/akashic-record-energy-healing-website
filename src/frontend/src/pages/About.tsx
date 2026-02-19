import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Sparkles, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
            About the Practice
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A sacred space for spiritual exploration, healing, and transformation through 
            the ancient wisdom of the Akashic Records and energy healing.
          </p>
        </div>
      </section>

      {/* What are Akashic Records */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                What are the Akashic Records?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Akashic Records are often described as a cosmic library—an energetic database 
                  that contains the complete history of every soul's journey through time. This 
                  includes past lives, present circumstances, and potential future paths.
                </p>
                <p>
                  Accessing your Akashic Records provides profound insights into recurring patterns, 
                  soul contracts, life lessons, and the deeper purpose behind your experiences. 
                  It's a tool for understanding yourself at the deepest level.
                </p>
                <p>
                  During a reading, I serve as a channel to access this sacred information, 
                  translating the energetic wisdom into practical guidance that supports your 
                  healing and growth.
                </p>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <img
                src="/assets/generated/akashic-icon.dim_256x256.png"
                alt="Akashic Records Symbol"
                className="w-full max-w-md mx-auto rounded-lg shadow-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Energy Healing Approach */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/assets/generated/healing-hands.dim_512x512.png"
                alt="Energy Healing"
                className="w-full max-w-md mx-auto rounded-lg shadow-glow"
              />
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                The Healing Methodology
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Energy healing works with the subtle energy systems of the body—including chakras, 
                  meridians, and the auric field—to identify and release blockages that may be 
                  causing physical, emotional, or spiritual discomfort.
                </p>
                <p>
                  My approach combines intuitive energy work with insights from the Akashic Records, 
                  creating a holistic healing experience. Each session is tailored to your unique 
                  needs, addressing the root causes of imbalance rather than just symptoms.
                </p>
                <p>
                  Sessions are conducted in a safe, nurturing environment where you can relax deeply 
                  and allow the healing energy to flow. Many clients report feeling lighter, more 
                  peaceful, and more aligned after their sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practitioner Background */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
                <Sparkles className="h-8 w-8 text-secondary" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                About the Practitioner
              </h2>
            </div>

            <Card className="border-border/50 bg-card">
              <CardContent className="pt-6">
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    With over a decade of experience in spiritual healing and intuitive guidance, 
                    I have dedicated my life to helping others discover their soul's wisdom and 
                    achieve profound transformation.
                  </p>
                  <p>
                    My journey began with my own spiritual awakening, which led me to study various 
                    healing modalities including Reiki, chakra balancing, and intuitive energy work. 
                    I became certified as an Akashic Records reader after years of training and 
                    personal practice.
                  </p>
                  <p>
                    I believe that everyone has the capacity for deep healing and spiritual growth. 
                    My role is to create a sacred space where you can safely explore your soul's 
                    journey, release what no longer serves you, and step into your highest potential.
                  </p>
                  <p className="font-medium text-foreground pt-4">
                    Certifications & Training:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Certified Akashic Records Consultant</li>
                    <li>Reiki Master Teacher</li>
                    <li>Advanced Energy Healing Practitioner</li>
                    <li>Intuitive Development & Channeling</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
