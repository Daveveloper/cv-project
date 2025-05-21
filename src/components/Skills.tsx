import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt,
  FaNode,
  FaCode
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiGraphql,
  SiOpenai
} from 'react-icons/si';
import { useInView } from '../hooks/useInView';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: FaReact, level: 95 },
      { name: 'TypeScript', icon: SiTypescript, level: 90 },
      { name: 'Next.js', icon: SiNextdotjs, level: 85 },
      { name: 'JavaScript', icon: FaJs, level: 95 },
      { name: 'HTML5', icon: FaHtml5, level: 95 },
      { name: 'CSS3', icon: FaCss3Alt, level: 90 },
      { name: 'Tailwind', icon: SiTailwindcss, level: 85 },
    ]
  },
  {
    category: 'Backend & Tools',
    items: [
      { name: 'Node.js', icon: FaNode, level: 25 },
      { name: 'GraphQL', icon: SiGraphql, level: 60 },
      { name: 'Git', icon: FaGitAlt, level: 90 },
    ]
  },
  {
    category: 'AI & Emerging Tech',
    items: [
      { name: 'AI Prompting', icon: SiOpenai, level: 85 },
    ]
  }
];

const SkillBar: React.FC<{ skill: typeof skills[0]['items'][0], isInView: boolean }> = ({ skill, isInView }) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-gray-700">
        <skill.icon className="w-5 h-5" />
        <span>{skill.name}</span>
        <span className="ml-auto">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${skill.level}%` : '0%' }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full bg-red-600 rounded-full"
        />
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, 0.2);

  return (
    <section id="skills" ref={sectionRef} className="section">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 flex items-center gap-3">
        <FaCode className="w-8 h-8 text-red-600" />
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.items.map((skill) => (
                <SkillBar key={skill.name} skill={skill} isInView={isInView} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 