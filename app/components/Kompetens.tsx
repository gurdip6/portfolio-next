"use client";
import { motion } from "framer-motion";
import React from "react";

const kompetenser = [
  { name: ".NET", color: "text-purple-400" },
  { name: "C#", color: "text-blue-400" },
  { name: "JavaScript", color: "text-yellow-400" },
  { name: "React", color: "text-cyan-400" },
  { name: "Next.js", color: "text-white" },
  { name: "Azure", color: "text-sky-400" },
  { name: "SQL", color: "text-green-400" },
  { name: "TailwindCSS", color: "text-teal-400" },
  { name: "GitHub", color: "text-gray-300" },
  { name: "REST API", color: "text-orange-400" },
];

export default function Kompetens() {
  return (
    <section
      id="kompetens"
      className="max-w-6xl mx-auto px-6 py-32 text-center text-slate-300"
    >
      {/* 🔹 Titel */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-slate-200 mb-10"
      >
        Kompetens
      </motion.h2>

      {/* 🔹 Kompetenskort */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {kompetenser.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 25px rgba(56,189,248,0.3)",
            }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-slate-800/60 border border-slate-700 rounded-xl px-6 py-4 shadow-md hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all duration-300"
          >
            <p className={`text-lg font-semibold ${item.color}`}>
              {item.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
