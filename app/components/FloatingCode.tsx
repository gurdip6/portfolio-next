"use client";
import React, { useMemo } from "react";

export default function FloatingCode() {
  const floatingSnippets = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        text: [
          "public async Task<IActionResult> GetAll() { }",
          "builder.Services.AddControllers();",
          "console.log('Azure Connected');",
          "using Microsoft.EntityFrameworkCore;",
          "for (int i = 0; i < 10; i++) { }",
          "return Ok(result);",
          "const data = await fetch('/api');",
          "<div className='container'>",
          "app.UseHttpsRedirection();",
          "services.AddDbContext<AppDbContext>();",
          "if (ModelState.IsValid) { }",
          "npm run build && npm start",
          "<motion.div whileHover={{ scale: 1.1 }} />",
          "FROM mcr.microsoft.com/dotnet/aspnet:9.0",
          "docker-compose up --build",
          "console.log('Hello Gurdip');",
          "await context.SaveChangesAsync();",
          "return View(model);",
        ][i % 18],
        left: `${Math.random() * 90}%`, // narrower range so it's centered
        top: `${Math.random() * 100}%`,
        duration: `${10 + Math.random() * 10}s`,
        delay: `${Math.random() * 5}s`,
      })),
    []
  );

  return (
    <div
      className="absolute inset-0 overflow-hidden font-mono text-blue-400 text-xs md:text-sm opacity-30 pointer-events-none"
      style={{
        zIndex: 0, // below text, but within same layer
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      {floatingSnippets.map((code, i) => (
        <p
          key={i}
          className="absolute animate-float glow"
          style={{
            left: code.left,
            top: code.top,
            animationDuration: code.duration,
            animationDelay: code.delay,
            whiteSpace: "nowrap",
          }}
        >
          {code.text}
        </p>
      ))}

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(100vh);
            opacity: 0.2;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0.2;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .glow {
          text-shadow: 0 0 8px rgba(56, 189, 248, 0.8),
            0 0 20px rgba(56, 189, 248, 0.6);
        }

        html,
        body {
          overflow-x: hidden !important;
          position: relative;
        }
      `}</style>
    </div>
  );
}
