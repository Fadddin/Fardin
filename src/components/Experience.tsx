export default function ExperienceSection() {
    const experiences = [
      {
        title: "Full Stack Intern",
        company: "Vrixxa Labs",
        period: "August 2024 — Present",
        description:
          "Developed an LMS with video uploading using React, Node.js, MongoDB. Built a multi-language coding environment, reducing code execution time by 30% through optimized Docker containers and RabbitMQ. Implemented JWT-based authentication, enhancing user data security and reducing unauthorized access attempts."
      },
      {
        title: "Frontend Developer",
        company: "Voolata",
        period: "Jan 2024 — July 2024",
        description:
          "Designed responsive UI with React and Tailwind CSS, improving mobile responsiveness and increasing user engagement. Integrated RESTful APIs, reducing data retrieval latency, leading to faster page load times. Collaborated with cross-functional teams to deliver new features, resulting in a growth in daily active users."
      },
      {
        title: "Web Developer",
        company: "TechXetra",
        period: "Oct 2024 — Nov 2024",
        description:
          "Designed UI/UX with Figma and implemented it using React.js and Three.js, attracting over 1,666 verified users within the first month. Optimized website performance using MongoDB, Express.js, and Redis caching, decreasing page load times. Automated data management processes, reducing manual workload for event organizers."
      },
    ]
  
    return (
      <section className="min-h-screen bg-[#1A1A1A] p-8 md:p-16">
        <h1 className="text-[#E2FB30] text-6xl font-bold mb-16 font-bebas">EXPERIENCE</h1>
  
        <div className="grid md:grid-cols-1 gap-x-16 gap-y-20 font-mono">
          {experiences.map((experience) => (
            <div key={experience.title} className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-white text-2xl font-medium">{experience.title}</h2>
                <div className="space-y-0.5">
                  <p className="text-gray-500">{experience.company}</p>
                  <p className="text-gray-500">{experience.period}</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">{experience.description}</p>
              <div className="pt-8 mt-auto">
                <div className="h-px bg-gray-800 w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  