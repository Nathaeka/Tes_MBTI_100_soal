import React from 'react';
import { CheckCircle2, LayoutGrid, ChevronLeft } from 'lucide-react';

export default function ProgressBar({
  currentIndex,
  totalQuestions,
  answeredCount,
  onToggleGrid,
  isGridOpen,
  onPrev,
  hasPrev
}) {
  const currentNumber = currentIndex + 1;
  const progressPercent = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;

  return (
    <div className="w-full bg-white border-b border-slate-200/80 px-4 py-3 sticky top-16 z-30 shadow-xs">
      <div className="max-w-4xl mx-auto space-y-2">
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 sm:gap-3">
            {hasPrev && (
              <button
                type="button"
                onClick={onPrev}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                title="Kembali ke soal sebelumnya"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Sebelumnya</span>
              </button>
            )}

            <span className="font-semibold text-slate-800">
              Pertanyaan <span className="font-bold text-indigo-600">{currentNumber}</span> <span className="text-slate-500 font-normal">dari {totalQuestions}</span>
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-slate-200" />
            <span className="hidden sm:inline-flex items-center gap-1.5 text-slate-500 text-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>{answeredCount} terjawab</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-700 font-mono text-xs sm:text-sm">
              {progressPercent}%
            </span>
            {onToggleGrid && (
              <button
                type="button"
                onClick={onToggleGrid}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                  isGridOpen
                    ? 'bg-indigo-50 border-indigo-300 text-indigo-700'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                }`}
                title="Buka daftar nomor pertanyaan"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Daftar Soal</span>
              </button>
            )}
          </div>
        </div>

        {/* Capsule Progress Bar */}
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/50">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300 ease-out shadow-xs"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
