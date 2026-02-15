import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-violet/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative py-8 border-t border-glass-border/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Shaik Fayaz. Built with React, JavaScript & Framer Motion.
          </p>
          <p className="text-sm text-muted-foreground/60 mt-2">
            Designed for the future 🚀
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
