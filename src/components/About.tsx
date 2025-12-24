import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education, certifications, achievements } from '../data/portfolioData';
import { Container, Section, SectionTitle, Card, Grid } from '../styles/GlobalStyles';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Section id="about" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>About Me</SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card>
                      <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                      <p className="text-gray-300 mb-1">{edu.institution}</p>
                      <p className="text-gray-400 text-sm">{edu.period}</p>
                      {edu.cgpa && <p className="text-gray-400 text-sm">CGPA: {edu.cgpa}</p>}
                      {edu.percentage && <p className="text-gray-400 text-sm">Percentage: {edu.percentage}</p>}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Achievements & Leadership</h3>
              <div className="space-y-4">
                <Card>
                  <h4 className="text-xl font-semibold mb-3">Achievements</h4>
                  <ul className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        className="flex items-start"
                      >
                        <span className="text-green-400 mr-2">▸</span>
                        <span className="text-gray-300">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </Card>
                
                <Card>
                  <h4 className="text-xl font-semibold mb-3">Certifications</h4>
                  <ul className="space-y-2">
                    {certifications.map((cert, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        className="flex items-start"
                      >
                        <span className="text-blue-400 mr-2">▸</span>
                        <span className="text-gray-300">{cert}</span>
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-pink-400">Areas of Interest</h3>
            <Card>
              <div className="flex flex-wrap gap-3">
                {['Full Stack', 'Machine Learning', 'Deep Learning'].map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium border border-purple-400/30"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default About;