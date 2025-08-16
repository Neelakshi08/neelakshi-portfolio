import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              <img 
                src="/lovable-uploads/ab5d6e4c-18a4-4e4c-8e21-059eac643ebb.png" 
                alt="Neelakshi Paul"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left space-y-8 max-w-2xl">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-8xl font-light text-foreground tracking-tight">
                Portfolio
              </h1>
              <div className="space-y-2">
                <h2 className="text-2xl lg:text-3xl font-medium text-foreground">
                  Neelakshi Paul
                </h2>
                <p className="text-lg text-muted-foreground">
                  AI/ML Enthusiast & Data Science Student
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <Button variant="outline" size="icon" asChild className="rounded-full">
                <a href="https://linkedin.com/in/neelakshi-paul-bab4722b3/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="rounded-full">
                <a href="https://github.com/Neelakshi08" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild className="rounded-full">
                <a href="mailto:paulneelakshi004@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center lg:justify-start pt-8">
              <div className="animate-bounce">
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;