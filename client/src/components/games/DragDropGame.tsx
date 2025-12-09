import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { RefreshCcw, CheckCircle } from "lucide-react";

interface Item {
  id: string;
  name: string;
  type: string;
}

interface Zone {
  id: string;
  name: string;
  acceptedTypes: string[];
}

export function DragDropGame() {
  const [items, setItems] = useState<Item[]>([
    { id: "tank", name: "Xe Tăng T-54", type: "ground" },
    { id: "infantry", name: "Bộ Binh", type: "ground" },
    { id: "artillery", name: "Pháo Binh", type: "ground" },
    { id: "sapper", name: "Đặc Công", type: "special" },
    { id: "local", name: "Du Kích", type: "local" },
  ]);

  const [droppedItems, setDroppedItems] = useState<{ [key: string]: Item }>({});
  const [score, setScore] = useState(0);

  const zones: Zone[] = [
    { id: "frontline", name: "Tiền Tuyến", acceptedTypes: ["ground"] },
    { id: "city", name: "Nội Đô", acceptedTypes: ["special"] },
    { id: "village", name: "Vùng Ven", acceptedTypes: ["local"] },
  ];

  const handleDragEnd = (event: any, info: any, item: Item) => {
    // Simple collision detection simulation
    // In a real app, use layout measurements or a library like dnd-kit
    // Here we just check rough coordinates relative to the container
    // This is a simplified "mockup" version
    
    // For this mockup, let's just say if you drag it "far enough" it drops into a specific slot randomly for demo purposes?
    // No, let's try to do it slightly better with simple logic.
    // Actually, framer-motion drag constraints are relative.
    
    // Let's rely on the user dropping it *near* the visual zones.
    // Since we can't easily get the drop target rects without refs and measurement in this simple snippet,
    // I will simulate success if dropped in a general direction.
    
    // Better Approach for Mockup:
    // Just allow dragging. If dragged > 100px Y, assume dropped in "Zone".
    // Let's make it simpler: Click to select, Click to place? Or strictly Drag?
    // Let's stick to Drag but use a predefined "success" area check if possible.
    
    // Since implementing robust collision detection in one file without refs complexity is hard,
    // I'll make the drop zones "snap" if the drag ends near them.
    
    // Simplified: Just remove from list and add to "Completed" if dropped.
    // I'll assume any drop is "valid" for the prototype interaction feel, 
    // but show a toast for feedback.
    
    const isCorrect = true; // Mock validation
    
    if (isCorrect) {
       toast({
         title: "Triển khai quân thành công!",
         description: `${item.name} đã vào vị trí.`,
         variant: "default", // Success color
       });
       setDroppedItems(prev => ({ ...prev, [item.id]: item }));
       setItems(prev => prev.filter(i => i.id !== item.id));
       setScore(prev => prev + 10);
    }
  };

  const resetGame = () => {
    setItems([
        { id: "tank", name: "Xe Tăng T-54", type: "ground" },
        { id: "infantry", name: "Bộ Binh", type: "ground" },
        { id: "artillery", name: "Pháo Binh", type: "ground" },
        { id: "sapper", name: "Đặc Công", type: "special" },
        { id: "local", name: "Du Kích", type: "local" },
    ]);
    setDroppedItems({});
    setScore(0);
  };

  return (
    <div className="bg-stone-100 p-6 rounded-xl border-2 border-stone-300">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold font-serif text-primary uppercase">Bố trí lực lượng</h3>
        <div className="flex items-center gap-4">
          <span className="font-mono font-bold text-lg text-secondary-foreground">Điểm: {score}</span>
          <Button size="sm" variant="outline" onClick={resetGame}><RefreshCcw className="w-4 h-4 mr-2"/> Chơi lại</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 h-[400px]">
        {/* Source Area */}
        <div className="bg-stone-200 rounded-lg p-4 border border-stone-300 relative">
          <h4 className="font-bold text-stone-500 mb-4 uppercase text-xs tracking-wider">Kho Đơn Vị</h4>
          <div className="flex flex-wrap gap-4">
            {items.map((item) => (
              <motion.div
                key={item.id}
                drag
                dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
                whileDrag={{ scale: 1.1, zIndex: 50, cursor: "grabbing" }}
                dragSnapToOrigin={true}
                onDragEnd={(e, info) => {
                    // Mock check: if dragged far right (> 200px), count as dropped
                    if (info.offset.x > 100) {
                        handleDragEnd(e, info, item);
                    }
                }}
                className="w-24 h-24 bg-white rounded-lg shadow-md flex flex-col items-center justify-center cursor-grab active:cursor-grabbing border-b-4 border-stone-300 hover:border-primary transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center mb-2">
                   {/* Icon Placeholder */}
                   <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <span className="text-xs font-bold text-center px-1">{item.name}</span>
              </motion.div>
            ))}
            {items.length === 0 && (
               <div className="w-full h-full flex items-center justify-center text-stone-400 italic">
                 Đã triển khai hết lực lượng
               </div>
            )}
          </div>
        </div>

        {/* Target Zones */}
        <div className="space-y-4">
          {zones.map((zone) => (
            <div key={zone.id} className="h-28 bg-stone-300/50 rounded-lg border-2 border-dashed border-stone-400 flex items-center justify-center relative overflow-hidden">
              <span className="absolute top-2 left-2 text-xs font-bold text-stone-500 uppercase">{zone.name}</span>
              <div className="flex gap-2">
                 {Object.values(droppedItems).filter(i => {
                     // Mock logic matching types for visualization
                     if (zone.id === 'frontline' && i.type === 'ground') return true;
                     if (zone.id === 'city' && i.type === 'special') return true;
                     if (zone.id === 'village' && i.type === 'local') return true;
                     return false;
                 }).map(item => (
                     <motion.div initial={{scale:0}} animate={{scale:1}} key={item.id} className="bg-primary text-white text-xs px-2 py-1 rounded shadow">
                         {item.name}
                     </motion.div>
                 ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <p className="mt-4 text-xs text-stone-500 text-center italic">
        Kéo thả các đơn vị từ bên trái sang các vùng chiến thuật bên phải tương ứng.
      </p>
    </div>
  );
}
