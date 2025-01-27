export default function ExperienceSection() {
    const experiences = [
      {
        title: "Full Stack Intern",
        company: "Vrixxa Labs",
        period: "August 2024 — Present",
        description:
          "Led the redesign of the flagship mobile application, resulting in a increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs.",
      },
      {
        title: "Frontend Developer",
        company: "Voolata",
        period: "Jan 2024 — July 2024",
        description:
          "Collaborated with the development team to implement a responsive design approach, improving the mobile user experience and increasing mobile app engagement.",
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
  
  