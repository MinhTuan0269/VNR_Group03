import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

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
    { href: "/minigame", label: "Minigame" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-serif",
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-md py-2 border-b border-border/50"
          : "bg-transparent py-4 text-white"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold tracking-tighter uppercase flex items-center gap-2">
            <span className="text-primary text-3xl">★</span>
            Chiến dịch Hồ Chí Minh
          </a>
        </Link>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "uppercase tracking-widest text-sm hover:text-primary transition-colors",
                  location === link.href && "text-primary font-bold border-b-2 border-primary"
                )}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
