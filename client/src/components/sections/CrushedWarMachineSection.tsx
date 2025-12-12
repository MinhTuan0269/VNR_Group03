// src/components/sections/CrushedWarMachineSection.tsx
import { motion } from "framer-motion";

export function CrushedWarMachineSection() {
  return (
    <section className="w-full px-4 py-16 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        {/* Header kiểu “bảo tàng” */}
        <div className="mb-10 md:mb-12">
          <p className="text-[11px] md:text-xs font-mono uppercase tracking-[0.35em] text-red-950/55">
            Kết quả chiến dịch
          </p>

          <div className="mt-2 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-red-950 leading-tight">
              Đập tan bộ máy chiến tranh{" "}
              <span className="text-red-700">sau chiến dịch</span>
            </h2>

            <div className="inline-flex w-fit items-center rounded-full border border-red-900/20 bg-[#f3ead8]/80 px-4 py-2">
              <span className="text-[11px] md:text-xs font-semibold tracking-[0.28em] uppercase text-red-950/70">
                Trưng bày tư liệu
              </span>
            </div>
          </div>

          <p className="mt-3 max-w-3xl text-sm md:text-base text-red-950/70 leading-relaxed">
            Những con số và hình ảnh dưới đây cho thấy quy mô lực lượng bị vô
            hiệu hóa, phản ánh mức độ sụp đổ toàn diện của bộ máy chiến tranh.
          </p>

          {/* divider kiểu slide */}
          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-red-900/20 to-transparent" />
        </div>

        {/* “Khung trưng bày” */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[28px] border border-red-900/20 bg-[#f7f1e6]/90 shadow-[0_22px_70px_rgba(0,0,0,0.16)]"
        >
          {/* nền giấy nhám nhẹ */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-multiply bg-[radial-gradient(circle_at_20%_15%,rgba(120,53,15,0.45)_0,transparent_55%),radial-gradient(circle_at_90%_60%,rgba(127,29,29,0.35)_0,transparent_60%)]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_1.55fr] p-6 md:p-10">
            {/* LEFT: nội dung & bullet (nhìn như slide thuyết trình) */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-700" />
                <span className="text-[11px] md:text-xs font-mono uppercase tracking-[0.32em] text-red-950/60">
                  Tổng quan lực lượng bị đánh bại
                </span>
              </div>

              <div className="rounded-2xl border border-red-900/15 bg-white/70 backdrop-blur px-5 py-5 shadow-sm">
                <p className="text-sm md:text-base text-red-950/80 leading-relaxed">
                  Hệ thống quân sự – hậu cần – chỉ huy bị phá vỡ trên quy mô
                  lớn. Các binh lực chủ lực, phương tiện chiến tranh và hệ thống
                  đồn bốt bị vô hiệu hóa, tạo điều kiện quyết định cho thắng lợi
                  nhanh – gọn – dứt điểm.
                </p>

                <div className="mt-4 grid gap-2 text-sm text-red-950/75">
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-3 rounded-full bg-red-700/55" />
                    <span>
                      Tập trung vào{" "}
                      <b className="text-red-800">sức mạnh tổng hợp</b> và nhịp
                      tiến công thần tốc.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-3 rounded-full bg-red-700/55" />
                    <span>
                      Làm{" "}
                      <b className="text-red-800">tan rã hệ thống phòng thủ</b>,
                      rút ngắn thời gian chiến dịch.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-3 rounded-full bg-red-700/55" />
                    <span>
                      Khẳng định tính đúng đắn của{" "}
                      <b className="text-red-800">chỉ đạo chiến lược</b>.
                    </span>
                  </div>
                </div>
              </div>

              {/* callout nhỏ kiểu “ghi chú trưng bày” */}
              <div className="rounded-2xl border border-red-900/15 bg-[#efe3cd]/70 px-5 py-4">
                <p className="text-[11px] md:text-xs font-mono uppercase tracking-[0.28em] text-red-950/60">
                  Ghi chú trưng bày
                </p>
                <p className="mt-2 text-sm md:text-base text-red-950/75 leading-relaxed">
                  Các con số trong ảnh minh họa phản ánh quy mô tổn thất và sự
                  sụp đổ của bộ máy chiến tranh sau chiến dịch.
                </p>
              </div>
            </div>

            {/* RIGHT: ảnh trưng bày (nổi vừa phải + có khung “gallery”) */}
            <div className="relative">
              <div className="overflow-hidden rounded-[22px] border border-red-900/20 bg-black/5 shadow-[0_18px_55px_rgba(0,0,0,0.18)]">
                <img
                  src="/dap-tan-bo-may.png"
                  alt="Đập tan bộ máy chiến tranh sau chiến dịch"
                  className="w-full h-auto block"
                />
              </div>

              {/* caption + nguồn */}
              <div className="mt-3">
                <p className="text-xs md:text-sm text-red-950/70 italic leading-relaxed">
                  (Nguồn: Sách{" "}
                  <span className="font-semibold">Đại thắng mùa xuân 1975</span>{" "}
                  – Nhà xuất bản Thông Tấn)
                </p>
              </div>

              {/* viền slide nhẹ dưới ảnh */}
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-red-900/20 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
