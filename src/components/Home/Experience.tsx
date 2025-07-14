import { useState, useEffect, useRef } from "react"

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      year: "2022 - 2025",
      title: "Full‑Stack Developer",
      company: "Pócima Digital",
      description:
        "Developed custom eCommerce storefronts using React, Node.js, and VTEX IO. Focused on performance optimization, third-party service integrations, and building highly adaptable components with complex business logic",
    },
    {
      year: "2023",
      title: "Frontend Developer",
      company: "Municipalidad de Villa Allende",
      description:
        "Developed a web interface for managing fines and legal claims. Delivered a modern, responsive UI with React.",
    },
    {
      year: "2022",
      title: "Frontend Developer (Freelance)",
      company: "Independent Projects",
      description:
        "Developed corporate websites with SEO and responsive design focus. Collaborated directly with clients to meet business goals.",
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out mb-16 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-light text-center">
            Work <span className="font-medium">Experience</span>
          </h2>
        </div>

        <div className="relative">
          {/* Línea vertical del timeline */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          {/* Items del timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                {/* Punto del timeline */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-2 w-4 h-4 bg-white border-4 border-gray-900 rounded-full"></div>

                {/* Contenido para mobile */}
                <div className="md:hidden ml-16">
                  <div className="bg-slate-200 dark:bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-sm font-medium text-gray-500 mb-2">{exp.year}</div>
                    <h3 className="text-xl font-medium text-gray-900 mb-1">{exp.title}</h3>
                    <div className="text-gray-700 font-medium mb-3">{exp.company}</div>
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>

                {/* Contenido para desktop - alternando lados */}
                <div className="hidden md:block">
                  <div
                    className={`flex items-center ${
                      index % 2 === 0 ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                      <div className="bg-slate-200 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-sm font-medium text-gray-500 mb-2">{exp.year}</div>
                        <h3 className="text-xl font-medium text-gray-900 mb-1">{exp.title}</h3>
                        <div className="text-gray-800 font-medium mb-3">{exp.company}</div>
                        <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
