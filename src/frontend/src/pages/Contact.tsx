import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useContactForm } from '@/hooks/useContactForm';
import { Loader2, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredService: '',
    message: '',
  });

  const { submitForm, isPending, isSuccess } = useContactForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col min-h-[600px]">
        <section className="py-16 md:py-24 flex-1 flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto border-border/50 bg-card text-center">
              <CardContent className="pt-12 pb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-serif text-3xl font-semibold mb-4">
                  Thank You for Reaching Out
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Your message has been received. I'll get back to you within 24-48 hours to 
                  discuss your session and answer any questions you may have.
                </p>
                <p className="text-sm text-muted-foreground">
                  In the meantime, feel free to explore more about the services and prepare 
                  any questions you'd like to discuss.
                </p>
                <Button
                  onClick={() => window.location.reload()}
                  variant="outline"
                  className="mt-6"
                >
                  Send Another Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-6">
            Begin Your Journey
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to explore the wisdom of your soul? Fill out the form below to book a session 
            or ask any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border/50 bg-card">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Book a Session</CardTitle>
                  <CardDescription>
                    Share your details and I'll be in touch to schedule your healing session.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          required
                          disabled={isPending}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          required
                          disabled={isPending}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        disabled={isPending}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Preferred Service *</Label>
                      <Select
                        value={formData.preferredService}
                        onValueChange={(value) => handleChange('preferredService', value)}
                        required
                        disabled={isPending}
                      >
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="akashic-reading">Akashic Record Reading</SelectItem>
                          <SelectItem value="energy-healing">Energy Healing Session</SelectItem>
                          <SelectItem value="combined">Combined Reading & Healing</SelectItem>
                          <SelectItem value="not-sure">Not Sure / Have Questions</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about what you're seeking or any questions you have..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        required
                        disabled={isPending}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isPending}>
                      {isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-border/50 bg-card">
                <CardHeader>
                  <CardTitle className="font-serif text-xl">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <p className="text-sm text-muted-foreground">
                        hello@akashichealing.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Phone</p>
                      <p className="text-sm text-muted-foreground">
                        (555) 123-4567
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Location</p>
                      <p className="text-sm text-muted-foreground">
                        Sessions available in-person and online
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-muted/50">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Response Time:</strong> I typically respond 
                    within 24-48 hours. If you don't hear back, please check your spam folder or 
                    try reaching out via phone.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
