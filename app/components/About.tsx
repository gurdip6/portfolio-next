"use client";
import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 py-32 text-center text-slate-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-slate-200 mb-6"
      >
        Om mig
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg leading-relaxed max-w-3xl mx-auto text-slate-300 inline-block text-left"
      >
        Jag är en systemutvecklare med fokus på .NET och Azure.
        Jag brinner för att bygga säkra och skalbara API:er samt för en
        ren och strukturerad kodbas. Jag gillar att förvandla idéer till
        genomtänkta digitala lösningar och att ständigt utveckla mina kunskaper
        inom ny teknik
        <span className="ml-1 h-6 w-[2px] bg-blue-400 inline-block align-bottom animate-blink"></span>
      </motion.p>
    </section>
  );
}
