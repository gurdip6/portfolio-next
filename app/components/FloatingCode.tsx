"use client";
import React, { useEffect, useState } from "react";

export default function FloatingCode() {
  const [codes, setCodes] = useState<
    { text: string; x: number; delay: number; duration: number }[]
  >([]);

  useEffect(() => {
    const snippets = [
      "public async Task<IActionResult> GetAll() { }",
      "builder.Services.AddControllers();",
      "console.log('Azure Connected');",
      "using Microsoft.EntityFrameworkCore;",
      "for (int i = 0; i < 10; i++) { }",
      "return Ok(result);",
      "const data = await fetch('/api');",
      "<div className='container'>",
    ];

    const generated = Array.from({ length: 25 }).map(() => ({
      text: snippets[Math.floor(Math.random() * snippets.length)],
      x: Math.random() * 100, // horisontell placering
      delay: Math.random() * 15, // olika starttider
      duration: 20 + Math.random() * 10, // flyttid
    }));

    setCodes(generated);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {codes.map((code, i) => (
        <span
          key={i}
          className="absolute text-blue-400 text-[10px] md:text-sm font-mono opacity-40 animate-float glow"
          style={{
            left: `${code.x}%`,
            animationDelay: `${code.delay}s`,
            animationDuration: `${code.duration}s`,
          }}
        >
          {code.text}
        </span>
      ))}

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(110vh);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-10vh);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .glow {
          text-shadow: 0 0 8px rgba(56, 189, 248, 0.8),
            0 0 20px rgba(56, 189, 248, 0.6);
        }
      `}</style>
    </div>
  );
}
