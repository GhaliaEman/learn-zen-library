import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, User, GraduationCap, ArrowRight } from "lucide-react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState<"student" | "faculty">("student");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="container px-4 lg:px-8 py-12 lg:py-24">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
              <BookOpen className="h-8 w-8" />
            </div>
            <h1 className="font-serif text-3xl font-bold text-foreground mb-2">
              {isLogin ? "Welcome Back" : "Join EduLibrary"}
            </h1>
            <p className="text-muted-foreground">
              {isLogin
                ? "Sign in to access your library account"
                : "Create an account to start borrowing books"}
            </p>
          </div>

          {/* User Type Toggle */}
          <div className="flex gap-2 p-1 bg-muted rounded-lg mb-6">
            <button
              onClick={() => setUserType("student")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-md text-sm font-medium transition-colors ${
                userType === "student"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <GraduationCap className="h-4 w-4" />
              Student
            </button>
            <button
              onClick={() => setUserType("faculty")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-md text-sm font-medium transition-colors ${
                userType === "faculty"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <User className="h-4 w-4" />
              Faculty
            </button>
          </div>

          {/* Form */}
          <div className="p-6 rounded-xl bg-card border border-border/50 card-shadow">
            <form className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground outline-none focus:border-primary transition-colors"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {userType === "student" ? "Student ID" : "Faculty ID"}
                </label>
                <input
                  type="text"
                  placeholder={userType === "student" ? "Enter your student ID" : "Enter your faculty ID"}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground outline-none focus:border-primary transition-colors"
                />
              </div>

              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground outline-none focus:border-primary transition-colors"
                  />
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-muted-foreground">
                    <input type="checkbox" className="rounded border-border" />
                    Remember me
                  </label>
                  <a href="#" className="text-primary hover:underline">
                    Forgot password?
                  </a>
                </div>
              )}

              <Button type="submit" className="w-full" size="lg">
                {isLogin ? "Sign In" : "Create Account"}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-muted-foreground">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary font-medium hover:underline"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="mt-8 p-4 rounded-lg bg-muted/50 text-center">
            <p className="text-sm text-muted-foreground">
              Need help? Visit the library desk or{" "}
              <Link to="/contact" className="text-primary hover:underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
