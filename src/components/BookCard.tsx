import { cn } from "@/lib/utils";

interface BookCardProps {
  title: string;
  author: string;
  category: string;
  image?: string;
  available?: boolean;
  className?: string;
}

export function BookCard({ title, author, category, image, available = true, className }: BookCardProps) {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-xl bg-card border border-border/50 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1",
      className
    )}>
      <div className="aspect-[3/4] overflow-hidden bg-muted">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
            <span className="font-serif text-4xl text-primary/30">{title[0]}</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-secondary/20 text-secondary mb-2">
          {category}
        </span>
        <h3 className="font-serif font-bold text-foreground line-clamp-2 mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{author}</p>
        <div className="flex items-center gap-2">
          <span className={cn(
            "inline-flex items-center gap-1 text-xs font-medium",
            available ? "text-secondary" : "text-destructive"
          )}>
            <span className={cn(
              "h-2 w-2 rounded-full",
              available ? "bg-secondary" : "bg-destructive"
            )} />
            {available ? "Available" : "Borrowed"}
          </span>
        </div>
      </div>
    </div>
  );
}
