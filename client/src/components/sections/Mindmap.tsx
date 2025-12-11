import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SubBranch = {
  id: string;
  title: string;
  points: string[];
};

type Section = {
  id: string;
  title: string;
  branches: SubBranch[];
};

const SECTIONS: Section[] = [
  {
    id: "1",
    title: "1. BỐI CẢNH CHIẾN DỊCH",
    branches: [
      {
        id: "1.1",
        title: "1.1 Sau Hiệp định Paris 1973",
        points: [
          "Mỹ rút quân nhưng vẫn viện trợ và tiếp tục vi phạm Hiệp định.",
          "Chính quyền Sài Gòn suy yếu toàn diện: kinh tế – chính trị – quân sự.",
          "Miền Bắc phục hồi nhanh, củng cố quân đội → thay đổi cán cân chiến lược.",
          "Thời cơ thống nhất đất nước bắt đầu xuất hiện rõ rệt.",
        ],
      },
      {
        id: "1.2",
        title: "1.2 Tình hình quốc tế",
        points: [
          "Chiến tranh Lạnh, các cường quốc phân hóa sâu sắc.",
          "Mỹ ngừng can thiệp trực tiếp quy mô lớn tại Việt Nam.",
          "Liên Xô, Trung Quốc tiếp tục viện trợ chiến lược cho ta.",
          "Môi trường quốc tế thuận lợi cho một cuộc tổng tiến công.",
        ],
      },
    ],
  },
  {
    id: "2",
    title: "2. MIỀN BẮC SAU 1973 – HẬU PHƯƠNG LỚN",
    branches: [
      {
        id: "2.1",
        title: "Hậu phương lớn trỗi dậy",
        points: [
          "Ổn định chính trị – xã hội, đẩy mạnh tái thiết sau chiến tranh phá hoại.",
          "Công nghiệp quốc phòng được phục hồi và tăng cường nhanh chóng.",
          "Bổ sung lực lượng, trang bị, vũ khí cho các chiến trường.",
          "Mở rộng, nâng cấp đường Trường Sơn, chi viện quy mô lớn cho miền Nam.",
          "Miền Bắc trở thành hậu phương quyết định cục diện chiến tranh.",
        ],
      },
    ],
  },
  {
    id: "3",
    title: "3. MIỀN NAM TRƯỚC 1975 – KHỦNG HOẢNG",
    branches: [
      {
        id: "3.1",
        title: "Khủng hoảng của chính quyền Sài Gòn",
        points: [
          "Kinh tế suy sụp, lạm phát ba con số, đời sống nhân dân kiệt quệ.",
          "Quân đội Sài Gòn hoang mang, suy giảm niềm tin chiến đấu.",
          "Nội bộ chính quyền chia rẽ, đấu đá quyền lực.",
          "Nhiều tuyến phòng thủ bị tan rã liên tiếp → tạo điều kiện cho quân Giải phóng tổng tiến công.",
        ],
      },
    ],
  },
  {
    id: "4",
    title: "4. THỜI CƠ CHIẾN LƯỢC 1975",
    branches: [
      {
        id: "4.1",
        title: "Chuỗi thắng lợi tạo 'hiệu ứng domino'",
        points: [
          "Phước Long (1/1975): Mỹ không can thiệp trở lại bằng quân sự.",
          "Tây Nguyên: tuyến phòng thủ chiến lược của địch bị tan rã.",
          "Huế – Đà Nẵng: ta giải phóng nhanh, địch rơi vào hỗn loạn.",
        ],
      },
      {
        id: "4.2",
        title: "Nhận định lịch sử của Bộ Chính trị",
        points: [
          "Khẳng định: 'Thời cơ chiến lược đã đến'.",
          "Quyết tâm giải phóng miền Nam trong thời gian ngắn nhất, tốt nhất là ngay trong tháng 4/1975.",
        ],
      },
    ],
  },
  {
    id: "5",
    title: "5. LÃNH ĐẠO – LỰC LƯỢNG CHIẾN DỊCH",
    branches: [
      {
        id: "5.1",
        title: "Bộ chỉ huy chiến dịch",
        points: [
          "Tư lệnh chiến dịch: Đại tướng Văn Tiến Dũng.",
          "Các Phó tư lệnh: Trần Văn Trà, Lê Trọng Tấn, Lê Đức Anh, Đinh Đức Thiện.",
          "Chính ủy: Phạm Hùng; Phó chính ủy: Lê Quang Hòa.",
          "Quyền Tham mưu trưởng: Lê Ngọc Hiền.",
        ],
      },
      {
        id: "5.2",
        title: "Lực lượng tham gia",
        points: [
          "Khoảng 240.000 cán bộ, chiến sĩ.",
          "Hơn 400 xe tăng, thiết giáp.",
          "Khoảng 420 khẩu pháo các loại.",
          "Hậu cần bảo đảm hàng chục nghìn tấn vũ khí, đạn dược, lương thực.",
        ],
      },
    ],
  },
  {
    id: "6",
    title: "6. DIỄN BIẾN CHIẾN DỊCH HỒ CHÍ MINH",
    branches: [
      {
        id: "6.1",
        title: "Sáu hướng / năm mũi tiến công",
        points: [
          "Hướng Đông – Quân đoàn 4, Đoàn 232: đánh Long Thành, Nhơn Trạch, Nước Trong, mở đường vào nội đô.",
          "Hướng Bắc – Quân đoàn 1: đánh Lai Khê, Bến Cát, hướng về Bộ Tổng Tham mưu.",
          "Hướng Tây Bắc – Quân đoàn 3: đánh Đồng Dù, Trảng Bàng, uy hiếp Tân Sơn Nhất.",
          "Hướng Tây – Tây Nam – Đoàn 232: chiếm Hậu Nghĩa, bao vây Biệt khu Thủ đô.",
          "Hướng Đông Nam – Quân đoàn 2: chiếm Rạch Chiếc, Xa lộ Sài Gòn → thọc thẳng vào Dinh Độc Lập.",
        ],
      },
      {
        id: "6.2",
        title: "Các mốc chính từ 26 đến 30/4",
        points: [
          "26–28/4: Ta đánh chiếm nhiều vị trí then chốt, làm tê liệt Biên Hòa, Tân Sơn Nhất.",
          "28/4 – 17h: Phi đội A37 tập kích Tân Sơn Nhất, Mỹ chuyển sang di tản bằng trực thăng.",
          "29/4: Tổng công kích từ các hướng, vòng ngoài Sài Gòn sụp đổ.",
          "30/4: 05h30 tấn công đồng loạt nội đô; 10h45 xe tăng 390 húc đổ cổng Dinh Độc Lập; 11h30 cờ chiến thắng tung bay trên nóc Dinh.",
        ],
      },
    ],
  },
  {
    id: "7",
    title: "7. PHƯƠNG CHÂM TÁC CHIẾN",
    branches: [
      {
        id: "7.1",
        title: "“Thần tốc – Táo bạo – Bất ngờ – Chắc thắng”",
        points: [
          "Thần tốc: tiến nhanh, liên tục, không để địch kịp củng cố.",
          "Táo bạo: đánh thẳng vào những mục tiêu then chốt, có ý nghĩa quyết định.",
          "Bất ngờ: chọn thời điểm, hướng tiến công khiến địch không ngờ tới.",
          "Chắc thắng: chuẩn bị chu đáo, tập trung lực lượng áp đảo.",
        ],
      },
    ],
  },
  {
    id: "8",
    title: "8. Ý NGHĨA & KINH NGHIỆM LỊCH SỬ",
    branches: [
      {
        id: "8.1",
        title: "Tư duy chiến lược & thời cơ",
        points: [
          "Biết nắm bắt đúng thời cơ lịch sử, quyết đoán trong chỉ đạo.",
          "Kết hợp đánh giá tình hình trong nước và quốc tế.",
        ],
      },
      {
        id: "8.2",
        title: "Sức mạnh toàn dân tộc",
        points: [
          "Sự tham gia của toàn dân, toàn quân tạo nên sức mạnh tổng hợp.",
          "Đoàn kết Bắc – Nam, tiền tuyến – hậu phương.",
        ],
      },
      {
        id: "8.3",
        title: "Kết hợp ba mặt trận",
        points: [
          "Quân sự – chính trị – ngoại giao được triển khai song song.",
          "Tạo sức ép toàn diện, buộc đối phương sụp đổ nhanh chóng.",
        ],
      },
      {
        id: "8.4",
        title: "Vai trò lãnh đạo của Đảng",
        points: [
          "Đảng Cộng sản Việt Nam giữ vai trò lãnh đạo, đề ra đường lối đúng.",
          "Tầm nhìn chiến lược, bản lĩnh, sự linh hoạt trong chỉ đạo chiến tranh.",
        ],
      },
    ],
  },
];

export default function MindmapHCM() {
  const [activeSectionId, setActiveSectionId] = useState<string>("1");

  const activeSection =
    SECTIONS.find((s) => s.id === activeSectionId) ?? SECTIONS[0];

  // Tính vị trí cực (polar) cho các nhánh xung quanh tâm (dạng % trong khung 0–100)
  const radius = 32; // độ lớn vòng tròn
  const nodePositions = SECTIONS.map((_, index) => {
    const angle = (index / SECTIONS.length) * Math.PI * 2 - Math.PI / 2; // bắt đầu từ phía trên
    const x = 50 + radius * Math.cos(angle);
    const y = 50 + radius * Math.sin(angle);
    return { x, y, angle };
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-stone-50 py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[11px] uppercase tracking-[0.4em] text-amber-200/70 mb-3">
            Sơ đồ mindmap – Triển lãm số
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-amber-300 mb-2">
            Chiến dịch Hồ Chí Minh 1975
          </h1>
          <p className="text-sm md:text-base text-stone-300 max-w-2xl mx-auto">
            Trung tâm là chiến dịch, xung quanh là các nhánh nội dung: bối cảnh,
            lực lượng, diễn biến, phương châm tác chiến và ý nghĩa lịch sử. Nhấp
            vào mỗi nhánh để xem chi tiết.
          </p>
        </div>

        {/* VÙNG MINDMAP HÌNH TRÒN */}
        <div className="relative max-w-4xl mx-auto aspect-[16/10] md:aspect-[16/9] mb-10 md:mb-12 rounded-[32px] bg-gradient-to-br from-stone-950/90 via-stone-900/80 to-stone-950/90 border border-amber-500/20 shadow-[0_28px_80px_rgba(0,0,0,0.7)] overflow-hidden">
          {/* Vòng tròn nhẹ để gợi mindmap */}
          <div className="absolute inset-10 md:inset-14 rounded-full border border-amber-500/15 pointer-events-none" />

          {/* Các đường nối từ tâm ra nhánh (SVG) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {nodePositions.map((pos, index) => (
              <line
                key={SECTIONS[index].id}
                x1={50}
                y1={50}
                x2={pos.x}
                y2={pos.y}
                stroke="rgba(245, 196, 120, 0.45)"
                strokeWidth={0.45}
                strokeLinecap="round"
              />
            ))}
          </svg>

          {/* Node trung tâm */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            <div className="relative px-6 md:px-8 py-4 md:py-5 rounded-3xl bg-gradient-to-br from-amber-500/90 to-amber-300 text-stone-950 shadow-[0_0_40px_rgba(250,204,21,0.4)] border border-amber-100/60 min-w-[220px] md:min-w-[260px]">
              <p className="text-[11px] uppercase tracking-[0.3em] mb-1 text-stone-900/80">
                Tâm điểm
              </p>
              <p className="text-lg md:text-2xl font-serif font-semibold leading-snug">
                Chiến dịch Hồ Chí Minh
              </p>
              <p className="mt-1.5 text-[11px] md:text-xs text-stone-900/80">
                Tổng tiến công mùa Xuân 1975 – đỉnh cao cuộc kháng chiến chống
                Mỹ, cứu nước.
              </p>
            </div>
          </motion.div>

          {/* Các node con xung quanh */}
          {SECTIONS.map((section, index) => {
            const pos = nodePositions[index];
            const isActive = activeSectionId === section.id;

            return (
              <motion.button
                key={section.id}
                type="button"
                onClick={() => setActiveSectionId(section.id)}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * index }}
              >
                <motion.div
                  whileHover={{ scale: 1.06, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={[
                    "group rounded-2xl px-3.5 py-2.5 md:px-4 md:py-3 border text-left max-w-[180px] md:max-w-[210px] backdrop-blur-sm",
                    isActive
                      ? "border-amber-400/80 bg-amber-500/15 shadow-[0_0_20px_rgba(250,204,21,0.45)]"
                      : "border-amber-200/25 bg-stone-950/60 hover:border-amber-300/70 hover:bg-stone-900/80",
                  ].join(" ")}
                >
                  <p className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-amber-200/80 mb-1">
                    Nhánh {section.id}
                  </p>
                  <p className="text-xs md:text-sm font-medium text-amber-50 leading-snug">
                    {section.title}
                  </p>
                </motion.div>
              </motion.button>
            );
          })}
        </div>

        {/* PANEL CHI TIẾT NHÁNH ĐANG CHỌN */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-3 flex items-center justify-between gap-2">
            <h2 className="text-base md:text-lg font-semibold text-amber-200">
              {activeSection.title}
            </h2>
            <p className="text-[11px] md:text-xs text-stone-400">
              Nhấp các nhánh khác trên mindmap để chuyển nội dung.
            </p>
          </div>

          <div className="bg-stone-950/80 border border-stone-700/80 rounded-2xl px-4 md:px-6 py-4 md:py-5 shadow-[0_18px_50px_rgba(0,0,0,0.7)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28 }}
                className="space-y-4 md:space-y-5"
              >
                {activeSection.branches.map((branch, index) => (
                  <div key={branch.id} className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="mt-2 h-[2px] w-8 bg-amber-400/80 rounded-full" />
                      <p className="text-sm md:text-base font-medium text-amber-100">
                        {branch.title}
                      </p>
                    </div>

                    <div className="ml-11 space-y-2">
                      {branch.points.map((pt, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-xs md:text-sm text-stone-200 leading-relaxed"
                        >
                          <span className="mt-1 h-2 w-2 rounded-full bg-amber-400/80 flex-shrink-0" />
                          <p>{pt}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
