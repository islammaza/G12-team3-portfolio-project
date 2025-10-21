import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, ArrowRight, Users, Code2, Sparkles } from "lucide-react";
import rymeImg from "../assets/images/ryme.png";
import slsImg from "../assets/images/salsabil.png";

const teamMembers = [
  {
    id: "islam-maza",
    name: "Islam Maza",
    role: "Full Stack Developer",
    image: "",
    bio: "Passionate about building scalable web applications",
    github: "",
  },
  {
    id: "alia-tliba",
    name: "Alia Tliba",
    role: "Frontend Developer",
    image: "",
    bio: "Creating beautiful and intuitive user experiences",
    github: "",
  },
  {
    id: "souha-bensimessaoud",
    name: "Souha Bensimessaoud",
    role: "Backend Developer",
    image: "",
    bio: "Building robust and efficient backend systems",
    github: "",
  },
  {
    id: "salsabil-laib",
    name: "Salsabil Laib",
    role: "UI/UX Designer",
    image: slsImg,
    bio: "Designing delightful digital experiences",
    github: "",
  },
  {
    id: "ryme-ait-belkacem",
    name: "Ryme Ait Belkacem",
    role: "Developer",
    image: rymeImg,
    bio: "Automation,Ai,Robotics and engineering",
    github: "https://github.com/Ryme-ab",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
    
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium">Welcome to Our Team</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="gradient-text">Innovative</span>
              <br />
              <span className="text-foreground">Developers</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a passionate team of developers dedicated to creating
              exceptional digital experiences and innovative solutions that make
              a difference.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <a href="#team">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-lg hover-lift"
                >
                  Meet the Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="glass text-lg px-8 py-6 rounded-full hover-lift"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>

    
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Talented individuals working together to create amazing things
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={member.id}
                className="glass border-border/50 overflow-hidden group hover-lift animate-fade-in relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-float"></div>

                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500"
                  />
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <h3
                      className={`font-bold mb-1 ${
                        member.name.length > 20 ? "text-xs" : "text-base"
                      } whitespace-nowrap`}
                      title={member.name}
                    >
                      {member.name}
                    </h3>
                    <p className="text-secondary font-semibold text-sm">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-muted-foreground text-xs line-clamp-2">
                    {member.bio}
                  </p>

                  <div className="flex flex-col gap-2 pt-2">
                    <Link to={`/portfolio/${member.id}`} className="w-full">
                      <Button
                        variant="default"
                        size="sm"
                        className="bg-primary hover:bg-primary/90 w-full"
                      >
                        Portfolio
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="glass w-full"
                      >
                        <Github className="h-3 w-3 mr-2" />
                        GitHub
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border/50 mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold gradient-text mb-2">Our Team</h3>
              <p className="text-muted-foreground">
                Building the future, one line of code at a time
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="glass hover-lift"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:team@example.com">
                <Button
                  variant="outline"
                  size="icon"
                  className="glass hover-lift"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © 2025 Team Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
