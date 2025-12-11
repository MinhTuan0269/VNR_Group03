import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
// Dán đoạn này vào cùng file với component trang của bạn
// (không cần tạo file mới)

function HistoryVideoSection() {
  return (
    <section id="history-video" className="w-full py-6">
      <div className="w-full flex justify-center">
        <div className="w-1/2 min-w-[280px]">
          {/* Tiêu đề */}
          <h2 className="text-lg md:text-xl font-semibold text-red mb-4 text-center">
            Tư liệu Video – Chiến dịch Hồ Chí Minh
          </h2>

          {/* Khung video */}
          <div className="relative w-full rounded-lg overflow-hidden shadow-md border border-white/10 bg-black">
            {/* Giữ tỉ lệ 16:9 */}
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/_JSxAXy7qKA?rel=0&modestbranding=1&controls=1"
                title="Tư liệu Chiến dịch Hồ Chí Minh"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const cardsContainerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />
      <motion.section
        className="py-20 bg-[#f3eee4] px-4 border-t border-stone-200"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="container mx-auto max-w-6xl">
          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto">
            {/* Dòng nhỏ trên cùng */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-[11px] font-semibold tracking-[0.35em] text-stone-500 uppercase mb-4"
            >
              CHIẾN DỊCH HỒ CHÍ MINH · 1975
            </motion.p>

            {/* Tiêu đề chính */}
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900"
            >
              Mốc son chói lọi
            </motion.h2>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.25 }}
              className="text-lg md:text-xl text-stone-700 leading-relaxed mb-8 font-serif italic"
            >
              "Năm tháng sẽ trôi qua, nhưng thắng lợi của nhân dân ta trong sự
              nghiệp kháng chiến chống Mỹ, cứu nước mãi mãi được ghi vào lịch sử
              dân tộc ta như một trong những trang chói lọi nhất…"
            </motion.p>
            {/* Video */}
            <HistoryVideoSection />

            {/* Mô tả */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              className="text-sm md:text-base text-stone-700"
            >
              Phần dưới đây dẫn dắt người xem đi qua ba lát cắt quan trọng của
              chiến dịch:{" "}
              <span className="font-semibold">bối cảnh lịch sử</span>,{" "}
              <span className="font-semibold">diễn biến chiến dịch</span> và{" "}
              <span className="font-semibold">ký ức hào hùng</span> trong ngày
              toàn thắng 30/4/1975.
            </motion.p>
          </div>

          {/* ĐƯỜNG KẺ TRANG TRÍ */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.6 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="mt-10 flex items-center justify-center gap-4 text-[11px] text-stone-500 origin-center"
          >
            <span className="h-px w-16 bg-stone-400/70" />
            <span className="tracking-[0.28em] uppercase">
              1975 · Sài Gòn · Việt Nam
            </span>
            <span className="h-px w-16 bg-stone-400/70" />
          </motion.div>

          {/* CARDS */}
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {/* CARD 1 – Be cổ điển */}
            <Link href="/details" className="group block h-full">
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                whileHover={{ y: -8 }}
                className="relative flex h-full flex-col rounded-2xl border border-stone-300 
                           bg-[#f8f2e6] px-6 py-6 text-left shadow-sm 
                           transition-all duration-300 group-hover:bg-[#fdf9f1] group-hover:shadow-lg"
              >
                {/* shine effect */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
                  <div
                    className="absolute -left-1/3 top-0 h-full w-1/3 
                               bg-gradient-to-r from-transparent via-white/50 to-transparent 
                               opacity-0 group-hover:opacity-100 
                               translate-x-[-50%] group-hover:translate-x-[250%] 
                               transition-all duration-700 ease-out"
                  />
                </div>

                <div className="relative flex items-center justify-between mb-3">
                  <span className="text-[11px] tracking-[0.28em] uppercase text-stone-600">
                    Chặng 1
                  </span>
                  <span className="text-[11px] text-stone-400">
                    ~ 4 phút đọc
                  </span>
                </div>

                <div className="relative mb-3">
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-stone-900">
                    Bối cảnh lịch sử
                  </h3>
                  <div className="mt-1 h-px w-12 bg-stone-500/70" />
                </div>

                <p className="relative text-sm text-stone-700 leading-relaxed mb-4">
                  Khái quát cục diện miền Nam trước mùa xuân 1975: tình hình
                  chính trị – quân sự, tương quan lực lượng và thời cơ chiến
                  lược để mở Chiến dịch Hồ Chí Minh.
                </p>

                <div className="relative mt-auto space-y-1.5 text-xs text-stone-600">
                  <div className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-stone-700" />
                    Sau Hiệp định Paris và bước lùi của Mỹ.
                  </div>
                  <div className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-stone-700" />
                    Khủng hoảng nội bộ chính quyền Sài Gòn.
                  </div>
                  <div className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-stone-700" />
                    “Thời cơ vàng” để tổng tiến công.
                  </div>
                </div>

                <div className="relative mt-5 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-800">
                  <span className="group-hover:underline">Xem bối cảnh</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.article>
            </Link>

            {/* CARD 2 – Vàng lịch sử */}
            <Link href="/details" className="group block h-full">
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
                whileHover={{ y: -8 }}
                className="relative flex h-full flex-col rounded-2xl border border-yellow-700/40 
                           bg-[#fff6cf] px-6 py-6 text-left shadow-sm 
                           transition-all duration-300 group-hover:bg-[#ffefaf] group-hover:shadow-lg"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
                  <div
                    className="absolute -left-1/3 top-0 h-full w-1/3 
                               bg-gradient-to-r from-transparent via-white/60 to-transparent 
                               opacity-0 group-hover:opacity-100 
                               translate-x-[-60%] group-hover:translate-x-[260%] 
                               transition-all duration-700 ease-out"
                  />
                </div>

                <div className="relative flex items-center justify-between mb-3">
                  <span className="text-[11px] tracking-[0.28em] uppercase text-yellow-900">
                    Chặng 2
                  </span>
                  <span className="text-[11px] text-yellow-800">
                    ~ 7 phút theo dõi
                  </span>
                </div>

                <div className="relative mb-3">
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-yellow-950">
                    Diễn biến chiến dịch
                  </h3>
                  <div className="mt-1 h-px w-12 bg-yellow-900/80" />
                </div>

                <p className="relative text-sm text-yellow-900/90 leading-relaxed mb-4">
                  Nhịp tiến quân thần tốc của 5 cánh quân: từ những ngày đầu mở
                  màn đến khoảnh khắc xe tăng tiến vào Dinh Độc Lập trưa
                  30/4/1975.
                </p>

                <div className="relative mt-auto space-y-1.5 text-xs text-yellow-950/90">
                  <div className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-yellow-900" />
                    Timeline từ 26/4 đến 30/4/1975.
                  </div>
                  <div className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-yellow-900" />
                    5 mũi tiến công trên bản đồ Sài Gòn.
                  </div>
                  <div className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-yellow-900" />
                    Gợi ý tương tác: chọn từng mốc để xem tư liệu.
                  </div>
                </div>

                <div className="relative mt-5 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-yellow-950">
                  <span className="group-hover:underline">Xem diễn biến</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.article>
            </Link>

            {/* CARD 3 – Đen phòng chiếu phim tư liệu */}
            <Link href="/exhibition" className="group block h-full">
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                whileHover={{ y: -8 }}
                className="relative flex h-full flex-col rounded-2xl border border-stone-700 
                           bg-stone-950 text-stone-50 px-6 py-6 text-left shadow-sm 
                           transition-all duration-300 group-hover:bg-stone-900 group-hover:shadow-xl"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden">
                  <div
                    className="absolute -left-1/3 top-0 h-full w-1/3 
                               bg-gradient-to-r from-transparent via-white/30 to-transparent 
                               opacity-0 group-hover:opacity-100 
                               translate-x-[-70%] group-hover:translate-x-[270%] 
                               transition-all duration-700 ease-out"
                  />
                </div>

                <div className="relative flex items-center justify-between mb-3">
                  <span className="text-[11px] tracking-[0.28em] uppercase text-stone-300">
                    Chặng 3
                  </span>
                  <span className="text-[11px] text-stone-400">
                    Trải nghiệm nghe – nhìn
                  </span>
                </div>

                <div className="relative mb-3">
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-stone-50">
                    Ký ức hào hùng
                  </h3>
                  <div className="mt-1 h-px w-12 bg-amber-300/80" />
                </div>

                <p className="relative text-sm text-stone-100 leading-relaxed mb-4">
                  Không gian tái hiện cảm xúc ngày 30/4/1975: âm thanh radio,
                  lời tuyên bố đầu hàng, hình ảnh dòng người tràn ra đường và
                  những thước phim tư liệu không thể quên.
                </p>

                <div className="relative mt-auto space-y-1.5 text-[12px] text-stone-200">
                  <div>
                    <p className="font-semibold">Góc nhìn hình ảnh</p>
                    <p className="text-stone-300">
                      Bộ ảnh Sài Gòn trước – trong – sau ngày giải phóng.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Âm thanh lịch sử</p>
                    <p className="text-stone-300">
                      Trích đoạn phát thanh, lời tuyên bố đầu hàng, tiếng reo hò
                      rộn rã của nhân dân.
                    </p>
                  </div>
                </div>

                <div className="relative mt-5 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300">
                  <span className="group-hover:underline">Tham quan ký ức</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.article>
            </Link>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
