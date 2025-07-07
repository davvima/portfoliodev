import { useState, useEffect, useRef } from "react"
import { Code, Server, Zap } from "lucide-react"

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "I specialize in building modular, maintainable, and high-performance interfaces focused on usability, accessibility, and business impact.",
      technologies: ["React", "TypeScript", "VTEX IO", "CSS Modules", "TailwindCSS"],
    },
    {
      icon: Server,
      title: "Backend & Integrations",
      description:
        "I implement scalable backend logic and connect systems through robust API integrations, enabling seamless data flow and dynamic functionality.",
      technologies: ["Node.js", "Express", "VTEX APIs", "REST", "GraphQL"],
    },
    {
      icon: Zap,
      title: "Soft Skills",
      description:
        "I bring a collaborative mindset, clear communication, and a strong sense of ownership—always aligning technical work with strategic goals.",
      technologies: ["Teamwork", "Communication", "Problem Solving", "Adaptability", "Proactivity"],
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">
            My <span className="font-medium">Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-gray-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                <skill.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-medium text-gray-900 mb-4">{skill.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{skill.description}</p>

              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full border border-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
