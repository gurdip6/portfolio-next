"use client";
import { motion } from "framer-motion";
import React from "react";

const projects = [
  {
    title: "GameStore API",
    description:
      "Ett komplett REST API byggt med .NET 9 och Entity Framework Core. Hanterar spel, användare och ordrar via en skalbar arkitektur och integrerad SQL-databas.",
    image: "/project1.jpg",
    link: "https://github.com/gurdip6/gamestore",
  },
  {
    title: "Weather Forecast App",
    description:
      "En modern väderapplikation som använder OpenWeather API för att hämta väderdata i realtid. Byggd med .NET 9, C#, och responsiv design för både desktop och mobil.",
    image: "/project2.jpg",
    link: "https://github.com/gurdip6/weather",
  },
  {
    title: "MyApi",
    description:
      "Ett säkert .NET 9 Web API-projekt som hanterar CRUD-operationer med JWT-autentisering och SQL Server. Fokuserar på best practice för API-utveckling och Azure-hosting.",
    image: "/project3.jpg",
    link: "https://github.com/gurdip6/MyApi",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-32 text-center text-slate-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-slate-200 mb-10"
      >
        Projekt
      </motion.h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-slate-800/60 border border-slate-700 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-400/30 transition transform"
          >
            <div className="h-48 bg-slate-700">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 text-left">
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
