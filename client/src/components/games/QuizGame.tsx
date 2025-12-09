import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import quizData from "@/data/quiz.json";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export function QuizGame() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = quizData as Question[];
  const currentQuestion = questions[currentQuestionIdx];

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQuestion.answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const restart = () => {
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <Card className="p-8 text-center bg-stone-100 max-w-lg mx-auto border-4 border-double border-primary/20">
        <h3 className="text-2xl font-bold font-serif text-primary mb-4">Kết quả</h3>
        <p className="text-4xl font-bold mb-6">{score} / {questions.length}</p>
        <p className="mb-8 text-stone-600">
          {score === questions.length ? "Xuất sắc! Bạn là một chuyên gia lịch sử." : "Hãy tìm hiểu thêm về lịch sử hào hùng của dân tộc nhé!"}
        </p>
        <Button onClick={restart} size="lg" className="w-full">Làm lại</Button>
      </Card>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-4 flex justify-between text-sm font-mono text-stone-500 uppercase tracking-widest">
        <span>Câu hỏi {currentQuestionIdx + 1}/{questions.length}</span>
        <span>Điểm: {score}</span>
      </div>

      <Card className="p-6 md:p-8 bg-white shadow-lg border-t-4 border-primary relative overflow-hidden">
        <h3 className="text-xl md:text-2xl font-bold font-serif mb-6 text-stone-800 leading-relaxed">
          {currentQuestion.question}
        </h3>

        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => {
            let variant = "outline";
            let className = "w-full justify-start text-left h-auto py-4 text-base hover:bg-stone-100 hover:text-stone-900 border-stone-300";
            
            if (isAnswered) {
              if (idx === currentQuestion.answer) {
                className = "w-full justify-start text-left h-auto py-4 bg-green-100 border-green-500 text-green-800 hover:bg-green-100";
              } else if (idx === selectedOption) {
                className = "w-full justify-start text-left h-auto py-4 bg-red-100 border-red-500 text-red-800 hover:bg-red-100";
              } else {
                 className = "w-full justify-start text-left h-auto py-4 opacity-50";
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
                <div className="flex items-center w-full">
                  <span className="w-8 h-8 rounded-full border border-stone-400 flex items-center justify-center mr-4 text-sm font-bold shrink-0 text-stone-500 bg-white">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{option}</span>
                  {isAnswered && idx === currentQuestion.answer && <Check className="ml-auto w-5 h-5 text-green-600" />}
                  {isAnswered && idx === selectedOption && idx !== currentQuestion.answer && <X className="ml-auto w-5 h-5 text-red-600" />}
                </div>
              </Button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg animate-in fade-in slide-in-from-bottom-2">
            <h4 className="font-bold text-blue-800 text-sm uppercase mb-1">Giải thích</h4>
            <p className="text-blue-900 text-sm leading-relaxed">{currentQuestion.explanation}</p>
            <div className="mt-4 flex justify-end">
              <Button onClick={nextQuestion}>
                {currentQuestionIdx < questions.length - 1 ? "Câu tiếp theo" : "Xem kết quả"}
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
