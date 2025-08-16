import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const certifications = [
    {
      title: "AICTE Virtual Internship - AIML",
      issuer: "AICTE",
      type: "Internship"
    },
    {
      title: "AWS Machine Learning Foundations",
      issuer: "Amazon Web Services",
      type: "Cloud"
    },
    {
      title: "AWS Cloud Foundations",
      issuer: "Amazon Web Services", 
      type: "Cloud"
    },
    {
      title: "Artificial Intelligence & Deep Learning",
      issuer: "Udemy",
      type: "Course"
    },
    {
      title: "C++ Programming - Beginner to Beyond",
      issuer: "Udemy",
      type: "Course"
    },
    {
      title: "DBMS Course",
      issuer: "Scaler",
      type: "Course"
    },
    {
      title: "Relational Databases",
      issuer: "IBM",
      type: "Database"
    },
    {
      title: "Image Processing with MATLAB",
      issuer: "MathWorks",
      type: "Technical"
    },
    {
      title: "Machine Learning Fundamentals",
      issuer: "Alteryx",
      type: "ML"
    },
    {
      title: "MATLAB Onramp",
      issuer: "MathWorks",
      type: "Technical"
    },
    {
      title: "Oracle Cloud Infrastructure Foundations",
      issuer: "Oracle",
      type: "Cloud"
    },
    {
      title: "Complete Python Course",
      issuer: "Udemy",
      type: "Programming"
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      "Internship": "bg-primary/10 text-primary border-primary/30",
      "Cloud": "bg-blue-500/10 text-blue-500 border-blue-500/30",
      "Course": "bg-green-500/10 text-green-500 border-green-500/30",
      "Database": "bg-purple-500/10 text-purple-500 border-purple-500/30",
      "Technical": "bg-orange-500/10 text-orange-500 border-orange-500/30",
      "ML": "bg-pink-500/10 text-pink-500 border-pink-500/30",
      "Programming": "bg-cyan-500/10 text-cyan-500 border-cyan-500/30"
    };
    return colors[type as keyof typeof colors] || "bg-secondary";
  };

  return (
    <section id="education" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning through formal education and professional certifications 
            to stay at the forefront of technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Education */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 hover:shadow-[var(--glow)] transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary">Primary Education</CardTitle>
                    <CardDescription>Current Degree</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">B.Tech CSE (AI/ML)</h3>
                  <p className="text-accent font-medium">SRM Institute of Science & Technology</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>2022 - 2026 (Expected)</span>
                  </div>
                </div>
                
                <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Current CGPA</span>
                    <Badge className="bg-accent text-accent-foreground font-bold">
                      9.58
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Specialization Areas:</h4>
                  <div className="flex flex-wrap gap-1">
                    {["Artificial Intelligence", "Machine Learning", "Data Science", "Computer Vision"].map((area, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-2">
            <Card className="h-full bg-gradient-to-br from-card to-secondary/10 border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-accent">Professional Certifications</CardTitle>
                    <CardDescription>Continuous learning and skill development</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2">
                  {certifications.map((cert, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/30 transition-colors group"
                    >
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-medium text-sm leading-tight group-hover:text-primary transition-colors">
                            {cert.title}
                          </h4>
                          <Badge 
                            variant="outline" 
                            className={`text-xs shrink-0 ${getTypeColor(cert.type)}`}
                          >
                            {cert.type}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Total Certifications</span>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {certifications.length}+
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;