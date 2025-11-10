"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // Kolla scroll-position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-funktion
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 50,
      }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] transition-all duration-300 z-50"
      aria-label="Scroll to top"
    >
      <ArrowUp size={22} />
    </motion.button>
  );
}
