import React, { useState, useEffect, useMemo, useRef } from 'react';
import ProgressBar from '../components/ProgressBar.jsx';
import QuestionCard from '../components/QuestionCard.jsx';
import ConfirmDialog from '../components/ConfirmDialog.jsx';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle, 
  AlertCircle, 
  LayoutGrid, 
  X, 
  HelpCircle,
  Save,
  ArrowRight
} from 'lucide-react';

export default function QuizPage({
  questions,
  activeSession,
  onSaveSession,
  onFinishQuiz,
  onExitQuiz
}) {
  const activeQuestions = useMemo(() => {
    return (questions || []).filter(q => q.isActive !== false);
  }, [questions]);

  const totalQuestions = activeQuestions.length;

  // Initialize state from existing active session or defaults
  const [currentIndex, setCurrentIndex] = useState(() => {
    if (activeSession && typeof activeSession.currentQuestionIndex === 'number') {
      const idx = activeSession.currentQuestionIndex;
      return idx >= 0 && idx < totalQuestions ? idx : 0;
    }
    return 0;
  });

  const [answers, setAnswers] = useState(() => {
    return activeSession?.answers ? { ...activeSession.answers } : {};
  });

  const [isGridOpen, setIsGridOpen] = useState(false);
  const [confirmExitOpen, setConfirmExitOpen] = useState(false);
  const [incompleteWarningOpen, setIncompleteWarningOpen] = useState(false);

  const containerRef = useRef(null);

  // Scroll to top of question on index change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentIndex]);

  // Current question object
  const currentQuestion = activeQuestions[currentIndex];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : null;

  // Total answered count
  const answeredCount = useMemo(() => {
    return activeQuestions.filter(q => answers[q.id] !== undefined && answers[q.id] !== null).length;
  }, [activeQuestions, answers]);

  // Find unanswered question IDs
  const unansweredQuestions = useMemo(() => {
    return activeQuestions
      .filter(q => answers[q.id] === undefined || answers[q.id] === null)
      .map(q => q.id);
  }, [activeQuestions, answers]);

  const isAllAnswered = answeredCount === totalQuestions && totalQuestions > 0;
  const isLastQuestion = currentIndex === totalQuestions - 1;

  // Handle option selection
  const handleSelectOption = (optionId) => {
    if (!currentQuestion) return;

    const updatedAnswers = {
      ...answers,
      [currentQuestion.id]: optionId
    };

    setAnswers(updatedAnswers);

    // Save session automatically
    onSaveSession({
      sessionId: activeSession?.sessionId || `session_${Date.now()}`,
      currentQuestionIndex: currentIndex,
      answers: updatedAnswers,
      isComplete: false
    });

    // Auto-advance to next question smoothly after a brief delay if not last question
    if (currentIndex < totalQuestions - 1) {
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 260);
    }
  };

  // Navigations
  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIdx = currentIndex - 1;
      setCurrentIndex(newIdx);
      onSaveSession({
        sessionId: activeSession?.sessionId || `session_${Date.now()}`,
        currentQuestionIndex: newIdx,
        answers,
        isComplete: false
      });
    }
  };

  const handleNext = () => {
    if (currentAnswer && currentIndex < totalQuestions - 1) {
      const newIdx = currentIndex + 1;
      setCurrentIndex(newIdx);
      onSaveSession({
        sessionId: activeSession?.sessionId || `session_${Date.now()}`,
        currentQuestionIndex: newIdx,
        answers,
        isComplete: false
      });
    }
  };

  const handleJumpToQuestion = (targetIndex) => {
    if (targetIndex >= 0 && targetIndex < totalQuestions) {
      setCurrentIndex(targetIndex);
      setIsGridOpen(false);
      onSaveSession({
        sessionId: activeSession?.sessionId || `session_${Date.now()}`,
        currentQuestionIndex: targetIndex,
        answers,
        isComplete: false
      });
    }
  };

  const handleFinishAttempt = () => {
    if (!isAllAnswered) {
      setIncompleteWarningOpen(true);
      return;
    }
    onFinishQuiz(answers);
  };

  const handleJumpToFirstUnanswered = () => {
    const firstUnansweredIndex = activeQuestions.findIndex(
      q => answers[q.id] === undefined || answers[q.id] === null
    );
    if (firstUnansweredIndex !== -1) {
      setCurrentIndex(firstUnansweredIndex);
    }
    setIncompleteWarningOpen(false);
  };

  // Global key bindings: Left Arrow = Prev, Right Arrow = Next (if answered)
  useEffect(() => {
    function handleKeyDown(e) {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight' && currentAnswer) {
        handleNext();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, currentAnswer, answers]);

  if (totalQuestions === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <AlertCircle className="w-12 h-12 text-rose-500 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-slate-900 mb-2">Tidak Ada Pertanyaan Aktif</h2>
        <p className="text-sm text-slate-600 mb-6">
          Daftar pertanyaan belum dimuat atau seluruh pertanyaan dalam status non-aktif.
        </p>
        <button
          onClick={onExitQuiz}
          className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700"
        >
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-[calc(100vh-4rem)] flex flex-col justify-between pb-12">
      {/* Top Sticky Progress Header */}
      <ProgressBar
        currentIndex={currentIndex}
        totalQuestions={totalQuestions}
        answeredCount={answeredCount}
        onToggleGrid={() => setIsGridOpen(!isGridOpen)}
        isGridOpen={isGridOpen}
        onPrev={handlePrev}
        hasPrev={currentIndex > 0}
      />

      {/* Main Question View Area */}
      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12 w-full flex-1 flex flex-col justify-center">
        <QuestionCard
          question={currentQuestion}
          selectedAnswer={currentAnswer}
          onSelectOption={handleSelectOption}
          onPrev={handlePrev}
          hasPrev={currentIndex > 0}
        />

        {/* Bottom Navigation Control Bar */}
        <div className="max-w-2xl mx-auto w-full mt-8 flex items-center justify-between gap-4">
          {/* Tombol Sebelumnya */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
              currentIndex === 0
                ? 'opacity-30 cursor-not-allowed text-slate-400 bg-slate-100 border border-slate-200'
                : 'text-slate-800 hover:text-slate-900 bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-300 shadow-xs active:scale-95 cursor-pointer'
            }`}
            title={currentIndex === 0 ? 'Ini adalah pertanyaan pertama' : 'Kembali ke pertanyaan sebelumnya untuk mengubah jawaban (Shortcut: Panah Kiri)'}
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            <span>Sebelumnya</span>
          </button>

          {/* Quick Exit / Save Button */}
          <button
            type="button"
            onClick={() => setConfirmExitOpen(true)}
            className="text-xs font-medium text-slate-400 hover:text-slate-600 flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <Save className="w-3.5 h-3.5" />
            <span>Simpan Sesi</span>
          </button>

          {/* Next or Finish Button */}
          {isLastQuestion ? (
            <button
              type="button"
              onClick={handleFinishAttempt}
              className="flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-200 active:scale-95 transition-all"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Selesaikan Tes</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNext}
              disabled={!currentAnswer}
              className={`flex items-center gap-1.5 px-5 sm:px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                !currentAnswer
                  ? 'opacity-50 cursor-not-allowed text-slate-400 bg-slate-100'
                  : 'text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-200 active:scale-95'
              }`}
            >
              <span>Berikutnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </main>

      {/* Question Grid Modal / Drawer */}
      {isGridOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fadeIn">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-h-[85vh] flex flex-col">
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div>
                <h3 className="font-bold text-slate-800 text-base">Navigasi Nomor Soal</h3>
                <p className="text-xs text-slate-500">
                  {answeredCount} dari {totalQuestions} pertanyaan telah dijawab
                </p>
              </div>
              <button
                onClick={() => setIsGridOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 pb-3 border-b border-slate-100">
                <span className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-md bg-indigo-600 text-white flex items-center justify-center text-[9px] font-bold">✓</span>
                  Sudah dijawab
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-md bg-indigo-100 border border-indigo-400" />
                  Soal aktif
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded-md bg-slate-100 border border-slate-200" />
                  Belum dijawab
                </span>
              </div>

              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                {activeQuestions.map((q, idx) => {
                  const isAnswered = answers[q.id] !== undefined && answers[q.id] !== null;
                  const isCurrent = idx === currentIndex;
                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => handleJumpToQuestion(idx)}
                      className={`h-10 rounded-xl text-xs font-bold transition-all flex items-center justify-center relative ${
                        isCurrent
                          ? 'ring-2 ring-indigo-600 bg-indigo-50 text-indigo-700 font-extrabold shadow-sm'
                          : isAnswered
                          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200/60'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
              <span className="text-slate-500">
                Klik nomor untuk langsung berpindah pertanyaan.
              </span>
              <button
                type="button"
                onClick={() => setIsGridOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-900"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Exit Dialog */}
      <ConfirmDialog
        isOpen={confirmExitOpen}
        title="Simpan & Keluar dari Tes?"
        message={`Progres Anda (${answeredCount} dari ${totalQuestions} soal) tersimpan secara aman di browser ini. Anda dapat melanjutkannya kapan saja.`}
        confirmLabel="Simpan & Keluar"
        cancelLabel="Tetap di Tes"
        onConfirm={() => {
          setConfirmExitOpen(false);
          onExitQuiz();
        }}
        onCancel={() => setConfirmExitOpen(false)}
      />

      {/* Incomplete Warning Dialog */}
      <ConfirmDialog
        isOpen={incompleteWarningOpen}
        title="Masih Ada Pertanyaan yang Belum Dijawab"
        message={`Anda baru menjawab ${answeredCount} dari ${totalQuestions} pertanyaan. Tes MBTI 100 soal membutuhkan seluruh pertanyaan terjawab untuk kalkulasi tipe 4 huruf yang akurat.`}
        confirmLabel="Lompat ke Soal yang Kosong"
        cancelLabel="Tutup"
        onConfirm={handleJumpToFirstUnanswered}
        onCancel={() => setIncompleteWarningOpen(false)}
      />
    </div>
  );
}
