import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Lightbulb, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Expertise",
      description: "Specialized in Machine Learning algorithms, Deep Learning, and AI applications"
    },
    {
      icon: Code,
      title: "Programming Skills",
      description: "Proficient in Python, C++, Java, and modern development frameworks"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Passionate about solving real-world challenges through innovative technology"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Dedicated to enhancing practical learning and engineering applications"
    }
  ];

  const skills = [
    "Python", "C/C++", "Java", "Machine Learning", "Deep Learning", 
    "TensorFlow", "Scikit-Learn", "Data Structures & Algorithms", 
    "AI Applications", "Predictive Analytics", "Sentiment Analysis"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A dedicated Computer Science undergraduate specializing in AI and Machine Learning, 
            with a passion for innovation and practical problem-solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-card to-secondary/20 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Professional Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I'm a Computer Science undergraduate specializing in AI and Machine Learning 
                  with expertise in Python, C, and C++. My focus is on developing ML models 
                  and practical applications, including sentiment analysis and predictive analytics.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about problem-solving, innovation, and enhancing practical 
                  learning in engineering. Currently maintaining a CGPA of 9.58 at SRM Institute 
                  of Science & Technology while gaining hands-on industry experience.
                </p>
              </CardContent>
            </Card>

            {/* Current Role */}
            <Card className="bg-gradient-to-br from-accent/10 to-card border-accent/20">
              <CardHeader>
                <CardTitle className="text-xl text-accent">Current Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Samsung PRISM Research Associate</h3>
                  <p className="text-sm text-accent">Samsung R&D India | Sept 2024 - Present</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Selected for the prestigious Samsung PRISM program to collaborate on cutting-edge 
                    research in AI and machine learning, working closely with industry mentors on 
                    real-world problems aligned with Samsung's R&D initiatives.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills and Highlights */}
          <div className="space-y-8">
            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="group hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-card to-secondary/10 border-primary/20">
                  <CardContent className="p-6 text-center">
                    <highlight.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:text-accent transition-colors" />
                    <h3 className="font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Technical Skills */}
            <Card className="bg-gradient-to-br from-card to-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;