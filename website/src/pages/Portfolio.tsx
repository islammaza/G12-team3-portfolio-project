import { useParams, Link } from "react-router-dom";
import { Github, Mail, Linkedin, ArrowLeft, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// This is the template portfolio page with dummy data
const portfolioData = {
  "islam-maza": {
    name: "Islam Maza",
    role: "Full Stack Developer",
    bio: "Passionate software engineer with expertise in building scalable web applications. I love turning complex problems into elegant solutions and continuously learning new technologies.",
    image: "",
    skills: [
      "React.js",
      "Node.js",
      "TypeScript",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Git",
      "REST APIs",
    ],
    github: "",
    email: "",
    linkedin: "",
    projects: [
      {
        title: "E-Commerce Platform",
        description:
          "Built a full-stack e-commerce solution with payment integration",
        tech: ["React", "Node.js", "Stripe"],
      },
      {
        title: "Task Management App",
        description:
          "Collaborative task management tool with real-time updates",
        tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      },
      {
        title: "Weather Dashboard",
        description:
          "Interactive weather forecasting application with data visualization",
        tech: ["React", "Chart.js", "OpenWeather API"],
      },
    ],
  },
  "alia-tliba": {
    name: "Alia Tliba",
    role: "Full Stack Developer",
    bio: "Passionate software engineer with expertise in building scalable web applications. I love turning complex problems into elegant solutions and continuously learning new technologies.",
    image: "",
    skills: [
      "React.js",
      "Node.js",
      "TypeScript",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Git",
      "REST APIs",
    ],
    github: "",
    email: "",
    linkedin: "",
    projects: [
      {
        title: "E-Commerce Platform",
        description:
          "Built a full-stack e-commerce solution with payment integration",
        tech: ["React", "Node.js", "Stripe"],
      },
      {
        title: "Task Management App",
        description:
          "Collaborative task management tool with real-time updates",
        tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      },
      {
        title: "Weather Dashboard",
        description:
          "Interactive weather forecasting application with data visualization",
        tech: ["React", "Chart.js", "OpenWeather API"],
      },
    ],
  },
  "souha-bensimessaoud": {
    name: "Souha Bensimessaoud",
    role: "Full Stack Developer",
    bio: "Passionate software engineer with expertise in building scalable web applications. I love turning complex problems into elegant solutions and continuously learning new technologies.",
    image: "",
    skills: [
      "React.js",
      "Node.js",
      "TypeScript",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Git",
      "REST APIs",
    ],
    github: "",
    email: "",
    linkedin: "",
    projects: [
      {
        title: "E-Commerce Platform",
        description:
          "Built a full-stack e-commerce solution with payment integration",
        tech: ["React", "Node.js", "Stripe"],
      },
      {
        title: "Task Management App",
        description:
          "Collaborative task management tool with real-time updates",
        tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      },
      {
        title: "Weather Dashboard",
        description:
          "Interactive weather forecasting application with data visualization",
        tech: ["React", "Chart.js", "OpenWeather API"],
      },
    ],
  },
  "salsabil-laib": {
    name: "Salsabil Laib",
    role: "Full Stack Developer",
    bio: "Passionate software engineer with expertise in building scalable web applications. I love turning complex problems into elegant solutions and continuously learning new technologies.",
    image: "",
    skills: [
      "React.js",
      "Node.js",
      "TypeScript",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Git",
      "REST APIs",
    ],
    github: "",
    email: "",
    linkedin: "",
    projects: [
      {
        title: "E-Commerce Platform",
        description:
          "Built a full-stack e-commerce solution with payment integration",
        tech: ["React", "Node.js", "Stripe"],
      },
      {
        title: "Task Management App",
        description:
          "Collaborative task management tool with real-time updates",
        tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      },
      {
        title: "Weather Dashboard",
        description:
          "Interactive weather forecasting application with data visualization",
        tech: ["React", "Chart.js", "OpenWeather API"],
      },
    ],
  },
  "ryme-ait-belkacem": {
    name: "Ryme Ait Belkacem",
    role: "Full Stack Developer",
    bio: "Passionate software engineer with expertise in building scalable web applications. I love turning complex problems into elegant solutions and continuously learning new technologies.",
    image: "",
    skills: [
      "React.js",
      "Node.js",
      "TypeScript",
      "Python",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Git",
      "REST APIs",
    ],
    github: "",
    email: "",
    linkedin: "",
    projects: [
      {
        title: "E-Commerce Platform",
        description:
          "Built a full-stack e-commerce solution with payment integration",
        tech: ["React", "Node.js", "Stripe"],
      },
      {
        title: "Task Management App",
        description:
          "Collaborative task management tool with real-time updates",
        tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      },
      {
        title: "Weather Dashboard",
        description:
          "Interactive weather forecasting application with data visualization",
        tech: ["React", "Chart.js", "OpenWeather API"],
      },
    ],
  },
  // Add more team members here - this serves as the template
};

const Portfolio = () => {
  const { memberId } = useParams<{ memberId: string }>();
  const member = portfolioData[memberId as keyof typeof portfolioData];

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold gradient-text mb-4">Member Not Found</h1>
          <Link to="/">
            <Button variant="default">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <Link to="/">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Team
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="animate-fade-in flex justify-center md:justify-start">
              <div className="relative group w-80">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity animate-glow"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-full aspect-square object-cover rounded-3xl shadow-2xl"
                />
                {/* Floating accent */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/30 rounded-full blur-2xl animate-float"></div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div>
                <h1 className="text-5xl font-bold mb-3 gradient-text">{member.name}</h1>
                <p className="text-2xl text-secondary font-semibold">{member.role}</p>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="glass hover-lift">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="glass hover-lift">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a href={`mailto:${member.email}`}>
                  <Button variant="outline" size="icon" className="glass hover-lift">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 relative">
        {/* Floating elements */}
        <div className="absolute top-1/3 left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.5s' }}></div>
        
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <Code className="h-8 w-8 text-primary" />
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {member.skills.map((skill, index) => (
              <div
                key={skill}
                className="glass rounded-xl p-4 text-center hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="font-semibold text-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 relative">
        {/* Floating elements */}
        <div className="absolute bottom-1/4 right-20 w-48 h-48 bg-secondary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {member.projects.map((project, index) => (
              <Card
                key={project.title}
                className="glass border-border/50 p-6 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-primary/20 text-primary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 {member.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
