import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const photos = [
  { id: 1, src: "https://placehold.co/600x400/5a4d3b/ffffff?text=Saigon+1975", caption: "Đường phố Sài Gòn những ngày tháng 4/1975" },
  { id: 2, src: "https://placehold.co/400x600/5a4d3b/ffffff?text=Tank+390", caption: "Xe tăng 390 húc đổ cổng Dinh Độc Lập" },
  { id: 3, src: "https://placehold.co/600x800/5a4d3b/ffffff?text=Soldiers", caption: "Bộ đội giải phóng tiến vào thành phố" },
  { id: 4, src: "https://placehold.co/500x350/5a4d3b/ffffff?text=People", caption: "Người dân hân hoan chào đón quân giải phóng" },
  { id: 5, src: "https://placehold.co/400x400/5a4d3b/ffffff?text=Flag", caption: "Cờ giải phóng tung bay trên nóc Dinh Độc Lập" },
  { id: 6, src: "https://placehold.co/600x400/5a4d3b/ffffff?text=Helicopter", caption: "Di tản bằng trực thăng trên nóc tòa nhà" },
];

export function Gallery() {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 p-4">
      {photos.map((photo) => (
        <Dialog key={photo.id}>
          <DialogTrigger asChild>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-lg shadow-md bg-stone-200"
            >
              <img 
                src={photo.src} 
                alt={photo.caption}
                className="w-full h-auto object-cover sepia-[.3] contrast-[1.1] transition-all duration-500 group-hover:sepia-0"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm font-medium font-serif">{photo.caption}</p>
              </div>
            </motion.div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl bg-stone-900 border-stone-700 p-0 overflow-hidden">
            <div className="relative aspect-[16/9] md:aspect-auto md:h-[80vh] flex items-center justify-center bg-black">
               <img 
                src={photo.src} 
                alt={photo.caption}
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/60 backdrop-blur-sm text-white">
                 <p className="text-lg font-serif">{photo.caption}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
