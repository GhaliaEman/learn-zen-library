import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  BookOpen,
  Users,
  Clock,
  HelpCircle,
  CalendarCheck,
  Printer,
  Laptop,
  Coffee,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Book Issue & Return",
    description: "Borrow books for up to 14 days. Renew online or at the desk. Late fees apply after the due date.",
    features: ["Up to 4 books at a time", "14-day lending period", "Online renewal available"],
  },
  {
    icon: Users,
    title: "Study Rooms",
    description: "Reserve private or group study rooms for focused learning sessions.",
    features: ["Individual study carrels", "Group discussion rooms", "Online booking system"],
  },
  {
    icon: HelpCircle,
    title: "Reference Help",
    description: "Our expert librarians are here to help with your research and reference needs.",
    features: ["Research guidance", "Citation assistance", "Information literacy workshops"],
  },
  {
    icon: CalendarCheck,
    title: "Inter-Library Loan",
    description: "Request books from partner libraries if we don't have what you need.",
    features: ["Network of 50+ libraries", "Usually within 5-7 days", "No extra charge"],
  },
  {
    icon: Printer,
    title: "Printing & Scanning",
    description: "Access printing, scanning, and photocopying services at affordable rates.",
    features: ["Color & B/W printing", "High-speed scanners", "Student discounts"],
  },
  {
    icon: Laptop,
    title: "Computer Lab",
    description: "Use our computers with internet access and essential software.",
    features: ["40+ workstations", "Microsoft Office suite", "Free WiFi throughout"],
  },
];

const studentServices = [
  "Book borrowing and renewal",
  "Access to study rooms",
  "Digital library access",
  "Printing services",
  "Research assistance",
  "Inter-library loans",
];

const facultyServices = [
  "Extended borrowing privileges (30 days)",
  "Priority study room booking",
  "Course reserve services",
  "Research consultation",
  "Journal access support",
  "Bulk book requests for courses",
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="hero-gradient">
        <div className="container px-4 lg:px-8 py-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Library Services
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Comprehensive services designed to support your academic journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container px-4 lg:px-8 py-16 lg:py-24">
        <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl bg-card border border-border/50 card-shadow hover:card-shadow-hover transition-all"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Student & Faculty Services */}
      <section className="bg-muted/50">
        <div className="container px-4 lg:px-8 py-16 lg:py-24">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
            Services by Member Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Students */}
            <div className="p-8 rounded-xl bg-card border border-border/50 card-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Users className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-foreground">For Students</h3>
                  <p className="text-sm text-muted-foreground">Undergraduate & Graduate</p>
                </div>
              </div>
              <ul className="space-y-3">
                {studentServices.map((service) => (
                  <li key={service} className="flex items-center gap-3 text-muted-foreground">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
                      ✓
                    </span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Faculty */}
            <div className="p-8 rounded-xl bg-card border border-border/50 card-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/20 text-secondary">
                  <BookOpen className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-foreground">For Faculty</h3>
                  <p className="text-sm text-muted-foreground">Teachers & Researchers</p>
                </div>
              </div>
              <ul className="space-y-3">
                {facultyServices.map((service) => (
                  <li key={service} className="flex items-center gap-3 text-muted-foreground">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-secondary text-xs">
                      ✓
                    </span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Study Room Booking CTA */}
      <section className="container px-4 lg:px-8 py-16 lg:py-24">
        <div className="p-8 lg:p-12 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-border/50">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Need a Quiet Space to Study?
              </h2>
              <p className="text-muted-foreground mb-6">
                Book a private study room online. Available for individuals and groups of up to 8 people.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/login">
                  <Button size="lg">
                    Book a Room <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center p-6 rounded-xl bg-card border border-border/50">
                <Coffee className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">Coffee Corner</p>
                <p className="text-xs text-muted-foreground">Near study area</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-card border border-border/50">
                <Clock className="h-8 w-8 text-secondary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">Open Late</p>
                <p className="text-xs text-muted-foreground">Until 9 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
