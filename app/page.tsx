"use client";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import ScrollToTop from "./components/ScrollToTop";


export default function Home() {
  const fullText = "System Developer · .NET · Azure";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    setTypedText(""); // nollställ text
    let index = 0;
    const speed = 80;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-200 scroll-smooth font-mono">
      {/* 🔹 Navigationsmeny */}
      <Navbar />

    
{/* 🔹 Hero-sektion */}
<section
  id="hero"
  className="flex flex-col items-center justify-center text-center h-[90vh] space-y-6"
>
  <motion.img
    src="/Gurdip.jpg"
    alt="Gurdip Bola"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="rounded-full border-4 border-blue-400 shadow-[0_0_40px_10px_rgba(56,189,248,0.3)] object-cover w-40 h-40 md:w-48 md:h-48"
  />

  <h1 className="text-5xl md:text-6xl font-extrabold text-blue-400">
    Gurdip Bola
  </h1>

 <span className="text-blue-400">
  <Typewriter
    words={["System Developer · .NET · Azure"]}
    cursor
    cursorStyle="|"
    typeSpeed={80}
    deleteSpeed={0}
    delaySpeed={3000}
 
  />
</span>


</section>



      {/* 🔹 Om mig */}
      <About />

      {/* 🔹 Färdigheter */}
      <Skills />

      {/* 🔹 Projekt */}
      <Projects />

      {/* 🔹 CV & Personligt brev */}
      <section
        id="documents"
        className="max-w-6xl mx-auto px-6 py-32 text-center text-slate-300"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-slate-200 mb-10"
        >
          CV & Personligt brev
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* CV */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 35px rgba(56,189,248,0.35)",
            }}
            className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 shadow-lg transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Mitt CV</h3>
            <iframe
              src="/GurdipBolaCV5.pdf"
              className="w-full h-96 rounded-lg border border-slate-700 mb-4"
            />
            <a
              href="/GurdipBolaCV5.pdf"
              download
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </motion.svg>
              Ladda ner CV
            </a>
          </motion.div>

          {/* Personligt brev */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 35px rgba(56,189,248,0.35)",
            }}
            className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 shadow-lg transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">
              Personligt brev
            </h3>
            <iframe
              src="/Personligt%20Brev-Gurdip5.pdf"
              className="w-full h-96 rounded-lg border border-slate-700 mb-4"
            />
            <a
              href="/Personligt%20Brev-Gurdip5.pdf"
              download
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </motion.svg>
              Ladda ner brev
            </a>
          </motion.div>
        </div>
      </section>

      {/* 🔹 Kontakt */}
      <Contact />

      {/* 🔹 Scroll to top button */}
<ScrollToTop />

      {/* 🔹 Sidfot */}
      <footer className="border-t border-slate-800 py-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Gurdip Bola.
      </footer>
    </main>
  );
}
