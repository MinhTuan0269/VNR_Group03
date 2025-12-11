"use client";

import { motion } from "framer-motion";
import { Globe, Mountain, AlertTriangle, BookOpen } from "lucide-react";

export function TimelineStory() {
  return (
    <div className="mt-16 space-y-32">

      {/* BANNER ĐẠI TƯỚNG VÕ NGUYÊN GIÁP (DÙNG HÌNH HOÀN CHỈNH CỦA BẠN) */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div
          className="
            rounded-3xl 
            bg-[#f1dc8d] 
            border-2 
            border-[#c8a75a] 
            shadow-[0_8px_25px_rgba(0,0,0,0.25)]
            overflow-hidden 
            px-4 py-4
          "
        >
          <img
            src="/dai-tuong-vo-nguyen-giap.png"   // 👉 Chỉ cần đổi đúng file của bạn
            alt="Đại tướng Võ Nguyên Giáp"
            className="
              w-full 
              h-auto 
              rounded-2xl
              object-cover
              shadow-inner
            "
          />
        </div>
      </motion.section>




    </div>
  );
}
