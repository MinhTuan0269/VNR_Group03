import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DragDropGame } from "@/components/games/DragDropGame";
import { QuizGame } from "@/components/games/QuizGame";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Minigame() {
  return (
    <div className="min-h-screen bg-stone-100">
      <Navbar />
      
      {/* Header */}
      <div className="bg-primary text-white pt-32 pb-12 px-4 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Thử Tài Lịch Sử</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto font-mono text-sm uppercase tracking-widest">
            Học mà chơi - Chơi mà học
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="quiz" className="space-y-8">
          <div className="flex justify-center">
            <TabsList className="bg-white border border-stone-200 shadow-sm">
              <TabsTrigger value="quiz" className="px-8">Trắc Nghiệm</TabsTrigger>
              <TabsTrigger value="tactics" className="px-8">Bố Trí Lực Lượng</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="quiz" className="animate-in fade-in zoom-in-95 duration-500">
            <div className="max-w-3xl mx-auto">
               <div className="text-center mb-8">
                 <h2 className="text-2xl font-bold font-serif text-stone-800">Câu hỏi lịch sử</h2>
                 <p className="text-stone-600">Trả lời đúng các câu hỏi để mở khóa hình ảnh chiến thắng.</p>
               </div>
               <QuizGame />
            </div>
          </TabsContent>

          <TabsContent value="tactics" className="animate-in fade-in zoom-in-95 duration-500">
            <div className="max-w-5xl mx-auto">
               <div className="text-center mb-8">
                 <h2 className="text-2xl font-bold font-serif text-stone-800">Điều quân khiển tướng</h2>
                 <p className="text-stone-600">Sắp xếp các đơn vị vào đúng vị trí trên chiến trường.</p>
               </div>
               <DragDropGame />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
