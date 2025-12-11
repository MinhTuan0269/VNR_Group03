import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";

interface Force {
  id: number;
  title: string;
  description: string;
}

const forces: Force[] = [
  {
    id: 1,
    title: "MŨI TIẾN CÔNG BẮC",
    description:
      "Từ Bình Triệu – Thủ Đức đánh thẳng xuống trung tâm, đánh chiếm căn cứ Phú Lợi, tiêu diệt Sư đoàn 5 quân lực Việt Nam Cộng hòa, tiếp đó đánh chiếm Bộ Tổng tham mưu.",
  },
  {
    id: 2,
    title: "MŨI TIẾN CÔNG ĐÔNG NAM",
    description:
      "Đánh chiếm Bà Rịa, căn cứ Nước Trong, Long Bình, chặn đường rút chạy của quân Việt Nam Cộng hòa trên sông Lòng Tàu, sau đó phát triển vào nội thành cùng quân đoàn 4 đánh chiếm Dinh Độc lập.",
  },
  {
    id: 3,
    title: "MŨI TIẾN CÔNG TÂY BẮC",
    description:
      "Đánh chiếm Đồng Dù, tiêu diệt Sư đoàn 25, chiếm sân bay Tân Sơn Nhất và cùng quân đoàn 1 chiếm Bộ Tổng tham mưu.",
  },
  {
    id: 4,
    title: "MŨI TIẾN CÔNG ĐÔNG",
    description:
      "Tiêu diệt Sở chỉ huy Bộ Tư lệnh quân đoàn 3 và Sư đoàn 18 quân lực Việt Nam Cộng hòa ở Biên Hòa, sau đó thọc sâu vào nội thành, chiếm Dinh Độc Lập.",
  },
  {
    id: 5,
    title: "MŨI TIẾN CÔNG TÂY NAM",
    description:
      "Tiêu diệt Sư đoàn 25, cắt đường số 4 rồi đánh thọc sâu chiếm Biệt khu Thủ đô và Tổng Nha cảnh sát.",
  },
];

export function InteractiveMap() {
  const [activeForce, setActiveForce] = useState<Force | null>(null);

  return (
    <div className="space-y-6">
      {/* PHẦN BẢN ĐỒ */}
      <div
        className="relative w-full aspect-[4/3] bg-cover bg-center rounded-lg overflow-hidden border-4 border-stone-300 shadow-inner"
        style={{ backgroundImage: "url('/chien-dich-5-mui.png')" }}
      >
        {/* Texture nhẹ trên bản đồ */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]" />

        {/* Lưới mờ mờ cho cảm giác bản đồ quân sự */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* HOTSPOTS – chấm đỏ nhỏ */}
        <div className="absolute inset-0">
          {/* 3 – Tây Bắc (Quân đoàn 3) */}
          <button
            className="group absolute top-[16%] left-[35%] -translate-x-1/2 -translate-y-1/2 w-8 h-8"
            onClick={() => setActiveForce(forces[2])}
          >
            <span className="sr-only">
              Mũi tiến công Tây – Tây Bắc (Quân đoàn 3)
            </span>
            <span className="relative flex h-full w-full items-center justify-center">
              <span className="absolute h-3 w-3 rounded-full bg-red-700/70 opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-transform" />
              <span className="absolute h-3 w-3 rounded-full border border-red-700/80 group-hover:animate-ping" />
            </span>
          </button>

          {/* 1 – Bắc (Quân đoàn 1) */}
          <button
            className="group absolute top-[15%] left-[58%] -translate-x-1/2 -translate-y-1/2 w-8 h-8"
            onClick={() => setActiveForce(forces[0])}
          >
            <span className="sr-only">Mũi tiến công Bắc (Quân đoàn 1)</span>
            <span className="relative flex h-full w-full items-center justify-center">
              <span className="absolute h-3 w-3 rounded-full bg-red-700/70 opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-transform" />
              <span className="absolute h-3 w-3 rounded-full border border-red-700/80 group-hover:animate-ping" />
            </span>
          </button>

          {/* 4 – Đông (Quân đoàn 4) */}
          <button
            className="group absolute top-[24%] left-[93%] -translate-x-1/2 -translate-y-1/2 w-8 h-8"
            onClick={() => setActiveForce(forces[3])}
          >
            <span className="sr-only">Mũi tiến công Đông (Quân đoàn 4)</span>
            <span className="relative flex h-full w-full items-center justify-center">
              <span className="absolute h-3 w-3 rounded-full bg-red-700/70 opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-transform" />
              <span className="absolute h-3 w-3 rounded-full border border-red-700/80 group-hover:animate-ping" />
            </span>
          </button>

          {/* 2 – Đông Nam, chủ công (Quân đoàn 2) */}
          <button
            className="group absolute top-[46%] left-[86%] -translate-x-1/2 -translate-y-1/2 w-8 h-8"
            onClick={() => setActiveForce(forces[1])}
          >
            <span className="sr-only">
              Mũi tiến công Đông Nam (Quân đoàn 2, hướng chủ công)
            </span>
            <span className="relative flex h-full w-full items-center justify-center">
              <span className="absolute h-3 w-3 rounded-full bg-red-700/70 opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-transform" />
              <span className="absolute h-3 w-3 rounded-full border border-red-700/80 group-hover:animate-ping" />
            </span>
          </button>

          {/* 252 – Tây Nam (Đoàn 232) */}
          <button
            className="group absolute top-[48%] left-[16%] -translate-x-1/2 -translate-y-1/2 w-8 h-8"
            onClick={() => setActiveForce(forces[4])}
          >
            <span className="sr-only">
              Mũi tiến công Tây Nam (Đoàn 232)
            </span>
            <span className="relative flex h-full w-full items-center justify-center">
              <span className="absolute h-3 w-3 rounded-full bg-red-700/70 opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-transform" />
              <span className="absolute h-3 w-3 rounded-full border border-red-700/80 group-hover:animate-ping" />
            </span>
          </button>
        </div>

        {/* Popup nội dung cánh quân */}
        <AnimatePresence>
          {activeForce && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-30"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <Card
                  className="
                    relative rounded-2xl p-6
                    bg-white/85 backdrop-blur-xl
                    border border-stone-300/60 shadow-2xl 
                    overflow-hidden
                  "
                >
                  {/* Subtle gradient spotlight */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_70%)] opacity-70" />

                  <div className="relative z-20 space-y-3">
                    {/* Tiêu đề */}
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif font-bold text-xl text-stone-900 leading-snug">
                        {activeForce.title}
                      </h3>
                      <button
                        onClick={() => setActiveForce(null)}
                        className="text-stone-500 hover:text-stone-800 transition text-sm"
                      >
                        ✕
                      </button>
                    </div>

                    {/* Nội dung mô tả */}
                    <p className="text-[15px] leading-relaxed text-stone-700">
                      {activeForce.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Nhãn góc màn hình */}
        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur px-3 py-1 rounded text-[10px] md:text-xs font-mono text-stone-600 border border-stone-200">
          BẢN ĐỒ CHIẾN DỊCH – DI CHUỘT / CHẠM VÀO CÁC ĐIỂM NHẤP NHÁY ĐỂ XEM MŨI TIẾN CÔNG
        </div>
      </div>

      {/* PHẦN CÂU HỎI TƯƠNG TÁC – ĐẶT DƯỚI BẢN ĐỒ */}
      {/* PHẦN CÂU HỎI TƯƠNG TÁC – ĐẶT DƯỚI BẢN ĐỒ */}
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
                Giả sử bạn là{" "}
                <span className="font-bold text-red-700">
                  chỉ huy Chiến dịch Hồ Chí Minh
                </span>
                , nhìn vào bản đồ này,{" "}
                <span className="underline decoration-red-500 decoration-2 underline-offset-4">
                  bạn sẽ chọn tiến công từ hướng nào?
                </span>
              </p>
            </div>
          </div>
        </Card>
      </motion.div>


    </div>
  );
}
