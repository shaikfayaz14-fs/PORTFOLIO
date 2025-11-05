import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/Fayaz.pdf '; // Path to your PDF in the public folder
  link.download = '/Fayaz.pdf';
  link.click();
};


  return (
    <section id="resume" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-violet/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px]" />

      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">Resume</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-violet mx-auto rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-effect rounded-3xl p-12 border border-glass-border/50 text-center">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8 inline-block"
              >
                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-neon-blue/20 to-neon-violet/20 flex items-center justify-center neon-glow-blue mx-auto">
                  <FileText className="w-16 h-16 text-neon-blue" />
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-3xl font-bold mb-4 gradient-text">
                  Download My Resume
                </h3>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Get a comprehensive overview of my experience, skills, and achievements. 
                  Available in PDF format for your convenience.
                </p>
              </motion.div>

              {/* Download Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-neon-blue to-neon-violet hover:from-neon-cyan hover:to-neon-purple text-primary-foreground font-semibold px-12 py-7 text-xl rounded-2xl neon-glow-strong transition-all duration-300"
                  onClick={handleDownload}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Download className="w-6 h-6" />
                    Download Resume
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </Button>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-8 text-sm text-muted-foreground"
              >
                <p>Updated regularly • PDF Format • 2 pages</p>
              </motion.div>
            </div>

            {/* Decorative Background Glow */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-violet/20 rounded-3xl blur-2xl scale-105" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
