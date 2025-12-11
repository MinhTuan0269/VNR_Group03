export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-950 via-red-900 to-red-950 text-amber-50 py-10 md:py-12 border-t border-red-800/70">
      <div className="container mx-auto px-4">
        {/* 3 cột chính */}
        <div className="grid gap-10 md:grid-cols-[2fr_1.2fr_1fr] items-start">
          {/* Cột 1: Logo + mô tả */}
          <div className="flex items-start gap-4">
            {/* Logo tròn có ngôi sao */}
            <div className="shrink-0 w-14 h-14 rounded-full bg-amber-400 flex items-center justify-center shadow-lg shadow-amber-900/40">
              <span className="text-red-800 text-2xl font-bold">★</span>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">
                Lịch sử
              </p>
              <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-wide text-amber-50 mb-3">
                Đảng Cộng sản Việt Nam
              </h2>
              <p className="text-sm leading-relaxed text-amber-100/80 max-w-xl">
                Trang web giáo dục về Lịch sử Đảng Cộng sản Việt Nam, được xây dựng bởi
                sinh viên với mục đích học tập và chia sẻ kiến thức.
              </p>
            </div>
          </div>

          {/* Cột 2: Thông tin nhóm */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide text-amber-200 mb-3">
              Thông Tin Nhóm
            </h3>
            <div className="space-y-1 text-sm text-amber-100/90">
              <p>
                <span className="font-semibold">Nhóm:</span> Nhóm 3

              </p>
              <p>
                <span className="font-semibold">Lớp:</span> 3W_VNR202_07
              </p>
              <p>
                <span className="font-semibold">Môn học:</span> VNR202 – Lịch sử Đảng Cộng sản Việt Nam
              </p>
              <p>
                <span className="font-semibold">Chủ đề:</span> Chương 2: Đảng lãnh đạo hai cuộc kháng chiến, hoàn thành giải phóng dân tộc, thống nhất đất nước (1945 - 1975)
                II. Lãnh đạo xây dựng chủ nghĩa xã hội ở miền Bắc và kháng chiến chống đế quốc Mỹ xâm lược, giải phóng miền Nam, thống nhất đất nước (1954 - 1975)

              </p>
            </div>
          </div>

          {/* Cột 3: Liên kết */}
          {/* <div className="md:text-right">
            <h3 className="text-lg font-bold uppercase tracking-wide text-amber-200 mb-3">
              Liên Kết
            </h3>
            <div className="space-y-2 text-sm text-amber-100/90">
              <button className="block md:ml-auto hover:text-amber-300 transition">
                → Trình Chiếu
              </button>
              <button className="block md:ml-auto hover:text-amber-300 transition">
                → Thư Viện Kỷ Niệm
              </button>
              <button className="block md:ml-auto hover:text-amber-300 transition">
                → Minigame
              </button>
            </div>
          </div> */}
        </div>

        {/* Dòng cuối cùng */}
        <div className="mt-8 pt-4 border-t border-red-800/60 text-xs text-amber-100/70 text-center">
          <p>
            © Fall 2025 – Nhóm 3 – Lớp 3W_VNR202_07. Được tạo ra với sự tôn
            trọng và ngưỡng mộ Chủ tịch Hồ Chí Minh.
          </p>
        </div>
      </div>
    </footer>
  );
}
