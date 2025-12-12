// src/components/sections/LiberationRoadWithCards.tsx
import { motion } from "framer-motion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type RoadStop = {
  id: string;
  top: string;
  left: string;
  title: string;
  teaser: string;
  imageSrc: string;
  caption?: string;
  mainHref?: string;
  align?: "left" | "right";
};

const ROAD_STOPS: RoadStop[] = [
  {
    id: "stop-0",
    top: "10%",
    left: "58%",
    title: "Ngày 8-4-1975",
    teaser: "Trung úy không quân Nguyễn Thành Trung ném bom Dinh Độc Lập.",
    imageSrc:
      "https://cdn.voh.com.vn/voh/Image/2020/04/08/NguyenThanhTrung_20200408091139.jpg",
    caption:
      "Sau khi ném bom Dinh Độc Lập, phi công Nguyễn Thành Trung đã lái máy bay hạ cánh an toàn xuống sân bay Phước Long.",
    mainHref: "/timeline/3",
    align: "right",
  },
  {
    id: "stop-1",
    top: "22%",
    left: "25%",
    title: "Ngày 9-4-1975",
    teaser: "Tiến hành chiến dịch tiến công giải phóng Xuân Lộc.",
    imageSrc:
      "https://cdn.nhandan.vn/images/bf7c77345e7b2180d6fdf6ad6bba93963fcdd22b1770e1050dfff67ec64899aa94228288ac64d10069c4f93d99661c60b688c0fdf9110a1af785db1d0dcb886d8f4165c3c2ce6f89e055098c38f00d6e56d58a9e3d0df34924af05d44f5851a5/9-4-1975-xuan-loc-long-khanh-mo-man-9503-5725-6197-26.jpg",
    mainHref: "/timeline/1",
    align: "right",
  },
  {
    id: "stop-2",
    top: "40%",
    left: "50%",
    title: "Ngày 14-4-1975",
    teaser:
      "Bộ chính trị phê chuẩn đề nghị đặt tên chiến dịch giải phóng Sài Gòn – Gia Định là Chiến dịch Hồ Chí Minh.",
    imageSrc: "https://resource.kinhtedothi.vn/2021/12/25/q2.jpg",
    caption:
      "Bộ Chỉ huy Chiến dịch Hồ Chí Minh tại căn cứ Tà Thiết (Lộc Ninh), tháng 4-1975.",
    mainHref: "/timeline/2",
    align: "left",
  },
  {
    id: "stop-3",
    top: "60%",
    left: "58%",
    title: "Ngày 16-4-1975",
    teaser:
      "Ta phá vỡ tuyến phòng thủ từ xa của quân lực Việt Nam Cộng hòa ở Phan Rang.",
    imageSrc:
      "https://baobinhduong.vn/image/news/2015/20150416/fckimage/t4.jpg",
    mainHref: "/timeline/3",
    align: "right",
  },
  {
    id: "stop-4",
    top: "68%",
    left: "40%",
    title: "Ngày 18-4-1975",
    teaser:
      "Mỹ ra lệnh di tản người Mỹ khỏi Sài Gòn; ngày 23-4 tuyên bố cuộc chiến đã chấm dứt đối với Mỹ.",
    imageSrc:
      "https://cdn.nhandan.vn/images/bf7c77345e7b2180d6fdf6ad6bba939666bacfc1d5f39eb17477873e6a78792106e78f8ea6dde5d01dac679a9916266464e3bb7bf6e26cf432053f03ad10975c510ba667f746f33a4a715cc8ba29965645162156e50c0a7eb9d98d6edc032e9f/18-4-1975-giai-phong-phan-thiet-7099-56-1753-6641.jpg",
    mainHref: "/timeline/4",
    align: "left",
  },
  {
    id: "stop-5",
    top: "84%",
    left: "46%",
    title: "Ngày 21-4-1975",
    teaser:
      "Nguyễn Văn Thiệu tuyên bố từ chức; sau đó quyền lực chuyển giao nhanh chóng trước khi Dương Văn Minh lên nắm quyền.",
    imageSrc: "https://static.tuoitre.vn/tto/i/s626/2006/04/27/bzS2pwRl.jpg",
    caption:
      "Tổng thống Nguyễn Văn Thiệu đọc diễn văn từ chức trên truyền hình.",
    mainHref: "/timeline/5",
    align: "right",
  },
];

export function LiberationRoadWithCards() {
  return (
    <section className="w-full px-4 py-16 md:py-20">
      <div className="container mx-auto max-w-6xl">
        {/* ====== LAYOUT 2 CỘT: TRÁI TITLE - PHẢI MAP ====== */}
        <div className="grid gap-16 lg:grid-cols-[0.9fr_2.4fr] lg:items-start">
          {/* LEFT: TITLE / DESCRIPTION */}
          <div className="space-y-4">
            <p className="text-[11px] font-mono uppercase tracking-[0.35em] text-red-950/60">
              Diễn biến mở màn
            </p>

            <h2 className="text-2xl md:text-4xl font-serif font-bold text-red-950 leading-snug">
              Những ngày đầu chiến dịch{" "}
              <span className="text-red-700">Hồ Chí Minh</span>
            </h2>

            <p className="text-sm md:text-base leading-relaxed text-red-950/70 max-w-xl">
              Sau Tây Nguyên (4–24/3/1975) và Huế – Đà Nẵng (21–29/3/1975) thắng
              lợi, ngày 31/3/1975 Bộ Chính trị xác định{" "}
              <span className="text-red-700 font-semibold">
                “Trận quyết chiến chiến lược cuối cùng của quân dân ta bắt đầu”.
              </span>
            </p>

            {/* Divider kiểu báo */}
            <div className="flex items-center gap-3 pt-2">
              <span className="h-px w-12 bg-red-900/25" />
              <span className="text-[11px] font-semibold text-red-900/35 tracking-[0.35em] uppercase">
                4/1975
              </span>
              <span className="h-px w-12 bg-red-900/25" />
            </div>

            {/* Hint */}
            <p className="text-xs text-red-950/55 italic">
              Chạm vào từng mốc trên bản đồ để mở tư liệu & chú giải.
            </p>
          </div>

          {/* RIGHT: MAP – KHUNG ĐƠN, ẢNH TO */}
          {/* RIGHT: MAP – 1 KHUNG DUY NHẤT, ÔM TRỌN ẢNH */}
          <div className="relative">
            <div
              className="
                rounded-[22px]
                bg-[#f7f1e5]
                border border-red-900/25
                shadow-[0_20px_55px_rgba(0,0,0,0.22)]
              overflow-hidden

              "
            >
              <img
                src="/map.png"
                alt="Con đường tiến vào Sài Gòn"
                className="
                  w-full
                  h-auto
                  block
                  select-none
                  rounded-[16px]
                  border border-red-900/10
                "
              />

              {/* Các điểm sự kiện */}
              {ROAD_STOPS.map((stop) => {
                const alignClass =
                  stop.align === "left"
                    ? "-translate-x-full pr-3 items-end text-right"
                    : "pl-3 items-start text-left";

                return (
                  <Dialog key={stop.id}>
                    <DialogTrigger asChild>
                      <motion.div
                        className={`absolute z-10 -translate-y-1/2 cursor-pointer flex flex-col max-w-[220px] md:max-w-[250px] ${alignClass}`}
                        style={{ top: stop.top, left: stop.left }}
                        whileHover={{ scale: 1.05, y: -4 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <div className="rounded-2xl bg-zinc-950/85 border border-white/10 px-4 py-3 shadow-[0_18px_45px_rgba(0,0,0,0.55)]">
                          <p className="text-[12px] font-semibold text-amber-100">
                            {stop.title}
                          </p>
                          <p className="mt-1 text-[11px] text-zinc-200 leading-snug">
                            {stop.teaser}
                          </p>
                        </div>

                        {/* <div className="mt-2 h-2.5 w-2.5 rounded-full bg-red-600 shadow-[0_0_0_5px_rgba(220,38,38,0.16)]" /> */}
                      </motion.div>
                    </DialogTrigger>

                    <DialogContent className="max-w-3xl border-red-900/40 bg-zinc-950 text-stone-50">
                      <DialogHeader>
                        <DialogTitle className="font-serif text-xl text-amber-300">
                          {stop.title}
                        </DialogTitle>
                      </DialogHeader>

                      <div className="mt-4 grid gap-6 md:grid-cols-2 items-start">
                        <div className="rounded-lg overflow-hidden border border-red-900/35 bg-black">
                          <img
                            src={stop.imageSrc}
                            alt={stop.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="text-sm leading-relaxed text-stone-200">
                          <p className="mb-2 font-semibold text-amber-200 uppercase tracking-wide">
                            Chú giải tư liệu
                          </p>
                          <p>
                            {stop.caption ||
                              "Tư liệu lịch sử phản ánh diễn biến quan trọng trong giai đoạn cuối của Chiến dịch Hồ Chí Minh."}
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                );
              })}
            </div>

            {/* spacing để không sát section dưới */}
            <div className="h-10 md:h-14" />
          </div>
        </div>
      </div>
    </section>
  );
}
