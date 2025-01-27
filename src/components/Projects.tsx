

const projects = [
  {
    id: 1,
    image: "/vite.svg",
    title: "Restaurant Ordering App",
    description: "A MERN app for QR code-based food ordering.",
    github: "https://github.com/yourusername/restaurant-ordering-app",
  },
  {
    id: 2,
    image: "/vite.svg",
    title: "Agricultural Marketplace",
    description: "Connecting farmers and buyers using React Native.",
    github: "https://github.com/yourusername/agricultural-marketplace",
  },
  {
    id: 3,
    image: "/vite.svg",
    title: "Coding Contest Platform",
    description: "A platform for hosting coding competitions.",
    github: "https://github.com/yourusername/coding-contest-platform",
  },
  {
    id: 4,
    image: "/vite.svg",
    title: "QR Code Generator",
    description: "A MERN app to create and manage QR codes.",
    github: "https://github.com/yourusername/qr-code-generator",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen p-8 md:p-16 bg-background">
      <h1 className="text-[#E2FB30] text-6xl font-bold mb-16">PROJECTS</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 font-mono">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#131313] rounded overflow-hidden hover:shadow-gray-900 hover:shadow-md transition-shadow duration-400 cursor-pointer"
            onClick={() => window.open(project.github, "_blank")}
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-80 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-300">{project.title}</h2>
              <p className="text-gray-400 mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
