import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolioData';
import { Container, Section, SectionTitle, Card } from '../styles/GlobalStyles';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryColors = {
    'Languages': 'from-blue-400 to-cyan-400',
    'Web Development': 'from-green-400 to-emerald-400',
    'ML/DL': 'from-purple-400 to-pink-400',
    'Tools': 'from-orange-400 to-red-400',
    'Database': 'from-indigo-400 to-blue-400'
  };

  return (
    <Section id="skills" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <SectionTitle>Skills</SectionTitle>
          
          <div className="space-y-8">
            {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * categoryIndex }}
              >
                <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r text-transparent bg-clip-text" 
                    style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
                  <span className={`bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors] || 'from-gray-400 to-gray-600'} bg-clip-text text-transparent`}>
                    {category}
                  </span>
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.1 * skillIndex }}
                    >
                      <Card className="relative overflow-hidden">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-gray-200">{skill.name}</h4>
                          <span className="text-sm text-gray-400">{skill.level}%</span>
                        </div>
                        
                        <div className="relative h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${categoryColors[category as keyof typeof categoryColors] || 'from-gray-400 to-gray-600'} rounded-full`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1.5, delay: 0.3 + 0.05 * skillIndex, ease: "easeOut" }}
                          />
                        </div>
                        
                        {/* Animated particles */}
                        <motion.div
                          className="absolute inset-0 pointer-events-none"
                          animate={{ opacity: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: skillIndex * 0.1 }}
                        >
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-2 h-2 bg-white rounded-full blur-sm" />
                          </div>
                        </motion.div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Skills summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12"
          >
            <Card className="text-center">
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Technical Proficiency
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {skills.filter(s => s.level >= 85).length}+
                  </div>
                  <p className="text-gray-400">Expert Skills</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    {skills.length}
                  </div>
                  <p className="text-gray-400">Total Technologies</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-pink-400 mb-2">
                    {Object.keys(skillsByCategory).length}
                  </div>
                  <p className="text-gray-400">Domains</p>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Skills;