import { useParams, Link } from "react-router-dom";
import { Github, Mail, Linkedin, ArrowLeft, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import SouhaImage from "@/assets/souha.jpg";
import islamImg from "../assets/images/islam.jpg";
import rymeImg from "../assets/images/ryme.png";
import slsImg from "../assets/images/salsabil.png";

const portfolioData = {
  "islam-maza": {
    name: "Islam Maza",
    role: "AI Engineering Student",
    bio: "I'm an AI Engineering and Data Science student passionate about building intelligent systems that solve real-world problems. My interests include machine learning, data-driven decision-making, and AI product development. I enjoy turning complex data into actionable insights and developing scalable AI solutions that make an impact.",
    image: islamImg,
<<<<<<< Updated upstream
    skills: [
      "PYTHON",
      "C/C++",
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "PHP",
      "SQL",
      "JAVA",
      "LINUX",
      "Git",
      "DJANGO",
      "React.js",
      "Problem Solving",
      "DSA",
      "OOP",
    ],
    github: "https://github.com/islammaza",
    email: "mailto:islam.maza@ensia.edu.dz",
    linkedin: "https://www.linkedin.com/in/islam-maza-4a0346358/",
    projects: [
      {
        title: "AI-Powered Job Matching System",
        description:
          "Built an intelligent job matching system leveraging search algorithms to connect job seekers with suitable positions.",
        tech: ["Python", "Flask", "React"],
      },
      {
        title: "Craftsmen Marketplace Website",
        description:
          "Collaborative marketplace to showcase crafts and buy them which foster an online community of artisans.",
        tech: ["HTML", "CSS", "JAVASCRIPT", "PHP"],
      },
      {
        title: "Note Management Website",
        description:
          "A simple website designed to create and organise user's notes. You can also update and delete them.",
        tech: ["React.js", "Django", "RestAPI"],
      },
    ],
  },
  "alia-tliba": {
    name: "Alia Tliba",
    role: "Full Stack Developer",
    bio: "Passionate software engineer with expertise in building scalable web applications. I love turning complex problems into elegant solutions and continuously learning new technologies.",
    image: "",
=======
>>>>>>> Stashed changes
    skills: [
      "PYTHON",
      "C/C++",
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "PHP",
      "SQL",
      "JAVA",
      "LINUX",
      "Git",
      "DJANGO",
      "React.js",
      "Problem Solving",
      "DSA",
      "OOP",
    ],
    github: "https://github.com/islammaza",
    email: "mailto:islam.maza@ensia.edu.dz",
    linkedin: "https://www.linkedin.com/in/islam-maza-4a0346358/",
    projects: [
      {
        title: "AI-Powered Job Matching System",
        description:
<<<<<<< Updated upstream
          "Built a full-stack AI powered workout planner and tracker .",
        tech: ["React", "Flask", "Search Strategies", "CSP solution", "Python"],
=======
          "Built an intelligent job matching system leveraging search algorithms to connect job seekers with suitable positions.",
        tech: ["Python", "Flask", "React"],
>>>>>>> Stashed changes
      },
      {
        title: "Craftsmen Marketplace Website",
        description:
<<<<<<< Updated upstream
          "Built a full-stack website for managing appointments and save patients records.",
        tech: ["React.js", "MySQL", "Tailwind CSS", "Aiven", "PHP"],
=======
          "Collaborative marketplace to showcase crafts and buy them which foster an online community of artisans.",
        tech: ["HTML", "CSS", "JAVASCRIPT", "PHP"],
>>>>>>> Stashed changes
      },
      {
        title: "Note Management Website",
        description:
          "A simple website designed to create and organise user's notes. You can also update and delete them.",
        tech: ["React.js", "Django", "RestAPI"],
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
<<<<<<< Updated upstream
        title: "E-Commerce Platform",
=======
        title: "TrainTailor : Intelligent Workout Planner",
        description:
          "Built a full-stack AI powered workout planner and tracker .",
        tech: ["React", "Flask", "Search Strategies", "CSP solution", "Python"],
      },
      {
        title: "Medicosphere : Private Clinic Management Website",
        description:
          "Built a full-stack website for managing appointments and save patients records.",
        tech: ["React.js", "MySQL", "Tailwind CSS", "Aiven", "PHP"],
      },
      {
        title: "RecipeHub : a UI/UX Design for recipe & tips sharing Website",
        description:
          "Interactive UI/UX Design & Prototype for recipe & kitchen tips sharing website.",
        tech: ["UI/UX", "Figma"],
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
      "Flask",
      "C++",
      "Python",
      "OracleDB",
      "PostgreSQL",
      "MySQL",
      "AI & Machine Learning",
      "Linux",
      "Capture The Flag",
      "Hack The Box",
      "Git & GitHub",
      "Data Mining",
      "Communication",
      "Leadership",
      "Problem Solving",
      "UI/UX Design",
    ],
    github: "https://github.com/bensimessaoudsouha",
    email: "souha.bensimessaoud@ensia.edu.dz",
    linkedin: "https://www.linkedin.com/in/souha-bensimessaoud-5bb256320/",
    projects: [
      {
        title: "VisiFun – Smart Web Application for Jardin d’Essai'",
>>>>>>> Stashed changes
        description:
          "Built a responsive website to provide unguided visitors with plant information via interactive maps, gamified quizzes, and AI-based plant search, improving visitor experience by 30%.",
        tech: ["React", "Node.js", "MySQL", "Leaflet.js", "Flask", "Figma"],
      },
      {
        title: "Task Management App",
        description:
          "Built a full-stack AI powered workout planner and tracker .",
        tech: ["React", "Flask", "Search Strategies", "CSP solution", "Python"],
      },
      {
        title: "Weather Dashboard",
        description:
          "an online platform that connects job seekers with employers. It allows companies to post job offers, and candidates to search, apply, and communicate directly with employers.",
        tech: ["HTML", "JavaScript", "CSS", "PHP"],
      },
    ],
  },
  "salsabil-laib": {
    name: "Salsabil Laib",
    role: "Full Stack Developer",
    bio: "Passionate software engineer with expertise in building scalable web applications. I love turning complex problems into elegant solutions and continuously learning new technologies.",
    image: slsImg,
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
    role: " 3rd year AI Student",
    bio: "Passionate of AI , development ,robotics. Fun of creating intelligent systems that connect technology and real-world applications, and I am always exploring new ways to learn, build, and solve challenges through code and automation",
    image: rymeImg,

    skills: [
      "React.js",
      "Node.js",
      "JavaScript",
      "Python",
      "SQL",
      "PostgreSQL",
      "PHP",
      "Supabase",
      "C++",
      "Scada ",
    ],
    github: "https://github.com/Ryme-ab",
    email: "mailto:ryme.aitbelkacem@ensia.edu.dz",
    linkedin: "",
    projects: [
      {
        title: "JAWADY Platform",
        description:
          "Built a full-stack e-commerce solution for algerian market , the first and the only one in the country",
        tech: ["React", "TypeScript", "PHP", "JavaScript"],
      },
      {
        title: "Warehouse Managment System",
        description:
          "desktop application for managing a warehouse stock using AI (ai algorithms for search ) ",
        tech: ["supabase", "react", "python", "Tailwind CSS"],
      },
    ],
  },
};

const Portfolio = () => {
  const { memberId } = useParams<{ memberId: string }>();
  const member = portfolioData[memberId as keyof typeof portfolioData];

  // Ensure the page is scrolled to the top when this component mounts or when the slug changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [memberId]);

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold gradient-text mb-4">
            Member Not Found
          </h1>
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
            <Button
              variant="ghost"
              className="text-foreground hover:text-primary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Team
            </Button>
          </Link>
        </div>
      </header>

      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>

        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in flex justify-center md:justify-start">
              <div className="relative group w-80">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity animate-glow"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-full aspect-square object-cover rounded-3xl shadow-2xl"
                />

                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/30 rounded-full blur-2xl animate-float"></div>
              </div>
            </div>

            <div
              className="space-y-6 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div>
                <h1 className="text-5xl font-bold mb-3 gradient-text">
                  {member.name}
                </h1>
                <p className="text-2xl text-secondary font-semibold">
                  {member.role}
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {member.bio}
              </p>

              <div className="flex gap-4 pt-4">
                <a
                  href={member.github}
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
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="glass hover-lift"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a href={`mailto:${member.email}`}>
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
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative">
        <div
          className="absolute top-1/3 left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>

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

      <section className="py-20 px-6 relative">
        <div
          className="absolute bottom-1/4 right-20 w-48 h-48 bg-secondary/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {member.projects.map((project, index) => (
              <Card
                key={project.title}
                className="glass border-border/50 p-6 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <h3 className="text-xl font-bold mb-3 text-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
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
