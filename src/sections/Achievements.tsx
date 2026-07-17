import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { GraduationCap, Award, BrainCircuit, Trophy, Star, Briefcase } from 'lucide-react';

interface Achievement {
  stat: string;
  title: string;
  icon: JSX.Element;
  description: string;
  colorClass: string;
}

const achievements: Achievement[] = [
  {
    stat: '8.57 CGPA',
    title: 'B.Tech in CSE',
    icon: <GraduationCap size={24} />,
    description: 'Pursuing Computer Science Engineering at Geethanjali College of Engineering and Technology (2023 - 2027).',
    colorClass: 'from-blue-500 to-cyan-500'
  },
  {
    stat: 'LeetCode Solver',
    title: 'Data Structures & Algorithms',
    icon: <BrainCircuit size={24} />,
    description: 'Active solver mastering algorithmic complexity, arrays, dynamic programming, and OOP concepts.',
    colorClass: 'from-cyan-500 to-teal-500'
  },
  {
    stat: '2 Internships',
    title: 'Professional Internships',
    icon: <Star size={24} />,
    description: 'Completed MERN stack development at Cantilever Labs and 3D modeling at Eswar Solutions.',
    colorClass: 'from-indigo-500 to-blue-500'
  },
  {
    stat: '4 Certified',
    title: 'Technical Credentials',
    icon: <Award size={24} />,
    description: 'Certified in Cisco Python Essentials & C, Oracle Java Fundamentals, and Oracle Database Design.',
    colorClass: 'from-purple-500 to-indigo-500'
  },
  {
    stat: 'Rank 6141',
    title: 'Smart Coder Certificate',
    icon: <Trophy size={24} />,
    description: 'Silver Certified "Smart Coder" in 2026 after ranking 6141/56946 globally on Smart Interviews.',
    colorClass: 'from-rose-500 to-pink-500'
  },
  {
    stat: '96.8% Score',
    title: 'Intermediate Education',
    icon: <Trophy size={24} />,
    description: 'Completed board of intermediate education at Excellencia Junior College (2021 - 2023).',
    colorClass: 'from-pink-500 to-purple-500'
  },
  {
    stat: '3 Simulations',
    title: 'Forage Job Simulations',
    icon: <Briefcase size={24} />,
    description: 'Completed practical tasks for JPMorgan Chase (Kafka/REST), Skyscanner (React), and Deloitte (Data Analytics).',
    colorClass: 'from-amber-500 to-orange-500'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Achievements"
          subtitle="A summary of my academic metrics, certifications, and problem-solving milestones."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Top Row: Icon & Stat */}
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${ach.colorClass} bg-opacity-20 text-white shadow-lg`}>
                  {ach.icon}
                </div>
                <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {ach.stat}
                </span>
              </div>

              {/* Text */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {ach.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                {ach.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
