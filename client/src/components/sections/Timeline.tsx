import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import eventsData from "@/data/events.json";
import { Card } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".timeline-item");
      
      items.forEach((item: any) => {
        gsap.fromTo(item, 
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
      
      // Animate the vertical line
      gsap.fromTo(".timeline-line",
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative py-20 px-4 md:px-0 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-primary uppercase">Diễn biến chiến dịch</h2>
      
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-32 bottom-0 w-1 bg-stone-300 transform md:-translate-x-1/2">
        <div className="timeline-line w-full bg-primary origin-top"></div>
      </div>

      <div className="space-y-12">
        {eventsData.map((event, index) => (
          <div key={index} className={`timeline-item flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            {/* Date Bubble (Mobile: Left, Desktop: Center) */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-stone-100 transform md:-translate-x-1/2 translate-y-6 md:translate-y-0 z-10"></div>
            
            {/* Content Card */}
            <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
              <Card className="p-6 bg-white border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-sm font-bold text-primary mb-2 font-mono tracking-widest">{event.date}</div>
                <h3 className="text-xl font-bold font-serif mb-2">{event.title}</h3>
                <p className="text-stone-600 leading-relaxed text-sm">{event.description}</p>
                {/* Placeholder for image if available */}
                {/* <div className="mt-4 h-32 bg-stone-200 rounded flex items-center justify-center text-xs text-stone-400">Hình ảnh tư liệu</div> */}
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
