import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "123 Education Lane, Knowledge City, KC 54321",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (555) 123-4567",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@edulibrary.edu",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Mon-Fri: 8AM-9PM, Sat-Sun: 10AM-6PM",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="hero-gradient">
        <div className="container px-4 lg:px-8 py-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      <section className="container px-4 lg:px-8 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your first name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your last name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground outline-none focus:border-primary transition-colors">
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="membership">Membership</option>
                  <option value="books">Book Request</option>
                  <option value="services">Services</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button type="submit" size="lg">
                Send Message <Send className="h-4 w-4 ml-2" />
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="p-4 rounded-xl bg-card border border-border/50 card-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{info.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{info.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="rounded-xl overflow-hidden border border-border/50 card-shadow">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Interactive map would be displayed here
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    123 Education Lane, Knowledge City
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Help */}
            <div className="mt-8 p-6 rounded-xl bg-secondary/10 border border-secondary/20">
              <h3 className="font-serif font-bold text-foreground mb-2">Need Immediate Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our reference desk is available during library hours for quick questions.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary" size="sm">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
