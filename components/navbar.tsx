'use client';

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

type NavItem = {
    label: string
    link: string

}

const navItems: NavItem[] = [
    {
        label: "About",
        link: "/#"
    },
    {
        label: "Skills",
        link: "/#skills"
    },
    {
        label: "Projects",
        link: "/#projects"
    },
    {
        label: "Services",
        link: "/#services"
    },
    {
        label: "Experience",
        link: "/#experience"
    },
    {
        label: "Contact",
        link: "/#contact"
    }
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();

  return (
    <div className="fixed z-50 border-b border-[#223041] bg-[#020B16] text-white w-full">
      <div className="flex items-center justify-around gap-x-4 py-4 w-full max-sm:px-10 px-40">
        <div className="text-lg font-bold whitespace-nowrap text-[#F1F5F9]">
          Rey's Portfolio
        </div>

        <nav className="hidden lg:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link 
                  href={item.link} 
                  className={`hover:text-[#D1D5DB] ${pathname === item.link ? 'underline underline-offset-4' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="lg:hidden text-xl focus:outline-none hover:cursor-pointer hover:text-[#D1D5DB] relative z-10"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-[#374151] lg:hidden absolute top-15 right-0 w-full bg-[#1E2938] z-10">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link 
                  href={item.link} 
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-center hover:bg-[#374151] ${pathname === item.link ? 'underline underline-offset-4' : ''}`}
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