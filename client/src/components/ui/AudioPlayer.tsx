import { useState, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([50]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Placeholder audio
  const audioSrc = "https://actions.google.com/sounds/v1/alarms/mechanical_clock_ring.ogg"; // Just a sample sound

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-stone-800 rounded-xl overflow-hidden shadow-2xl border-4 border-stone-700 relative">
      {/* Speaker Grill Texture */}
      <div className="absolute top-4 bottom-4 left-4 w-8 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-50 border-r border-stone-600"></div>
      <div className="absolute top-4 bottom-4 right-4 w-8 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-50 border-l border-stone-600"></div>

      <div className="p-6 px-16 relative bg-stone-800">
        <div className="bg-[#2a2a2a] rounded-lg p-4 border border-stone-600 mb-6 shadow-inner relative overflow-hidden">
          {/* Radio Display */}
          <div className="h-16 bg-[#1a1a1a] rounded border border-stone-700 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] animate-pulse"></div>
             <span className="font-mono text-amber-500 text-xl tracking-widest drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]">
               {isPlaying ? "PHAT THANH..." : "SAN SANG"}
             </span>
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-stone-500 font-mono">
            <span>AM</span>
            <span>FM</span>
            <span>SW</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-center items-center gap-4">
            <Button variant="ghost" size="icon" className="text-stone-400 hover:text-stone-200 hover:bg-stone-700">
              <SkipBack className="h-6 w-6" />
            </Button>
            
            <Button 
              onClick={togglePlay}
              className="h-16 w-16 rounded-full bg-stone-300 hover:bg-stone-200 text-stone-900 border-4 border-stone-400 shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),0_4px_8px_rgba(0,0,0,0.5)] active:translate-y-1 transition-all"
            >
              {isPlaying ? <Pause className="h-8 w-8 fill-current" /> : <Play className="h-8 w-8 fill-current ml-1" />}
            </Button>
            
            <Button variant="ghost" size="icon" className="text-stone-400 hover:text-stone-200 hover:bg-stone-700">
              <SkipForward className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex items-center gap-2 px-4">
            <Volume2 className="h-4 w-4 text-stone-500" />
            <Slider 
              value={volume} 
              onValueChange={setVolume} 
              max={100} 
              step={1} 
              className="w-full cursor-pointer"
            />
          </div>
        </div>
      </div>

      <audio 
        ref={audioRef} 
        src={audioSrc} 
        loop 
        onVolumeChange={(e) => {
           // Not actually binding volume to state directly in this mock, but normally would
           if(audioRef.current) audioRef.current.volume = volume[0] / 100;
        }}
      />
      
      {/* Wood Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-yellow-900 mix-blend-overlay"></div>
    </div>
  );
}
