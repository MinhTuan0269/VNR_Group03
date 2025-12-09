import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InteractiveMap } from "@/components/sections/InteractiveMap";
import { Timeline } from "@/components/sections/Timeline";

export default function Details() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      {/* Header */}
      <div className="bg-stone-900 text-white pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Nội Dung Chi Tiết</h1>
          <p className="text-stone-400 max-w-2xl mx-auto font-mono text-sm uppercase tracking-widest">
            Kế hoạch - Lực lượng - Diễn biến
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-24">
        {/* Section 1: Context */}
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8 uppercase decoration-double">Bối cảnh & Phương châm</h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-8">
             Cuộc Tổng tiến công và nổi dậy mùa Xuân 1975 bắt đầu từ ngày 4/3/1975 bằng chiến dịch Tây Nguyên, tiếp đó là chiến dịch Huế - Đà Nẵng và kết thúc bằng chiến dịch Hồ Chí Minh lịch sử.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Thần tốc", "Táo bạo", "Bất ngờ", "Chắc thắng"].map((word, i) => (
              <div key={i} className="bg-white p-6 rounded shadow-sm border border-stone-200">
                <span className="block text-3xl font-bold text-secondary-foreground mb-2">0{i+1}</span>
                <span className="uppercase font-bold tracking-wider text-primary">{word}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Interactive Map */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4 uppercase">Bản đồ tác chiến</h2>
            <p className="text-stone-600">5 cánh quân tiến về Sài Gòn (Click vào các hướng tấn công để xem chi tiết)</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <InteractiveMap />
          </div>
        </section>

        {/* Section 3: Timeline */}
        <section className="bg-stone-100 -mx-4 px-4 py-16 rounded-3xl">
          <Timeline />
        </section>

        {/* Section 4: Result */}
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8 uppercase">Kết quả & Ý nghĩa</h2>
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-stone-200">
             <p className="text-xl font-serif italic text-stone-800 mb-6">
               "Thắng lợi vĩ đại của cuộc kháng chiến chống Mỹ, cứu nước đã kết thúc 21 năm chiến đấu chống Mỹ và 30 năm chiến tranh giải phóng dân tộc, bảo vệ Tổ quốc bắt đầu từ Cách mạng Tháng Tám năm 1945, chấm dứt ách thống trị của chủ nghĩa thực dân - đế quốc trên đất nước ta."
             </p>
             <div className="h-1 w-24 bg-primary mx-auto mb-6"></div>
             <p className="text-stone-600">
               Giải phóng hoàn toàn miền Nam, thống nhất đất nước, đưa cả nước tiến lên chủ nghĩa xã hội.
             </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
