export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 font-serif border-t border-stone-800">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-stone-200 mb-2 uppercase tracking-widest">
            Quyết tâm giải phóng miền Nam
          </h2>
          <p className="italic">Thống nhất đất nước - Non sông thu về một mối</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8 text-sm">
          <div>
            <h3 className="text-white font-bold mb-4 uppercase">Liên hệ</h3>
            <p>Email: contact@history.vn</p>
            <p>Phone: +84 123 456 789</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 uppercase">Tài liệu</h3>
            <p>Lịch sử Đảng</p>
            <p>Hồi ký Tướng lĩnh</p>
            <p>Tư liệu nước ngoài</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 uppercase">Minigame</h3>
            <p>Bản đồ chiến dịch</p>
            <p>Câu hỏi lịch sử</p>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-xs opacity-60">
          <p>© 2025 Historical Interactive Exhibition. All rights reserved.</p>
          <p className="mt-2">Designed for educational purposes.</p>
        </div>
      </div>
    </footer>
  );
}
