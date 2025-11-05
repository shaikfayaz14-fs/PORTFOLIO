import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with Django backend and React frontend, featuring real-time inventory management and secure payment processing.",
    tech: ["Django", "React", "PostgreSQL", "Stripe", "Redis"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "AI Task Manager",
    description: "Intelligent task management system with AI-powered prioritization and automated scheduling using machine learning algorithms.",
    tech: ["Python", "FastAPI", "React", "TensorFlow", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Real-Time Analytics Dashboard",
    description: "Interactive dashboard for real-time data visualization and analytics with WebSocket integration for live updates.",
    tech: ["Django Channels", "React", "D3.js", "PostgreSQL", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Social Media API",
    description: "RESTful API with comprehensive authentication, user management, and content delivery features for social networking applications.",
    tech: ["Django REST", "PostgreSQL", "Redis", "Celery", "AWS"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-neon-violet/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px]" />

      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-violet mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Explore my latest work showcasing innovative solutions and cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group"
            >
              <motion.div
                animate={{
                  scale: hoveredId === project.id ? 1.02 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="glass-effect rounded-3xl p-8 border border-glass-border/50 hover:border-neon-blue/50 transition-all duration-300 h-full"
              >
                {/* Project Number Badge */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-violet flex items-center justify-center font-bold text-xl neon-glow-blue">
                  {project.id}
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-muted/50 text-foreground/80 border border-glass-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass-effect border-neon-blue/50 hover:border-neon-blue hover:neon-glow-blue transition-all duration-300"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 neon-glow-blue transition-all duration-300"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  animate={{
                    opacity: hoveredId === project.id ? 0.5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute -z-10 inset-0 bg-gradient-to-br from-neon-blue/30 to-neon-violet/30 rounded-3xl blur-xl"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
