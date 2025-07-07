"use client"

import { useEffect, useState } from "react"
import { X, Globe, MoonIcon, BarrelIcon } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScroll, setIsScroll] = useState(false)

  const handleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, [])

  return (
    <div>
      <nav
        className={`fixed w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between  z-50 ${
          isScroll ? "bg-[rgba(255,255,255,0.1)] backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <div style={{ width: "234px" }}>DAVVIMA</div>

        <ul
          className={`flex hidden lg:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "shadow-sm bg-[rgba(255,255,255,0.1)]"
          }`}
        >
          <li>
            <a className="" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="" href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="" href="#projects">
              Work
            </a>
          </li>
        </ul>
        <div className="flex items-ceter gap-4">
          <button>
            <MoonIcon className="w-6" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Lusitana"
          >
            Contact <Globe className="w-6 rotate-[15deg]" />
          </a>

          <button className="block lg:hidden ml-3" onClick={handleMenu}>
            <BarrelIcon className="w-6" />
          </button>
        </div>
        {/* -----mobile menu----- */}
        <ul
          className={`flex lg:hidden flex-col gap-4 py-0 px-10 fixed  top-0 bottom w-64 z-50 h-screen bg-rose-50 transition duration-500 ${
            isMenuOpen ? "right-0" : "-right-64"
          }`}
        >
          <button className="absolute right-6 top-6" onClick={handleMenu}>
            <X className="w-5 cursor-pointer" />
          </button>
          <li className="">
            <a className="font-Lusitana" onClick={handleMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Lusitana" onClick={handleMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Lusitana" onClick={handleMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Lusitana" onClick={handleMenu} href="#work">
              My work
            </a>
          </li>
          <li>
            <a className="font-Lusitana" onClick={handleMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
