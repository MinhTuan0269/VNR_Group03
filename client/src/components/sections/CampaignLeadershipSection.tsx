"use client";

import { motion } from "framer-motion";

const leaders = [
  {
    id: "van-tien-dung",
    rank: "Đại tướng",
    name: "Văn Tiến Dũng",
    years: "(1917–2002)",
    image: "/van-tien-dung.png",
  },
  {
    id: "dinh-duc-thien",
    rank: "Trung tướng",
    name: "Đinh Đức Thiện",
    years: "(1914–1986)",
    image: "/dinh-duc-thien.png",
  },
  {
    id: "le-duc-anh",
    rank: "Trung tướng",
    name: "Lê Đức Anh",
    years: "(1920)",
    image: "/le-duc-anh.png",
  },
  {
    id: "le-trong-tan",
    rank: "Trung tướng",
    name: "Lê Trọng Tấn",
    years: "(1914–1986)",
    image: "/le-trong-tan.png",
  },
  {
    id: "tran-van-tra",
    rank: "Thượng tướng",
    name: "Trần Văn Trà",
    years: "(1919–1996)",
    image: "/tran-van-tra.png",
  },
];

export function CampaignLeadershipSection() {
  return (
    <section className="relative py-20 bg-[#f4ebe1]">
      <div className="container mx-auto px-4">

        {/* TIÊU ĐỀ */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-extrabold text-[#b08a46] mb-3"
          >
            Diễn biến Chiến dịch Hồ Chí Minh lịch sử
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-stone-800 text-sm md:text-base leading-relaxed"
          >
            Từ ngày 26-4 đến 30-4, Chiến dịch lịch sử mang tên Chủ tịch Hồ Chí Minh diễn ra và giành toàn thắng.
            11 giờ 30 ngày 30-4-1975, Tổng thống ngụy buộc phải tuyên bố đầu hàng không điều kiện.
          </motion.p>
        </div>

        {/* ======= KHUNG TRƯNG BÀY KHÔNG CÒN SHINE ======= */}
        <div className="max-w-5xl mx-auto mb-14">
          <div className="relative">

            {/* --- LAYER 1: Khung chính --- */}
            <div
              className="
                relative 
                rounded-3xl 
                overflow-hidden 
                bg-[#faf7f2]
                p-6
                shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                border-[3px]
                border-[#c5a46d]
              "
            >
              {/* Texture giấy cổ */}
              <div
                className="
                  absolute inset-0 opacity-20 
                  bg-[url('/paper-texture.png')]
                  mix-blend-overlay pointer-events-none
                "
              />

              {/* Spotlight nhẹ */}
              <div
                className="
                  absolute inset-0 
                  bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0%,transparent_70%)]
                  pointer-events-none
                "
              />

              {/* Ảnh tư liệu */}
              <img
                src="/cd-hcm.png"
                alt="Tư liệu Bộ Tư lệnh Chiến dịch Hồ Chí Minh"
                className="w-full h-auto object-cover rounded-xl shadow-lg"
              />

              {/* Caption */}
              <div className="text-center mt-4">
                <p className="text-[13px] tracking-wide text-stone-700 italic">
                  Từ ngày 26-4 đến 30-4, Chiến dịch lịch sử mang tên Chủ tịch Hồ Chí Minh diễn ra và giành toàn thắng.
                  11 giờ 30 ngày 30-4-1975, Tổng thống ngụy buộc phải tuyên bố đầu hàng không điều kiện.
                </p>
                <div className="mx-auto mt-2 h-[2px] w-20 bg-[#b08a46] rounded-full" />
              </div>
            </div>

          </div>
        </div>

        {/* SUB HEADING */}
        <div className="text-center mb-6">
          <p className="text-[13px] md:text-sm font-semibold text-stone-900 tracking-[0.18em] uppercase">
            Bộ Tư lệnh Chiến dịch Hồ Chí Minh
          </p>
          <div className="h-[2px] w-28 mx-auto bg-stone-900 mt-1" />
        </div>

        {/* ===== DÃY ICON LEADERS ===== */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-[#caa45a]/70 shadow-[0_18px_40px_rgba(0,0,0,0.25)] bg-[#1b1713] px-4 py-10">

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {leaders.map((leader, idx) => (
                <motion.figure
                  key={leader.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="h-24 w-24 md:h-28 md:w-28 rounded-full bg-gradient-to-br from-[#d2b16a] to-[#8c6a34] p-[3px] shadow-md shadow-black/50 mb-3">
                    <div className="rounded-full overflow-hidden h-full w-full bg-stone-300">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="object-cover w-full h-full grayscale"
                      />
                    </div>
                  </div>

                  <p className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-[#f3d9a3] font-semibold">
                    {leader.rank}
                  </p>

                  <p className="text-xs md:text-sm font-semibold text-white mt-1">
                    {leader.name}
                  </p>

                  <p className="text-[11px] md:text-xs text-stone-400 mt-1">
                    {leader.years}
                  </p>
                </motion.figure>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
