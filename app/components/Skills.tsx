"use client";
import { motion } from "framer-motion";
import React from "react"; // ✅ lägg till denna för att Next/TypeScript ska känna igen JSX

const skills = [
  { name: ".NET", color: "text-purple-400" },
  { name: "C#", color: "text-blue-400" },
  { name: "JavaScript", color: "text-yellow-400" },
  { name: "React", color: "text-cyan-400" },
  { name: "Next.js", color: "text-white" },
  { name: "Azure", color: "text-sky-400" },
  { name: "SQL", color: "text-green-400" },
  { name: "TailwindCSS", color: "text-teal-400" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-32 text-center text-slate-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-slate-200 mb-10"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-slate-800/60 border border-slate-700 rounded-xl px-6 py-4 shadow-md hover:shadow-blue-400/20 transition"
          >
            <p className={`text-lg font-semibold ${skill.color}`}>
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
