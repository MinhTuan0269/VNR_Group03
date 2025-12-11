"use client";

import { motion } from "framer-motion";

const tactics = [
  {
    id: "than-toc",
    title: "THẦN TỐC",
    icon: "⚡",
    paragraphs: [
      "Hành quân với tốc độ vượt chuẩn, tranh thủ từng giờ từng phút.",
      "Tiến công liên tục, không để đối phương kịp củng cố hay phản ứng.",
    ],
    frontBg: "from-amber-600 to-amber-800",
    backBg: "from-amber-950 to-black",
    type: "speed",
  },
  {
    id: "tao-bao",
    title: "TÁO BẠO",
    icon: "🎯",
    paragraphs: [
      "Dám đánh vào các mục tiêu hiểm yếu, lựa chọn hướng tấn công mạnh – sâu – trực diện, không đi đường vòng.",
    ],
    frontBg: "from-red-700 to-red-900",
    backBg: "from-red-950 to-black",
    type: "impact",
  },
  {
    id: "bat-ngo",
    title: "BẤT NGỜ",
    icon: "🕵️",
    paragraphs: [
      "Xuất hiện ở nơi địch không ngờ, vào thời điểm địch không dự đoán.",
      "Sử dụng nghi binh, đánh vào chỗ yếu và thời điểm then chốt.",
    ],
    frontBg: "from-stone-700 to-stone-900",
    backBg: "from-black to-stone-900",
    type: "stealth",
  },
  {
    id: "chac-thang",
    title: "CHẮC THẮNG",
    icon: "🛡",
    paragraphs: [
      "Chuẩn bị toàn diện – đánh đâu thắng đó.",
      "Bảo đảm hậu cần, hiệp đồng binh chủng và chọn mục tiêu chủ chốt để kết thúc chiến tranh.",
    ],
    frontBg: "from-emerald-700 to-emerald-900",
    backBg: "from-emerald-950 to-black",
    type: "shield",
  },
];

export function TacticsSection() {
  return (
    <section className="py-20">
      {/* ===== TITLE – PHƯƠNG CHÂM TÁC CHIẾN ===== */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 px-4"
      >
        <h2 className="text-center text-3xl md:text-4xl font-bold text-red-600 mb-10">
          PHƯƠNG CHÂM TÁC CHIẾN
        </h2>

      </motion.h2>

      {/* Cinematic line */}
      <div className="max-w-3xl mx-auto text-center mb-12 px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-stone-700 font-serif text-lg md:text-xl italic leading-relaxed"
        >
          “Chiến dịch Hồ Chí Minh được chỉ đạo bằng bốn nguyên tắc vàng:
          <span className="font-bold text-primary">
            {" "}
            Thần tốc – Táo bạo – Bất ngờ – Chắc thắng
          </span>
          . Mỗi nguyên tắc là một mũi dao sắc bén, mở đường cho thắng lợi cuối
          cùng.”
        </motion.p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
        {tactics.map((tactic, index) => (
          <motion.div
            key={tactic.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group [perspective:1200px]"
          >
            <div
              className={`
                relative h-64 w-full 
                transition-transform 
                duration-700
                [transform-style:preserve-3d]
                group-hover:[transform:rotateY(180deg)]
              `}
            >
            
              {/* FRONT */}
              
              <div
                className={`
                  absolute inset-0 rounded-2xl border border-white/15 
                  bg-gradient-to-br ${tactic.frontBg}
                  shadow-2xl 
                  flex flex-col items-center justify-center gap-4 
                  text-white
                  [backface-visibility:hidden]
                  transition-all duration-300
                  ${
                    tactic.type === "speed"
                      ? "group-hover:translate-x-1 group-hover:blur-[1px]"
                      : ""
                  }
                  ${
                    tactic.type === "impact"
                      ? "group-hover:-translate-y-1 group-hover:scale-[1.04]"
                      : ""
                  }
                  ${
                    tactic.type === "stealth"
                      ? "opacity-90 group-hover:opacity-100"
                      : ""
                  }
                  ${
                    tactic.type === "shield"
                      ? "group-hover:brightness-110 group-hover:shadow-[0_0_24px_rgba(74,222,128,0.6)]"
                      : ""
                  }
                `}
              >
                <span className="text-5xl drop-shadow-[0_0_8px_rgba(0,0,0,0.4)]">
                  {tactic.icon}
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold tracking-[0.25em] text-center">
                  {tactic.title}
                </h3>
                <div className="h-[1px] w-10 bg-white/60" />
              </div>

              {/* BACK */}
              <div
                className={`
                  absolute inset-0 rounded-2xl border border-white/18 
                  bg-gradient-to-br ${tactic.backBg}
                  shadow-2xl 
                  text-stone-100
                  px-5 py-5
                  [backface-visibility:hidden]
                  [transform:rotateY(180deg)]
                  flex flex-col justify-between
                `}
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-stone-400 mb-2">
                    Phương châm tác chiến
                  </p>
                  <h3 className="text-lg font-bold mb-3 tracking-wide">
                    {tactic.title}
                  </h3>

                  <div
                    className={`
                      space-y-2 text-sm leading-relaxed
                      ${
                        tactic.type === "stealth"
                          ? "opacity-0 group-hover:opacity-100 transition-opacity duration-400 delay-150"
                          : ""
                      }
                    `}
                  >
                    {tactic.paragraphs.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>

                {/* <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] text-stone-400">
                  <span>Nguyên tắc chiến dịch – 1975</span>
                  {tactic.type === "speed" && (
                    <span>Hiệu ứng: “speed blur”</span>
                  )}
                  {tactic.type === "impact" && (
                    <span>Hiệu ứng: “impact mạnh”</span>
                  )}
                  {tactic.type === "stealth" && (
                    <span>Hiệu ứng: “fade từ bóng tối”</span>
                  )}
                  {tactic.type === "shield" && (
                    <span>Hiệu ứng: “halo an toàn”</span>
                  )}
                </div> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
