import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { User, ShieldCheck, Zap, Sparkles } from 'lucide-react';

const coreValues = [
  {
    icon: <ShieldCheck className="text-blue-400" size={24} />,
    title: 'Robust & Scalable API Design',
    desc: 'Designing server architectures and endpoints that scale gracefully under heavy workloads.'
  },
  {
    icon: <Zap className="text-cyan-400" size={24} />,
    title: 'Performance Optimization',
    desc: 'Maximizing speeds, optimizing DB queries, and using caching layers to ensure rapid responses.'
  },
  {
    icon: <Sparkles className="text-indigo-400" size={24} />,
    title: 'AI & Data Integration',
    desc: 'Connecting LLMs, building custom RAG pipelines, and using predictive models for smart automation.'
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About Me"
          subtitle="A MERN Stack Developer & Backend Engineer interested in AI applications, Agentic AI architectures, and cloud solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Left Column: Description & Background */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <User className="text-blue-400" size={24} />
              Who I Am
            </h3>
            <p className="text-gray-300 leading-relaxed font-medium">
              I am a Computer Science Engineering student at Geethanjali College of Engineering and Technology. I specialize in building full-stack web applications and am deeply passionate about artificial intelligence.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              I have attended multiple AI and Agentic AI workshops, built custom agentic AI applications using Google Colab, and am currently preparing for the AWS Certified AI Practitioner program. I enjoy bringing intelligent, automated layers into MERN stack systems.
            </p>

            <div className="pt-4 border-t border-white/5 space-y-2">
              <div className="flex justify-between text-sm py-1 border-b border-white/5">
                <span className="text-gray-500 font-semibold uppercase">Location:</span>
                <span className="text-gray-300 font-medium">Hyderabad, India</span>
              </div>
              <div className="flex justify-between text-sm py-1 border-b border-white/5">
                <span className="text-gray-500 font-semibold uppercase">Interests:</span>
                <span className="text-gray-300 font-medium">Agentic AI, AWS Cloud, Algorithms, MERN</span>
              </div>
              <div className="flex justify-between text-sm py-1">
                <span className="text-gray-500 font-semibold uppercase">Role Compatibility:</span>
                <span className="text-gray-300 font-medium">MERN Stack Developer, Backend Developer, AI Engineer</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Values / Approach */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">My Engineering Core Values</h3>
            <div className="space-y-4">
              {coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-blue-500/30 transition-all hover:bg-white/10"
                >
                  <div className="flex-shrink-0 mt-1">{val.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{val.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
