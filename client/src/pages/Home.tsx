import { Hero } from "@/components/sections/Hero";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <Hero />
      
      <section className="py-24 bg-stone-100 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 text-primary">Mốc son chói lọi</h2>
          <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-12 font-serif italic">
            "Năm tháng sẽ trôi qua, nhưng thắng lợi của nhân dân ta trong sự nghiệp kháng chiến chống Mỹ, cứu nước mãi mãi được ghi vào lịch sử dân tộc ta như một trong những trang chói lọi nhất, một biểu tượng sáng ngời về sự toàn thắng của chủ nghĩa anh hùng cách mạng và trí tuệ con người..."
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-left mt-16">
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-primary">
              <h3 className="text-xl font-bold mb-4 font-serif">Bối cảnh lịch sử</h3>
              <p className="text-stone-600 mb-6 text-sm">Tìm hiểu về tình hình chiến trường miền Nam trước năm 1975 và thời cơ chiến lược.</p>
              <Link href="/details">
                <Button variant="link" className="p-0 text-primary h-auto font-bold uppercase tracking-wider text-xs">Xem chi tiết <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-secondary">
              <h3 className="text-xl font-bold mb-4 font-serif">Diễn biến chiến dịch</h3>
              <p className="text-stone-600 mb-6 text-sm">Theo dõi từng bước chân thần tốc của 5 cánh quân tiến về Sài Gòn trên bản đồ tương tác.</p>
              <Link href="/details">
                <Button variant="link" className="p-0 text-secondary-foreground h-auto font-bold uppercase tracking-wider text-xs">Xem bản đồ <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border-t-4 border-stone-800">
              <h3 className="text-xl font-bold mb-4 font-serif">Ký ức hào hùng</h3>
              <p className="text-stone-600 mb-6 text-sm">Sống lại những khoảnh khắc lịch sử qua hình ảnh, âm thanh và tư liệu quý giá.</p>
              <Link href="/exhibition">
                <Button variant="link" className="p-0 text-stone-800 h-auto font-bold uppercase tracking-wider text-xs">Tham quan <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
