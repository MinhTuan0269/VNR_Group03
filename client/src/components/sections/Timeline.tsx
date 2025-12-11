import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import eventsData from "@/data/events.json";
import { Card } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Ép kiểu cho data (hỗ trợ 1 ảnh hoặc nhiều ảnh có caption)
  const events = eventsData as {
    date: string;
    title: string;
    description: string;
    image?: string | null;
    imageCaption?: string;
    images?: { src: string; caption?: string }[];
  }[];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".timeline-item");

      items.forEach((item: any) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Animate the vertical line
      gsap.fromTo(
        ".timeline-line",
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative py-20 px-4 md:px-0 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-primary uppercase">
        Diễn biến chiến dịch
      </h2>

      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-32 bottom-0 w-1 bg-stone-300 transform md:-translate-x-1/2">
        <div className="timeline-line w-full bg-primary origin-top"></div>
      </div>

      <div className="space-y-12">
        {events.map((event, index) => (
          <div
            key={index}
            className={`timeline-item flex flex-col md:flex-row gap-8 items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Date Bubble (Mobile: Left, Desktop: Center) */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-stone-100 transform md:-translate-x-1/2 translate-y-6 md:translate-y-0 z-10"></div>

            {/* Content Card */}
            <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
              <Card className="p-6 bg-white border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-sm font-bold text-primary mb-2 font-mono tracking-widest">
                  {event.date}
                </div>
                <h3 className="text-xl font-bold font-serif mb-2">
                  {event.title}
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm">
                  {event.description}
                </p>

                {/* === NHIỀU ẢNH + CAPTION (ƯU TIÊN) === */}
                {Array.isArray(event.images) && event.images.length > 0 && (
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {event.images.map((img, idx) => (
                      <figure
                        key={`${event.title}-img-${idx}`}
                        className="rounded-lg overflow-hidden border border-stone-200 bg-stone-100 shadow-sm"
                      >
                        <img
                          src={img.src}
                          alt={img.caption || `${event.title} - hình ${idx + 1}`}
                          className="w-full h-36 md:h-44 object-cover"
                        />
                        {img.caption && (
                          <figcaption className="px-3 py-2 text-[11px] md:text-xs text-stone-600 italic text-center">
                            {img.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                )}

                {/* === 1 ẢNH ĐƠN + CAPTION (FALLBACK CŨ) === */}
                {!event.images && event.image && (
                  <figure className="mt-4 rounded-lg overflow-hidden border border-stone-200 bg-stone-100 shadow-sm">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-40 md:h-52 object-cover"
                    />
                    {event.imageCaption && (
                      <figcaption className="text-[11px] md:text-xs text-stone-500 italic px-3 py-2 text-center">
                        {event.imageCaption}
                      </figcaption>
                    )}
                  </figure>
                )}
              </Card>
            </div>

            {/* Empty Space for alignment */}
            <div className="hidden md:block w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
