import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';

interface Project {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  image: string;
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: 'MedAI',
    description: 'An AI-driven diagnostic assistant designed to analyze medical imaging scans (X-Rays, CT scans) and compile clinical summaries.',
    features: [
      'Interactive DICOM and medical JPEG upload panels.',
      'AI visual analyzer with confidence interval metrics.',
      'Automatic report export to PDF format.'
    ],
    techStack: ['Python', 'FastAPI', 'PyTorch', 'React.js', 'MongoDB'],
    image: 'images/MedAi.png',
    github: 'https://github.com/Jay-7374/MedAI---IP',
    demo: 'https://med-ai-ip.vercel.app/'
  },
  {
    title: 'Student Record Management System',
    description: 'A modular command-line application in C to manage student records using persistent file storage.',
    features: [
      'Implemented CRUD operations, searching, sorting, and file handling using structures and modular programming.',
      'Applied input validation and error handling to improve software reliability.',
      'Designed reusable modules for maintainable and efficient code.'
    ],
    techStack: ['C', 'Structures', 'File I/O', 'Data Handling'],
    image: 'images/StudentDBM.png',
    github: 'https://github.com/Jay-7374/Student-RMS',
    demo: ''
  },
  {
    title: 'InCamp Club Platform',
    description: 'A paid freelance student engagement and event management platform built for thinkishminds.pvt in a collaborative 3-developer team.',
    features: [
      'Developed as a paid freelance project for thinkishminds.pvt, collaborating alongside 2 other developers.',
      'Created a student engagement and event management platform with secure authentication.',
      'Integrated Supabase authentication and database workflows for scalable user management.',
      'Managed deployments and application updates using Vercel.'
    ],
    techStack: ['React.js', 'Supabase', 'Authentication', 'Vercel', 'Team Development'],
    image: 'images/Incamp.png',
    github: 'https://github.com/incampofficial-svg/inCamp-home',
    demo: 'https://home.incamp.in/'
  },
  {
    title: 'MERN E-Commerce',
    description: 'A full-stack e-commerce marketplace featuring product search, shopping carts, and order processing workflows.',
    features: [
      'Developed a full-stack e-commerce application with authentication and order management.',
      'Built REST APIs and backend modules for product, cart, and order processing.',
      'Integrated MongoDB for scalable data management.'
    ],
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'MERN Stack'],
    image: 'images/Demo5.png',
    github: 'https://github.com/Jay-7374/Jay-7374.github.io/tree/main/My_Store',
    demo: 'https://gcet-react-app-ecru.vercel.app/'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 z-10 overflow-hidden bg-gray-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of full-stack products, developer tools, and AI-integrated systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div key={project.title} className="h-full">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
