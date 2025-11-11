"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const sectionTop = element?.offsetTop ?? 0;
        const sectionHeight = element?.offsetHeight ?? 0;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = element.getAttribute("id") || "";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Hem", href: "#hero" },
    { name: "Om mig", href: "#about" },
    { name: "Kompetens", href: "#kompetens" },
    { name: "Projekt", href: "#projects" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur border-b border-slate-800">
      <nav className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 text-slate-300">
        
        {/* 🔹 Navigationslänkar */}
        <div className="flex gap-6 justify-center md:justify-start">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative group font-medium tracking-wide"
            >
              <span
                className={`transition-colors duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "text-blue-400"
                    : "group-hover:text-blue-400"
                }`}
              >
                {item.name}
              </span>

              <motion.span
                layoutId="underline"
                className={`absolute left-0 bottom-[-4px] h-[2px] bg-blue-400 rounded-full transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* 🔹 Sociala länkar */}
        <div className="flex gap-6 mt-4 md:mt-0 items-center">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/gurdip-bola-b82136217/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <div className="relative">
              <Image
                src="/project5.png"
                alt="LinkedIn"
                width={28}
                height={28}
                className="rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_12px_4px_rgba(56,189,248,0.4)]"
              />
            </div>
            <span className="font-medium">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/gurdip6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <div className="relative">
              <Image
                src="/project4.png"
                alt="GitHub"
                width={28}
                height={28}
                className="rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_12px_4px_rgba(56,189,248,0.4)]"
              />
            </div>
            <span className="font-medium">GitHub</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
