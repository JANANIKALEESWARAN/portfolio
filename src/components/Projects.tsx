import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import { projects } from '../data/portfolioData';
import { Container, Section, SectionTitle, Card, Grid } from '../styles/GlobalStyles';

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Section id="projects" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Projects</SectionTitle>
          
          <Grid>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full flex flex-col">
                  {/* Project header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <FiCode className="text-blue-400 text-xl" />
                      <h3 className="text-xl font-semibold text-gray-200">{project.title}</h3>
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiGithub className="text-sm" />
                        </motion.a>
                      )}
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiExternalLink className="text-sm" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  
                  {/* Project description */}
                  <p className="text-gray-300 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="mt-auto">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.4, delay: 0.1 * techIndex }}
                          className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded text-xs font-medium text-gray-300 border border-purple-400/30"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            ))}
          </Grid>
          
          {/* Publications section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Publications
            </h3>
            <div className="space-y-4">
              {[
                "Quantum Computing In Artificial Intelligence, Book Chapter in Quantum CRC, 2025.",
                "Paralysis Agitans Prediction Using Machine Learning Algorithms, IEEE, 2025."
              ].map((publication, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300">{publication}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Projects;