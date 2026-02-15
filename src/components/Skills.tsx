import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Globe, Server, Palette, Zap } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "Java Script ", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 98 },
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: [
      { name: "Python/Django", level: 98 },
      { name: "Node.js", level: 85 },
      { name: "FastAPI", level: 90 },
      { name: "REST APIs", level: 95 },
    ],
  },
  {
    icon: Database,
    title: "Database & DevOps",
    skills: [
      { name: "PostgreSQL", level: 92 },
      { name: "MongoDB", level: 85 },
      { name: "Docker", level: 88 },
      { name: "AWS/Cloud", level: 82 },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/10 rounded-full blur-[150px]" />

      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto rounded-full" />
          <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
            Mastering modern technologies to build exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass-effect rounded-3xl p-8 border border-glass-border/50 hover:border-neon-blue/50 transition-all duration-300 group"
            >
              {/* Category Icon */}
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-blue/20 to-neon-violet/20 flex items-center justify-center group-hover:neon-glow-blue transition-all duration-300">
                  <category.icon className="w-8 h-8 text-neon-blue" />
                </div>
              </div>

              {/* Category Title */}
              <h3 className="text-2xl font-bold mb-8 group-hover:gradient-text transition-all duration-300">
                {category.title}
              </h3>

              {/* Skills with Progress Bars */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground/80">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-neon-blue">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                        className="h-full bg-gradient-to-r from-neon-blue to-neon-violet rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Icons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="glass-effect rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {["Git", "GraphQL", "Redis", "Celery", "WebSockets", "CI/CD"].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-br from-neon-blue/10 to-neon-violet/10 border border-glass-border/50 hover:border-neon-blue/50 hover:neon-glow-blue transition-all duration-300 cursor-pointer"
                >
                  <span className="text-lg font-semibold text-foreground/90">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
