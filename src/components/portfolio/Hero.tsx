import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="flex flex-col items-center space-y-8">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/50 shadow-[var(--glow)] transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/lovable-uploads/ab5d6e4c-18a4-4e4c-8e21-059eac643ebb.png" 
                alt="Neelakshi Paul"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary to-accent opacity-30 blur-xl animate-pulse" />
          </div>
          
          {/* Text Content */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
              Neelakshi Paul
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
              AI/ML Engineer & Computer Science Student
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about Machine Learning, AI innovation, and solving real-world problems. 
              Currently pursuing B.Tech CSE(AI/ML) at SRM Institute with expertise in Python, Deep Learning, and practical applications.
            </p>
            
            {/* Contact Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a href="mailto:paulneelakshi004@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="https://linkedin.com/in/neelakshi-paul-bab4722b3" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                asChild
              >
                <a href="https://github.com/Neelakshi08" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91-6003616653
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                paulneelakshi004@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;