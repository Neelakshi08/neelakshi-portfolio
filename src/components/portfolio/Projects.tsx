import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Rock vs Mine Prediction",
      description: "Built a binary classification model using machine learning to differentiate between rocks and mines based on sonar signal data. Leveraged scikit-learn for model training and evaluation with high accuracy.",
      technologies: ["Python", "Machine Learning", "Scikit-Learn", "Data Analysis"],
      category: "Machine Learning",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Movie Recommendation System",
      description: "Developed a personalized movie recommender using collaborative filtering and content-based filtering techniques. Built with Pandas, scikit-learn, and Streamlit for an interactive user interface.",
      technologies: ["Python", "Pandas", "Scikit-Learn", "Streamlit", "Recommendation Systems"],
      category: "AI/ML",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Cold Email Generator",
      description: "Created an AI-driven tool that generates personalized cold emails using OpenAI's language models. Automates outreach for sales and marketing with dynamic prompt tuning capabilities.",
      technologies: ["Python", "OpenAI API", "Natural Language Processing", "Automation"],
      category: "AI Application",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Beehive Wallet",
      description: "Designed a comprehensive financial inclusion platform for women Self-Help Groups (SHGs). Features voice-based inputs (OpenAI Whisper), LLM-powered assistance, secure financial transaction detection, and auto-generated financial summaries through a Streamlit web app.",
      technologies: ["Python", "Streamlit", "OpenAI Whisper", "LangChain", "Financial Technology", "Voice Processing"],
      category: "FinTech",
      gradient: "from-orange-500/20 to-red-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work in AI, Machine Learning, and innovative applications 
            that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group hover:scale-105 transition-all duration-300 bg-gradient-to-br ${project.gradient} border-primary/20 hover:border-primary/40 hover:shadow-[var(--glow)]`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge 
                      variant="outline" 
                      className="text-xs bg-primary/10 text-primary border-primary/30"
                    >
                      {project.category}
                    </Badge>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="text-xs bg-secondary/50 hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            asChild
          >
            <a href="https://github.com/Neelakshi08" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;