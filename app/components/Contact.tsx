"use client";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mzzyplnk", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-32 text-center text-slate-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-slate-200 mb-10"
      >
        Kontakt
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-slate-800/60 border border-slate-700 rounded-xl p-8 shadow-lg text-left space-y-6"
      >
        <div>
          <label className="block text-sm text-slate-400 mb-1">Namn</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:border-blue-500"
            placeholder="Ditt namn"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-400 mb-1">E-post</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:border-blue-500"
            placeholder="namn@exempel.se"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-400 mb-1">Meddelande</label>
          <textarea
            name="message"
            required
            rows={5}
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 focus:outline-none focus:border-blue-500"
            placeholder="Skriv ditt meddelande här..."
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.5)]"
        >
          <Send size={18} />
          Skicka
        </motion.button>

        {status === "success" && (
          <p className="text-green-400 text-center mt-4">
            ✅ Ditt meddelande har skickats!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-center mt-4">
            ❌ Något gick fel. Försök igen senare.
          </p>
        )}
      </motion.form>
    </section>
  );
}
