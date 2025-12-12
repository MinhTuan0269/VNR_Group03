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
    <section className="relative py-20 overflow-hidden">
      {/* ===== NỀN TRẮNG – XÁM CHUYỂN NHẸ (BẢO TÀNG) ===== */}
      <div className="pointer-events-none absolute inset-0 bg-[#f5f5f3]" />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 18% 22%, rgba(255,255,255,0.95) 0%, transparent 45%),
            radial-gradient(circle at 82% 35%, rgba(220,220,220,0.45) 0%, transparent 55%),
            linear-gradient(
              135deg,
              #f7f7f6 0%,
              #eeeeec 35%,
              #e5e5e2 65%,
              #dededb 100%
            )
          `,
        }}
      />

      {/* Texture giấy rất nhẹ */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15)_0,rgba(0,0,0,0.15)_1px,transparent_1px,transparent_4px)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.12)_0,rgba(0,0,0,0.12)_1px,transparent_1px,transparent_5px)]" />

      {/* Grain siêu nhẹ */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "220px 220px",
        }}
      />

      {/* Vignette rất mờ */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.08)_100%)]" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          {/* TIÊU ĐỀ */}
          <div className="max-w-4xl mx-auto text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                text-3xl md:text-4xl 
                font-serif font-extrabold 
                text-[#b91c1c] 
                mb-4
                tracking-tight
              "
            >
              Diễn biến Chiến dịch Hồ Chí Minh lịch sử
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-stone-700 text-sm md:text-base leading-relaxed"
            >
              Từ ngày 26-4 đến 30-4, Chiến dịch lịch sử mang tên Chủ tịch Hồ Chí
              Minh diễn ra và giành toàn thắng. 11 giờ 30 ngày 30-4-1975, chính
              quyền Sài Gòn buộc phải tuyên bố đầu hàng không điều kiện.
            </motion.p>
          </div>

          {/* KHUNG ẢNH TRƯNG BÀY */}
          <div className="max-w-5xl mx-auto mb-14">
            <div className="rounded-3xl bg-[#fafafa] border border-stone-300 shadow-[0_10px_30px_rgba(0,0,0,0.18)] p-6">
              <img
                src="/cd-hcm.png"
                alt="Tư liệu Bộ Tư lệnh Chiến dịch Hồ Chí Minh"
                className="w-full h-auto rounded-xl shadow-md"
              />

              <div className="text-center mt-4">
                <p className="text-[13px] text-stone-700 italic">
                  Tư liệu phản ánh thời khắc quyết định của Chiến dịch Hồ Chí
                  Minh lịch sử (26–30/4/1975).
                </p>
                <div className="mx-auto mt-2 h-[2px] w-20 bg-stone-400 rounded-full" />
              </div>
            </div>
          </div>

          {/* SUB HEADING */}
          <div className="text-center mb-6">
            <p
              className="
                text-base md:text-lg
                font-serif font-bold
                text-[#b91c1c]
                tracking-[0.22em]
                uppercase
              "
            >
              Bộ Tư lệnh Chiến dịch Hồ Chí Minh
            </p>

            <div
              className="
                h-[2px] w-32 mx-auto mt-2
                bg-gradient-to-r
                from-transparent
                via-[#b91c1c]
                to-transparent
              "
            />
          </div>


          {/* LEADERS */}
          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl border border-stone-300 bg-[#1b1b1b] shadow-[0_18px_40px_rgba(0,0,0,0.25)] px-4 py-10">
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
                    <div className="h-24 w-24 md:h-28 md:w-28 rounded-full bg-stone-400 p-[3px] mb-3">
                      <div className="rounded-full overflow-hidden h-full w-full bg-stone-300">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="object-cover w-full h-full grayscale"
                        />
                      </div>
                    </div>

                    <p className="text-[11px] uppercase tracking-[0.18em] text-stone-300 font-semibold">
                      {leader.rank}
                    </p>

                    <p className="text-xs md:text-sm font-semibold text-white mt-1">
                      {leader.name}
                    </p>

                    <p className="text-[11px] text-stone-400 mt-1">
                      {leader.years}
                    </p>
                  </motion.figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
