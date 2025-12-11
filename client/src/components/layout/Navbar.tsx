"use client";

import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [location, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Trang Chủ" },
    { href: "/details", label: "Nội Dung" },
    { href: "/exhibition", label: "Triển Lãm" },
    { href: "/minigame", label: "Ôn tập kiến thức" },
  ];

  // CUSTOM NAVIGATION WITH TRANSITION
  const navigateWithTransition = (href: string) => {
    if (href === location) return;

    setTransitioning(true);

    // Delay navigation until blackout animation is visible
    setTimeout(() => {
      setLocation(href);
      setTimeout(() => setTransitioning(false), 600);
    }, 300); // duration of blackout-in
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-serif",
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-md py-2 border-b border-border/50"
            : "bg-transparent py-4 text-white"
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <button
            onClick={() => navigateWithTransition("/")}
            className="text-2xl font-bold tracking-tighter uppercase flex items-center gap-2 cursor-pointer"
          >
            <span className="text-primary text-3xl">★</span>
            Chiến dịch Hồ Chí Minh
          </button>

          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => navigateWithTransition(link.href)}
                className={cn(
                  "uppercase tracking-widest text-sm hover:text-primary transition-colors",
                  location === link.href &&
                    "text-primary font-bold border-b-2 border-primary"
                )}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* DARK FADE TRANSITION OVERLAY */}
      <AnimatePresence>
        {transitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="fixed inset-0 bg-black z-[9999] pointer-events-none"
          />
        )}
      </AnimatePresence>
    </>
  );
}
