import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
  size?: "default" | "large";
}

export function SearchBar({ placeholder = "Search for books, authors, subjects...", onSearch, className, size = "default" }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className={`flex items-center gap-2 rounded-xl bg-card border border-border/50 shadow-sm transition-all focus-within:border-primary focus-within:shadow-md ${size === "large" ? "p-2" : "p-1"}`}>
        <Search className={`${size === "large" ? "h-5 w-5 ml-3" : "h-4 w-4 ml-2"} text-muted-foreground`} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className={`flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground ${size === "large" ? "py-3 text-base" : "py-2 text-sm"}`}
        />
        <Button type="submit" size={size === "large" ? "lg" : "default"}>
          Search Books
        </Button>
      </div>
    </form>
  );
}
