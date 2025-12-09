import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Gallery } from "@/components/sections/Gallery";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Exhibition() {
  return (
    <div className="min-h-screen bg-stone-900 text-stone-200">
      <Navbar />
      
      {/* Header */}
      <div className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white">Triển Lãm Số</h1>
          <p className="text-stone-400 max-w-2xl mx-auto font-mono text-sm uppercase tracking-widest">
            Hình ảnh - Âm thanh - Tư liệu
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="photos" className="space-y-12">
          <div className="flex justify-center">
            <TabsList className="bg-stone-800 text-stone-400 border border-stone-700">
              <TabsTrigger value="photos" className="data-[state=active]:bg-stone-700 data-[state=active]:text-white">Hình ảnh tư liệu</TabsTrigger>
              <TabsTrigger value="audio" className="data-[state=active]:bg-stone-700 data-[state=active]:text-white">Âm thanh lịch sử</TabsTrigger>
              <TabsTrigger value="documents" className="data-[state=active]:bg-stone-700 data-[state=active]:text-white">Tài liệu</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="photos" className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Gallery />
          </TabsContent>

          <TabsContent value="audio" className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="max-w-3xl mx-auto py-12">
              <h2 className="text-2xl font-serif font-bold text-center mb-8 text-amber-500">Phát thanh Sài Gòn 1975</h2>
              <p className="text-center text-stone-400 mb-12 max-w-lg mx-auto">
                Lắng nghe lại những bản tin, bài hát và âm thanh ghi lại không khí hào hùng của những ngày tháng 4 lịch sử.
              </p>
              <AudioPlayer />
            </div>
          </TabsContent>

          <TabsContent value="documents" className="animate-in fade-in slide-in-from-bottom-4 duration-700">
             <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
               <div className="bg-stone-800 p-8 rounded border border-stone-700 flex flex-col items-center text-center">
                 <div className="w-16 h-20 bg-stone-700 mb-4 rounded flex items-center justify-center text-stone-500">PDF</div>
                 <h3 className="font-bold text-lg mb-2 text-white">Điện mật của Đại tướng Võ Nguyên Giáp</h3>
                 <p className="text-sm text-stone-400 mb-4">"Thần tốc, thần tốc hơn nữa. Táo bạo, táo bạo hơn nữa..."</p>
                 <button className="text-primary hover:text-primary/80 font-bold uppercase text-xs tracking-wider">Xem tài liệu</button>
               </div>
               
               <div className="bg-stone-800 p-8 rounded border border-stone-700 flex flex-col items-center text-center">
                 <div className="w-16 h-20 bg-stone-700 mb-4 rounded flex items-center justify-center text-stone-500">PDF</div>
                 <h3 className="font-bold text-lg mb-2 text-white">Nhật lệnh Chiến dịch Hồ Chí Minh</h3>
                 <p className="text-sm text-stone-400 mb-4">Văn bản lịch sử về việc mở màn chiến dịch cuối cùng.</p>
                 <button className="text-primary hover:text-primary/80 font-bold uppercase text-xs tracking-wider">Xem tài liệu</button>
               </div>
             </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
