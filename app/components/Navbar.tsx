"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id") || "";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Hem", href: "#hero" },
    { name: "Om mig", href: "#about" },
    { name: "Kompetens", href: "#kompetens" },
    { name: "Projekt", href: "#projects" },
    { name: "CV & PB", href: "#documents" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur border-b border-slate-800">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 text-slate-300 font-medium">
        {/* 🔹 Links */}
        <div className="flex gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative group transition-colors duration-300 hover:text-blue-400 ${
                activeSection === link.href.replace("#", "")
                  ? "text-blue-400"
                  : ""
              }`}
            >
              <span className="pb-1">{link.name}</span>

              {/* 🔹 Blue glow line under text */}
              <span
                className={`absolute left-1/2 -bottom-[4px] h-[2px] w-0 bg-blue-400 rounded-full transition-all duration-300 ease-out transform -translate-x-1/2 group-hover:w-full ${
                  activeSection === link.href.replace("#", "")
                    ? "w-full shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                    : "group-hover:shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* 🔹 Social links */}
        <div className="flex gap-6 items-center">
          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/gurdip-bola-b82136217/"
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Image
              src="/project5.png"
              alt="LinkedIn"
              width={22}
              height={22}
              className="rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"
            />
            <span className="hidden sm:inline">LinkedIn</span>
          </Link>

          {/* GitHub */}
          <Link
            href="https://github.com/gurdip6"
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Image
              src="/project4.png"
              alt="GitHub"
              width={22}
              height={22}
              className="rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"
            />
            <span className="hidden sm:inline">GitHub</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
