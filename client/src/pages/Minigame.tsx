import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DragDropGame } from "@/components/games/DragDropGame";
import { QuizGame } from "@/components/games/QuizGame";
import { MultiplayerQuizGame } from "@/components/games/MultiplayerQuizGame";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Mindmap from "@/components/sections/Mindmap";

function HistoryVideoSection() {
  return (
    <section id="history-video" className="w-full py-6">
      <div className="w-full flex justify-center">
        <div className="w-1/2 min-w-[280px]"> 
          {/* Tiêu đề */}
          <h2 className="text-lg md:text-xl font-semibold text-red mb-4 text-center">
            Tư liệu Video – Chiến dịch Hồ Chí Minh
          </h2>

          {/* Khung video */}
          <div className="relative w-full rounded-lg overflow-hidden shadow-md border border-white/10 bg-black">
            {/* Giữ tỉ lệ 16:9 */}
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/BTWGKYr7Ovg?rel=0&modestbranding=1&controls=1"
                title="Tư liệu Chiến dịch Hồ Chí Minh"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function Minigame() {
  return (
    <div className="min-h-screen bg-stone-100 flex flex-col">
      <Navbar />

      {/* Hero header */}
      <header className="relative pt-32 pb-16 px-4 overflow-hidden bg-gradient-to-b from-stone-900 via-stone-900 to-stone-800 text-white">
        {/* lớp sáng mờ */}
        <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.5),transparent_60%)]" />
        {/* texture nhẹ */}
        <div className="pointer-events-none absolute inset-0 opacity-15 mix-blend-overlay bg-[radial-gradient(circle,rgba(0,0,0,0.4)_0,transparent_55%)]" />

        <div className="relative container mx-auto text-center max-w-3xl">
          <p className="text-[11px] tracking-[0.35em] uppercase text-amber-300 mb-3">
            Minigame · Chiến dịch Hồ Chí Minh
          </p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Thử tài lịch sử
          </h1>
          <p className="text-sm md:text-base text-stone-200 mb-6 font-mono uppercase tracking-[0.25em]">
            Học mà chơi · Chơi mà nhớ
          </p>
          <p className="text-stone-300 text-sm md:text-base">
            Chọn chế độ chơi, so tài cùng bạn bè hoặc luyện tập một mình qua các câu hỏi
            về Chiến dịch Hồ Chí Minh và ngày Toàn thắng 30/4/1975.
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="multiplayer" className="space-y-8">
            {/* Tabs header */}
            <div className="flex justify-center">
              <TabsList className="bg-white border border-stone-200 shadow-sm rounded-full overflow-hidden">
                <TabsTrigger value="multiplayer" className="px-6 md:px-8">
                  Ôn tập kiến thức
                </TabsTrigger>
                <TabsTrigger value="quiz" className="px-6 md:px-8">
                  Trắc nghiệm cá nhân
                </TabsTrigger>
                
              </TabsList>
            </div>

            {/* MindMap */}
            <TabsContent
              value="multiplayer"
              className="animate-in fade-in zoom-in-95 duration-500"
            >
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-2">
                    Sơ đồ tư duy
                  </h2>
                  <Mindmap />
                  {/* Video */}
                  <HistoryVideoSection />

                </div>
              </div>
            </TabsContent>

            {/* SOLO QUIZ */}
            <TabsContent
              value="quiz"
              className="animate-in fade-in zoom-in-95 duration-500"
            >
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold font-serif text-stone-800">
                    Luyện tập cá nhân
                  </h2>
                  <p className="text-stone-600">
                    Trả lời các câu hỏi trắc nghiệm để ôn lại kiến thức trước khi thi đấu.
                  </p>
                </div>
                <QuizGame />
              </div>
            </TabsContent>

            
            
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
}
