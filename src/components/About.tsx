export default function About() {
    const skills = [
        {
          name: "React",
          description: "Building dynamic user interfaces",
          percentage: 90,
        },
        {
          name: "Node.js",
          description: "Backend development and APIs",
          percentage: 85,
        },
        {
          name: "MongoDB",
          description: "Database management for scalable apps",
          percentage: 90,
        },
        {
          name: "Tailwind CSS",
          description: "Modern styling framework for responsive design",
          percentage: 90,
        },
        {
          name: "Next.js",
          description: "Server-side rendering and static site generation",
          percentage: 70,
        },
        {
          name: "TypeScript",
          description: "Enhanced JavaScript with static typing",
          percentage: 80,
        },
    
      ]
      
  
    return (
      <section className="min-h-screen bg-[#1A1A1A] p-8 md:p-16">
        <h1 className="text-[#E2FB30] text-6xl font-bold mb-16 font-bebas">ABOUT</h1>
  
        <div className="grid md:grid-cols-2 gap-12 text-gray-400">
          <div className="text-md leading-relaxed font-mono">
            
            My passion lies at the crossroads of innovation and functionality, where I build modern websites 
            that are not only visually captivating but also seamlessly responsive. I thrive on crafting 
            intuitive user experiences and turning ideas into digital realities. 
          </div>
  
          <div className="text-md leading-relaxed font-mono">
          I am currently pursuing a Bachelor of Technology in Electronics and Communication Engineering at the esteemed Tezpur University.
           This academic journey has provided me with a strong foundation in technology and innovation, equipping me with the skills to 
           craft solutions that seamlessly integrate functionality and creativity in the digital realm.
          </div>
        </div>
  
        <div className="mt-16 space-y-8">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-white text-2xl font-medium">{skill.name}</h3>
                  <p className="text-gray-400">{skill.description}</p>
                </div>
                <span className="text-[#E2FB30] text-6xl font-light">{skill.percentage}%</span>
              </div>
              <div className="w-full h-16 bg-[#252525] rounded-lg overflow-hidden">
                <div
                  className="h-full bg-[#E2FB30] rounded-lg transition-all duration-1000 ease-out"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  