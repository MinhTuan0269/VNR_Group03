import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import tankImage from "@assets/generated_images/t-54_tank_illustration.png";
import mapImage from "@assets/generated_images/vintage_map_of_saigon_1975.png";
import textureImage from "@assets/generated_images/old_paper_texture_overlay.png";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const tankRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    // Countdown to "30/4/1975" (simulation)
    const targetDate = new Date("1975-04-30T11:30:00").getTime();
    // Since this date is past, we can simulate a countdown to the "Next Anniversary" or just show static "0 Days" 
    // BUT the requirement says "Retro countdown to 30/4/1975". 
    // This implies we should pretend we are IN the past or counting UP since then.
    // Or maybe it's counting down to the *anniversary*.
    // Let's make a "Time Since Victory" or "Countdown to Anniversary".
    // Wait, "retro countdown to 30/4/1975" implies we might be in "April 1975" mode.
    // Let's just hardcode a dramatic "00 NGÀY 00 GIỜ" effect or a generic countdown for visual flare.
    
    // Let's do a countdown to the *next* April 30th.
    const now = new Date();
    const currentYear = now.getFullYear();
    let nextAnniversary = new Date(`${currentYear}-04-30T00:00:00`);
    if (now > nextAnniversary) {
      nextAnniversary = new Date(`${currentYear + 1}-04-30T00:00:00`);
    }

    const timer = setInterval(() => {
      const distance = nextAnniversary.getTime() - new Date().getTime();
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      
      setTimeLeft(`${days} NGÀY ${hours} GIỜ ${minutes} PHÚT`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(tankRef.current, {
        x: -200,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        delay: 0.5
      });

      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 1
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-stone-900 text-white">
      {/* Background Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center grayscale sepia"
        style={{ backgroundImage: `url(${mapImage})` }}
      />
      
      {/* Texture Overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-30 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url(${textureImage})` }}
      />
      
      {/* Vignette */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div ref={textRef} className="space-y-6">
          <p className="text-secondary tracking-[0.5em] text-sm md:text-lg font-sans uppercase mb-4">
            Thần tốc - Táo bạo - Bất ngờ - Chắc thắng
          </p>
          
          <h1 className="text-5xl md:text-8xl font-serif font-bold leading-tight text-shadow">
            CHIẾN DỊCH
            <br />
            <span className="text-primary block mt-2">HỒ CHÍ MINH</span>
          </h1>
          
          <div className="text-xl md:text-3xl font-slab text-stone-300 mt-4">
            1975
          </div>

          <div className="py-8">
             <img 
               ref={tankRef}
               src={tankImage} 
               alt="T-54 Tank" 
               className="h-32 md:h-48 mx-auto drop-shadow-2xl"
             />
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
            <Link href="/details">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg uppercase tracking-wider font-bold border-2 border-primary-foreground/20">
                Tìm hiểu lịch sử
              </Button>
            </Link>
            <Link href="/minigame">
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 px-8 py-6 text-lg uppercase tracking-wider font-bold">
                Tham gia Minigame
              </Button>
            </Link>
          </div>

          <div className="mt-12 font-mono text-sm md:text-base text-stone-400 border-t border-stone-700 pt-4 inline-block px-8">
            <p className="mb-2 uppercase text-xs tracking-widest text-stone-500">Kỷ niệm ngày thống nhất</p>
            {timeLeft}
          </div>
        </div>
      </div>
    </div>
  );
}
