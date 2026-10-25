import React, { useState } from 'react';
import { 
  HelpCircle, 
  Sparkles, 
  Play, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  Database,
  Lock,
  ThumbsUp,
  ThumbsDown,
  Percent
} from 'lucide-react';

export default function HowItWorksPage({ onStartQuiz }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Pengerjaan 100 Butir Pertanyaan Spontan',
      badge: 'Langkah Pertama',
      desc: 'Setiap butir menyajikan dua opsi respon situasi nyata dalam bahasa Indonesia yang lugas dan santai.',
      details: [
        'Tidak ada jawaban "benar" atau "salah" dalam tes kepribadian.',
        'Pilihlah opsi yang secara spontan paling menggambarkan reaksi alami Anda, bukan respon yang dianggap ideal secara sosial.',
        'Estimasi pengerjaan rata-rata adalah 10 hingga 15 menit.'
      ],
      rectBg: 'bg-indigo-50/90 text-indigo-700 border-indigo-100',
      badgeStyle: 'bg-indigo-50 text-indigo-700 border border-indigo-200'
    },
    {
      number: '02',
      title: 'Pemetaan Jawaban ke 4 Sumbu Dimensi',
      badge: 'Proses Data',
      desc: 'Sistem memetakan setiap pilihan Anda ke salah satu kutub preferensi MBTI secara terstruktur.',
      details: [
        '18 Butir mengukur sumbu E vs I (Orientasi Aliran Energi)',
        '25 Butir mengukur sumbu S vs N (Cara Pengolahan Informasi)',
        '29 Butir mengukur sumbu T vs F (Kriteria Pengambilan Keputusan)',
        '28 Butir mengukur sumbu J vs P (Gaya Hidup & Struktur Waktu)',
        'Setiap soal hanya berkontribusi 1 suara pada dimensi yang bersangkutan.'
      ],
      rectBg: 'bg-violet-50/90 text-violet-700 border-violet-100',
      badgeStyle: 'bg-violet-50 text-violet-700 border border-violet-200'
    },
    {
      number: '03',
      title: 'Kalkulasi Persentase Dinamis & Anti Duplikasi',
      badge: 'Algoritma Scoring',
      desc: 'Algoritma scoring menghitung akumulasi total suara dan persentase kedua kutub secara real-time.',
      details: [
        'Rumus: % Kutub A = (Skor A ÷ Total Respons Dimensi) × 100%.',
        'Integritas Jawaban: Jika Anda kembali dan mengubah jawaban, suara lama otomatis ditimpa tanpa terhitung ganda.',
        'Aturan Tie-Break: Jika suara kedua kutub seimbang sempurna (50% - 50%), sistem menerapkan konvensi tie-break standar yang transparan.'
      ],
      rectBg: 'bg-blue-50/90 text-blue-700 border-blue-100',
      badgeStyle: 'bg-blue-50 text-blue-700 border border-blue-200'
    },
    {
      number: '04',
      title: 'Kompilasi 4 Huruf & Rekomendasi Karakter',
      badge: 'Hasil Akhir',
      desc: 'Empat kutub dominan digabungkan menjadi kode tipe MBTI unik Anda (contoh: INTJ, ENFP, dll).',
      details: [
        'Tampilan tipe 4 huruf lengkap dengan julukan dan gambaran kepribadian mendalam.',
        'Visualisasi grafik persentase 4 dimensi memanjang ke samping.',
        'Kartu analisis: Kekuatan Utama, Area Pengembangan, Gaya Komunikasi, dan Jalur Karier yang selaras.',
        'Opsi membagikan hasil ke teman atau menyalin ringkasan ke clipboard.'
      ],
      rectBg: 'bg-emerald-50/90 text-emerald-700 border-emerald-100',
      badgeStyle: 'bg-emerald-50 text-emerald-700 border border-emerald-200'
    }
  ];

  const tips = [
    {
      type: 'do',
      title: 'Yang Disarankan (DO)',
      items: [
        'Jawablah berdasarkan diri Anda yang sebenarnya hari ini, bukan siapa yang Anda inginkan menjadi di masa depan.',
        'Percayai respon spontan pertama dalam 5-10 detik untuk setiap soal.',
        'Kerjakan di tempat yang santai dan bebas dari gangguan bising.'
      ]
    },
    {
      type: 'dont',
      title: 'Yang Perlu Dihindari (DON’T)',
      items: [
        'Jangan berpikir terlalu rumit seolah sedang mengerjakan ujian akademis.',
        'Hindari memilih jawaban hanya untuk menyenangkan atasan, orang tua, atau pasangan.',
        'Jangan terburu-buru; Anda dapat keluar kapan saja karena progres tersimpan otomatis di browser.'
      ]
    }
  ];

  const faqs = [
    {
      q: 'Berapa lama waktu yang dibutuhkan untuk menyelesaikan tes 100 soal ini?',
      a: 'Rata-rata pengguna menyelesaikan seluruh 100 pertanyaan dalam waktu 10 hingga 15 menit. Anda dapat mengerjakannya dengan santai karena sistem secara otomatis menyimpan jawaban setiap kali Anda memilih opsi.'
    },
    {
      q: 'Apakah tes ini benar-benar gratis dan tanpa registrasi?',
      a: 'Ya, 100% gratis tanpa biaya tersembunyi dan tanpa perlu mendaftar email atau akun. Anda dapat langsung mengklik tombol "Mulai Tes" dan melihat hasil lengkap seketika.'
    },
    {
      q: 'Apakah data jawaban dan hasil tes saya aman?',
      a: 'Sangat aman. Seluruh progres dan hasil tes diproses dan disimpan secara eksklusif di penyimpanan lokal (LocalStorage) browser Anda. Tidak ada data pribadi yang dikirim atau dijual ke server eksternal.'
    },
    {
      q: 'Bagaimana jika tab browser saya tidak sengaja tertutup saat tes sedang berlangsung?',
      a: 'Jangan khawatir! Jawaban Anda tersimpan otomatis. Cukup buka kembali situs ini, dan di halaman utama akan muncul banner "Lanjutkan Tes" beserta informasi nomor soal terakhir yang Anda jawab.'
    },
    {
      q: 'Apakah tipe kepribadian MBTI seseorang bisa berubah di kemudian hari?',
      a: 'Preferensi dasar manusia umumnya cukup stabil, namun hasil tes dapat sedikit bergeser seiring pertumbuhan usia, perubahan fase hidup, atau pengalaman krisis yang mendewasakan cara kita berpikir dan bersikap.'
    },
    {
      q: 'Apakah hasil tes ini bisa digunakan sebagai diagnosis medis atau psikologis klinis?',
      a: 'Tidak. SiapaSih? adalah instrumen inventori refleksi diri untuk memetakan kecenderungan preferensi komunikasi dan gaya hidup. Ini bukan alat diagnosis gangguan kejiwaan atau penilaian mutlak batas kemampuan manusia.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20 animate-fadeIn">
      {/* Top Banner Header */}
      <section className="bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-900 text-white pt-12 pb-16 sm:pt-16 sm:pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold backdrop-blur-md">
            <Cpu className="w-4 h-4 text-emerald-400" />
            <span>Metodologi & Transparansi Sistem</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Bagaimana Tes MBTI 100 Soal{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Bekerja & Dihitung?
            </span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed pt-1">
            Transparansi penuh mengenai cara pengumpulan respon, kalkulasi persentase spektrum, hingga pembentukan profil kepribadian 4 huruf Anda.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onStartQuiz}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all active:scale-95 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Mulai Pengerjaan Tes</span>
            </button>
            <a
              href="#step-by-step"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-semibold transition-colors"
            >
              <span>Pelajari 4 Tahapan</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 pt-10 sm:pt-14 pb-20 space-y-16">
        {/* Section: 4 Tahapan Utama */}
        <section id="step-by-step" className="space-y-6 scroll-mt-24">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
              Alur Pengolahan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Empat Tahap Dari Pertanyaan ke Hasil
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Sistem bekerja secara otomatis dan konsisten dari awal hingga akhir tanpa intervensi data acak.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row items-stretch hover:shadow-md transition-shadow"
              >
                {/* Step Number Vertical Rectangle (Persegi Panjang Vertikal dengan background berwarna) */}
                <div className={`shrink-0 w-full md:w-28 py-4 md:py-8 px-4 flex flex-row md:flex-col items-center justify-between md:justify-center gap-1.5 md:gap-2 ${st.rectBg} border-b md:border-b-0 md:border-r border-slate-200/80`}>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
                    Tahap
                  </span>
                  <span className="text-2xl md:text-4xl font-mono font-black tracking-tight">
                    {st.number}
                  </span>
                  <div className="hidden md:block w-6 h-0.5 rounded-full bg-current opacity-30 mt-1" />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 sm:p-7 space-y-3.5">
                  {/* Title & Badge Row (Badge dipindah ke sisi pojok kanan agar tidak dempet dengan judul) */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      {st.title}
                    </h3>
                    <span className={`shrink-0 inline-flex items-center self-start sm:self-center px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider ${st.badgeStyle}`}>
                      {st.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {st.desc}
                  </p>

                  <div className="pt-3 border-t border-slate-100">
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                      {st.details.map((d, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Tips Pengerjaan (Do & Don't) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
              Panduan Menjawab
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Petunjuk Agar Hasil Maksimal & Autentik
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Hasil tes mencerminkan kejujuran respon Anda. Simak tips sederhana berikut:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Do */}
            <div className="bg-white rounded-2xl border border-emerald-200 p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <ThumbsUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900">Yang Sangat Disarankan (DO)</h3>
                  <p className="text-xs text-slate-500">Membantu hasil merefleksikan diri asli Anda</p>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {tips[0].items.map((it, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Don't */}
            <div className="bg-white rounded-2xl border border-rose-200 p-6 sm:p-7 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                  <ThumbsDown className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-slate-900">Yang Perlu Dihindari (DON'T)</h3>
                  <p className="text-xs text-slate-500">Dapat membuat hasil menjadi bias</p>
                </div>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {tips[1].items.map((it, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✕</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Privasi & Keamanan */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">
                  Privasi 100% Terjaga di Browser Anda
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1 max-w-2xl">
                  Seluruh data pengerjaan, jawaban soal, dan hasil kepribadian disimpan langsung di penyimpanan lokal (LocalStorage) perangkat Anda. Kami tidak meminta nama lengkap, email, nomor HP, atau data pribadi lainnya.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                Tanpa Server Tracking
              </span>
            </div>
          </div>
        </section>

        {/* Section: Frequently Asked Questions (FAQ) */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
              Tanya Jawab
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Jawaban seputar teknis pengerjaan dan interpretasi hasil tes SiapaSih?.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-800 hover:text-indigo-600 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="p-1 rounded-lg bg-slate-100 text-slate-500 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA Card */}
        <section className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-center space-y-4 shadow-lg shadow-emerald-200">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Sudah Paham Caranya? Mari Mulai Tesnya!
          </h3>
          <p className="text-emerald-100 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            100 pertanyaan inventori kepribadian siap menanti Anda. Tidak perlu persiapan khusus, cukup luangkan 10-15 menit waktu santai Anda.
          </p>
          <div className="pt-2">
            <button
              onClick={onStartQuiz}
              className="px-8 py-3.5 rounded-xl bg-white text-emerald-800 font-bold text-sm hover:bg-emerald-50 shadow-md transition-all active:scale-95 cursor-pointer"
            >
              Mulai Tes MBTI (100 Soal)
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
