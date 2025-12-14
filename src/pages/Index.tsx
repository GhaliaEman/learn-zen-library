import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { BookCard } from "@/components/BookCard";
import { FeatureCard } from "@/components/FeatureCard";
import { EventCard } from "@/components/EventCard";
import {
  BookOpen,
  GraduationCap,
  Users,
  Clock,
  Laptop,
  FileText,
  ArrowRight,
  Bell,
  ChevronRight,
} from "lucide-react";
import libraryHero from "@/assets/library-hero.jpg";

const featuredBooks = [
  { title: "Introduction to Algorithms", author: "Thomas H. Cormen", category: "Science", available: true },
  { title: "The Art of War", author: "Sun Tzu", category: "History", available: true },
  { title: "Principles of Economics", author: "N. Gregory Mankiw", category: "Commerce", available: false },
  { title: "Clean Code", author: "Robert C. Martin", category: "IT", available: true },
];

const notices = [
  { title: "Extended Library Hours During Exams", date: "Dec 10, 2024", urgent: true },
  { title: "New Digital Resources Available", date: "Dec 8, 2024", urgent: false },
  { title: "Holiday Closure: Dec 25-26", date: "Dec 5, 2024", urgent: false },
];

const features = [
  { icon: BookOpen, title: "50,000+ Books", description: "Access our extensive collection covering all academic subjects and beyond." },
  { icon: Laptop, title: "Digital Resources", description: "E-books, journals, and databases available 24/7 from anywhere." },
  { icon: Users, title: "Study Rooms", description: "Book private and group study spaces for focused learning." },
  { icon: GraduationCap, title: "Research Support", description: "Expert librarians to help with your academic research needs." },
];

const upcomingEvents = [
  { title: "Research Writing Workshop", date: "Dec 18, 2024", time: "2:00 PM", description: "Learn effective research writing techniques from our experts.", type: "workshop" as const },
  { title: "Book Club: Classic Literature", date: "Dec 20, 2024", time: "4:00 PM", description: "Join us for a discussion on 'Pride and Prejudice'.", type: "reading" as const },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={libraryHero}
            alt="Library interior with students studying"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient opacity-90" />
        </div>

        <div className="relative container px-4 lg:px-8 py-20 lg:py-32">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium backdrop-blur-sm mb-6">
              <Bell className="h-4 w-4" />
              Extended hours during exam season
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Welcome to <span className="text-accent">EduLibrary</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl">
              Your gateway to knowledge and academic excellence. Explore our vast collection of books, 
              digital resources, and learning spaces designed to support your educational journey.
            </p>

            <SearchBar size="large" placeholder="Search for books, authors, subjects..." className="mb-8" />

            <div className="flex flex-wrap gap-4">
              <Link to="/catalog">
                <Button variant="accent" size="xl">
                  Explore Catalog
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/digital">
                <Button variant="heroOutline" size="xl">
                  Digital Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative bg-primary-foreground/10 backdrop-blur-sm border-t border-primary-foreground/10">
          <div className="container px-4 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-primary-foreground">
              <div>
                <p className="font-serif text-2xl md:text-3xl font-bold">50,000+</p>
                <p className="text-sm text-primary-foreground/70">Books</p>
              </div>
              <div>
                <p className="font-serif text-2xl md:text-3xl font-bold">10,000+</p>
                <p className="text-sm text-primary-foreground/70">E-Books</p>
              </div>
              <div>
                <p className="font-serif text-2xl md:text-3xl font-bold">5,000+</p>
                <p className="text-sm text-primary-foreground/70">Members</p>
              </div>
              <div>
                <p className="font-serif text-2xl md:text-3xl font-bold">100+</p>
                <p className="text-sm text-primary-foreground/70">Journals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Our Library?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive resources and services to support your academic success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
            />
          ))}
        </div>
      </section>

      {/* Latest Books & Notices */}
      <section className="bg-muted/50">
        <div className="container px-4 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Featured Books */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  New Arrivals
                </h2>
                <Link to="/catalog" className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                  View All <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {featuredBooks.map((book) => (
                  <BookCard
                    key={book.title}
                    title={book.title}
                    author={book.author}
                    category={book.category}
                    available={book.available}
                  />
                ))}
              </div>
            </div>

            {/* Notices */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  Notices
                </h2>
                <Link to="/events" className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                  View All <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="space-y-4">
                {notices.map((notice) => (
                  <div
                    key={notice.title}
                    className="p-4 rounded-xl bg-card border border-border/50 card-shadow hover:card-shadow-hover transition-all"
                  >
                    {notice.urgent && (
                      <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-destructive/10 text-destructive mb-2">
                        Important
                      </span>
                    )}
                    <h3 className="font-medium text-foreground mb-1">{notice.title}</h3>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {notice.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="container px-4 lg:px-8 py-16 lg:py-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground">Join our workshops, seminars, and reading sessions.</p>
          </div>
          <Link to="/events" className="hidden sm:flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            View All Events <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map((event) => (
            <EventCard
              key={event.title}
              title={event.title}
              date={event.date}
              time={event.time}
              description={event.description}
              type={event.type}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient">
        <div className="container px-4 lg:px-8 py-16 lg:py-24 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join thousands of students and educators who have discovered the joy of learning at EduLibrary.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/login">
              <Button variant="accent" size="xl">
                Join Library
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="heroOutline" size="xl">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
