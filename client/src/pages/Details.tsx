"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InteractiveMap } from "@/components/sections/InteractiveMap";
import { Timeline } from "@/components/sections/Timeline";
import { Globe2, Map, AlertTriangle, Flag, BookOpen } from "lucide-react";
import { TacticsSection } from "@/components/sections/TacticsSection";
import { CampaignLeadershipSection } from "@/components/sections/CampaignLeadershipSection";
import { TimelineStory } from "@/components/sections/TimelineStory";
import { IdeologyStonesSection } from "@/components/sections/IdeologyStonesSection";
import { LiberationRoadWithCards } from "@/components/sections/LiberationRoadWithCards";
import Mindmap from "@/components/sections/Mindmap";

/* Simple typewriter for the cinematic paragraph */
function TypewriterText({
  text,
  speed = 25,
  className,
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplay(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);

    return () => clearInterval(id);
  }, [text, speed]);

  return <p className={className}>{display}</p>;
}

export default function Details() {
  // ====== SLIDER BẮC / NAM ======
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [split, setSplit] = useState(50); // % chiều rộng miền Bắc
  const [dragging, setDragging] = useState(false);

  const updateSplit = (clientX: number) => {
    if (!mapRef.current) return;
    const rect = mapRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let next = (x / rect.width) * 100;
    next = Math.max(20, Math.min(80, next)); // không cho bên nào < 20%
    setSplit(next);
  };

  useEffect(() => {
    if (!dragging) return;

    const handleMove = (e: PointerEvent) => {
      updateSplit(e.clientX);
    };
    const handleUp = () => setDragging(false);

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };
  }, [dragging]);

  // ====== DATA CHO SCROLL STORY ======
  const scrollBlocks = [
    {
      id: "block-0",
      icon: BookOpen,
      label: "",
      title: "Quyết định lịch sử mang tên Người",
      lines: [
        "“Thời cơ chiến lược đã đến. Chúng ta phải nắm vững thời cơ lớn nhất từ trước tới nay và thực hiện giải phóng miền Nam trong thời gian ngắn nhất, tốt nhất là trong tháng 4 năm 1975.”",
        "– Bộ Chính trị, tháng 3/1975.",
      ],
      accent: "QUYẾT ĐỊNH MỞ CHIẾN DỊCH",
      highlight:
        "Chữ “Chiến dịch Hồ Chí Minh” sẽ là tiêu đề cho toàn bộ phần tiếp theo.",
    },
    {
      id: "block-1",
      icon: Globe2,
      label: "",
      title: "Thế giới trong cơn sóng lớn",
      lines: [
        "Chiến tranh Lạnh lan rộng, thế giới chia rẽ sâu sắc.",
        "Mỹ rút quân sau Hiệp định Paris 1973 – bước ngoặt của chiến trường Việt Nam.",
        "Các nước xã hội chủ nghĩa tiếp tục viện trợ, tiếp sức cho cuộc đấu tranh thống nhất đất nước.",
      ],
      accent: "TÌNH HÌNH QUỐC TẾ",
    },
    {
      id: "block-2",
      icon: Map,
      label: "",
      title: "Miền Bắc – Hậu phương lớn trỗi dậy",
      lines: [
        "Miền Bắc ổn định, tái thiết mạnh mẽ.",
        "Quân chủ lực được củng cố vượt bậc.",
        "Đường Trường Sơn mở rộng, chi viện ồ ạt vào Nam.",
      ],
      accent: "MIỀN BẮC SAU 1973",
    },
    {
      id: "block-3",
      icon: AlertTriangle,
      label: "",
      title: "Miền Nam khủng hoảng toàn diện",
      lines: [
        "Kinh tế khủng hoảng, lạm phát tăng vọt.",
        "Quân đội Sài Gòn suy sụp tinh thần.",
        "Chính quyền rối loạn, chia rẽ nội bộ.",
      ],
      accent: "MIỀN NAM TRƯỚC 1975",
    },
    {
      id: "block-4",
      icon: Flag,
      label: "",
      title: "Thời cơ ngàn năm có một",
      lines: [
        "Thắng lợi Phước Long (1/1975) → Mỹ không quay lại.",
        "Tây Nguyên sụp đổ → quân Sài Gòn tan rã.",
        "Huế – Đà Nẵng giải phóng trong chớp nhoáng.",
      ],
      accent: "THỜI CƠ CHIẾN LƯỢC",
    },
    {
      id: "block-5",
      icon: BookOpen,
      label: "",
      title: "Quyết định lịch sử mang tên Người",
      lines: [
        "“Thời cơ chiến lược đã đến. Chúng ta phải nắm vững thời cơ lớn nhất từ trước tới nay và thực hiện giải phóng miền Nam trong thời gian ngắn nhất, tốt nhất là trong tháng 4 năm 1975.”",
        "– Bộ Chính trị, tháng 3/1975.",
      ],
      accent: "QUYẾT ĐỊNH MỞ CHIẾN DỊCH",
      highlight:
        "Chữ “Chiến dịch Hồ Chí Minh” sẽ là tiêu đề cho toàn bộ phần tiếp theo.",
    },
  ];

  const cinematicText =
    "Sau Hiệp định Paris 1973, quân Mỹ buộc phải rút khỏi Việt Nam, chính quyền Sài Gòn ngày càng suy yếu, trong khi miền Bắc có điều kiện khôi phục và củng cố lực lượng. Cán cân chiến lược thay đổi sâu sắc, tạo nên một thời cơ lịch sử hiếm có để toàn dân tộc tiến tới thống nhất đất nước.";

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      {/* Header */}
      <div className="bg-stone-900 text-white pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
            Nội Dung Chi Tiết
          </h1>
          <p className="text-stone-400 max-w-2xl mx-auto font-mono text-sm uppercase tracking-widest">
            Bối cảnh - Kế hoạch - Lực lượng - Diễn biến
          </p>
        </div>
      </div>
      {/* Dai tuong Vo nguyen giap */}
      <section className="mt-16 pb-24 md:pb-32">
        <TimelineStory />
      </section>
      {/* Section 1: Bối cảnh lịch sử + Scroll story */}
      <section
        id="context"
        className="max-w-5xl mx-auto space-y-16 mt-8 md:mt-12 mb-16 md:mb-24"
      >
        {/* A. CINEMATIC OPENING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl text-stone-50 shadow-2xl border border-stone-700"
        >
          {/* Background ảnh */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/dien-van-tu-chuc.png')",
              filter: "brightness(0.25) blur(4px) grayscale(40%)",
            }}
          />
          {/* Overlay vàng đất */}
          <div className="absolute inset-0 bg-[#e8d7ab]/35 backdrop-blur-[1px]" />
          {/* Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

          {/* CONTENT */}
          <div className="relative z-10 px-6 py-10 md:px-10 md:py-14 space-y-6">
            <p className="text-[11px] md:text-xs font-mono uppercase tracking-[0.3em] text-[#f1dca3]">
              Bối cảnh lịch sử
            </p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold leading-snug text-[#fdeec5]">
              Năm 1975 – Cả dân tộc đứng trước{" "}
              <span className="text-[#ffe8b0]">thời khắc định mệnh.</span>
            </h2>

            {/* Bản đồ + typewriter */}
            <div className="mt-4 grid gap-6 md:grid-cols-[1.1fr,1.4fr] md:items-center">
              {/* MAP BOX – slider Bắc / Nam, hiển thị đủ 2 hình */}
              <div
                ref={mapRef}
                className="relative h-40 md:h-52 rounded-2xl overflow-hidden border border-[#dec89a]/60 bg-black/60"
              >
                {/* Hai ảnh Bắc / Nam đặt cạnh nhau */}
                <div className="flex h-full w-full">
                  {/* MIỀN BẮC */}
                  <div
                    className="relative h-full transition-[width] duration-150 ease-out"
                    style={{ width: `${split}%` }}
                  >
                    <img
                      src="/mien-bac-1975.png"
                      alt="Miền Bắc năm 1975"
                      className="h-full w-full object-cover"
                    />
                    {/* overlay nhẹ cho chữ đọc được */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex rounded-full bg-black/70 px-3 py-1 text-[10px] md:text-xs font-semibold tracking-[0.18em] text-[#f5e3c0] uppercase">
                        Miền Bắc
                      </span>
                    </div>
                  </div>

                  {/* MIỀN NAM */}
                  <div
                    className="relative h-full transition-[width] duration-150 ease-out"
                    style={{ width: `${100 - split}%` }}
                  >
                    <img
                      src="/mien-nam-1975.png"
                      alt="Miền Nam năm 1975"
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 z-10">
                      <span className="inline-flex rounded-full bg-black/70 px-3 py-1 text-[10px] md:text-xs font-semibold tracking-[0.18em] text-[#f5e3c0] uppercase">
                        Miền Nam
                      </span>
                    </div>
                  </div>
                </div>

                {/* Thanh kéo ở giữa */}
                <button
                  type="button"
                  onPointerDown={(e) => {
                    e.preventDefault();
                    setDragging(true);
                    updateSplit(e.clientX);
                  }}
                  style={{ left: `${split}%` }}
                  className="absolute top-0 bottom-0 z-20 -translate-x-1/2 cursor-ew-resize group"
                  aria-label="Kéo để thay đổi tỷ lệ bản đồ Bắc – Nam"
                >
                  <div className="h-full w-[2px] bg-white/85 group-hover:bg-[#f5e3c0] transition-colors" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="h-7 w-7 rounded-full bg-black/80 border border-white/80 flex items-center justify-center text-[10px] text-[#f5e3c0] shadow-lg group-hover:bg-black">
                      ⇆
                    </div>
                  </div>
                </button>
              </div>

              <TypewriterText
                text={cinematicText}
                speed={22}
                className="text-sm md:text-[15px] leading-relaxed text-[#fff3d2]"
              />
            </div>
          </div>
        </motion.div>

        {/* B. SCROLL STORY – từng block theo scroll */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900">
              Từ bối cảnh thế giới đến quyết định mở Chiến dịch Hồ Chí Minh
            </h3>
            <p className="text-sm md:text-base text-stone-600 max-w-3xl mx-auto" />
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* timeline vertical line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-stone-300 via-stone-200 to-transparent" />

            <div className="space-y-10 md:space-y-12">
              {scrollBlocks.map((block, index) => {
                const Icon = block.icon;
                return (
                  <motion.article
                    key={block.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.05,
                    }}
                    className="relative pl-10 md:pl-16"
                  >
                    {/* node on timeline */}
                    <div className="absolute left-4 md:left-6 top-3 -translate-x-1/2 flex items-center justify-center">
                      <div className="h-3 w-3 rounded-full bg-stone-900 shadow-md" />
                    </div>

                    <div className="rounded-2xl bg-white/90 border border-stone-200 shadow-md px-4 py-4 md:px-6 md:py-5 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center rounded-full bg-stone-900 text-stone-50 px-3 py-1 text-[10px] md:text-[11px] tracking-[0.18em] uppercase">
                          {block.accent}
                        </span>
                        <span className="hidden md:inline text-[11px] text-stone-400">
                          {block.label}
                        </span>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-start md:gap-5">
                        <div className="mb-3 md:mb-0">
                          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-stone-900 text-stone-50 shadow-md">
                            <Icon className="h-5 w-5" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-lg md:text-xl font-serif font-semibold text-stone-900">
                            {block.title}
                          </h4>
                          <ul className="space-y-1.5 text-sm md:text-[15px] text-stone-700">
                            {block.lines.map((line) => (
                              <li key={line} className="flex gap-2">
                                <span className="mt-[6px] h-1 w-3 rounded-full bg-stone-300" />
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                          {block.highlight && (
                            <p className="mt-2 text-xs md:text-sm text-stone-600 italic">
                              {block.highlight}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          {/* mini timeline bar */}
          <div className="flex items-center justify-center gap-3 text-[11px] text-stone-500">
            <span className="h-px w-8 bg-stone-300" />{" "}
            <span className="font-semibold text-stone-700">-----</span>
            <span className="h-px w-8 bg-stone-300" />
          </div>

          {/* Callout dẫn sang 2.2 – lực lượng & bản đồ */}
          <div className="mt-4 flex justify-center">
            <div className="max-w-3xl w-full rounded-2xl border border-stone-200 bg-stone-100/80 px-5 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-stone-500 mb-1">
                  Lực lượng & Kế hoạch tấn công
                </p>
                <p className="text-sm md:text-[15px] text-stone-700">
                  Tiếp theo, chúng ta nhìn vào bản đồ Sài Gòn – Gia Định 1975
                  với 5 mũi tiến công hợp vây, đánh thẳng vào các mục tiêu trọng
                  yếu.
                </p>
              </div>
              <a
                href="#battle-map"
                className="inline-flex items-center justify-center rounded-full bg-stone-900 text-stone-50 px-4 py-2 text-xs md:text-sm font-semibold tracking-wide hover:bg-stone-800 transition"
              >
                Xem bản đồ tác chiến
              </a>
            </div>
          </div>
        </div>
      </section>
      <div>
        {/* Những ngày đầu*/}
        <LiberationRoadWithCards />
        {/* ... */}
      </div>

      {/* Dai tuong Vo nguyen giap */}
      {/* <section className="mt-16 pb-24 md:pb-32">
        <TimelineStory />
      </section> */}

      {/* Logo Leader */}
      <CampaignLeadershipSection />

      <div className="container mx-auto px-4 py-16 space-y-24">
        {/* Section 2: Interactive Map */}
        <section id="battle-map">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4 uppercase">
              Bản đồ tác chiến
            </h2>
            <p className="text-stone-600">
              {/* 5 mũi tiến công hợp lực tiến về Sài Gòn */}
              <span className="hidden sm:inline">
                {" "}
                {/* – chạm vào các điểm nhấp nháy để xem nhiệm vụ từng cánh quân. */}
              </span>
            </p>
          </div>

          {/* FULL-WIDTH BACKGROUND */}
          <div
            className="w-full bg-cover bg-center bg-no-repeat py-10"
            style={{ backgroundImage: "url('/30-4.png')" }}
          >
            {/* INNER CONTAINER CÓ MAX-WIDTH */}
            <div className="max-w-5xl mx-auto">
              <InteractiveMap />
            </div>
          </div>
        </section>

        {/* Section 2.1: 4 cards mô tả 4 cánh quân chủ công */}
        {/* <TacticsSection /> */}

        {/* Section 3: Timeline – diễn biến 26–30/4 */}
        <section className="bg-stone-100 -mx-4 px-4 py-16 rounded-3xl">
          <Timeline />
        </section>
        
        {/* Section 2.1: 4 cards mô tả 4 cánh quân chủ công */}
        <TacticsSection />
        
        {/* Section 4: Result */}
        {/* <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8 uppercase">
            Kết quả & Ý nghĩa
          </h2>
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-stone-200">
            <p className="text-xl font-serif italic text-stone-800 mb-6">
              "Thắng lợi vĩ đại của cuộc kháng chiến chống Mỹ, cứu nước đã kết
              thúc 21 năm chiến đấu chống Mỹ và 30 năm chiến tranh giải phóng
              dân tộc, bảo vệ Tổ quốc bắt đầu từ Cách mạng Tháng Tám năm 1945,
              chấm dứt ách thống trị của chủ nghĩa thực dân - đế quốc trên đất
              nước ta."
            </p>
            <div className="h-1 w-24 bg-primary mx-auto mb-6" />
            <p className="text-stone-600">
              Giải phóng hoàn toàn miền Nam, thống nhất đất nước, đưa cả nước
              tiến lên con đường xây dựng chủ nghĩa xã hội.
            </p>
          </div>
        </section> */}
        
        <IdeologyStonesSection />


        {/* mindmap */}

      

      </div>

      <Footer />
    </div>
  );
}
