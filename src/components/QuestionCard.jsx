import React, { useEffect } from 'react';
import AnswerOption from './AnswerOption.jsx';
import { DIMENSION_INFO } from '../utils/scoring.js';
import { HelpCircle, ChevronLeft, Check } from 'lucide-react';

export default function QuestionCard({
  question,
  selectedAnswer,
  onSelectOption,
  onPrev,
  hasPrev
}) {
  const dimensionMeta = DIMENSION_INFO[question?.dimension];
  const axisLabel = dimensionMeta ? dimensionMeta.name : 'Preferensi MBTI';

  // Keyboard shortcut listener for options (1 or A for Option 1, 2 or B for Option 2)
  useEffect(() => {
    function handleKeyDown(e) {
      // Don't trigger if user is inside an input/textarea
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      const key = e.key.toUpperCase();
      if ((key === '1' || key === 'A') && question?.options?.[0]) {
        e.preventDefault();
        onSelectOption(question.options[0].id || 'A');
      } else if ((key === '2' || key === 'B') && question?.options?.[1]) {
        e.preventDefault();
        onSelectOption(question.options[1].id || 'B');
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [question, onSelectOption]);

  if (!question) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-500">
        Pertanyaan tidak ditemukan.
      </div>
    );
  }

  const [optA, optB] = question.options || [];

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 md:p-9 transition-all">
      {/* Category & Navigation Header */}
      <div className="flex items-center justify-between mb-4 gap-2">
        <div className="flex items-center gap-2">
          {hasPrev && (
            <button
              type="button"
              onClick={onPrev}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors shadow-2xs"
              title="Kembali ke pertanyaan sebelumnya untuk mengubah jawaban"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Sebelumnya</span>
            </button>
          )}

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            {axisLabel}
          </span>
        </div>

        <span className="text-xs font-medium text-slate-500 hidden sm:inline">
          Pilih respon yang paling alami untukmu
        </span>
      </div>

      {/* Question Text */}
      <div className="mb-7">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 leading-snug tracking-tight">
          {question.question}
        </h2>
      </div>

      {/* Answer Options */}
      <div className="space-y-3.5" role="radiogroup" aria-label={question.question}>
        {optA && (
          <AnswerOption
            optionId={optA.id || 'A'}
            label="A"
            text={optA.text}
            isSelected={selectedAnswer === (optA.id || 'A') || selectedAnswer?.optionId === optA.id}
            onSelect={() => onSelectOption(optA.id || 'A')}
            shortcutKey="A"
          />
        )}

        {optB && (
          <AnswerOption
            optionId={optB.id || 'B'}
            label="B"
            text={optB.text}
            isSelected={selectedAnswer === (optB.id || 'B') || selectedAnswer?.optionId === optB.id}
            onSelect={() => onSelectOption(optB.id || 'B')}
            shortcutKey="B"
          />
        )}
      </div>

      {/* Answer Status / Modification Notice */}
      {selectedAnswer && (
        <div className="mt-4 p-2.5 rounded-xl bg-indigo-50/80 border border-indigo-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-xs text-indigo-900">
          <span className="flex items-center gap-1.5 font-medium">
            <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
            <span>Jawaban tersimpan: <strong className="font-bold">Pilihan {typeof selectedAnswer === 'object' ? selectedAnswer.optionId : selectedAnswer}</strong></span>
          </span>
          <span className="text-slate-500 text-[11px]">
            Kamu dapat memilih opsi lain jika ingin mengubah jawaban
          </span>
        </div>
      )}

      {/* Subtle Hint */}
      <div className="mt-6 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
        <HelpCircle className="w-3.5 h-3.5" />
        <span>Jawab secara spontan berdasarkan kecenderungan alami, bukan apa yang dianggap ideal.</span>
      </div>
    </div>
  );
}
