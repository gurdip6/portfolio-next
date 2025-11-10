"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("light");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
    }
  }, []);

  const links = [
    { name: "Hem", href: "#hero" },
    { name: "Om mig", href: "#about" },
    { name: "Färdigheter", href: "#skills" },
    { name: "Projekt", href: "#projects" },
    { name: "CV", href: "#documents" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur border-b border-slate-800 light:bg-white/70 light:border-slate-200 shadow-lg"
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* 🔹 Logo / Namn */}
        <a
          href="#hero"
          className="text-blue-400 text-2xl font-bold tracking-wide hover:text-blue-300 transition light:text-blue-600"
        >
          Gurdip Bola
        </a>

        {/* 🔹 Desktop-menyn */}
        <ul className="hidden md:flex gap-8 text-slate-300 font-medium light:text-slate-700">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-blue-400 transition-colors light:hover:text-blue-600"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* 🔹 Sociala länkar + Theme Switch */}
        <div className="flex items-center gap-6">
          {/* LinkedIn */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://www.linkedin.com/in/gurdip-bola-b82136217/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition light:text-slate-700 light:hover:text-blue-600"
          >
            <Image
              src="/project5.png"
              alt="LinkedIn"
              width={20}
              height={20}
              className="rounded-sm"
            />
            <span className="hidden sm:inline text-sm font-medium">LinkedIn</span>
          </motion.a>

          {/* GitHub */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="https://github.com/gurdip6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition light:text-slate-700 light:hover:text-blue-600"
          >
            <Image
              src="/project4.png"
              alt="GitHub"
              width={20}
              height={20}
              className="rounded-sm"
            />
            <span className="hidden sm:inline text-sm font-medium">GitHub</span>
          </motion.a>

          {/* Theme Switch */}
          <button
            onClick={toggleTheme}
            className="text-slate-300 hover:text-blue-400 transition light:text-slate-700 light:hover:text-blue-600"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobil meny knapp */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-slate-300 hover:text-blue-400 transition light:text-slate-700 light:hover:text-blue-600"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* 🔹 Mobilmeny */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-slate-900/90 border-t border-slate-800 backdrop-blur text-center py-4 light:bg-white/90 light:border-slate-200"
          >
            <ul className="flex flex-col gap-4 text-slate-200 text-lg light:text-slate-800">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block py-2 hover:text-blue-400 transition-colors light:hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}

              {/* Mobilversion av sociala länkar */}
              <div className="flex justify-center gap-6 mt-4">
                <a
                  href="https://www.linkedin.com/in/gurdip-bola-b82136217/"
                  target="_blank"
                  className="flex items-center gap-2 text-slate-300 hover:text-blue-400 light:text-slate-700 light:hover:text-blue-600"
                >
                  <Image src="/project5.png" alt="LinkedIn" width={22} height={22} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/gurdip6"
                  target="_blank"
                  className="flex items-center gap-2 text-slate-300 hover:text-blue-400 light:text-slate-700 light:hover:text-blue-600"
                >
                  <Image src="/project4.png" alt="GitHub" width={22} height={22} />
                  <span>GitHub</span>
                </a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
