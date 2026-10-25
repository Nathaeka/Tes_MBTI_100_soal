import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Brain, 
  Compass, 
  CheckCircle2, 
  XCircle, 
  Play, 
  ChevronRight, 
  ArrowRight, 
  Lightbulb, 
  HelpCircle,
  Eye,
  Zap,
  Users,
  Target,
  ShieldCheck,
  Layers
} from 'lucide-react';
import { PERSONALITY_TYPES, PERSONALITY_GROUPS } from '../data/personalityTypes.js';

export default function AboutMBTIPage({ onStartQuiz }) {
  const [activeDimensionTab, setActiveDimensionTab] = useState('EI');
  const [selectedTypeModal, setSelectedTypeModal] = useState(null);
  const [activeTemperament, setActiveTemperament] = useState('ANALYSTS');

  const dimensionTabs = [
    { id: 'EI', label: 'E vs I', name: 'Orientasi Energi', color: 'indigo' },
    { id: 'SN', label: 'S vs N', name: 'Pengolahan Informasi', color: 'violet' },
    { id: 'TF', label: 'T vs F', name: 'Pengambilan Keputusan', color: 'blue' },
    { id: 'JP', label: 'J vs P', name: 'Gaya Hidup & Kerja', color: 'emerald' }
  ];

  const dimensionDetails = {
    EI: {
      title: 'Orientasi Energi: Ekstrovert (E) vs Introvert (I)',
      subtitle: 'Dari mana Anda memperoleh dorongan energi mental dan ke mana perhatian Anda mengalir secara alami.',
      poleA: {
        code: 'E',
        name: 'Extraversion (Ekstrovert)',
        tagline: 'Energi mengalir dari aksi, interaksi dunia luar, dan orang sekitar.',
        traits: [
          'Mengisi ulang tenaga saat berkumpul dan bertukar cerita bersama orang lain',
          'Berpikir sambil berbicara (talk-to-think); ide berkembang saat diutarakan',
          'Nyaman dalam kelompok besar dan cepat memulai kenalan baru',
          'Cenderung ekspresif, spontan, dan antusias membagikan pengalaman'
        ],
        scenario: 'Saat menghadapi hari yang melelahkan di kantor atau kampus, mereka merasa segar kembali jika diajak makan malam atau nongkrong seru bersama teman-teman.',
        workplace: 'Unggul dalam presentasi publik, koordinasi tim lintas divisi, dan situasi kerja yang dinamis serta kolaboratif.'
      },
      poleB: {
        code: 'I',
        name: 'Introversion (Introvert)',
        tagline: 'Energi mengalir dari keheningan batin, refleksi mandiri, dan ruang personal.',
        traits: [
          'Mengisi ulang tenaga saat berada dalam kesendirian yang tenang',
          'Berpikir matang sebelum berbicara (think-to-talk); mengartikulasikan ide secara terstruktur',
          'Lebih menyukai percakapan mendalam empat mata (deep talk) dibanding basa-basi ramai',
          'Menjaga lingkaran pertemanan yang selektif namun erat dan bermakna'
        ],
        scenario: 'Setelah seharian menghadiri rapat padat atau acara pesta, mereka butuh waktu hening tanpa diganggu (membaca, mendengarkan musik, me-time) untuk mengisi ulang baterai sosial.',
        workplace: 'Unggul dalam riset independen, analisis mendalam (deep work), pemecahan masalah rumit, dan mendengarkan kebutuhan tim dengan empatik.'
      },
      takeaway: 'Ini bukan tentang siapa yang pemalu atau percaya diri, melainkan tentang mekanisme biologis ke mana baterai psikologis Anda diisi ulang.'
    },

    SN: {
      title: 'Pengolahan Informasi: Sensorik (S) vs Intuisi (N)',
      subtitle: 'Jenis informasi apa yang secara naluriah pertama kali diperhatikan, diserap, dan dipercayai oleh otak Anda.',
      poleA: {
        code: 'S',
        name: 'Sensing (Sensorik / Faktual)',
        tagline: 'Fokus pada realitas nyata di depan mata, fakta panca indra, dan detail konkret.',
        traits: [
          'Berpijak di dunia nyata (down-to-earth) dan menghargai kepraktisan',
          'Mempercayai data terukur, bukti visual, dan pengalaman masa lalu yang telah teruji',
          'Menyukai instruksi runtut langkah demi langkah (step-by-step)',
          'Sangat teliti memperhatikan perubahan detail lingkungan dan fisik'
        ],
        scenario: 'Ketika membaca resep masakan atau buku instruksi perabot, tipe Sensorik akan membacanya secara runtut dan menakar bahan dengan teliti sesuai angka gram yang tertulis.',
        workplace: 'Sangat andal dalam manajemen operasional, akuntansi, penegakan prosedur standar (SOP), dan eksekusi teknis yang membutuhkan akurasi tinggi.'
      },
      poleB: {
        code: 'N',
        name: 'Intuition (Intuisi / Visioner)',
        tagline: 'Fokus pada pola tersembunyi, kemungkinan masa depan, dan gambaran besar.',
        traits: [
          'Gemar membaca makna tersirat, metafora puitis, dan analogi kreatif',
          'Tertarik pada teori filosofis, inovasi masa depan, dan pertanyaan "bagaimana jika..."',
          'Melihat keseluruhan pola (big picture) daripada terpaku pada satu detail kecil',
          'Mudah bosan jika harus mengerjakan rutinitas mekanis yang sama berulang kali'
        ],
        scenario: 'Ketika merakit barang baru, tipe Intuisi cenderung meletakkan buku manual dan langsung menebak sambungannya dengan menghubungkan pola bentuk secara instingtif.',
        workplace: 'Sangat menonjol dalam perancangan strategi jangka panjang, inovasi produk baru, penulisan kreatif, dan menghubungkan tren lintas industri.'
      },
      takeaway: 'Sensing melihat pohon-pohon individual secara detail di hadapannya, sedangkan Intuisi melihat keseluruhan bentang hutan dan ke mana arah pertumbuhannya.'
    },

    TF: {
      title: 'Pengambilan Keputusan: Pemikir (T) vs Perasa (F)',
      subtitle: 'Kompas utama yang Anda gunakan saat harus menimbang pilihan sulit dan menyelesaikan permasalahan.',
      poleA: {
        code: 'T',
        name: 'Thinking (Pemikir / Logis)',
        tagline: 'Membuat keputusan berbasis logika objektif, konsistensi aturan, dan analisis sistem.',
        traits: [
          'Mampu memisahkan emosi subjektif untuk membedah akar permasalahan secara netral',
          'Menjunjung tinggi keadilan yang setara bagi semua orang tanpa pilih kasih',
          'Komunikasi lugas, to the point, dan menghargai argumen yang konsisten secara nalar',
          'Berorientasi pada efisiensi solusi praktis (problem-solving)'
        ],
        scenario: 'Saat ada teman curhat mengalami kendala kerja, respon pertama tipe Pemikir adalah langsung menganalisis urutan kejadian secara objektif untuk memberikan solusi paling efektif.',
        workplace: 'Unggul dalam audit keuangan, negosiasi kontrak korporasi, pemrograman perangkat lunak, dan kepemimpinan saat terjadi krisis yang membutuhkan kepala dingin.'
      },
      poleB: {
        code: 'F',
        name: 'Feeling (Perasa / Empatis)',
        tagline: 'Membuat keputusan berbasis nilai moral kemanusiaan, empati batin, dan harmoni relasi.',
        traits: [
          'Mempertimbangkan bagaimana dampak suatu keputusan terhadap perasaan orang yang terlibat',
          'Berusaha menciptakan suasana damai, suportif, dan minim konflik antarindividu',
          'Komunikasi hangat, diplomatis, dan peka membaca suasana hati lawan bicara',
          'Berorientasi pada pemulihan emosional dan pembinaan keharmonisan kelompok'
        ],
        scenario: 'Saat ada teman curhat menangis, respon pertama tipe Perasa adalah mendengarkan dengan penuh kasih sayang, merangkul pundaknya, dan memvalidasi perasaannya terlebih dahulu.',
        workplace: 'Unggul dalam konseling psikologis, resolusi konflik sumber daya manusia (HR), mediasi sosial, pengajaran inspiratif, dan pembinaan komunitas.'
      },
      takeaway: 'Thinking bertanya: "Apakah keputusan ini masuk akal, logis, dan adil?", sedangkan Feeling bertanya: "Bagaimana keputusan ini mempengaruhi orang lain dan apakah selaras dengan nurani?".'
    },

    JP: {
      title: 'Pola Hidup & Kerja: Terencana (J) vs Fleksibel (P)',
      subtitle: 'Bagaimana Anda mengatur keseharian, menyikapi tenggat waktu (deadline), dan merespons perubahan rencana.',
      poleA: {
        code: 'J',
        name: 'Judging (Terencana / Terstruktur)',
        tagline: 'Menyukai kepastian (closure), jadwal teratur, dan menyelesaikan tugas lebih awal.',
        traits: [
          'Merasa tenang ketika rencana hari ini tersusun rapi dalam to-do list',
          'Tidak nyaman jika urusan penting dibiarkan menggantung tanpa kejelasan',
          'Menyicil pekerjaan dari jauh-jauh hari agar tidak panik menjelang deadline',
          'Sangat menghargai ketepatan waktu, komitmen janji, dan keteraturan ruang'
        ],
        scenario: 'Saat merencanakan liburan akhir tahun, mereka sudah memesan tiket pesawat, hotel, dan membuat jadwal itinerary per jam beberapa minggu sebelumnya.',
        workplace: 'Unggul dalam manajemen proyek terikat jadwal, kepatuhan tenggat waktu (deadline), pengorganisasian acara berskala besar, dan administrasi tertib.'
      },
      poleB: {
        code: 'P',
        name: 'Perceiving (Fleksibel / Adaptif)',
        tagline: 'Menyukai keterbukaan opsi, spontanitas petualangan, dan membiarkan hidup mengalir.',
        traits: [
          'Merasa terkekang jika seluruh jadwal dikunci mati tanpa ruang improvisasi',
          'Sangat adaptif dan tanggap menyesuaikan diri jika terjadi perubahan rencana mendadak',
          'Bekerja dengan ledakan energi spontan; inspirasi ajaib sering muncul saat mendekati batas akhir',
          'Senang mengeksplorasi berbagai alternatif baru sebelum mengunci keputusan'
        ],
        scenario: 'Saat liburan, mereka membeli tiket secara spontan, berangkat membawa ransel, dan baru mencari penginapan setelah tiba di stasiun kota tujuan.',
        workplace: 'Unggul dalam tanggap darurat, pekerjaan kreatif bebas, penyesuaian strategi di lapangan dinamis, dan pemecahan krisis tak terduga.'
      },
      takeaway: 'Judging menyukai kepastian dan menuntaskan rencana lebih cepat agar pikiran tenang, sedangkan Perceiving menyukai fleksibilitas agar opsi terbaik tetap terbuka.'
    }
  };

  const mythsAndFacts = [
    {
      myth: 'MBTI menentukan batas kemampuan atau bakat intelijensi seseorang.',
      fact: 'MBTI hanya memetakan preferensi kenyamanan alami, bukan kompetensi atau IQ. Orang dengan tipe apa pun bisa sukses di bidang profesi mana pun dengan latihan dan dedikasi.',
      icon: Target
    },
    {
      myth: 'Introvert pasti pemalu dan tidak memiliki jiwa kepemimpinan.',
      fact: 'Introversion berkaitan dengan cara mengisi ulang energi (internal), bukan kecemasan sosial. Banyak pemimpin visioner dunia adalah introvert (seperti Abraham Lincoln, Bill Gates, dan Eleanor Roosevelt).',
      icon: Users
    },
    {
      myth: 'Tipe Thinking tidak punya perasaan dan tipe Feeling tidak bisa berpikir logis.',
      fact: 'Semua manusia memiliki nalar dan emosi. Perbedaannya hanya pada kompas pertama yang diprioritaskan saat menimbang keputusan: logika objektif atau nilai empati kemanusiaan.',
      icon: Brain
    },
    {
      myth: 'Ada tipe kepribadian yang lebih unggul atau lebih sempurna dibanding yang lain.',
      fact: 'Setiap dari 16 tipe MBTI memiliki kekuatan luhur sekaligus titik buta alami. Kunci kematangan emosional adalah mengenali kekuatan diri dan menghormati perspektif tipe lain.',
      icon: ShieldCheck
    }
  ];

  const currentDim = dimensionDetails[activeDimensionTab];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20 animate-fadeIn">
      {/* Top Banner Header */}
      <section className="bg-gradient-to-b from-indigo-900 via-slate-900 to-slate-900 text-white pt-12 pb-16 sm:pt-16 sm:pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold backdrop-blur-md">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span>Ensiklopedi & Panduan Lengkap</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Mengenal Teori & 4 Dimensi{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              Kepribadian MBTI
            </span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed pt-1">
            Pelajari konsep ilmiah di balik preferensi psikologis manusia. Pahami bagaimana energi, persepsi, pertimbangan, dan pola hidup Anda saling terhubung tanpa menghakimi.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onStartQuiz}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all active:scale-95 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Ikuti Tes 100 Soal Sekarang</span>
            </button>
            <a
              href="#interactive-dimensions"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-semibold transition-colors"
            >
              <span>Eksplorasi 4 Dimensi</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 pt-10 sm:pt-14 pb-20 space-y-16">
        {/* Section 1: Pengantar Teori & Sejarah Singkat */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-sm space-y-4">
          <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Dari Mana Asal Usul Teori MBTI?
              </h2>
              <p className="text-xs text-slate-500">
                Fondasi Psikologi Analitis Carl Gustav Jung (1921)
              </p>
            </div>
          </div>
          <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
            <p>
              MBTI (<em>Myers-Briggs Type Indicator</em>) dikembangkan oleh psikolog ibu dan anak, <strong>Katharine Cook Briggs</strong> dan <strong>Isabel Briggs Myers</strong>, berdasarkan penelitian kepribadian psikiater Swiss kenamaan, <strong>Carl Gustav Jung</strong> dalam bukunya <em>Psychological Types</em> (1921).
            </p>
            <p>
              Prinsip fundamental dari teori ini adalah: <strong>perilaku manusia yang tampak acak sebenarnya sangat teratur dan konsisten</strong> karena dipicu oleh perbedaan mendasar dalam cara seseorang menggunakan persepsi (menangkap informasi) dan pertimbangan (mengambil keputusan). MBTI tidak menilai kecerdasan atau moralitas, melainkan memetakan kecenderungan kenyamanan alami manusia.
            </p>
          </div>
        </div>

        {/* Section 2: Interactive Dimension Explorer */}
        <section id="interactive-dimensions" className="space-y-6 scroll-mt-24">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
              Eksplorasi Mendalam
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Empat Dimensi Spektrum MBTI
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Klik pada masing-masing dimensi di bawah untuk melihat perbedaan karakter, kebiasaan kerja, dan respon dalam situasi nyata.
            </p>
          </div>

          {/* Dimension Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-200/60 rounded-2xl max-w-2xl mx-auto">
            {dimensionTabs.map(tab => {
              const isActive = activeDimensionTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveDimensionTab(tab.id)}
                  className={`flex-1 min-w-[120px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
                    isActive
                      ? 'bg-white text-indigo-700 shadow-sm border border-slate-200/60 scale-[1.02]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <span className="font-mono text-sm">{tab.label}</span>
                  <span className="text-[11px] font-normal opacity-80">{tab.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Dimension Interactive Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-sm space-y-6">
            <div className="pb-3 border-b border-slate-100">
              <span className="text-xs font-bold font-mono px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200">
                Dimensi Aktif: {activeDimensionTab}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                {currentDim.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {currentDim.subtitle}
              </p>
            </div>

            {/* Side-by-side Poles with Rich Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pole A */}
              <div className="p-5 sm:p-6 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-mono font-black text-sm flex items-center justify-center shadow-xs">
                    {currentDim.poleA.code}
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-slate-900">{currentDim.poleA.name}</h4>
                    <p className="text-xs text-indigo-700 italic">{currentDim.poleA.tagline}</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <span className="font-bold text-slate-900 text-xs uppercase tracking-wider block">Karakteristik Utama:</span>
                  <ul className="space-y-1.5">
                    {currentDim.poleA.traits.map((t, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-indigo-100 space-y-1 text-xs">
                  <span className="font-bold text-indigo-900 block">Contoh Situasi Nyata:</span>
                  <p className="text-slate-600 leading-relaxed">{currentDim.poleA.scenario}</p>
                </div>

                <div className="text-xs text-slate-600">
                  <strong className="text-slate-800">Di Lingkungan Kerja:</strong> {currentDim.poleA.workplace}
                </div>
              </div>

              {/* Pole B */}
              <div className="p-5 sm:p-6 rounded-2xl bg-violet-50/60 border border-violet-100 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-violet-600 text-white font-mono font-black text-sm flex items-center justify-center shadow-xs">
                    {currentDim.poleB.code}
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-slate-900">{currentDim.poleB.name}</h4>
                    <p className="text-xs text-violet-700 italic">{currentDim.poleB.tagline}</p>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <span className="font-bold text-slate-900 text-xs uppercase tracking-wider block">Karakteristik Utama:</span>
                  <ul className="space-y-1.5">
                    {currentDim.poleB.traits.map((t, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-violet-100 space-y-1 text-xs">
                  <span className="font-bold text-violet-900 block">Contoh Situasi Nyata:</span>
                  <p className="text-slate-600 leading-relaxed">{currentDim.poleB.scenario}</p>
                </div>

                <div className="text-xs text-slate-600">
                  <strong className="text-slate-800">Di Lingkungan Kerja:</strong> {currentDim.poleB.workplace}
                </div>
              </div>
            </div>

            {/* Takeaway Notice */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900">Intisari Dimensi:</strong> {currentDim.takeaway}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Empat Rumpun Temperamen Kepribadian */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200">
              Kategori Temperamen
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Empat Rumpun MBTI
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              16 tipe kepribadian terbagi ke dalam 4 rumpun besar yang memiliki dorongan motivasi serupa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(PERSONALITY_GROUPS).map(([key, group]) => {
              const typesInGroup = Object.values(PERSONALITY_TYPES).filter(t => t.category === key);
              const isSelected = activeTemperament === key;

              return (
                <div
                  key={key}
                  onClick={() => setActiveTemperament(key)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? `bg-white ${group.cardBorder} ring-2 ring-indigo-400 shadow-md`
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${group.badge}`}>
                    {group.title}
                  </span>
                  <h4 className="font-bold text-base text-slate-900 mt-2.5">
                    {group.name}
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {typesInGroup.map(t => (
                      <span
                        key={t.code}
                        className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-slate-100 text-slate-700"
                      >
                        {t.code}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 4: Grid 16 Tipe Kepribadian Lengkap */}
        <section className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              Katalog Tipe
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Eksplorasi 16 Tipe Kepribadian
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Klik pada salah satu tipe kepribadian di bawah ini untuk melihat ringkasan karakter dan mottonya.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {Object.values(PERSONALITY_TYPES).map(type => {
              const group = PERSONALITY_GROUPS[type.category] || PERSONALITY_GROUPS.ANALYSTS;
              return (
                <button
                  key={type.code}
                  type="button"
                  onClick={() => setSelectedTypeModal(type)}
                  className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all text-left group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono font-black text-lg sm:text-xl text-slate-800 group-hover:text-indigo-600 transition-colors">
                      {type.code}
                    </span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${group.badge}`}>
                      {group.title}
                    </span>
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 line-clamp-1">
                    {type.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">
                    {type.tagline}
                  </p>
                  <span className="text-[11px] font-semibold text-indigo-600 mt-2 inline-flex items-center gap-1 group-hover:underline">
                    Lihat Profil <ChevronRight className="w-3 h-3" />
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Section 5: Mitos vs Fakta MBTI */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-9 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Mitos vs Fakta Seputar MBTI
              </h3>
              <p className="text-xs text-slate-500">
                Gunakan hasil tes secara bijak untuk refleksi diri, bukan melabeli orang lain.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mythsAndFacts.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs sm:text-sm">
                  <div className="flex items-start gap-2 text-rose-700 font-semibold">
                    <XCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>Mitos: "{item.myth}"</span>
                  </div>
                  <div className="flex items-start gap-2 text-emerald-800 font-medium pt-1">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                    <span>Fakta: {item.fact}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA to start test */}
        <section className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-center space-y-4 shadow-lg shadow-indigo-200">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Penasaran Seperti Apa Tipe Kepribadian Anda?
          </h3>
          <p className="text-indigo-100 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Ikuti tes MBTI 100 pertanyaan inventori preferensi di SiapaSih?. Gratis, cepat, tanpa login, dan hasil dihitung dinamis.
          </p>
          <div className="pt-2">
            <button
              onClick={onStartQuiz}
              className="px-8 py-3.5 rounded-xl bg-white text-indigo-700 font-bold text-sm hover:bg-indigo-50 shadow-md transition-all active:scale-95 cursor-pointer"
            >
              Mulai Tes 100 Pertanyaan
            </button>
          </div>
        </section>
      </main>

      {/* Modal Profile Preview for 16 Types */}
      {selectedTypeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-fadeIn">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 sm:p-8 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="font-mono text-3xl font-black text-indigo-600">
                  {selectedTypeModal.code}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  {selectedTypeModal.name}
                </h3>
                <p className="text-xs text-slate-500 italic mt-0.5">
                  "{selectedTypeModal.tagline}"
                </p>
              </div>
              <button
                onClick={() => setSelectedTypeModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            </div>

            <div className="text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3.5">
              {selectedTypeModal.overview && selectedTypeModal.overview.length > 0 ? (
                <div className="space-y-2 text-slate-700">
                  {selectedTypeModal.overview.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>
              ) : (
                <p>{selectedTypeModal.description}</p>
              )}

              {selectedTypeModal.howOthersSeeYou && (
                <div className="p-3.5 rounded-xl bg-indigo-50/80 border border-indigo-100 text-xs text-indigo-900">
                  <strong className="block font-bold mb-1">Di Mata Orang Sekitar:</strong>
                  <span>{selectedTypeModal.howOthersSeeYou}</span>
                </div>
              )}

              <div>
                <strong className="text-slate-900 text-xs uppercase tracking-wider block mb-1.5">
                  Kekuatan Utama:
                </strong>
                <ul className="space-y-1.5">
                  {selectedTypeModal.strengths?.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <strong className="text-slate-900 text-xs uppercase tracking-wider block mb-1.5">
                  Gaya Komunikasi:
                </strong>
                <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {selectedTypeModal.communicationStyle}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setSelectedTypeModal(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-white text-xs font-semibold hover:bg-slate-900 cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
