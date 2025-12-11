// src/components/sections/LiberationRoadWithCards.tsx
import { motion } from "framer-motion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type RoadStop = {
  id: string;
  top: string;
  left: string;
  title: string;
  teaser: string;
  imageSrc: string;
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
      "Bộ chính trị phê chuẩn đề nghị của Bộ chỉ huy chiến dịch, đặt tên chiến dịch giải phóng Sài Gòn - Gia Định là Chiến dịch Hồ Chí Minh, phương án chiến dịch được thông qua lần cuối.",
    imageSrc: "https://resource.kinhtedothi.vn/2021/12/25/q2.jpg",
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
      "Tổng thống Mỹ ra lệnh di tản người Mỹ khỏi Sài Gòn, ngày 23-4 Mỹ tuyên bố Cuộc chiến tranh ở Việt Nam đã chấm dứt đối với Mỹ.",
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
      "Nguyễn Văn Thiệu tuyên bố từ chức Tổng thống của Chính phủ Việt Nam cộng hòa. Ngày 26-4, Trần Văn Hương lên thay Nguyễn Văn Thiệu làm tổng thống được mấy hôm rồi tuyên bố nhường chức cho Dương Văn Minh.",
    imageSrc: "https://static.tuoitre.vn/tto/i/s626/2006/04/27/bzS2pwRl.jpg",
    mainHref: "/timeline/5",
    align: "right",
  },
];

export function LiberationRoadWithCards() {
  return (
    <div className="w-full">
      {/* ==== TIÊU ĐỀ PHẦN – GIỐNG HÌNH BẠN GỬI ==== */}
      <div className="text-center mb-6 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
          Những ngày đầu chiến dịch
        </h2>

        <p className="mt-2 text-stone-800 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Sau chiến dịch Tây Nguyên (4 đến 24-3-1975), chiến dịch Huế – Đà Nẵng
          (21 đến 29-3-1975) kết thúc thắng lợi, ngày 31-3-1975, Bộ Chính trị
          họp xác định{" "}
          <span className="text-red-600 font-semibold">
            “Trận quyết chiến chiến lược cuối cùng của quân dân ta bắt đầu”.
          </span>
        </p>
      </div>

      {/* ==== PHẦN BẢN ĐỒ + CÁC ĐIỂM SỰ KIỆN ==== */}
      <div className="relative w-full max-w-[440px] md:max-w-[520px] lg:max-w-[560px] mx-auto">
        <img
          src="/map.png"
          alt="Con đường tiến vào Sài Gòn"
          className="w-full h-auto block select-none"
        />

        {ROAD_STOPS.map((stop) => {
          const alignClass =
            stop.align === "left"
              ? "-translate-x-full pr-3 items-end text-right"
              : "pl-3 items-start text-left";

          return (
            <Dialog key={stop.id}>
              <DialogTrigger asChild>
                <motion.div
                  className={`absolute z-10 -translate-y-1/2 cursor-pointer flex flex-col max-w-[200px] md:max-w-[230px] ${alignClass}`}
                  style={{ top: stop.top, left: stop.left }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="rounded-xl bg-black/75 backdrop-blur-sm border border-amber-400/60 px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.6)]">
                    <p className="text-sm font-semibold text-amber-50">
                      {stop.title}
                    </p>
                    <p className="mt-1 text-[11px] text-stone-200 leading-snug">
                      {stop.teaser}
                    </p>
                  </div>
                </motion.div>
              </DialogTrigger>

              {/* POPUP */}
              <DialogContent className="max-w-2xl border-stone-700 bg-stone-950 text-stone-50">
                <DialogHeader>
                  <DialogTitle className="font-serif text-xl text-amber-300">
                    {stop.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="mt-4 grid gap-4 md:grid-cols-2 items-start">
                  <div className="rounded-lg overflow-hidden border border-stone-700 bg-black">
                    <img
                      src={stop.imageSrc}
                      alt={stop.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          );
        })}
      </div>
    </div>
  );
}
