import React from 'react';
import { 
  Play, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  CheckCircle, 
  Compass, 
  Brain, 
  Heart, 
  Calendar, 
  Eye, 
  ShieldCheck, 
  RotateCcw, 
  Award,
  Layers,
  ChevronRight
} from 'lucide-react';
import { DIMENSION_INFO } from '../utils/scoring.js';

export default function LandingPage({
  onStartQuiz,
  onResumeQuiz,
  onResetQuiz,
  activeSession,
  lastResult,
  onViewResult,
  onNavigate
}) {
  const answeredCount = activeSession ? Object.keys(activeSession.answers || {}).length : 0;
  const hasIncompleteSession = activeSession && !activeSession.isComplete && answeredCount > 0;

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* Active Session Resume Banner */}
      {hasIncompleteSession && (
        <div className="max-w-5xl mx-auto px-4 pt-6">
          <div className="bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-indigo-500/10 border border-indigo-200/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-indigo-300">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Sesi Tes Sebelumnya Masih Tersimpan
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Anda telah menjawab <span className="font-bold text-indigo-600">{answeredCount}</span> dari 100 pertanyaan. Ingin melanjutkan?
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={onResetQuiz}
                className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-white/80 border border-slate-200 transition-colors"
              >
                Mulai Ulang
              </button>
              <button
                type="button"
                onClick={onResumeQuiz}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm shadow-indigo-200 transition-all"
              >
                Lanjutkan Tes
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Previous Completed Result Quick Link */}
      {!hasIncompleteSession && lastResult && lastResult.type && (
        <div className="max-w-5xl mx-auto px-4 pt-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-700 font-bold font-mono flex items-center justify-center text-sm border border-violet-200">
                {lastResult.type}
              </div>
              <div>
                <p className="text-xs text-slate-500">Hasil tes terakhir Anda:</p>
                <p className="text-sm font-bold text-slate-900">
                  Tipe {lastResult.type} ({new Date(lastResult.calculatedAt || Date.now()).toLocaleDateString('id-ID')})
                </p>
              </div>
            </div>
            <button
              onClick={onViewResult}
              className="text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
            >
              Lihat Hasil <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 pt-8 sm:pt-14 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/70 text-indigo-700 text-xs font-semibold mb-6 shadow-xs animate-fadeIn">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>100% Gratis • 100 Pertanyaan Lengkap • Tanpa Registrasi</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto">
          Kenali Dirimu Lebih Dalam Lewat{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 bg-clip-text text-transparent">
            Tes Kepribadian MBTI
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Temukan pola alami dalam cara Anda berpikir, menyerap energi, mengambil keputusan, dan berinteraksi dengan lingkungan sekitar melalui 100 pertanyaan inventori kepribadian.
        </p>

        {/* Feature Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600 font-medium">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-xs">
            <Clock className="w-4 h-4 text-indigo-600" />
            <span>Estimasi: 10 – 15 Menit</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-xs">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>100 Butir Pertanyaan Valid</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200/80 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-violet-600" />
            <span>Privat & Tersimpan di Browser</span>
          </div>
        </div>

        {/* Hero CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onStartQuiz}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300 transform active:scale-95 transition-all"
          >
            <Play className="w-5 h-5 fill-current" />
            {hasIncompleteSession ? 'Lanjutkan Tes MBTI' : 'Mulai Tes Sekarang'}
          </button>
          
          <button
            type="button"
            onClick={() => {
              onNavigate('about-mbti');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-6 py-4 rounded-2xl text-base font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 transition-colors shadow-xs cursor-pointer"
          >
            Pelajari Tentang MBTI
          </button>
        </div>
      </section>

      {/* 4 Dimensions Section */}
      <section id="dimensions-section" className="max-w-6xl mx-auto px-4 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-extrabold tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200/60">
            Fondasi Teori
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Empat Dimensi Preferensi MBTI
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Setiap kepribadian tersusun dari 4 pasang spektrum alami. Tidak ada tipe yang lebih baik atau buruk; masing-masing memiliki kekuatan unik.
          </p>
        </div>

        {/* 4 Full-Width Sequential Dimension Cards */}
        <div className="flex flex-col gap-8">
          {/* Dimensi 1: E vs I */}
          <div className="w-full bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 md:p-9 shadow-sm hover:shadow-md transition-shadow space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200">
                  Dimensi 1: E vs I
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Diuji lewat 18 Butir Pertanyaan
                </span>
              </div>
              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50/70 px-3 py-1 rounded-full border border-indigo-100">
                Fokus: Orientasi Baterai Energi Mental
              </span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
                Orientasi Energi: Ekstrovert (E) vs Introvert (I)
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                Dimensi ini mengeksplorasi dari mana Anda memperoleh dorongan energi mental dan ke mana perhatian Anda mengalir secara alami saat menghadapi kehidupan sehari-hari.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Kutub E */}
              <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100/90 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                      E
                    </span>
                    <span className="font-bold text-base text-indigo-950">
                      Extraversion (Ekstrovert)
                    </span>
                  </div>
                  <span className="text-xs font-bold font-mono text-indigo-700 bg-white px-2.5 py-0.5 rounded-md border border-indigo-200">
                    Energi Eksternal
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  Mendapat tambahan tenaga dari interaksi sosial, aksi aktif, dan keterlibatan langsung di dunia luar.
                </p>
                <div className="space-y-1.5 pt-1 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                    <span><strong>Pola Berpikir:</strong> Cenderung berpikir sambil berbicara (<em>talk-to-think</em>) dan cepat mengutarakan ide secara terbuka.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                    <span><strong>Lingkungan Ideal:</strong> Kolaboratif, diskusi ramai, jejaring pertemanan luas, dan aktivitas dinamis bersama tim.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                    <span><strong>Situasi Nyata:</strong> Setelah hari yang melelahkan, mereka merasa pulih dan bersemangat kembali jika diajak kumpul atau mengobrol bersama teman.</span>
                  </div>
                </div>
              </div>

              {/* Kutub I */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-slate-700 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                      I
                    </span>
                    <span className="font-bold text-base text-slate-900">
                      Introversion (Introvert)
                    </span>
                  </div>
                  <span className="text-xs font-bold font-mono text-slate-700 bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
                    Energi Internal
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  Mendapat tambahan tenaga dari keheningan, refleksi pribadi mendalam, dan ketenangan ruang batin.
                </p>
                <div className="space-y-1.5 pt-1 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0 mt-1.5" />
                    <span><strong>Pola Berpikir:</strong> Berpikir matang di dalam kepala sebelum mengucapkannya (<em>think-to-talk</em>) dan memilih kata dengan cermat.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0 mt-1.5" />
                    <span><strong>Lingkungan Ideal:</strong> Suasana tenang tanpa distraksi, fokus mendalam (<em>deep work</em>), dan percakapan empat mata yang berbobot.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0 mt-1.5" />
                    <span><strong>Situasi Nyata:</strong> Setelah seharian berinteraksi dengan banyak orang, mereka butuh waktu sendiri (membaca, dengar musik, tidur) untuk mengisi ulang baterai sosial.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-100/70 border border-slate-200/80 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-semibold text-slate-800">
                💡 Rangkuman Perbedaan Kunci:
              </span>
              <span>
                Bukan tentang pemalu vs percaya diri, melainkan di mana baterai mental Anda terisi: dari keramaian luar (E) atau keheningan dalam (I).
              </span>
            </div>
          </div>

          {/* Dimensi 2: S vs N */}
          <div className="w-full bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 md:p-9 shadow-sm hover:shadow-md transition-shadow space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-lg bg-violet-50 text-violet-700 border border-violet-200">
                  Dimensi 2: S vs N
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Diuji lewat 25 Butir Pertanyaan
                </span>
              </div>
              <span className="text-xs font-semibold text-violet-600 bg-violet-50/70 px-3 py-1 rounded-full border border-violet-100">
                Fokus: Metode Menyerap & Mengolah Informasi
              </span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
                Pengolahan Informasi: Sensorik (S) vs Intuisi (N)
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                Dimensi ini mengukur jenis informasi yang pertama kali diperhatikan dan dipercayai oleh pikiran Anda: apakah data faktual nyata di depan mata, atau pola tersembunyi dan visi masa depan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Kutub S */}
              <div className="p-5 rounded-2xl bg-violet-50/50 border border-violet-100/90 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-violet-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                      S
                    </span>
                    <span className="font-bold text-base text-violet-950">
                      Sensing (Sensorik / Faktual)
                    </span>
                  </div>
                  <span className="text-xs font-bold font-mono text-violet-700 bg-white px-2.5 py-0.5 rounded-md border border-violet-200">
                    Fakta Nyata & Praktis
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  Fokus pada bukti konkret, panca indra, data terukur, dan pengalaman nyata yang sudah terbukti.
                </p>
                <div className="space-y-1.5 pt-1 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0 mt-1.5" />
                    <span><strong>Cara Memandang:</strong> Realistis, membumi (<em>down-to-earth</em>), teliti pada rincian angka, kronologi kejadian, dan prosedur baku.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0 mt-1.5" />
                    <span><strong>Gaya Belajar:</strong> Sangat efektif jika ditunjukkan contoh praktik langsung langkah demi langkah (<em>step-by-step</em>).</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0 mt-1.5" />
                    <span><strong>Situasi Nyata:</strong> Saat merakit perabot atau memasak, mereka mengikuti buku petunjuk panduan secara teratur dari halaman pertama.</span>
                  </div>
                </div>
              </div>

              {/* Kutub N */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-purple-700 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                      N
                    </span>
                    <span className="font-bold text-base text-slate-900">
                      Intuition (Intuisi / Visioner)
                    </span>
                  </div>
                  <span className="text-xs font-bold font-mono text-slate-700 bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
                    Pola & Potensi Masa Depan
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  Fokus pada makna tersirat, imajinasi konseptual, analogi kreatif, dan potensi kemungkinan masa depan.
                </p>
                <div className="space-y-1.5 pt-1 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 mt-1.5" />
                    <span><strong>Cara Memandang:</strong> Melihat gambaran besar (<em>big picture</em>), mencari benang merah tersembunyi, dan antusias pada inovasi baru.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 mt-1.5" />
                    <span><strong>Gaya Belajar:</strong> Lebih cepat paham jika dijelaskan konsep dasar, teori filosofis, dan logika kerangka besarnya terlebih dahulu.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0 mt-1.5" />
                    <span><strong>Situasi Nyata:</strong> Saat merakit barang baru, mereka cenderung mengabaikan buku manual dan langsung merakitnya mengandalkan firasat intuisi.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-100/70 border border-slate-200/80 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-semibold text-slate-800">
                💡 Rangkuman Perbedaan Kunci:
              </span>
              <span>
                Sensorik (S) melihat pohon-pohon individual secara detail di depan mata, sedangkan Intuisi (N) melihat keseluruhan hutan dan ke mana arah perkembangannya.
              </span>
            </div>
          </div>

          {/* Dimensi 3: T vs F */}
          <div className="w-full bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 md:p-9 shadow-sm hover:shadow-md transition-shadow space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200">
                  Dimensi 3: T vs F
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Diuji lewat 29 Butir Pertanyaan
                </span>
              </div>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50/70 px-3 py-1 rounded-full border border-blue-100">
                Fokus: Kompas Pengambilan Keputusan
              </span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
                Pengambilan Keputusan: Pemikir (T) vs Perasa (F)
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                Dimensi ini menilai kriteria utama yang Anda jadikan pegangan saat harus menimbang pilihan sulit, menyelesaikan perselisihan, atau menentukan sikap.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Kutub T */}
              <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100/90 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                      T
                    </span>
                    <span className="font-bold text-base text-blue-950">
                      Thinking (Pemikir / Logis)
                    </span>
                  </div>
                  <span className="text-xs font-bold font-mono text-blue-700 bg-white px-2.5 py-0.5 rounded-md border border-blue-200">
                    Logika & Efisiensi
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  Membuat keputusan berdasarkan logika objektif, analisis sebab-akibat, aturan adil, dan efisiensi sistemik.
                </p>
                <div className="space-y-1.5 pt-1 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                    <span><strong>Prinsip Utama:</strong> Mengesampingkan emosi sesaat agar dapat melihat masalah secara netral, rasional, dan adil bagi semua aturan.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                    <span><strong>Orientasi Diskusi:</strong> Langsung ke inti masalah (<em>to the point</em>), mencari letak kesalahan, dan merancang solusi pemecahan.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                    <span><strong>Situasi Nyata:</strong> Saat ada teman curhat kena masalah, mereka spontan menganalisis kronologi kesalahan agar kejadian serupa tidak terulang.</span>
                  </div>
                </div>
              </div>

              {/* Kutub F */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                      F
                    </span>
                    <span className="font-bold text-base text-slate-900">
                      Feeling (Perasa / Nilai Empati)
                    </span>
                  </div>
                  <span className="text-xs font-bold font-mono text-slate-700 bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
                    Empati & Harmoni
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  Membuat keputusan berdasarkan pertimbangan hati nurani, perasaan orang yang terdampak, dan keharmonisan relasi.
                </p>
                <div className="space-y-1.5 pt-1 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                    <span><strong>Prinsip Utama:</strong> Menghargai nilai-nilai kemanusiaan, menjaga perasaan agar tidak ada yang sakit hati, dan membina kekompakan.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                    <span><strong>Orientasi Diskusi:</strong> Menenangkan suasana, mendengarkan dengan tulus, dan memberikan dukungan moral serta pemulihan batin.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                    <span><strong>Situasi Nyata:</strong> Saat ada teman curhat menangis, mereka spontan mendengarkan, merangkul pundaknya, dan memvalidasi perasaannya dulu.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-100/70 border border-slate-200/80 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-semibold text-slate-800">
                💡 Rangkuman Perbedaan Kunci:
              </span>
              <span>
                Thinking (T) menimbang: "Apakah ini logis, konsisten, dan benar?", sedangkan Feeling (F) menimbang: "Bagaimana dampaknya bagi perasaan manusia dan keharmonisan?".
              </span>
            </div>
          </div>

          {/* Dimensi 4: J vs P */}
          <div className="w-full bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 md:p-9 shadow-sm hover:shadow-md transition-shadow space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Dimensi 4: J vs P
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  Diuji lewat 28 Butir Pertanyaan
                </span>
              </div>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50/70 px-3 py-1 rounded-full border border-emerald-100">
                Fokus: Pola Hidup, Waktu & Struktur Kerja
              </span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
                Gaya Hidup & Pola Kerja: Terencana (J) vs Fleksibel (P)
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-4xl">
                Dimensi ini mengeksplorasi bagaimana Anda mengatur keseharian, merespons tenggat waktu (<em>deadline</em>), dan menyikapi kepastian rencana hidup.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Kutub J */}
              <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-100/90 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                      J
                    </span>
                    <span className="font-bold text-base text-emerald-950">
                      Judging (Terencana / Terstruktur)
                    </span>
                  </div>
                  <span className="text-xs font-bold font-mono text-emerald-700 bg-white px-2.5 py-0.5 rounded-md border border-emerald-200">
                    Kepastian & Jadwal Rapi
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  Menyukai rencana yang sudah matang dari awal, jadwal pasti, ketuntasan pekerjaan, dan hidup tertata rapi.
                </p>
                <div className="space-y-1.5 pt-1 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                    <span><strong>Ritme Kerja:</strong> Menyicil tugas jauh hari sebelum batas waktu (<em>deadline</em>) agar bisa tidur nyenyak di malam terakhir.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                    <span><strong>Kenyamanan Pikiran:</strong> Merasa tenang saat daftar tugas (<em>to-do list</em>) berhasil dicoret dan keputusan sudah diketok palu.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                    <span><strong>Situasi Nyata:</strong> Saat mau bepergian liburan, mereka sudah menyusun itinerary, memesan tiket, dan booking hotel dari minggu lalu.</span>
                  </div>
                </div>
              </div>

              {/* Kutub P */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-amber-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                      P
                    </span>
                    <span className="font-bold text-base text-slate-900">
                      Perceiving (Fleksibel / Spontan)
                    </span>
                  </div>
                  <span className="text-xs font-bold font-mono text-slate-700 bg-white px-2.5 py-0.5 rounded-md border border-slate-200">
                    Adaptif & Mengalir
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  Menyukai keterbukaan opsi, spontanitas, adaptif terhadap situasi mendadak, dan membiarkan hidup mengalir.
                </p>
                <div className="space-y-1.5 pt-1 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                    <span><strong>Ritme Kerja:</strong> Sangat fleksibel, sering menggunakan sistem kebut semalam (SKS) di mana ide kreatif malah bermunculan saat kepepet.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                    <span><strong>Kenyamanan Pikiran:</strong> Merasa terkekang jika semua jadwal terlalu kaku dikunci; senang jika masih ada peluang ganti rencana.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                    <span><strong>Situasi Nyata:</strong> Saat liburan, mereka beli tiket H-1, berangkat membawa ransel, dan tempat menginap dipikirkan belakangan di lokasi.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-100/70 border border-slate-200/80 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-semibold text-slate-800">
                💡 Rangkuman Perbedaan Kunci:
              </span>
              <span>
                Judging (J) menyukai kepastian dan penyelesaian lebih cepat agar tenang, sedangkan Perceiving (P) menyukai kebebasan opsi dan adaptasi di tengah jalan.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works-section" className="max-w-5xl mx-auto px-4 scroll-mt-24">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              Alur Sederhana
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">
              Bagaimana Tes Ini Bekerja
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Pengalaman tes yang fokus, tenang, dan transparan tanpa distraksi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3 text-center md:text-left">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/30 text-indigo-400 border border-indigo-500/40 font-mono font-bold text-lg flex items-center justify-center mx-auto md:mx-0">
                01
              </div>
              <h3 className="font-bold text-base text-white">Jawab Pertanyaan Spontan</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pilih salah satu dari dua opsi jawaban yang paling mendeskripsikan kecenderungan diri Anda tanpa berpikir terlalu lama.
              </p>
            </div>

            <div className="space-y-3 text-center md:text-left">
              <div className="w-12 h-12 rounded-2xl bg-violet-600/30 text-violet-400 border border-violet-500/40 font-mono font-bold text-lg flex items-center justify-center mx-auto md:mx-0">
                02
              </div>
              <h3 className="font-bold text-base text-white">Sistem Mengolah Preferensi</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Algoritma scoring menghitung akumulasi suara pada 4 dimensi (E/I, S/N, T/F, J/P) secara dinamis tanpa bias.
              </p>
            </div>

            <div className="space-y-3 text-center md:text-left">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 font-mono font-bold text-lg flex items-center justify-center mx-auto md:mx-0">
                03
              </div>
              <h3 className="font-bold text-base text-white">Dapatkan Profil 4 Huruf</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Lihat hasil tipe MBTI Anda, persentase tiap dimensi, kekuatan utama, gaya komunikasi, serta area pengembangan.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center pt-6 border-t border-slate-800">
            <button
              type="button"
              onClick={() => {
                onNavigate('how-it-works');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-indigo-300 hover:text-white border border-slate-700 text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-xs"
            >
              <span>Buka Halaman Lengkap Metodologi, Tips, & FAQ Cara Kerja</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-3xl p-8 sm:p-12 border border-indigo-100 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Siap Menemukan Tipe Kepribadian Anda?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            100 pertanyaan dirancang secara seimbang untuk memberikan gambaran preferensi kepribadian yang komprehensif.
          </p>
          <div className="mt-8">
            <button
              type="button"
              onClick={onStartQuiz}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-200 transition-all active:scale-95"
            >
              <Play className="w-4 h-4 fill-current" />
              Mulai Tes 100 Pertanyaan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
