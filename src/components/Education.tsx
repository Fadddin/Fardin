export default function EducationSection() {
    const education = [
      {
        degree: "B.Tech in Electronics and Communication",
        school: "Tezpur University University",
        period: "2022 — 2026",
        description: "CGPA 8.4",
      },
      {
        degree: "Higher Secordary in Science",
        school: "Brilliant Academy",
        period: "2020-2022",
        description:
          "Percentage: 84%",
      },
      {
        degree: "HSLC",
        school: "North East Academy",
        period: "2007 — 2020",
        description: "Percentage: 86%",
      }
    ]
  
    return (
      <section className="min-h-screen p-8 md:p-16">
        <h1 className="text-[#E2FB30] text-6xl font-bold mb-16">EDUCATION</h1>
  
        <div className="grid md:grid-cols-1 gap-x-16 gap-y-20">
          {education.map((item) => (
            <div key={item.degree} className="space-y-4">
              <div className="space-y-1 font-mono">
                <h2 className="text-white text-2xl font-medium">{item.degree}</h2>
                <div className="space-y-0.5">
                  <p className="text-gray-500">{item.school}</p>
                  <p className="text-gray-500">{item.period}</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
              <div className="pt-8 mt-auto">
                <div className="h-px bg-gray-800 w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  