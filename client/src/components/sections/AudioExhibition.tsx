import { useRef, useState } from "react";
import { motion } from "framer-motion";

type AudioItem = {
  id: string;
  category: "battlefield" | "campaign";
  title: string;
  subtitle?: string;
  description: string;
  imageSrc: string;
  iconLabel: string;
  iconEmoji: string;
  audioUrl: string;
};

const AUDIO_ITEMS: AudioItem[] = [
  // ========= ÂM THANH TỪ CHIẾN TRƯỜNG =========
  // {
  //   id: "voice-historian",
  //   category: "battlefield",
  //   title: "Giọng đọc lịch sử",
  //   subtitle: "Dẫn chuyện – gợi lại không khí ngày 30/4/1975",
  //   description:
  //     "Giọng đọc tái hiện lại bối cảnh, diễn biến và cảm xúc trong thời khắc lịch sử, như một người kể chuyện đưa người nghe trở về với ngày toàn thắng.",
  //   imageSrc:
  //     "https://vcdn1-giaitri.vnecdn.net/2022/03/06/NSNDTuyetMai-1646567911-5973-1646568077.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Bzw7tfaZfGzJKe4VwVN1Rw",
  //   iconLabel: "Người dẫn chuyện",
  //   iconEmoji: "🎙️",
  //   audioUrl: "/audio/giongdoclichsu.mp4",
  // },
  {
    id: "duong-van-minh",
    category: "battlefield",
    title: "Lời tuyên bố đầu hàng của Dương Văn Minh",
    subtitle: "Khoảnh khắc chế độ cũ sụp đổ",
    description:
      "Lời tuyên bố đầu hàng vô điều kiện của Tổng thống chính quyền Sài Gòn Dương Văn Minh – dấu mốc chấm dứt chế độ cũ, mở ra trang sử mới cho dân tộc.",
    imageSrc:
      "https://thinhvuongvietnam.com/Content/UploadFiles/EditorFiles/images/2022/Quy2/tongthongvnchduongvanminh28042022074213.jpg",
    iconLabel: "Tuyên bố đầu hàng",
    iconEmoji: "📜",
    audioUrl: "/audio/Tuyenbodauhang.mp4",
  },
  {
    id: "radio-announcement",
    category: "battlefield",
    title: "Radio Giải phóng phát thông báo chiến thắng",
    subtitle: "Âm thanh vỡ òa trong từng mái nhà",
    description:
      "Tiếng loa, tiếng radio vang lên thông báo Sài Gòn hoàn toàn giải phóng – âm thanh mà hàng triệu người dân mong chờ suốt nhiều năm kháng chiến.",
    imageSrc:
      "https://media.vov.vn/sites/default/files/styles/large_watermark/public/2025-04/ca_nuoc_om_hon_tphcm_ruc_ro_ten_vang.jpg",
    iconLabel: "Đài phát thanh",
    iconEmoji: "📻",
    audioUrl: "/audio/giongdoclichsu.mp4",
  },

  // ========= ÂM THANH CHIẾN DỊCH =========
  {
    id: "marching",
    category: "campaign",
    title: "Tiếng hành quân",
    subtitle: "Những bước chân xuyên đêm",
    description:
      "Tiếng bước chân hành quân, tiếng quân tư trang khua nhẹ trong đêm – âm thanh bền bỉ của những người lính tiến về Sài Gòn.",
    imageSrc:
      "https://img-bcdcnt-net.s3.hn-1.cloud.cmctelecom.vn/d5/2b/aa/d52baa427c0fec1e2ee307f6b6f082a2.jpg",
    iconLabel: "Đội hình hành quân",
    iconEmoji: "🥾",
    audioUrl: "/audio/buoc-chan.mp3",
  },
  {
    id: "tank-sound",
    category: "campaign",
    title: "Tiếng xe tăng",
    subtitle: "Bánh xích nghiền nát những cánh cổng cuối cùng",
    description:
      "Tiếng động cơ, tiếng bánh xích xe tăng lăn trên đường phố – biểu tượng cho sức mạnh tiến công thần tốc của quân giải phóng.",
    imageSrc:
      "https://cand.com.vn/Files/Image/hientk/2019/04/30/f509e77d-3049-4ac7-9b1a-97d0c781d3a4.jpg",
    iconLabel: "Xe tăng tiến vào",
    iconEmoji: "🛡️",
    audioUrl: "/audio/xe-tank.mp3",
  },
  {
    id: "gunfire",
    category: "campaign",
    title: "Tiếng súng",
    subtitle: "Những loạt đạn cuối cùng",
    description:
      "Âm thanh của những loạt đạn cuối cùng trong chiến dịch – ranh giới giữa chiến tranh và hòa bình, giữa mất mát và hi vọng.",
    imageSrc:
      "http://redsvn.net/wp-content/uploads/2022/04/Hien-vat-Sai-Gon-ngay-30-4-1975-13.jpg",
    iconLabel: "Âm vang trận đánh",
    iconEmoji: "💥",
    audioUrl: "/audio/tieng-sung.mp3",
  },
];

export function AudioExhibition() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async (item: AudioItem) => {
    const audio = audioRef.current;
    if (!audio) return;

    // Nếu đang phát chính nó → pause
    if (currentId === item.id && isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    // Nếu đổi sang audio khác → set src + load
    if (audio.src !== item.audioUrl) {
      audio.src = item.audioUrl;
      audio.load();
    }

    try {
      await audio.play();
      setCurrentId(item.id);
      setIsPlaying(true);
    } catch (err) {
      console.error("Cannot play audio");
      alert("Không phát được âm thanh. Kiểm tra lại mạng nhé!!!");
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  const battlefieldItems = AUDIO_ITEMS.filter(
    (item) => item.category === "battlefield",
  );
  const campaignItems = AUDIO_ITEMS.filter(
    (item) => item.category === "campaign",
  );

  return (
    <div className="bg-stone-950 text-stone-50 py-16">
      {/* hidden global audio element */}
      <audio ref={audioRef} onEnded={handleEnded} className="hidden" />

      {/* HERO / INTRO */}
      <section className="max-w-5xl mx-auto px-4 mb-16 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-stone-400 mb-3">
          Phòng nghe – Âm thanh lịch sử
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-amber-200 mb-4">
          Những âm thanh không bao giờ tắt
        </h1>
        <p className="text-stone-300 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          Trong mỗi chiến dịch, âm thanh không chỉ là tiếng động của chiến
          trường, mà còn là nhịp tim của cả dân tộc. Hãy lắng nghe lại những
          khoảnh khắc đã làm nên ngày 30/4 lịch sử – qua giọng đọc, radio, tiếng
          xe tăng, tiếng hành quân và những loạt đạn cuối cùng.
        </p>
      </section>

      {/* SECTION 1: ÂM THANH TỪ CHIẾN TRƯỜNG */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-400 mb-2">
              Âm thanh từ chiến trường
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-amber-100">
              Tiếng nói và thông điệp trong giờ phút định mệnh
            </h2>
          </div>
          <p className="max-w-md text-sm text-stone-400">
            Từ giọng đọc của người dẫn chuyện, lời tuyên bố đầu hàng đến bản tin
            chiến thắng trên radio – mỗi âm thanh là một lát cắt cảm xúc của
            thời khắc lịch sử.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {battlefieldItems.map((item) => {
            const active = currentId === item.id && isPlaying;

            return (
              <article
                key={item.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-stone-800 bg-gradient-to-b from-stone-900/90 to-black shadow-[0_20px_50px_rgba(0,0,0,0.65)]"
              >
                {/* Hình ảnh minh họa */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="h-full w-full object-cover object-top opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  {/* Icon nhân vật / radio */}
                  <motion.button
                    type="button"
                    onClick={() => handlePlay(item)}
                    className="absolute left-4 bottom-4 flex items-center gap-2 rounded-full bg-black/70 px-3 py-2 border border-amber-400/60"
                    whileTap={{ scale: 0.9 }}
                    animate={
                      active
                        ? {
                            y: [0, -4, 0],
                            boxShadow: [
                              "0 0 0 rgba(251, 191, 36, 0.0)",
                              "0 0 30px rgba(251, 191, 36, 0.45)",
                              "0 0 0 rgba(251, 191, 36, 0.0)",
                            ],
                          }
                        : { y: 0, boxShadow: "0 0 0 rgba(0,0,0,0)" }
                    }
                    transition={
                      active
                        ? { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
                        : { duration: 0.2 }
                    }
                  >
                    <span className="text-xl">{item.iconEmoji}</span>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-amber-200">
                      {active ? "Đang phát..." : "Nhấn để nghe"}
                    </span>
                  </motion.button>
                </div>

                {/* Nội dung mô tả */}
                <div className="flex-1 px-5 py-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-1">
                    Âm thanh từ chiến trường
                  </p>
                  <h3 className="text-base md:text-lg font-serif font-semibold text-amber-100">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-xs text-stone-400 mt-0.5">
                      {item.subtitle}
                    </p>
                  )}
                  <p className="mt-2 text-sm text-stone-200 leading-relaxed line-clamp-4">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* SECTION 2: ÂM THANH CHIẾN DỊCH */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-400 mb-2">
              Âm thanh chiến dịch
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-amber-100">
              Nhịp bước, tiếng xe tăng và âm vang trận đánh
            </h2>
          </div>
          <p className="max-w-md text-sm text-stone-400">
            Những âm thanh này là nhịp thở của chiến dịch: tiếng hành quân,
            tiếng xe tăng lăn bánh, tiếng súng nổ – tất cả hòa lại thành bản
            hùng ca của Chiến dịch Hồ Chí Minh.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {campaignItems.map((item) => {
            const active = currentId === item.id && isPlaying;

            return (
              <article
                key={item.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-stone-800 bg-gradient-to-b from-stone-900/90 to-black shadow-[0_20px_50px_rgba(0,0,0,0.65)]"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="h-full w-full object-cover object-top opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

                  {/* Icon xe/giày/đạn */}
                  <motion.button
                    type="button"
                    onClick={() => handlePlay(item)}
                    className="absolute left-4 bottom-4 flex items-center gap-2 rounded-full bg-black/70 px-3 py-2 border border-emerald-400/60"
                    whileTap={{ scale: 0.9 }}
                    animate={
                      active
                        ? {
                            y: [0, -4, 0],
                            rotate: [-2, 2, -2, 0],
                          }
                        : { y: 0, rotate: 0 }
                    }
                    transition={
                      active
                        ? {
                            duration: 1.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }
                        : { duration: 0.2 }
                    }
                  >
                    <span className="text-xl">{item.iconEmoji}</span>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-emerald-200">
                      {active ? "Đang phát..." : "Nhấn để nghe"}
                    </span>
                  </motion.button>
                </div>

                <div className="flex-1 px-5 py-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-1">
                    Âm thanh chiến dịch
                  </p>
                  <h3 className="text-base md:text-lg font-serif font-semibold text-emerald-100">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-xs text-stone-400 mt-0.5">
                      {item.subtitle}
                    </p>
                  )}
                  <p className="mt-2 text-sm text-stone-200 leading-relaxed line-clamp-4">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
