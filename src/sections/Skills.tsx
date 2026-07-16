import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Code, Cpu, Database, Terminal } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // percentage
  status: string; // e.g. "Advanced", "Proficient", "Intermediate"
}

interface SkillCategory {
  id: string;
  name: string;
  icon: JSX.Element;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'languages-frameworks',
    name: 'Languages & Frameworks',
    icon: <Code size={18} />,
    skills: [
      { name: 'MERN Stack', level: 85, status: 'Proficient' },
      { name: 'Python', level: 80, status: 'Proficient' },
      { name: 'Java', level: 80, status: 'Proficient' },
      { name: 'C', level: 75, status: 'Intermediate' },
    ]
  },
  {
    id: 'databases-cloud',
    name: 'Databases & Cloud',
    icon: <Database size={18} />,
    skills: [
      { name: 'MongoDB', level: 80, status: 'Proficient' },
      { name: 'MySQL', level: 80, status: 'Proficient' },
      { name: 'Supabase', level: 80, status: 'Proficient' },
      { name: 'Vercel', level: 85, status: 'Proficient' },
    ]
  },
  {
    id: 'core-concepts',
    name: 'Core Concepts',
    icon: <Cpu size={18} />,
    skills: [
      { name: 'Data Structures & Algorithms', level: 85, status: 'Proficient' },
      { name: 'Operating Systems', level: 80, status: 'Proficient' },
      { name: 'Artificial Intelligence', level: 80, status: 'Proficient' },
      { name: 'DBMS', level: 80, status: 'Proficient' },
      { name: 'OOP', level: 85, status: 'Proficient' },
      { name: 'Computer Networks', level: 75, status: 'Intermediate' },
    ]
  },
  {
    id: 'dev-tools',
    name: 'Developer Tools',
    icon: <Terminal size={18} />,
    skills: [
      { name: 'Git', level: 85, status: 'Proficient' },
      { name: 'GitHub', level: 85, status: 'Proficient' },
      { name: 'Docker', level: 70, status: 'Intermediate' },
      { name: 'Google Colab', level: 80, status: 'Proficient' },
    ]
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('languages-frameworks');

  const activeSkills = skillCategories.find(cat => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="relative py-24 z-10 overflow-hidden bg-gray-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Skills"
          subtitle="My technical toolbelt, categorised by domain and graded by experience level."
        />

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive ? 'text-blue-400' : 'text-gray-400 hover:text-white bg-white/5 border border-white/5 hover:bg-white/10'
                }`}
              >
                {cat.icon}
                <span>{cat.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTabIndicator"
                    className="absolute inset-0 bg-blue-500/10 border border-blue-500/30 rounded-xl -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="min-h-[250px]">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {activeSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 relative group overflow-hidden"
                  whileHover={{ y: -4 }}
                >
                  {/* Subtle hover glow accent */}
                  <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-300 -z-10" />
                  
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-white tracking-wide text-base">{skill.name}</span>
                    <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {skill.status}
                    </span>
                  </div>

                  {/* Level bar container */}
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    {/* Animated fill */}
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
