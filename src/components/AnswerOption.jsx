import React from 'react';
import { Check } from 'lucide-react';

export default function AnswerOption({
  optionId,
  label,
  text,
  isSelected,
  onSelect,
  shortcutKey
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={isSelected}
      onClick={onSelect}
      className={`group w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 relative flex items-start gap-4 outline-none focus-visible:ring-4 focus-visible:ring-indigo-100 cursor-pointer ${
        isSelected
          ? 'border-indigo-500 bg-indigo-100 ring-2 ring-indigo-500 shadow-md shadow-indigo-100/50 scale-[1.01]'
          : 'bg-white border-slate-200 hover:bg-indigo-50 hover:border-indigo-300 text-slate-800'
      }`}
    >
      {/* Option Identifier Badge */}
      <div
        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs sm:text-sm transition-all duration-200 ${
          isSelected
            ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-300 scale-105'
            : 'bg-slate-100 text-slate-600 group-hover:bg-indigo-100 group-hover:text-indigo-700'
        }`}
      >
        {isSelected ? <Check className="w-4 h-4 stroke-[3]" /> : label}
      </div>

      {/* Option Text */}
      <div className="flex-1 min-w-0 pt-0.5">
        <p
          className={`text-sm sm:text-base leading-relaxed transition-colors duration-200 ${
            isSelected ? 'text-indigo-950 font-semibold' : 'text-slate-800 font-normal group-hover:text-slate-900'
          }`}
        >
          {text}
        </p>
      </div>

      {/* Keyboard Shortcut Hint (Desktop) */}
      {shortcutKey && (
        <span
          className={`hidden md:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono shrink-0 transition-opacity ${
            isSelected
              ? 'bg-indigo-200/80 text-indigo-800 font-medium'
              : 'bg-slate-100 text-slate-400 opacity-60 group-hover:opacity-100'
          }`}
        >
          {shortcutKey}
        </span>
      )}
    </button>
  );
}
