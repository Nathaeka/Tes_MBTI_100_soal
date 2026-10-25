import React from 'react';
import { Compass, ShieldCheck, Heart, Sparkles, Database } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow">
                S
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">siapasih</span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Instrumen tes kepribadian MBTI interaktif dengan 100 pertanyaan mendalam. Dirancang untuk membantu Anda memetakan preferensi energi, informasi, keputusan, dan gaya hidup secara objektif dan reflektif.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> 100 Pertanyaan Valid
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                <Database className="w-3.5 h-3.5 text-indigo-400" /> Penyimpanan Lokal Browser
              </span>
            </div>
          </div>

          {/* 4 Dimensions Quick Reference */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              4 Dimensi MBTI
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="font-mono text-indigo-400 font-semibold">E - I</span>
                <span>Ekstrovert vs Introvert</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-mono text-indigo-400 font-semibold">S - N</span>
                <span>Sensorik vs Intuisi</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-mono text-indigo-400 font-semibold">T - F</span>
                <span>Pemikir vs Perasa</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-mono text-indigo-400 font-semibold">J - P</span>
                <span>Terencana vs Fleksibel</span>
              </li>
            </ul>
          </div>

          {/* Navigation & Admin Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Menu Aplikasi
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate('landing');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('about-mbti');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Tentang MBTI & 4 Dimensi
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('how-it-works');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Cara Kerja & Metodologi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quiz')}
                  className="hover:text-white transition-colors text-indigo-400 font-medium"
                >
                  Mulai Tes MBTI (100 Soal)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('admin')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  Kelola & Edit Soal (Admin)
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div className="pt-8 border-t border-slate-800/80">
          <div className="rounded-xl bg-slate-800/60 p-4 border border-slate-700/60 text-xs text-slate-400 space-y-2 leading-relaxed">
            <div className="flex items-center gap-2 font-semibold text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Catatan Penting & Etika Refleksi Diri</span>
            </div>
            <p>
              Hasil tes ini merupakan pemetaan kecenderungan preferensi subjektif berdasarkan respon yang Anda pilih pada 100 butir pertanyaan yang disediakan. Instrumen ini dirancang sebagai sarana refleksi diri dan eksplorasi komunikasi, bukan diagnosis psikologis klinis, penilaian kepribadian mutlak, atau penentu batas kemampuan seseorang. Seluruh data progres tes disimpan secara privat di penyimpanan lokal browser Anda.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© {new Date().getFullYear()} SiapaSih?. Seluruh hak cipta dilindungi.</p>
            <p className="flex items-center gap-1">
              Dibangun dengan pendekatan terstruktur untuk eksplorasi diri.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
