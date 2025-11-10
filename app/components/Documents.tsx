"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import React from "react";

export default function Documents() {
  return (
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
          className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">Mitt CV</h3>
          <iframe
            src="/cv.pdf"
            className="w-full h-96 rounded-lg border border-slate-700 mb-4"
          />
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg transition"
          >
            <Download className="w-5 h-5" />
            Ladda ner CV
          </a>
        </motion.div>

        {/* Personligt brev */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">
            Personligt brev
          </h3>
          <iframe
            src="/personligt-brev.pdf"
            className="w-full h-96 rounded-lg border border-slate-700 mb-4"
          />
          <a
            href="/personligt-brev.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-lg transition"
          >
            <Download className="w-5 h-5" />
            Ladda ner brev
          </a>
        </motion.div>
      </div>
    </section>
  );
}
