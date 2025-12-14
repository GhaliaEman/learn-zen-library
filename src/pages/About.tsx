import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Target,
  Clock,
  Shield,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";

const rules = [
  "Maintain silence in the reading areas",
  "Handle books with care and return them on time",
  "No food or drinks allowed inside the library",
  "Valid ID card required for entry",
  "Mobile phones must be on silent mode",
  "Maximum 4 books can be borrowed at a time",
  "Return borrowed books within 14 days",
  "Report any damaged or lost books immediately",
];

const timings = [
  { day: "Monday - Friday", hours: "8:00 AM - 9:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
  { day: "Sunday", hours: "10:00 AM - 6:00 PM" },
  { day: "Public Holidays", hours: "Closed" },
];

const milestones = [
  { year: "1985", title: "Foundation", description: "Library established with 5,000 books" },
  { year: "2000", title: "Digital Era", description: "Introduced computer labs and internet access" },
  { year: "2010", title: "Expansion", description: "New wing added with 25,000 more books" },
  { year: "2020", title: "Digital Library", description: "Launched comprehensive e-book collection" },
  { year: "2024", title: "Modern Hub", description: "Renovated with smart study spaces" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient">
        <div className="container px-4 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              About Our Library
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              For nearly four decades, EduLibrary has been a cornerstone of academic excellence, 
              providing students and educators with the resources they need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Target className="h-7 w-7" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To foster a love of learning and provide equitable access to information resources 
              that support the educational, research, and personal development needs of our diverse 
              community of students, faculty, and staff.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to creating an inclusive environment where knowledge flows freely, 
              critical thinking is encouraged, and every visitor leaves more informed than when they arrived.
            </p>
          </div>

          <div className="space-y-6">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/20 text-secondary">
              <Award className="h-7 w-7" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be recognized as a leading academic library that empowers students and educators 
              through innovative services, cutting-edge technology, and a rich collection of resources.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We envision a future where every student has the tools and support they need to 
              achieve their academic goals and become lifelong learners.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/50">
        <div className="container px-4 lg:px-8 py-16 lg:py-24">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="p-6 rounded-xl bg-card border border-border/50 card-shadow inline-block">
                      <span className="text-sm font-bold text-primary">{milestone.year}</span>
                      <h3 className="font-serif font-bold text-lg text-foreground mt-1">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="h-4 w-4 rounded-full bg-primary border-4 border-background shrink-0" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Timings */}
      <section className="container px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Rules */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-foreground">Library Rules</h2>
            </div>
            <ul className="space-y-3">
              {rules.map((rule, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {index + 1}
                  </span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          {/* Timings */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/20 text-secondary">
                <Clock className="h-6 w-6" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-foreground">Library Hours</h2>
            </div>
            <div className="rounded-xl border border-border/50 overflow-hidden">
              {timings.map((timing, index) => (
                <div
                  key={timing.day}
                  className={`flex items-center justify-between p-4 ${
                    index !== timings.length - 1 ? "border-b border-border/50" : ""
                  }`}
                >
                  <span className="font-medium text-foreground">{timing.day}</span>
                  <span className="text-muted-foreground">{timing.hours}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-accent/10 border border-accent/20">
              <p className="text-sm text-foreground">
                <strong>Note:</strong> Extended hours during examination periods. Check announcements for updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient">
        <div className="container px-4 lg:px-8 py-16 text-center">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground mb-4">
            Become a Member Today
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join our community of learners and get access to all our resources.
          </p>
          <Link to="/login">
            <Button variant="accent" size="xl">
              Join Library <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
