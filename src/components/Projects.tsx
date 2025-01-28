import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  description: string[];
  link? : string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Attendy",
    description: [
      "An Effective Afttendance tracking app made with NextJs",
      "It uses MongoDB as its database",
      "Integrates Firebase for secure authentication so users can sign in with Google"
    ],
    link: "https://attendy-omega.vercel.app/",
    githubUrl: "https://github.com/Fadddin/attendance-tracker"
  },
  {
    title: "Scalable Code Editor Backend (Microservices Architecture)",
    description: [
      "Designed and implemented a microservices-based architecture for scalability and maintainability.",
      "Built a queue system to efficiently handle simultaneous code submissions.",
      "Integrated Redis Pub/Sub for seamless communication between services.",
      "Secured containerized JavaScript code execution using Docker."
    ],
    link: "",
    githubUrl: "https://github.com/Fadddin/BtrCode"
  }
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-[#1A1A1A] rounded-xl p-6 relative group hover:scale-[1.02] transition-transform duration-300">
      <div className="flex justify-between items-start">
        <div>
        <h3 className="text-2xl font-bold text-white mb-4 font-mono">{project.title}</h3>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-white"
        >
          {project.link}
        </a>
        </div>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ArrowUpRight className="w-6 h-6" />
        </a>
      </div>
      <ul className="space-y-2 mt-2">
        {project.description.map((point, index) => (
          <li key={index} className="text-gray-400 font-mono text-sm">
            • {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Project() {
  return (
    <div className='py-16 px-4 sm:px-6 lg:px-8'>
        <h1 className="text-[#E2FB30] text-6xl font-bold mb-16 font-bebas">PROJECTS</h1>
    <div className=" text-white ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Project;