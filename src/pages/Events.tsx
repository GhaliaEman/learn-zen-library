import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventCard } from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Calendar, Bell } from "lucide-react";

const upcomingEvents = [
  {
    title: "Research Writing Workshop",
    date: "Dec 18, 2024",
    time: "2:00 PM - 4:00 PM",
    description: "Learn effective research writing techniques from our experts. Topics include thesis development, citation methods, and academic writing best practices.",
    type: "workshop" as const,
  },
  {
    title: "Book Club: Classic Literature",
    date: "Dec 20, 2024",
    time: "4:00 PM - 5:30 PM",
    description: "Join us for a lively discussion of Jane Austen's 'Pride and Prejudice'. Open to all members.",
    type: "reading" as const,
  },
  {
    title: "Digital Literacy Seminar",
    date: "Dec 22, 2024",
    time: "10:00 AM - 12:00 PM",
    description: "Learn how to evaluate online sources, avoid misinformation, and use digital tools effectively for research.",
    type: "seminar" as const,
  },
  {
    title: "Essay Writing Competition",
    date: "Jan 5, 2025",
    time: "Full Day",
    description: "Annual essay competition for students. Topic: 'The Future of Education'. Prizes for top three entries.",
    type: "competition" as const,
  },
  {
    title: "Meet the Author: Local Writers",
    date: "Jan 10, 2025",
    time: "3:00 PM - 5:00 PM",
    description: "Meet local authors and learn about their writing journey. Book signing session included.",
    type: "seminar" as const,
  },
  {
    title: "Poetry Reading Night",
    date: "Jan 15, 2025",
    time: "6:00 PM - 8:00 PM",
    description: "An evening of poetry readings by students and faculty. Open mic session available.",
    type: "reading" as const,
  },
];

const announcements = [
  {
    title: "Extended Library Hours During Exams",
    date: "Dec 10, 2024",
    content: "The library will remain open until 11 PM during the examination period (Dec 15 - Dec 30). Additional study spaces will be available.",
    important: true,
  },
  {
    title: "New Digital Resources Added",
    date: "Dec 8, 2024",
    content: "We have added 500+ new e-books to our collection, including the latest textbooks for Computer Science and Business courses.",
    important: false,
  },
  {
    title: "Holiday Closure Notice",
    date: "Dec 5, 2024",
    content: "The library will be closed on December 25-26 and January 1 for the holidays. Happy Holidays!",
    important: true,
  },
  {
    title: "New Self-Checkout Kiosks",
    date: "Dec 1, 2024",
    content: "We've installed new self-checkout kiosks near the entrance for faster book borrowing and returns.",
    important: false,
  },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="hero-gradient">
        <div className="container px-4 lg:px-8 py-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Events & Announcements
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl">
            Stay updated with library events, workshops, and important announcements.
          </p>
        </div>
      </section>

      <div className="container px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Events */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Calendar className="h-5 w-5" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-foreground">Upcoming Events</h2>
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
          </div>

          {/* Announcements Sidebar */}
          <div>
            <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-8">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20 text-secondary">
                  <Bell className="h-5 w-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">Announcements</h2>
              </div>
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div
                    key={announcement.title}
                    className="p-4 rounded-xl bg-card border border-border/50 card-shadow"
                  >
                    {announcement.important && (
                      <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded bg-destructive/10 text-destructive mb-2">
                        Important
                      </span>
                    )}
                    <h3 className="font-medium text-foreground mb-1">{announcement.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{announcement.date}</p>
                    <p className="text-sm text-muted-foreground">{announcement.content}</p>
                  </div>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/10">
                <h3 className="font-serif font-bold text-foreground mb-2">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Subscribe to receive event notifications and announcements.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-sm outline-none focus:border-primary"
                  />
                  <Button size="sm">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
