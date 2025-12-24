import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi';
import { experiences } from '../data/portfolioData';
import { Container, Section, SectionTitle, Card } from '../styles/GlobalStyles';

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Section id="experience" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Experience</SectionTitle>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-400" />
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-gray-900 z-10" />
                  
                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <Card>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <FiBriefcase className="text-blue-400 text-xl" />
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-gray-300">
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <FiCalendar />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FiMapPin />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.description.map((desc, descIndex) => (
                          <motion.li
                            key={descIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 * descIndex }}
                            className="flex items-start text-gray-300 text-sm"
                          >
                            <span className="text-purple-400 mr-2 mt-1 flex-shrink-0">▸</span>
                            <span>{desc}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Experience;