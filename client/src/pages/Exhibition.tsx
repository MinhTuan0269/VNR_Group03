import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Gallery } from "@/components/sections/Gallery";
import { AudioPlayer } from "@/components/ui/AudioPlayer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AudioExhibition } from "@/components/sections/AudioExhibition";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Exhibition() {
  // 👉 state lật trang tạp chí
  const [currentPage, setCurrentPage] = useState(0); // 0 = trang thơ, 1 = trang thư

  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, 1));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 0));

  return (
    <div className="min-h-screen bg-stone-900 text-stone-200">
      <Navbar />

      {/* Header */}
      <div className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white">
            Triển Lãm Số
          </h1>
          <p className="text-stone-400 max-w-2xl mx-auto font-mono text-sm uppercase tracking-widest">
            Hình ảnh - Âm thanh - Nghệ thuật
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="photos" className="space-y-12">
          <div className="flex justify-center">
            <TabsList className="bg-stone-800 text-stone-400 border border-stone-700">
              <TabsTrigger
                value="photos"
                className="data-[state=active]:bg-stone-700 data-[state=active]:text-white"
              >
                Hình ảnh tư liệu
              </TabsTrigger>
              <TabsTrigger
                value="audio"
                className="data-[state=active]:bg-stone-700 data-[state=active]:text-white"
              >
                Âm thanh lịch sử
              </TabsTrigger>
              <TabsTrigger
                value="documents"
                className="data-[state=active]:bg-stone-700 data-[state=active]:text-white"
              >
                Tạp chí – Tài liệu
              </TabsTrigger>
            </TabsList>
          </div>

          {/* ================== TAB ẢNH ================== */}
          <TabsContent
            value="photos"
            className="animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            <Gallery />
          </TabsContent>

          {/* ================== TAB ÂM THANH ================== */}
          <TabsContent
            value="audio"
            className="animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            <div className="max-w-3xl mx-auto py-12">
              <h2 className="text-2xl font-serif font-bold text-center mb-8 text-amber-500">
                Phát thanh Sài Gòn 1975
              </h2>
              <p className="text-center text-stone-400 mb-12 max-w-lg mx-auto">
                Lắng nghe lại những bản tin, bài hát và âm thanh ghi lại không
                khí hào hùng của những ngày tháng 4 lịch sử.
              </p>
              <AudioPlayer />
            </div>

            {/* Phòng nghe âm thanh chiến dịch */}
            <AudioExhibition />
          </TabsContent>

          {/* ================== TAB TẠP CHÍ – FLIPBOOK ================== */}
          <TabsContent
            value="documents"
            className="animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            <div className="max-w-5xl mx-auto space-y-8 px-4">
              {/* Thanh tiêu đề + điều khiển lật trang */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-stone-400">
                    Tạp chí kháng chiến
                  </p>
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-amber-100 mt-1">
                    Số đặc biệt: Nghệ thuật & những lá thư 30/4
                  </h2>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    className="rounded-full border border-stone-600 px-3 py-1 text-xs uppercase tracking-[0.25em] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-800"
                  >
                    Trang trước
                  </button>
                  <button
                    type="button"
                    onClick={nextPage}
                    disabled={currentPage === 1}
                    className="rounded-full border border-stone-600 px-3 py-1 text-xs uppercase tracking-[0.25em] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-800"
                  >
                    Trang sau
                  </button>
                </div>
              </div>

              {/* Chỉ báo số trang */}
              <div className="flex justify-center gap-2 text-[11px] uppercase tracking-[0.3em] text-stone-500">
                <span className={currentPage === 0 ? "text-amber-300" : ""}>
                  Trang 1 – Nghệ thuật
                </span>
                <span>•</span>
                <span className={currentPage === 1 ? "text-amber-300" : ""}>
                  Trang 2 – Lá thư Sài Gòn
                </span>
              </div>

              {/* KHUNG SÁCH + ANIMATION LẬT TRANG */}
              <div className="relative perspective-[2000px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPage}
                    initial={{
                      rotateY: currentPage === 0 ? -90 : 90,
                      opacity: 0,
                    }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{
                      rotateY: currentPage === 0 ? 90 : -90,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="origin-left md:origin-center"
                  >
                    {/* ===== TRANG 1 – TẠP CHÍ NGHỆ THUẬT ===== */}
                    {currentPage === 0 && (
                      <section className="relative rounded-xl overflow-hidden shadow-xl border border-stone-700 bg-black">
                        {/* Ảnh lớn toàn màn trang */}
                        <Dialog>
                          <DialogTrigger asChild>
                            <button
                              type="button"
                              className="group relative w-full h-[480px] md:h-[600px] overflow-hidden"
                            >
                              <img
                                src="/Tho.png" // 👉 ảnh full background
                                alt="Thơ"
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                              />

                              {/* Gradient để dễ đọc chữ */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                              {/* Tiêu đề overlay */}
                              <div className="absolute bottom-6 left-6">
                                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white drop-shadow">
                                  {/* Nỗi nhớ */}
                                </h3>
                                <p className="text-xs tracking-[0.25em] text-stone-300 uppercase mt-1">
                                  {/* Thuần Hữu */}
                                </p>
                                <p className="text-sm text-stone-200 mt-2 opacity-80">
                                  {/* Nhấn để xem toàn bài thơ */}
                                </p>
                              </div>
                            </button>
                          </DialogTrigger>

                          {/* Popup bài thơ */}
                          <DialogContent className="max-w-xl bg-stone-950 text-stone-50 p-6 border border-stone-700">
                            <DialogHeader>
                              <DialogTitle className="text-amber-300 font-serif text-xl">
                                {/* Bài thơ “Nỗi nhớ” */}
                              </DialogTitle>
                            </DialogHeader>

                            {/* Nếu có ảnh full bài thơ → đặt vào đây */}
                            <img
                              src="/public/Tho.png"
                              alt="Thơ"
                              className="w-full rounded mt-3 mb-4 object-contain"
                            />

                            <p className="text-sm whitespace-pre-line leading-relaxed">
                              {/* (Dán nội dung bài thơ thật của nhóm bạn vào đây) */}
                            </p>
                          </DialogContent>
                        </Dialog>
                      </section>
                    )}

                    {/* ===== TRANG 2 – LÁ THƯ SÀI GÒN ===== */}
                    {currentPage === 1 && (
                      <section className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.5fr)] items-center">
                        {/* Hình lá thư + popup */}
                        <Dialog>
                          <DialogTrigger asChild>
                            <button
                              type="button"
                              className="group relative overflow-hidden rounded-xl border border-stone-700 bg-stone-900/80 shadow-[0_18px_40px_rgba(0,0,0,0.7)]"
                            >
                              <img
                                src="/Thu-1.png"
                                alt="Lá thư từ giữa thành phố Sài Gòn"
                                className="h-56 w-full object-cover opacity-90 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                                <div>
                                  <p className="text-xs uppercase tracking-[0.3em] text-amber-300">
                                    Lá thư từ giữa thành phố Sài Gòn
                                  </p>
                                  <p className="mt-1 text-sm text-stone-100">
                                    Nhấn để xem bản gốc đầy đủ
                                  </p>
                                </div>
                                <span className="ml-3 inline-flex items-center gap-2 rounded-full border border-amber-400/70 bg-black/50 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-amber-200">
                                  Xem thư
                                </span>
                              </div>
                            </button>
                          </DialogTrigger>

                          <DialogContent className="max-w-3xl border-stone-700 bg-stone-950 text-stone-50 p-0 overflow-hidden">
                            <div className="md:max-h-[80vh] overflow-y-auto">
                              <img
                                src="/Thu-2.png"
                                alt="Lá thư từ giữa thành phố Sài Gòn - bản gốc"
                                className="w-full object-contain max-h-[50vh] bg-stone-900"
                              />
                              <div className="px-6 py-5 space-y-3">
                                <p className="text-[11px] uppercase tracking-[0.3em] text-amber-300">
                                  Lá thư từ giữa thành phố Sài Gòn
                                </p>
                                <DialogHeader className="p-0">
                                  <DialogTitle className="text-xl font-serif">
                                    {/* “Con đang viết những dòng này giữa Sài Gòn
                                    đêm 29/4…” */}
                                  </DialogTitle>
                                </DialogHeader>
                                <p className="text-sm leading-relaxed whitespace-pre-line">
                                  {/* (Dán nội dung lá thư thật của nhóm bạn tại đây
                                  – chia đoạn ngắn để dễ đọc, giữ đúng không khí
                                  một lá thư từ chiến trường gửi ra hậu phương.) */}
                                </p>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>

                        {/* Text giới thiệu */}
                        <div className="space-y-3">
                          <p className="text-xs uppercase tracking-[0.35em] text-stone-400">
                            Lá thư & ký ức
                          </p>
                          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-amber-100">
                            Lá thư từ giữa thành phố Sài Gòn
                          </h2>
                          <p className="text-sm md:text-base text-stone-300 leading-relaxed">
                            Bên cạnh những bài thơ, trang nhật ký, lá thư là một
                            trong những tư liệu xúc động nhất của chiến tranh.
                            Đó là những dòng chữ viết vội giữa tiếng bom đạn,
                            giữa một Sài Gòn đang chuyển mình trong giờ phút
                            lịch sử.
                          </p>
                          <p className="text-sm md:text-base text-stone-300 leading-relaxed">
                            Người xem có thể mở toàn bộ bức thư – nhìn lại nét
                            chữ, con dấu, tiêu đề, và cảm nhận nhịp thở của
                            người viết trong từng câu chữ. Nhấn vào bức ảnh lá
                            thư để xem bản gốc đầy đủ.
                          </p>
                        </div>
                      </section>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
}
