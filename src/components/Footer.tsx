import { Link } from "react-router-dom";
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/20">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold">EduLibrary</span>
                <span className="block text-xs text-primary-foreground/70">Knowledge Center</span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Empowering students and educators with access to knowledge, resources, and a
              supportive learning environment since 1985.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Book Catalog", "Digital Library", "Services", "Events", "About Us"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(" ", "-")}`} className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {["E-Books Collection", "Online Journals", "Research Papers", "Study Guides", "FAQ"].map((item) => (
                <li key={item}>
                  <Link to="/digital" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>123 Education Lane, Knowledge City, KC 54321</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@edulibrary.edu</span>
              </li>
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-primary-foreground/10">
              <p className="text-xs font-medium">Library Hours</p>
              <p className="text-xs text-primary-foreground/70 mt-1">
                Mon - Fri: 8:00 AM - 9:00 PM<br />
                Sat - Sun: 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2024 EduLibrary. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
