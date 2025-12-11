import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
// import tankImage from "@assets/generated_images/t-54_tank_illustration.png";
import mapImage from "@assets/generated_images/vintage_map_of_saigon_1975.png";
import textureImage from "@assets/generated_images/old_paper_texture_overlay.png";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    // Đếm đến dịp 30/4 gần nhất (kỷ niệm thống nhất)
    const now = new Date();
    const currentYear = now.getFullYear();
    let nextAnniversary = new Date(`${currentYear}-04-30T00:00:00`);
    if (now > nextAnniversary) {
      nextAnniversary = new Date(`${currentYear + 1}-04-30T00:00:00`);
    }

    const timer = setInterval(() => {
      const distance = nextAnniversary.getTime() - new Date().getTime();
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft(`${days} NGÀY ${hours} GIỜ ${minutes} PHÚT`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Timeline xuất hiện hero
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(".hero-kicker", {
        y: -20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".hero-title-line",
          {
            y: 40,
            opacity: 0,
            stagger: 0.15,
            duration: 0.7,
          },
          "-=0.2",
        )
        .from(
          ".hero-year",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3",
        )
        .from(
          ".hero-subtitle",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3",
        )
        .from(
          ".hero-buttons",
          {
            y: 24,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4",
        )
        .from(
          ".hero-countdown",
          {
            y: 18,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Parallax theo chuột (chỉ cho background)
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(".hero-bg-parallax", {
        x: x * 18,
        y: y * 12,
        duration: 0.7,
        ease: "power2.out",
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-stone-900 text-white"
    >
      {/* Background map layer (parallax) */}
      <div
        className="hero-bg-parallax absolute inset-0 z-0 opacity-40 bg-cover bg-center grayscale sepia"
        style={{ backgroundImage: `url(${mapImage})` }}
      />

      {/* Texture Overlay */}
      <div
        className="absolute inset-0 z-10 opacity-30 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url(${textureImage})` }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)]" />

      {/* Light line */}
      <div className="pointer-events-none absolute top-1/2 left-0 right-0 z-10 opacity-30">
        <div className="mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-amber-400 to-transparent blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="space-y-6 max-w-2xl md:max-w-3xl mx-auto">
          <p className="hero-kicker text-secondary tracking-[0.3em] text-xs md:text-sm font-sans uppercase mb-4">
            Thần tốc - Táo bạo - Bất ngờ - Chắc thắng
          </p>

          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-shadow">
            <span className="hero-title-line block">CHIẾN DỊCH</span>
            <span className="hero-title-line text-primary block mt-1 md:mt-2">
              HỒ CHÍ MINH
            </span>
          </h1>

          <div className="hero-year text-lg md:text-2xl font-slab text-stone-300 mt-1 tracking-[0.25em]">
            1975
          </div>

          {/* Subtitle thay cho hình xe tăng */}
          <p className="hero-subtitle text-sm md:text-base text-stone-200/90 max-w-xl mx-auto mt-4">
            Chiến dịch lịch sử làm rung chuyển Sài Gòn – Gia Định, ghi dấu mốc
            toàn thắng, thống nhất đất nước vào mùa xuân 1975.
          </p>

          <div className="hero-buttons flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center mt-4">
            <Link href="/details">
              <Button
                size="lg"
                className="relative overflow-hidden bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-4 md:py-5 text-sm md:text-base uppercase tracking-wider font-bold border-2 border-primary-foreground/20 transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Tìm hiểu lịch sử</span>
              </Button>
            </Link>

            <Link href="/minigame">
              <Button
                size="lg"
                variant="outline"
                className="relative overflow-hidden text-white border-white/30 hover:bg-white/10 px-6 md:px-8 py-4 md:py-5 text-sm md:text-base uppercase tracking-wider font-bold transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">Tham gia Minigame</span>
              </Button>
            </Link>
          </div>

          <div className="hero-countdown mt-8 font-mono text-xs md:text-sm text-stone-300/80 border-t border-stone-700/70 pt-3 inline-block px-6 md:px-8 bg-black/25 rounded-full shadow-[0_0_24px_rgba(0,0,0,0.6)]">
            <p className="mb-1 uppercase text-[0.6rem] md:text-[0.7rem] tracking-[0.2em] text-stone-500">
              Kỷ niệm ngày thống nhất
            </p>
            {timeLeft}
          </div>
        </div>
      </div>
    </div>
  );
}
