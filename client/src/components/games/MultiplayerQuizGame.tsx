import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Crown, Users, Copy, RefreshCw } from "lucide-react";
import quizData from "@/data/quiz.json";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

interface Player {
  id: string;
  name: string;
  score: number;
  isYou?: boolean;
}

type Phase = "lobby" | "playing" | "results";

export function MultiplayerQuizGame() {
  const [phase, setPhase] = useState<Phase>("lobby");
  const [roomCode, setRoomCode] = useState(generateRoomCode());
  const [joinCode, setJoinCode] = useState("");
  const [players, setPlayers] = useState<Player[]>(() => [
    { id: "you", name: "Bạn", score: 0, isYou: true },
    // demo “slot” người chơi khác – sau này nối backend sẽ map theo thật
    { id: "p2", name: "Người chơi 2", score: 0 },
    { id: "p3", name: "Người chơi 3", score: 0 },
  ]);

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [yourScore, setYourScore] = useState(0);

  const questions = useMemo(
    () => (quizData as Question[]).slice(0, 8), // lấy 8 câu làm trận đấu
    []
  );
  const currentQuestion = questions[currentQuestionIdx];

  // --------- helper ----------
  function generateRoomCode() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }

  const resetGameState = () => {
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setYourScore(0);
  };

  // --------- lobby actions ----------
  const handleCreateRoom = () => {
    setRoomCode(generateRoomCode());
    // TODO: gọi API tạo room
  };

  const handleJoinRoom = () => {
    if (!joinCode.trim()) return;
    // TODO: gọi API join room với joinCode
  };

  const startMatch = () => {
    resetGameState();
    setPhase("playing");
  };

  // --------- quiz logic ----------
  const handleSelect = (idx: number) => {
    if (isAnswered || phase !== "playing") return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQuestion.answer) {
      setYourScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      finishMatch();
    }
  };

  const finishMatch = () => {
    // giả lập điểm của các người chơi khác
    const simulatedPlayers: Player[] = players.map((p) => {
      if (p.isYou) {
        return { ...p, score: yourScore };
      }
      // random score quanh điểm của bạn (nhưng vẫn hợp lý)
      const maxScore = questions.length;
      const base = Math.max(0, yourScore - 2);
      const randomScore =
        base + Math.floor(Math.random() * Math.min(4, maxScore - base));

      return { ...p, score: randomScore };
    });

    setPlayers(simulatedPlayers);
    setPhase("results");
  };

  const restartMatch = () => {
    resetGameState();
    setPlayers((prev) =>
      prev.map((p) => ({
        ...p,
        score: 0,
      }))
    );
    setPhase("lobby");
  };

  const sortedPlayers = useMemo(
    () => [...players].sort((a, b) => b.score - a.score),
    [players]
  );

  // ================== RENDER ==================

  // ----- Phase: RESULTS (bảng xếp hạng) -----
  if (phase === "results") {
    const top3 = sortedPlayers.slice(0, 3);

    return (
      <div className="grid gap-8 md:grid-cols-[2fr,3fr] items-start">
        {/* Kết quả cá nhân */}
        <Card className="p-6 md:p-8 bg-stone-50 border-stone-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Crown className="w-6 h-6 text-amber-500" />
            <h3 className="text-lg md:text-xl font-serif font-bold text-stone-900">
              Kết quả của bạn
            </h3>
          </div>
          <p className="text-sm text-stone-600 mb-3">
            Bạn đã trả lời đúng{" "}
            <span className="font-semibold">
              {yourScore} / {questions.length}
            </span>{" "}
            câu hỏi.
          </p>
          <div className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {yourScore}
            <span className="text-2xl text-stone-500"> / {questions.length}</span>
          </div>
          <p className="text-sm text-stone-600 mb-6">
            {yourScore === questions.length
              ? "Xuất sắc! Bạn xứng đáng là sử gia của chiến dịch."
              : "Tiếp tục luyện tập để chinh phục ngôi đầu bảng nhé!"}
          </p>
          <Button onClick={restartMatch} className="w-full">
            Chơi lại từ đầu
          </Button>
        </Card>

        {/* Bảng xếp hạng */}
        <Card className="p-6 md:p-8 bg-[#f8f2e6] border-amber-900/30 shadow-md relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.6),transparent_55%)]" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-amber-700" />
              <h3 className="text-lg md:text-xl font-serif font-bold text-amber-900">
                Bảng xếp hạng phòng thi
              </h3>
            </div>

            <p className="text-xs uppercase tracking-[0.25em] text-amber-800 mb-4">
              Top 3 chiến binh xuất sắc
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {top3.map((p, idx) => (
                <div
                  key={p.id}
                  className={`relative rounded-2xl px-3 py-4 text-center ${
                    idx === 0
                      ? "bg-amber-900 text-amber-50 shadow-lg"
                      : "bg-amber-100 text-amber-900"
                  }`}
                >
                  {idx === 0 && (
                    <Crown className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 text-amber-300" />
                  )}
                  <div className="text-xs uppercase tracking-[0.2em] opacity-80 mb-1">
                    {idx === 0 ? "Quán quân" : idx === 1 ? "Á quân" : "Thứ hạng 3"}
                  </div>
                  <div className="text-sm font-semibold truncate">
                    {p.isYou ? "Bạn" : p.name}
                  </div>
                  <div className="mt-2 text-2xl font-bold">
                    {p.score}
                    <span className="text-xs opacity-80"> / {questions.length}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-amber-900/80 mb-2">
              Các người chơi khác:
            </p>
            <div className="space-y-2">
              {sortedPlayers.slice(3).map((p, idx) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between text-sm bg-amber-50/70 border border-amber-200 rounded-lg px-3 py-2"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-6 text-xs text-amber-700">#{idx + 4}</span>
                    <span>{p.isYou ? "Bạn" : p.name}</span>
                    {p.isYou && (
                      <Badge variant="outline" className="border-amber-500 text-amber-700">
                        Bạn
                      </Badge>
                    )}
                  </span>
                  <span className="font-semibold text-amber-900">
                    {p.score} / {questions.length}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    );
  }

  // ----- Phase: LOBBY -----
  if (phase === "lobby") {
    return (
      <div className="grid gap-8 md:grid-cols-[3fr,2fr] items-start">
        {/* Card bên trái: Tạo / tham gia phòng */}
        <Card className="p-6 md:p-8 bg-white shadow-md border-stone-200 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.7),transparent_55%)]" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-stone-700" />
              <h3 className="text-lg md:text-xl font-serif font-bold text-stone-900">
                Tạo phòng thi
              </h3>
            </div>

            <p className="text-sm text-stone-600 mb-4">
              Gửi mã phòng cho bạn bè để cùng tham gia trả lời câu hỏi về Chiến dịch Hồ Chí
              Minh. Sau khi mọi người đã sẵn sàng, bấm “Bắt đầu trận đấu”.
            </p>

            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.25em] text-stone-500 mb-2">
                Mã phòng của bạn
              </p>
              <div className="flex items-center gap-3">
                <div className="flex-1 rounded-lg bg-stone-900 text-stone-50 px-4 py-3 font-mono text-lg tracking-[0.35em] text-center">
                  {roomCode}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-stone-400"
                  onClick={() => navigator.clipboard?.writeText(roomCode)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCreateRoom}
                  title="Tạo mã mới"
                >
                  <RefreshCw className="w-4 h-4 text-stone-500" />
                </Button>
              </div>
              <p className="mt-2 text-xs text-stone-500">
                * Tính năng nhiều máy tham gia thật cần backend. Hiện tại đây là bản mô phỏng
                UI và trải nghiệm.
              </p>
            </div>

            <div className="mb-6 border-t border-stone-200 pt-5">
              <p className="text-xs uppercase tracking-[0.25em] text-stone-500 mb-2">
                Hoặc tham gia phòng khác
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  placeholder="Nhập mã phòng (VD: 4F7KQ2)"
                  value={joinCode}
                  onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                  className="bg-stone-50 border-stone-300 font-mono tracking-[0.25em] text-xs"
                />
                <Button
                  variant="outline"
                  className="whitespace-nowrap"
                  onClick={handleJoinRoom}
                >
                  Tham gia
                </Button>
              </div>
            </div>

            <div className="flex justify-end">
              <Button onClick={startMatch} size="lg" className="px-8">
                Bắt đầu trận đấu
              </Button>
            </div>
          </div>
        </Card>

        {/* Card bên phải: danh sách người chơi */}
        <Card className="p-6 md:p-8 bg-stone-900 text-stone-50 shadow-md border-stone-800">
          <h3 className="text-lg md:text-xl font-serif font-bold mb-4">
            Người chơi trong phòng
          </h3>
          <p className="text-sm text-stone-300 mb-4">
            Danh sách dưới đây chỉ là mô phỏng. Khi kết nối với backend, bạn có thể hiển thị
            đúng tên và trạng thái của từng người tham gia.
          </p>
          <div className="space-y-3">
            {players.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between rounded-lg bg-stone-800/70 px-3 py-2"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-700 flex items-center justify-center text-sm font-bold">
                    {p.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      {p.isYou ? `${p.name} (Bạn)` : p.name}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-stone-400">
                      Sẵn sàng
                    </p>
                  </div>
                </div>
                <Badge
                  variant={p.isYou ? "default" : "outline"}
                  className={p.isYou ? "bg-amber-500 text-stone-900" : "border-stone-500"}
                >
                  Người chơi
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    );
  }

  // ----- Phase: PLAYING (đang thi) -----
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-4 flex justify-between text-xs md:text-sm font-mono text-stone-500 uppercase tracking-[0.2em]">
        <span>
          Câu hỏi {currentQuestionIdx + 1}/{questions.length}
        </span>
        <span>Điểm: {yourScore}</span>
      </div>

      <Card className="p-6 md:p-8 bg-white shadow-lg border-t-4 border-primary relative overflow-hidden">
        {/* ánh sáng nhẹ */}
        <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_60%)]" />
        <div className="relative">
          <h3 className="text-xl md:text-2xl font-bold font-serif mb-6 text-stone-800 leading-relaxed">
            {currentQuestion.question}
          </h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              let className =
                "w-full justify-start text-left h-auto py-3.5 text-sm md:text-base bg-stone-50 hover:bg-stone-100 hover:text-stone-900 border-stone-200";

              if (isAnswered) {
                if (idx === currentQuestion.answer) {
                  className =
                    "w-full justify-start text-left h-auto py-3.5 text-sm md:text-base bg-green-100 border-green-500 text-green-800";
                } else if (idx === selectedOption) {
                  className =
                    "w-full justify-start text-left h-auto py-3.5 text-sm md:text-base bg-red-100 border-red-500 text-red-800";
                } else {
                  className =
                    "w-full justify-start text-left h-auto py-3.5 text-sm md:text-base opacity-60";
                }
              }

              return (
                <Button
                  key={idx}
                  variant="outline"
                  className={className}
                  onClick={() => handleSelect(idx)}
                  disabled={isAnswered}
                >
                  <div className="flex items-center w-full gap-3">
                    <span className="w-8 h-8 rounded-full border border-stone-400 flex items-center justify-center text-xs md:text-sm font-bold shrink-0 text-stone-600 bg-white">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="flex-1 text-left">{option}</span>
                  </div>
                </Button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg animate-in fade-in slide-in-from-bottom-2">
              <h4 className="font-bold text-blue-800 text-xs md:text-sm uppercase mb-1">
                Giải thích
              </h4>
              <p className="text-blue-900 text-sm leading-relaxed mb-3">
                {currentQuestion.explanation}
              </p>
              <div className="flex justify-end">
                <Button onClick={nextQuestion}>
                  {currentQuestionIdx < questions.length - 1
                    ? "Câu tiếp theo"
                    : "Xem bảng xếp hạng"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
