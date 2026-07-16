import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Calendar, Briefcase, Award } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: 'MERN Stack Intern',
    company: 'Cantilever Labs',
    period: 'May 2025 - June 2025',
    description: [
      'Developed backend REST APIs using Express.js and Node.js for full-stack web applications.',
      'Integrated frontend components with MongoDB-backed backend services.',
      'Designed modular backend routes to improve maintainability and scalability.',
      'Collaborated in team-based development using Git-based version control.'
    ],
    skills: ['MERN Stack', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git']
  },
  {
    role: '3D Modeling Intern',
    company: 'Eswar Solutions',
    period: 'May 2025 - June 2025',
    description: [
      'Optimized 3D assets and rendering workflows using Blender for efficient real-time visualization.',
      'Improved model organization and asset optimization for reduced rendering overhead.'
    ],
    skills: ['Blender', '3D Modeling', 'Asset Optimization', 'Rendering Workflows']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Experience"
          subtitle="My professional journey and internship history in software engineering."
        />

        <div className="relative border-l border-white/10 pl-6 md:pl-8 space-y-12 mt-12 ml-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              
              {/* Timeline Node / Circle */}
              <div className="absolute top-1.5 -left-[31px] md:-left-[39px] w-4 h-4 rounded-full border-4 border-[#030712] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-20" />
              
              <motion.div
                className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 shadow-xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Header: Period & Role */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                      <Briefcase className="text-blue-400 flex-shrink-0" size={20} />
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-gray-400 flex items-center gap-1 mt-1">
                      <Award className="text-indigo-400 flex-shrink-0" size={16} />
                      {exp.company}
                    </h4>
                  </div>
                  
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gray-400 self-start sm:self-center">
                    <Calendar size={12} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-6 text-gray-300 text-sm md:text-base leading-relaxed list-disc list-inside">
                  {exp.description.map((bullet, i) => (
                    <li key={i} className="pl-1 text-gray-300">
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-blue-500/10 text-blue-300 border border-blue-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
