import { cn } from "@/lib/utils";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  description: string;
  type: "seminar" | "workshop" | "reading" | "competition";
  className?: string;
}

const typeColors = {
  seminar: "bg-primary/10 text-primary",
  workshop: "bg-secondary/20 text-secondary",
  reading: "bg-accent/20 text-accent-foreground",
  competition: "bg-destructive/10 text-destructive",
};

export function EventCard({ title, date, time, description, type, className }: EventCardProps) {
  return (
    <div className={cn(
      "p-6 rounded-xl bg-card border border-border/50 card-shadow hover:card-shadow-hover transition-all duration-300",
      className
    )}>
      <span className={cn(
        "inline-block px-3 py-1 text-xs font-semibold rounded-full capitalize mb-3",
        typeColors[type]
      )}>
        {type}
      </span>
      <h3 className="font-serif font-bold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <Calendar className="h-4 w-4" />
          {date}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          {time}
        </span>
      </div>
      <Button variant="outline" size="sm">Learn More</Button>
    </div>
  );
}
