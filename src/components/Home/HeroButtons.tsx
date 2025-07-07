import { ChevronDown, Download } from "lucide-react"

const HeroButtons = () => {
  const scrollToNext = () => {
    console.log(document.getElementById("projects"))
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadCV = () => {
    console.log("download")
    // Create a link element and trigger download
    const link = document.createElement("a")
    link.href = "/cv.pdf" // You'll need to add your CV file to the public folder
    link.download = "David_Freites_FullStack_Developer.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <div className="transition-all duration-1000 ease-out delay-500">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
        <button
          onClick={downloadCV}
          className="group inline-flex items-center px-8 py-3 bg-gray-600 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
        >
          <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
          <span className="font-medium">Download CV</span>
        </button>

        <button
          onClick={scrollToNext}
          className="group inline-flex items-center hover:text-gray-300 transition-colors duration-300 cursor-pointer"
        >
          <span className="text-sm font-medium tracking-wide uppercase mr-2">Explore My Work</span>
          <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  )
}

export default HeroButtons
