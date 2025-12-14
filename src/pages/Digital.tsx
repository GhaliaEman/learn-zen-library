import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  BookOpen,
  FileText,
  Globe,
  Download,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const resources = [
  {
    category: "E-Books",
    icon: BookOpen,
    description: "Access thousands of digital textbooks and reference materials",
    items: [
      { title: "Oxford Academic E-Books", count: "2,500+ titles" },
      { title: "Springer Link Collection", count: "1,800+ titles" },
      { title: "Cambridge Core", count: "1,200+ titles" },
      { title: "JSTOR Open Access", count: "500+ titles" },
    ],
  },
  {
    category: "Online Journals",
    icon: FileText,
    description: "Peer-reviewed academic journals across all disciplines",
    items: [
      { title: "IEEE Xplore", count: "Science & Technology" },
      { title: "PubMed Central", count: "Biomedical & Life Sciences" },
      { title: "SSRN", count: "Social Sciences" },
      { title: "arXiv", count: "Physics & Mathematics" },
    ],
  },
  {
    category: "Research Databases",
    icon: Globe,
    description: "Comprehensive databases for academic research",
    items: [
      { title: "Google Scholar", count: "All Disciplines" },
      { title: "Web of Science", count: "Citation Index" },
      { title: "Scopus", count: "Abstract & Citation" },
      { title: "ProQuest", count: "Dissertations & Theses" },
    ],
  },
];

const popularEbooks = [
  { title: "Data Science from Scratch", author: "Joel Grus", downloads: 1234 },
  { title: "Python for Data Analysis", author: "Wes McKinney", downloads: 987 },
  { title: "Clean Architecture", author: "Robert C. Martin", downloads: 856 },
  { title: "Machine Learning Yearning", author: "Andrew Ng", downloads: 745 },
];

export default function Digital() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="hero-gradient">
        <div className="container px-4 lg:px-8 py-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Digital Library
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl">
            Access e-books, academic journals, and research databases from anywhere, anytime.
          </p>
          <SearchBar
            size="large"
            placeholder="Search digital resources..."
          />
        </div>
      </section>

      {/* Resource Categories */}
      <section className="container px-4 lg:px-8 py-16 lg:py-24">
        <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
          Browse Digital Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div
              key={resource.category}
              className="p-6 rounded-xl bg-card border border-border/50 card-shadow hover:card-shadow-hover transition-all"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                <resource.icon className="h-7 w-7" />
              </div>
              <h3 className="font-serif font-bold text-xl text-foreground mb-2">
                {resource.category}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">{resource.description}</p>
              <ul className="space-y-3">
                {resource.items.map((item) => (
                  <li key={item.title} className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{item.title}</span>
                    <span className="text-xs text-muted-foreground">{item.count}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full mt-6">
                Explore <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Popular E-Books */}
      <section className="bg-muted/50">
        <div className="container px-4 lg:px-8 py-16 lg:py-24">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-4">
            Popular E-Books
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Most downloaded digital books this month
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularEbooks.map((ebook, index) => (
              <div
                key={ebook.title}
                className="p-6 rounded-xl bg-card border border-border/50 card-shadow hover:card-shadow-hover transition-all text-center"
              >
                <div className="h-32 w-24 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="font-serif text-4xl text-primary/40">{index + 1}</span>
                </div>
                <h3 className="font-serif font-bold text-foreground line-clamp-2 mb-1">
                  {ebook.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{ebook.author}</p>
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-4">
                  <Download className="h-3 w-3" />
                  {ebook.downloads.toLocaleString()} downloads
                </div>
                <Button variant="secondary" size="sm" className="w-full">
                  Access E-Book
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Access */}
      <section className="container px-4 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
            How to Access Digital Resources
          </h2>
          <p className="text-muted-foreground mb-12">
            Follow these simple steps to start exploring our digital collection.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, title: "Log In", description: "Use your library credentials to access the portal" },
              { step: 2, title: "Search", description: "Find resources using our powerful search tools" },
              { step: 3, title: "Access", description: "Read online or download for offline access" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="font-serif font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          <Link to="/login" className="inline-block mt-12">
            <Button variant="default" size="lg">
              Login to Access <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
