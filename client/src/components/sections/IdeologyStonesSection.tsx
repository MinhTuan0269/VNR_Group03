import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";

type IdeologyStone = {
  id: number;
  label: string;
  title: string;
  content: string;
  glowClass: string;
};

const IDEOLOGY_STONES: IdeologyStone[] = [
  {
    id: 1,
    label: "Tư duy chiến lược đúng đắn",
    title: "TƯ DUY CHIẾN LƯỢC ĐÚNG ĐẮN",
    content:
      "Bộ Chính trị nắm bắt chuẩn xác thời cơ “ngàn năm có một”, đưa ra quyết tâm chiến lược táo bạo: giải phóng miền Nam trong thời gian ngắn nhất. Đây là bài học lớn về nhận diện thời cơ – quyết đoán – hành động kịp thời.",
    glowClass: "from-yellow-200/80 via-amber-300/70 to-yellow-500/70",
  },
  {
    id: 2,
    label: "Sức mạnh toàn dân",
    title: "PHÁT HUY SỨC MẠNH TOÀN DÂN",
    content:
      "Toàn dân, toàn quân từ hậu phương đến tiền tuyến đồng lòng tham gia nhiệm vụ giải phóng. Bài học: khi có sự đoàn kết của nhân dân – không có sức mạnh nào có thể ngăn cản.",
    glowClass: "from-red-200/80 via-rose-300/70 to-red-500/70",
  },
  {
    id: 3,
    label: "Kết hợp chính trị – quân sự – ngoại giao",
    title: "KẾT HỢP CHÍNH TRỊ – QUÂN SỰ – NGOẠI GIAO",
    content:
      "Chiến thắng không chỉ đến từ sức mạnh quân sự, mà còn là kết quả của sự kết hợp đồng bộ giữa: chính trị (vận động quần chúng, làm tan rã tinh thần đối phương), quân sự (tấn công thọc sâu, thần tốc), ngoại giao (buộc Mỹ không thể quay lại). Đây là bài học về sức mạnh tổng hợp của mọi mặt trận.",
    glowClass: "from-sky-200/80 via-blue-300/70 to-sky-500/70",
  },
  {
    id: 4,
    label: "Tầm nhìn của Đảng",
    title: "TẦM NHÌN CỦA ĐẢNG & BỘ CHÍNH TRỊ",
    content:
      "Tầm nhìn chiến lược của Đảng và Bộ Chính trị giúp chiến dịch diễn ra nhanh – gọn – chính xác. Sự linh hoạt trong chỉ đạo, dự đoán đúng diễn biến, và điều chỉnh kế hoạch liên tục là chìa khóa tạo nên thắng lợi. Bài học: Lãnh đạo sáng suốt → quyết định thắng lợi.",
    glowClass: "from-slate-100/90 via-zinc-200/80 to-white/90",
  },
];

export function IdeologyStonesSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="py-16">
      {/* Cinematic line trước section – tone bảo tàng */}
      <p className="max-w-3xl mx-auto mb-8 text-center text-stone-500 italic">
        “Đằng sau thắng lợi lịch sử là những con người có tầm nhìn, bản lĩnh và
        trí tuệ – những người đã viết nên trang sử cuối cùng của cuộc kháng
        chiến chống Mỹ.”
      </p>

      {/* Header + tagline */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <p className="text-xs tracking-[0.35em] text-stone-500 uppercase mb-3">
          Ý nghĩa & Kinh nghiệm lịch sử
        </p>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 uppercase">
          Những viên đá mở đường cho thắng lợi
        </h2>
        <p className="text-stone-600 italic text-base md:text-lg">
          “Chiến thắng 30/4 không chỉ khép lại chiến tranh, mà còn để lại những
          bài học trường tồn – như những tảng đá ghi dấu trí tuệ và bản lĩnh của
          cả dân tộc.”
        </p>
      </div>

      {/* Lưới “Đá tư tưởng” */}
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {IDEOLOGY_STONES.map((stone: IdeologyStone) => {
          const isActive = activeId === stone.id;

          return (
            <div key={stone.id} className="relative">
              {/* Viên đá (mặt trước) */}
              <button
                type="button"
                onClick={() => setActiveId(isActive ? null : stone.id)}
                className={[
                  "group relative w-full overflow-hidden rounded-2xl",
                  "bg-gradient-to-b from-stone-900 via-stone-950 to-black",
                  "border border-stone-700/80 shadow-[0_18px_40px_rgba(0,0,0,0.65)]",
                  "px-6 py-8 md:px-7 md:py-9",
                  "transition-transform duration-500 ease-out",
                  isActive ? "scale-[1.02]" : "hover:-translate-y-1",
                ].join(" ")}
              >
                {/* Light texture + subtle shake feeling */}
                <div className="absolute inset-0 opacity-70 mix-blend-screen pointer-events-none">
                  <div className="w-full h-full bg-[radial-gradient(circle_at_20%_0%,#4b5563_0,#020617_55%)]" />
                </div>

                {/* Crack / ánh sáng preview khi hover/active */}
                <div
                  className={[
                    "absolute inset-0 pointer-events-none transition-opacity duration-500",
                    "bg-[radial-gradient(circle_at_50%_50%,rgba(248,250,252,0.38)_0,transparent_55%)]",
                    isActive
                      ? "opacity-40"
                      : "opacity-0 group-hover:opacity-30",
                  ].join(" ")}
                />

                {/* Giả lập split hai nửa đá */}
                <div className="absolute inset-y-6 left-1/2 w-px bg-stone-700/60" />
                <div
                  className={[
                    "absolute inset-y-6 left-0 w-1/2 transition-transform duration-500 ease-out",
                    isActive
                      ? "-translate-x-1"
                      : "group-hover:-translate-x-0.5",
                  ].join(" ")}
                />
                <div
                  className={[
                    "absolute inset-y-6 right-0 w-1/2 transition-transform duration-500 ease-out",
                    isActive ? "translate-x-1" : "group-hover:translate-x-0.5",
                  ].join(" ")}
                />

                {/* Glow màu riêng từng đá khi active */}
                {isActive && (
                  <div
                    className={[
                      "pointer-events-none absolute inset-0 blur-3xl opacity-70",
                      "bg-gradient-to-t",
                      stone.glowClass,
                    ].join(" ")}
                  />
                )}

                {/* Nội dung trên mặt đá */}
                <div className="relative z-10 text-center">
                  <p className="text-[11px] tracking-[0.35em] text-stone-400 uppercase mb-3">
                    Bài học tư tưởng
                  </p>
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-stone-50 mb-2 tracking-wide">
                    {stone.label}
                  </h3>
                  <p className="text-sm text-stone-300/85 max-w-xs mx-auto">
                    {/* Nhấp để “tách đá” và khám phá ý nghĩa ẩn bên trong. */}
                  </p>
                  <div className="mt-4 h-1 w-16 mx-auto rounded-full bg-stone-500/70 group-hover:bg-primary/80 transition-colors" />
                </div>
              </button>

              {/* Bảng nội dung khi đá mở ra */}
              <div
                className={[
                  "mt-4 overflow-hidden rounded-2xl border border-stone-200/80",
                  "bg-white/95 backdrop-blur shadow-lg shadow-stone-900/15",
                  "transition-all duration-500",
                  isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none",
                ].join(" ")}
              >
                <div className="px-5 py-4 md:px-6 md:py-5">
                  <p className="text-xs font-semibold tracking-[0.25em] text-stone-400 uppercase mb-2">
                    Ý nghĩa lịch sử
                  </p>
                  <h4 className="text-base md:text-lg font-serif font-bold text-primary mb-2">
                    {stone.title}
                  </h4>
                  <p className="text-sm md:text-base text-stone-700 leading-relaxed">
                    {stone.content}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mt-4"
      >
        <Card className="rounded-xl border border-stone-300 bg-white/95 px-4 py-4 sm:px-6 sm:py-5 shadow-sm">
          <div className="space-y-2">
            {/* Nhãn nhỏ, rất nhẹ nhàng */}
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500">
              Câu hỏi 
            </p>

            {/* Câu hỏi chính với line nhấn bên trái */}
            <div className="border-l-4 border-red-600 pl-3 sm:pl-4">
              <p className="text-base sm:text-lg md:text-xl font-semibold text-stone-900 leading-relaxed">
                Nếu bạn {" "}
                <span className="font-bold text-red-700">
                  tự đặt mình vào thời khắc 30/4
                </span>
                , đứng giữa Sài Gòn rạng sáng ngày 30/4/1975,{" "}
                <span className="underline decoration-red-500 decoration-2 underline-offset-4">
                   bạn nghĩ điều gì sẽ khiến bạn cảm nhận rõ nhất rằng ‘Chiến thắng đã đến’?
                </span>
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
      {/* ⬇ Thêm phần Tổng kết cinematic ngay cuối section */}
      <FinalSummarySection />
    </section>
  );
}

/* =========================
   TỔNG KẾT CINEMATIC OVERLAY
   ========================= */

function FinalSummarySection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // chỉ cần kích hoạt 1 lần, animation tự loop
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative mt-16 overflow-hidden rounded-3xl bg-black"
    >
      {/* Background image: đổi lại file nếu bạn dùng ảnh khác */}
      <div
        className="relative h-[320px] md:h-[420px] lg:h-[480px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/30-4.png')" }}
      >
        {/* Overlay gradient tối để chữ nổi bật */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/25" />

        {/* Nội dung chữ overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-3xl text-center text-slate-50">
            {/* Nhãn nhỏ bên trên – fade-in một lần */}
            <p
              className={`text-xs md:text-sm tracking-[0.35em] uppercase text-slate-300 mb-4 transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              Tổng kết chiến dịch
            </p>

            {/* Dòng tổng kết chia 2 cụm, animate liên tục khi đã vào view */}
          <div className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold leading-relaxed">

            {/* Dòng 1 */}
            <span
              className={
                isInView
                  ? "block mb-1 md:mb-2 summary-title-anim"
                  : "block mb-1 md:mb-2 opacity-0 translate-y-4"
              }
            >
              Chiến dịch Hồ Chí Minh
            </span>

            {/* Dòng 2 */}
            <span
              className={
                isInView
                  ? "block text-lg md:text-2xl lg:text-3xl text-slate-100/90 summary-line-anim"
                  : "block text-lg md:text-2xl lg:text-3xl text-slate-100/90 opacity-0 translate-y-4"
              }
            >
              – bản hùng ca khép lại chiến tranh, mở ra kỷ nguyên độc lập, thống nhất và phát triển của dân tộc Việt Nam.
            </span>

          </div>
          </div>
        </div>

        {/* Viền mảnh dưới cùng – cảm giác khung trưng bày */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-slate-200/70 to-transparent" />
      </div>
    </div>
  );
}
