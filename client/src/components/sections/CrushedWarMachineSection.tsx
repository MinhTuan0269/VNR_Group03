import { motion } from "framer-motion";

export function CrushedWarMachineSection() {
  return (
    <section className="py-24 bg-stone-900 text-stone-100 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black font-serif uppercase tracking-tighter mb-8 text-red-700 leading-none">
            Đập tan<br/>
            <span className="text-stone-100 text-3xl md:text-5xl tracking-widest">Bộ máy chiến tranh</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-stone-400 text-lg mb-12 font-serif italic">
            "Sự sụp đổ của chế độ Sài Gòn là không thể tránh khỏi trước sức mạnh như vũ bão của quân giải phóng."
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-stone-800 p-8 rounded-sm border border-stone-700 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
               <h3 className="text-2xl font-bold text-red-500 mb-4 uppercase">Thất bại chiến lược</h3>
               <p className="text-stone-300">
                 Hệ thống phòng thủ của VNCH bị chia cắt, cô lập và tan rã từng mảng lớn. Các quân đoàn chủ lực bị tiêu diệt hoặc tan rã tại chỗ.
               </p>
            </div>
            
            <div className="bg-stone-800 p-8 rounded-sm border border-stone-700 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <h3 className="text-2xl font-bold text-red-500 mb-4 uppercase">Tan rã tinh thần</h3>
               <p className="text-stone-300">
                 Binh lính mất tinh thần chiến đấu, bỏ vũ khí, đào ngũ hàng loạt trước khí thế tấn công của quân giải phóng.
               </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
