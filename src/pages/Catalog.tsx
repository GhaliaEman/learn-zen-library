import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { BookCard } from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Grid3X3, List, Filter } from "lucide-react";

const categories = [
  { id: "all", name: "All Books", count: 156 },
  { id: "science", name: "Science", count: 32 },
  { id: "arts", name: "Arts", count: 24 },
  { id: "commerce", name: "Commerce", count: 28 },
  { id: "it", name: "IT & Technology", count: 36 },
  { id: "history", name: "History", count: 18 },
  { id: "literature", name: "Literature", count: 18 },
];

const books = [
  { id: 1, title: "Introduction to Algorithms", author: "Thomas H. Cormen", category: "Science", available: true },
  { id: 2, title: "The Art of War", author: "Sun Tzu", category: "History", available: true },
  { id: 3, title: "Principles of Economics", author: "N. Gregory Mankiw", category: "Commerce", available: false },
  { id: 4, title: "Clean Code", author: "Robert C. Martin", category: "IT", available: true },
  { id: 5, title: "Pride and Prejudice", author: "Jane Austen", category: "Literature", available: true },
  { id: 6, title: "A Brief History of Time", author: "Stephen Hawking", category: "Science", available: false },
  { id: 7, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Literature", available: true },
  { id: 8, title: "Modern Art: A Critical Introduction", author: "Pam Meecham", category: "Arts", available: true },
  { id: 9, title: "JavaScript: The Good Parts", author: "Douglas Crockford", category: "IT", available: true },
  { id: 10, title: "The Wealth of Nations", author: "Adam Smith", category: "Commerce", available: true },
  { id: 11, title: "World War II: A History", author: "Martin Gilbert", category: "History", available: false },
  { id: 12, title: "Organic Chemistry", author: "Paula Bruice", category: "Science", available: true },
];

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchesCategory = selectedCategory === "all" || book.category.toLowerCase() === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="hero-gradient">
        <div className="container px-4 lg:px-8 py-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Book Catalog
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl">
            Explore our extensive collection of books across all academic subjects.
          </p>
          <SearchBar
            size="large"
            placeholder="Search by title, author, or ISBN..."
            onSearch={setSearchQuery}
          />
        </div>
      </section>

      <div className="container px-4 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-24">
              <h2 className="font-serif font-bold text-lg text-foreground mb-4 flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Categories
              </h2>
              <nav className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <span>{category.name}</span>
                    <span className={cn(
                      "text-xs px-2 py-0.5 rounded-full",
                      selectedCategory === category.id
                        ? "bg-primary-foreground/20"
                        : "bg-muted"
                    )}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-medium text-foreground">{filteredBooks.length}</span> books
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Books Grid/List */}
            {filteredBooks.length > 0 ? (
              <div className={cn(
                viewMode === "grid"
                  ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                  : "space-y-4"
              )}>
                {filteredBooks.map((book) => (
                  viewMode === "grid" ? (
                    <BookCard
                      key={book.id}
                      title={book.title}
                      author={book.author}
                      category={book.category}
                      available={book.available}
                    />
                  ) : (
                    <div
                      key={book.id}
                      className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 card-shadow"
                    >
                      <div className="h-20 w-14 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center shrink-0">
                        <span className="font-serif text-2xl text-primary/30">{book.title[0]}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif font-bold text-foreground truncate">{book.title}</h3>
                        <p className="text-sm text-muted-foreground">{book.author}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-xs px-2 py-1 rounded-full bg-secondary/20 text-secondary">
                            {book.category}
                          </span>
                          <span className={cn(
                            "text-xs font-medium",
                            book.available ? "text-secondary" : "text-destructive"
                          )}>
                            {book.available ? "Available" : "Borrowed"}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  )
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No books found matching your criteria.</p>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
