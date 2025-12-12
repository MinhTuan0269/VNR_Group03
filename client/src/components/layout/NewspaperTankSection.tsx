import { ReactNode } from "react";

export function NewspaperTankSection({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden">
      {/* ===== BASE - Giấy báo cũ thời kháng chiến ===== */}
      <div className="pointer-events-none absolute inset-0 bg-[#e8e0d0]" />

      {/* ===== Vàng ố thời gian ===== */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#d4c4a8]/40 via-transparent to-[#d4c4a8]/30" />

      {/* ===== Sợi giấy thô (fiber texture) ===== */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] bg-[repeating-linear-gradient(0deg,rgba(60,50,35,0.20)_0,rgba(60,50,35,0.20)_1px,transparent_1px,transparent_2.5px)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] bg-[repeating-linear-gradient(90deg,rgba(60,50,35,0.18)_0,rgba(60,50,35,0.18)_1px,transparent_1px,transparent_3px)]" />

      {/* ===== Grain nhám (coarse paper texture) ===== */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '180px 180px'
        }}
      />

      {/* ===== Vết ố, vết phai màu thời gian ===== */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.25] bg-[radial-gradient(circle_at_15%_20%,rgba(139,119,87,0.12)_0,transparent_45%),radial-gradient(circle_at_85%_30%,rgba(120,100,70,0.10)_0,transparent_50%),radial-gradient(circle_at_45%_75%,rgba(130,110,80,0.11)_0,transparent_48%),radial-gradient(circle_at_70%_85%,rgba(125,105,75,0.09)_0,transparent_52%)]" />

      {/* ===== Vết nước/mực loang (historical stains) ===== */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] bg-[radial-gradient(ellipse_at_25%_35%,rgba(100,85,60,0.08)_0,transparent_35%),radial-gradient(ellipse_at_75%_55%,rgba(110,90,65,0.07)_0,transparent_40%),radial-gradient(ellipse_at_50%_80%,rgba(105,88,62,0.06)_0,transparent_38%)]" />

      {/* ===== Gấp nếp giấy (paper crease effect) ===== */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute top-[35%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8b7757]/30 to-transparent" />
        <div className="absolute top-[65%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8b7757]/25 to-transparent" />
      </div>

      {/* ===== Viền tối (aged edges) ===== */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#3c3223]/12 via-transparent to-[#3c3223]/12" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#3c3223]/10 via-transparent to-[#3c3223]/15" />

      {/* ===== Vignette mạnh (old newspaper effect) ===== */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(60,50,35,0.20)_100%)]" />

      {/* ===== Vết mờ góc (corner wear) ===== */}
      <div className="pointer-events-none absolute top-0 left-0 w-48 h-48 bg-[radial-gradient(circle_at_0%_0%,rgba(120,100,70,0.15)_0,transparent_50%)]" />
      <div className="pointer-events-none absolute top-0 right-0 w-48 h-48 bg-[radial-gradient(circle_at_100%_0%,rgba(115,95,68,0.13)_0,transparent_50%)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-48 h-48 bg-[radial-gradient(circle_at_0%_100%,rgba(125,105,75,0.14)_0,transparent_50%)]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-48 h-48 bg-[radial-gradient(circle_at_100%_100%,rgba(118,98,70,0.12)_0,transparent_50%)]" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}