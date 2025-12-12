"use client";

import { motion } from "framer-motion";

export function TimelineStory() {
  return (
    <div className="space-y-6">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div
          className="
            relative overflow-hidden
            rounded-2xl
            border border-[#dec89a]/60
            bg-[#f6f2e8]
            shadow-[0_16px_40px_rgba(0,0,0,0.22)]
          "
        >
          {/* ===== LỚP LÀM SÁNG – ƯU TIÊN CHỮ ĐEN ===== */}
          <div className="pointer-events-none absolute inset-0 bg-white/55" />

          {/* ===== LỚP GIẤY RẤT NHẸ (BẢO TÀNG) ===== */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]
            bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.12)_0,rgba(0,0,0,0.12)_1px,transparent_1px,transparent_4px)]"
          />

          {/* ===== ẢNH – KHÔNG BLUR – KHÔNG DARK ===== */}
          <img
            src="/dai-tuong-vo-nguyen-giap.png"
            alt="Đại tướng Võ Nguyên Giáp"
            className="
              relative z-10
              w-full h-auto block
              object-contain
            "
          />

          {/* ===== CAPTION NHẸ – KHÔNG CHE CHỮ ===== */}
          <div className="absolute left-3 bottom-3 z-20">
            <div className="
              inline-flex items-center gap-2
              rounded-md
              bg-white/80
              border border-[#dec89a]/50
              px-3 py-1
            ">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-stone-700">
                Tư liệu
              </span>
              <span className="text-[11px] text-stone-800 font-semibold">
                Đại tướng Võ Nguyên Giáp
              </span>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
