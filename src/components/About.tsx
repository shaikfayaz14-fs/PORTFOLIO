import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const techStack = [
  { name: "Python", color: "from-blue-400 to-yellow-400" },
  { name: "Django", color: "from-green-400 to-emerald-600" },
  { name: "React", color: "from-cyan-400 to-blue-500" },
  { name: "PostgreSQL", color: "from-blue-600 to-indigo-700" },
  { name: "JavaScript", color: "from-blue-500 to-blue-700" },
  { name: "Tailwind CSS", color: "from-cyan-400 to-blue-600" },
  { name: "Bootstrap", color: "from-green-500 to-green-700" },
  { name: "Docker", color: "from-blue-400 to-blue-600" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-violet/20 rounded-full blur-[120px]" />

      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Avatar / Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-effect rounded-3xl p-8 neon-glow-blue">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-neon-blue/20 to-neon-violet/20 flex items-center justify-center">
                <div className="text-9xl font-bold gradient-text">SF</div>
              </div>
            </div>
            <div className="absolute -z-10 top-8 left-8 right-8 bottom-8 bg-gradient-to-br from-neon-blue/30 to-neon-violet/30 rounded-3xl blur-xl" />
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-3xl p-8 border border-glass-border/50">
              <h3 className="text-2xl font-semibold mb-4 text-neon-blue">Who I Am</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a passionate Full Stack Developer specializing in Python and modern web technologies. 
                With expertise in both backend and frontend development, I create seamless, scalable, 
                and user-friendly applications that push the boundaries of what's possible on the web.
              </p>
            </div>

           
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass-effect px-6 py-3 rounded-2xl border border-glass-border/50 hover:neon-glow-blue transition-all duration-300 cursor-pointer group"
              >
                <span className={`text-lg font-semibold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
