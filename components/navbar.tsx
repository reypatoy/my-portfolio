'use client';

import Link from "next/link";
import { useState } from "react";

type NavItem = {
    label: string
    link: string

}

const navItems: NavItem[] = [
    {
        label: "Home",
        link: "/"
    },
    {
        label: "Projects",
        link: "/projects"
    },
    {
        label: "Skills",
        link: "/skills"
    },
    {
        label: "Services",
        link: "/services"
    },
    {
        label: "Experience",
        link: "/experience"
    },
    {
        label: "Contact",
        link: "/contact"
    }
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState<string | null>('/');

  return (
    <div className="bg-[#1E2938] text-white">
      <div className="mx-auto flex items-center justify-between py-4 px-8">
        <div className="text-lg font-bold">
          Rey's Portfolio
        </div>

        <nav className="hidden md:block lg:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link 
                  href={item.link} 
                  className={`hover:text-[#D1D5DB] ${activeLink === item.link ? 'underline underline-offset-4' : ''}`}
                  onClick={() => setActiveLink(item.link)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="lg:hidden md:hidden text-xl focus:outline-none hover:cursor-pointer hover:text-[#D1D5DB] relative z-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-[#374151] md:hidden lg:hidden absolute top-15 right-0 w-56 bg-[#1E2938] z-10">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link 
                  href={item.link} 
                  className={`block px-4 py-3 hover:bg-[#374151] ${activeLink === item.link ? 'underline underline-offset-4' : ''}`}
                  onClick={() => setActiveLink(item.link)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}