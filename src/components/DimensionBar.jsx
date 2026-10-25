import React from 'react';
import { Check, Sparkles } from 'lucide-react';

export default function DimensionBar({ dimensionData }) {
  if (!dimensionData) return null;

  const { axis, info, poleA, poleB, dominant, isTie } = dimensionData;

  const isDominantA = dominant === poleA.code;
  const isDominantB = dominant === poleB.code;

  // Axis specific theme accents for visual delight
  const axisThemes = {
    EI: {
      activeA: 'bg-indigo-50/80 border-indigo-200 text-indigo-950 ring-1 ring-indigo-300/60',
      activeB: 'bg-violet-50/80 border-violet-200 text-violet-950 ring-1 ring-violet-300/60',
      barA: 'from-indigo-500 to-indigo-600',
      barB: 'from-violet-500 to-purple-600',
      badgeA: 'bg-indigo-600 text-white',
      badgeB: 'bg-violet-600 text-white'
    },
    SN: {
      activeA: 'bg-violet-50/80 border-violet-200 text-violet-950 ring-1 ring-violet-300/60',
      activeB: 'bg-purple-50/80 border-purple-200 text-purple-950 ring-1 ring-purple-300/60',
      barA: 'from-violet-500 to-purple-600',
      barB: 'from-purple-500 to-fuchsia-600',
      badgeA: 'bg-violet-600 text-white',
      badgeB: 'bg-purple-600 text-white'
    },
    TF: {
      activeA: 'bg-blue-50/80 border-blue-200 text-blue-950 ring-1 ring-blue-300/60',
      activeB: 'bg-emerald-50/80 border-emerald-200 text-emerald-950 ring-1 ring-emerald-300/60',
      barA: 'from-blue-500 to-blue-600',
      barB: 'from-emerald-500 to-teal-600',
      badgeA: 'bg-blue-600 text-white',
      badgeB: 'bg-emerald-600 text-white'
    },
    JP: {
      activeA: 'bg-emerald-50/80 border-emerald-200 text-emerald-950 ring-1 ring-emerald-300/60',
      activeB: 'bg-amber-50/80 border-amber-200 text-amber-950 ring-1 ring-amber-300/60',
      barA: 'from-emerald-500 to-teal-600',
      barB: 'from-amber-500 to-orange-500',
      badgeA: 'bg-emerald-600 text-white',
      badgeB: 'bg-amber-500 text-white'
    }
  };

  const theme = axisThemes[axis] || axisThemes.EI;

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm transition-all hover:shadow-md space-y-4">
      {/* Dimension Header: Name & Responses */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
            {axis}
          </span>
          <h3 className="font-bold text-base sm:text-lg text-slate-800">
            {info?.name || axis}
          </h3>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <span className="text-slate-500">
            Total pertanyaan: <strong className="font-mono text-slate-700">{dimensionData.totalVotes || 0} respons</strong>
          </span>
          {!isTie && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/80">
              <Sparkles className="w-3 h-3 text-indigo-500" />
              Dominan: {isDominantA ? info?.poleA?.indo : info?.poleB?.indo} ({isDominantA ? poleA.percent : poleB.percent}%)
            </span>
          )}
        </div>
      </div>

      {/* Comparison Progress Bar */}
      <div className="space-y-1.5 pt-1">
        <div className="flex items-center justify-between text-xs font-bold font-mono">
          <span className={isDominantA ? 'text-indigo-700 font-extrabold' : 'text-slate-500'}>
            {poleA.code} • {poleA.percent}%
          </span>
          <span className={isDominantB ? 'text-purple-700 font-extrabold' : 'text-slate-500'}>
            {poleB.percent}% • {poleB.code}
          </span>
        </div>

        {/* The Capsule Bar */}
        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex p-0.5 border border-slate-200/70 shadow-2xs">
          <div
            className={`h-full rounded-l-full transition-all duration-700 ${
              isDominantA
                ? `bg-gradient-to-r ${theme.barA} shadow-xs`
                : 'bg-slate-300'
            }`}
            style={{ width: `${poleA.percent}%` }}
          />
          <div
            className={`h-full rounded-r-full transition-all duration-700 ${
              isDominantB
                ? `bg-gradient-to-r ${theme.barB} shadow-xs`
                : 'bg-slate-300'
            }`}
            style={{ width: `${poleB.percent}%` }}
          />
        </div>
      </div>

      {/* Poles Full-Width Detailed Cards (No line-clamp, fully readable!) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
        {/* Pole A */}
        <div
          className={`p-4 rounded-xl border transition-all ${
            isDominantA
              ? theme.activeA
              : 'bg-slate-50/70 border-slate-200/70 text-slate-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className={`w-6 h-6 rounded-md flex items-center justify-center font-mono font-bold text-xs ${
                  isDominantA ? theme.badgeA : 'bg-white text-slate-700 border border-slate-200'
                }`}
              >
                {poleA.code}
              </span>
              <span className="font-bold text-sm sm:text-base text-slate-900">
                {info?.poleA?.indo}
              </span>
              <span className="text-xs text-slate-400 font-normal hidden sm:inline">
                ({info?.poleA?.label})
              </span>
            </div>

            <div className="flex items-center gap-2">
              {isDominantA && (
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-100 text-indigo-800 border border-indigo-200">
                  Dominan
                </span>
              )}
              <span className="font-mono font-extrabold text-base sm:text-lg">
                {poleA.percent}%
              </span>
            </div>
          </div>

          {/* Full description - no line-clamp! */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
            {info?.poleA?.desc}
          </p>
        </div>

        {/* Pole B */}
        <div
          className={`p-4 rounded-xl border transition-all ${
            isDominantB
              ? theme.activeB
              : 'bg-slate-50/70 border-slate-200/70 text-slate-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className={`w-6 h-6 rounded-md flex items-center justify-center font-mono font-bold text-xs ${
                  isDominantB ? theme.badgeB : 'bg-white text-slate-700 border border-slate-200'
                }`}
              >
                {poleB.code}
              </span>
              <span className="font-bold text-sm sm:text-base text-slate-900">
                {info?.poleB?.indo}
              </span>
              <span className="text-xs text-slate-400 font-normal hidden sm:inline">
                ({info?.poleB?.label})
              </span>
            </div>

            <div className="flex items-center gap-2">
              {isDominantB && (
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-violet-100 text-violet-800 border border-violet-200">
                  Dominan
                </span>
              )}
              <span className="font-mono font-extrabold text-base sm:text-lg">
                {poleB.percent}%
              </span>
            </div>
          </div>

          {/* Full description - no line-clamp! */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
            {info?.poleB?.desc}
          </p>
        </div>
      </div>

      {isTie && (
        <div className="text-xs text-amber-800 bg-amber-50 px-3.5 py-2 rounded-xl border border-amber-200 flex items-center gap-2">
          <span>⚠️</span>
          <span>
            Skor seimbang (50% – 50%). Menggunakan konvensi penentuan standar ({dominant}).
          </span>
        </div>
      )}
    </div>
  );
}
