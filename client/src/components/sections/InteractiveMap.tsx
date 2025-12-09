import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import forcesData from "@/data/forces.json";

interface Force {
  id: string;
  name: string;
  commander: string;
  force: string;
  target: string;
  description: string;
}

export function InteractiveMap() {
  const [activeForce, setActiveForce] = useState<Force | null>(null);

  const forces = forcesData as Force[];

  return (
    <div className="relative w-full aspect-[4/3] bg-[#e6dec8] rounded-lg overflow-hidden border-4 border-stone-300 shadow-inner">
      {/* Map Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
      
      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* SVG Map Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 600">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#be123c" />
          </marker>
        </defs>

        {/* Saigon Center Zone */}
        <circle cx="400" cy="300" r="30" fill="none" stroke="#333" strokeWidth="2" strokeDasharray="4 4" />
        <text x="400" y="300" textAnchor="middle" dy="5" fontSize="10" fill="#333" fontWeight="bold">SÀI GÒN</text>

        {/* Attack Vectors (Simplified Paths) */}
        {/* North West */}
        <path
          d="M 200 100 Q 300 200 370 280"
          fill="none"
          stroke="#be123c"
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
          className="cursor-pointer pointer-events-auto hover:stroke-red-600 transition-colors"
          onClick={() => setActiveForce(forces.find(f => f.id === 'north-west') || null)}
          opacity={activeForce?.id === 'north-west' || !activeForce ? 1 : 0.3}
        />
        
        {/* North */}
        <path
          d="M 400 50 L 400 260"
          fill="none"
          stroke="#be123c"
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
          className="cursor-pointer pointer-events-auto hover:stroke-red-600 transition-colors"
          onClick={() => setActiveForce(forces.find(f => f.id === 'north') || null)}
          opacity={activeForce?.id === 'north' || !activeForce ? 1 : 0.3}
        />

        {/* East */}
        <path
          d="M 600 100 Q 500 200 430 280"
          fill="none"
          stroke="#be123c"
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
          className="cursor-pointer pointer-events-auto hover:stroke-red-600 transition-colors"
          onClick={() => setActiveForce(forces.find(f => f.id === 'east') || null)}
          opacity={activeForce?.id === 'east' || !activeForce ? 1 : 0.3}
        />

        {/* South East */}
        <path
          d="M 600 500 Q 500 400 430 330"
          fill="none"
          stroke="#be123c"
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
          className="cursor-pointer pointer-events-auto hover:stroke-red-600 transition-colors"
          onClick={() => setActiveForce(forces.find(f => f.id === 'south-east') || null)}
          opacity={activeForce?.id === 'south-east' || !activeForce ? 1 : 0.3}
        />

        {/* South West */}
        <path
          d="M 200 500 Q 300 400 370 330"
          fill="none"
          stroke="#be123c"
          strokeWidth="4"
          markerEnd="url(#arrowhead)"
          className="cursor-pointer pointer-events-auto hover:stroke-red-600 transition-colors"
          onClick={() => setActiveForce(forces.find(f => f.id === 'south-west') || null)}
          opacity={activeForce?.id === 'south-west' || !activeForce ? 1 : 0.3}
        />
      </svg>

      {/* Interactive Hotspots (Overlay Buttons for better clickability) */}
      <div className="absolute inset-0">
        <button className="absolute top-[15%] left-[25%] p-2 bg-red-600 text-white rounded-full text-xs font-bold shadow-lg hover:scale-110 transition-transform" onClick={() => setActiveForce(forces[0])}>QĐ3</button>
        <button className="absolute top-[10%] left-[50%] -translate-x-1/2 p-2 bg-red-600 text-white rounded-full text-xs font-bold shadow-lg hover:scale-110 transition-transform" onClick={() => setActiveForce(forces[1])}>QĐ1</button>
        <button className="absolute top-[15%] right-[25%] p-2 bg-red-600 text-white rounded-full text-xs font-bold shadow-lg hover:scale-110 transition-transform" onClick={() => setActiveForce(forces[2])}>QĐ2</button>
        <button className="absolute bottom-[15%] right-[25%] p-2 bg-red-600 text-white rounded-full text-xs font-bold shadow-lg hover:scale-110 transition-transform" onClick={() => setActiveForce(forces[3])}>Đ232</button>
        <button className="absolute bottom-[15%] left-[25%] p-2 bg-red-600 text-white rounded-full text-xs font-bold shadow-lg hover:scale-110 transition-transform" onClick={() => setActiveForce(forces[4])}>Đ232(P)</button>
      </div>

      {/* Info Popup */}
      <AnimatePresence>
        {activeForce && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 z-20"
          >
            <Card className="p-4 bg-stone-50 border-stone-200 shadow-xl">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-serif font-bold text-lg text-primary">{activeForce.name}</h3>
                <button onClick={() => setActiveForce(null)} className="text-stone-400 hover:text-stone-600">✕</button>
              </div>
              <div className="space-y-2 text-sm text-stone-700">
                <p><span className="font-bold">Lực lượng:</span> {activeForce.force}</p>
                <p><span className="font-bold">Chỉ huy:</span> {activeForce.commander}</p>
                <p><span className="font-bold">Mục tiêu:</span> {activeForce.target}</p>
                <p className="italic border-t border-stone-200 pt-2 mt-2">{activeForce.description}</p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-4 left-4 bg-white/80 backdrop-blur px-3 py-1 rounded text-xs font-mono text-stone-600 border border-stone-200">
        BẢN ĐỒ CHIẾN DỊCH (TƯƠNG TÁC)
      </div>
    </div>
  );
}
