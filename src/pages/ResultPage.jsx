import React, { useState } from 'react';
import { 
  getPersonalityType, 
  PERSONALITY_GROUPS 
} from '../data/personalityTypes.js';
import DimensionBar from '../components/DimensionBar.jsx';
import ConfirmDialog from '../components/ConfirmDialog.jsx';
import Toast from '../components/Toast.jsx';
import { exportMbtiPdf } from '../utils/generatePdf.js';
import { 
  Sparkles, 
  Share2, 
  RotateCcw, 
  Home, 
  Copy, 
  Check, 
  Award, 
  TrendingUp, 
  MessageSquare, 
  Briefcase, 
  Compass, 
  CheckCircle2,
  Download,
  Eye,
  Lightbulb,
  FileText
} from 'lucide-react';

export default function ResultPage({
  result,
  onRetakeQuiz,
  onNavigateHome
}) {
  const [retakeConfirmOpen, setRetakeConfirmOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const [copied, setCopied] = useState(false);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);

  if (!result || !result.type) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <h2 className="text-xl font-bold text-slate-900 mb-2">Hasil Belum Tersedia</h2>
        <p className="text-sm text-slate-600 mb-6">
          Silakan selesaikan tes 100 pertanyaan terlebih dahulu untuk melihat hasil kepribadian.
        </p>
        <button
          onClick={onNavigateHome}
          className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 cursor-pointer"
        >
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  const profile = getPersonalityType(result.type);
  const groupMeta = PERSONALITY_GROUPS[profile.category] || PERSONALITY_GROUPS.ANALYSTS;

  // Format summary text for sharing or clipboard
  const generateShareText = () => {
    const ei = result.dimensions?.EI;
    const sn = result.dimensions?.SN;
    const tf = result.dimensions?.TF;
    const jp = result.dimensions?.JP;

    return `Hasil Tes Kepribadian MBTI SiapaSih?:\n` +
      `Tipe: ${result.type} - ${profile.name}\n` +
      `"${profile.tagline}"\n\n` +
      `Distribusi 4 Dimensi:\n` +
      `• E/I: ${ei?.poleA?.percent}% E vs ${ei?.poleB?.percent}% I\n` +
      `• S/N: ${sn?.poleA?.percent}% S vs ${sn?.poleB?.percent}% N\n` +
      `• T/F: ${tf?.poleA?.percent}% T vs ${tf?.poleB?.percent}% F\n` +
      `• J/P: ${jp?.poleA?.percent}% J vs ${jp?.poleB?.percent}% P\n\n` +
      `Ikuti tes MBTI 100 pertanyaan lengkap di SiapaSih?!`;
  };

  const handleShare = async () => {
    const shareText = generateShareText();

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Tipe MBTI Saya: ${result.type} (${profile.name})`,
          text: shareText
        });
        setToastMessage('Berhasil membuka menu berbagi!');
        setToastType('success');
        return;
      } catch (err) {
        if (err.name !== 'AbortError') {
          copyToClipboard(shareText);
        }
      }
    } else {
      copyToClipboard(shareText);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setToastMessage('Ringkasan hasil berhasil disalin ke clipboard!');
      setToastType('success');
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      setToastMessage('Gagal menyalin ke clipboard.');
      setToastType('error');
    });
  };

  // PDF Export Trigger
  const handleDownloadPdf = () => {
    try {
      setIsDownloadingPdf(true);
      exportMbtiPdf(result, profile);
      setToastMessage('Laporan PDF berhasil diunduh ke perangkat Anda!');
      setToastType('success');
    } catch (err) {
      console.error('Error generating PDF:', err);
      setToastMessage('Gagal membuat dokumen PDF. Silakan coba lagi.');
      setToastType('error');
    } finally {
      setIsDownloadingPdf(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12 space-y-10 animate-fadeIn">
      {/* Toast Feedback */}
      <Toast
        message={toastMessage}
        type={toastType}
        onClose={() => setToastMessage('')}
      />

      {/* Header Banner */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>Hasil Tes Kepribadian 100 Pertanyaan</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Profil Kepribadian Anda
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Dihitung berdasarkan 100 respons preferensi Anda • {new Date(result.calculatedAt || Date.now()).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </div>

      {/* Main Hero Result Card with Personality Group Color-Coding */}
      <div className={`bg-gradient-to-br ${groupMeta.lightGradient} via-white to-white rounded-2xl border ${groupMeta.cardBorder} shadow-sm p-6 sm:p-10 relative overflow-hidden transition-all`}>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-xl border ${groupMeta.badge}`}>
                {profile.groupName || profile.category}
              </span>
              <span className="text-xs font-medium text-slate-500">
                100 / 100 Soal Terjawab
              </span>
            </div>
            <div className="flex flex-wrap items-baseline gap-3 pt-1">
              <h2 className="text-4xl sm:text-6xl font-black font-mono tracking-tight text-slate-800">
                {result.type}
              </h2>
              <span className={`text-xl sm:text-2xl font-bold ${groupMeta.textColor}`}>
                — {profile.name}
              </span>
            </div>
            <p className="text-sm sm:text-base italic text-slate-600 max-w-2xl pt-1">
              "{profile.tagline}"
            </p>
          </div>

          {/* Action Buttons Top: Download PDF, Share, and Copy */}
          <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto shrink-0">
            {/* Download PDF Button */}
            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={isDownloadingPdf}
              className="flex-1 lg:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-2xs hover:shadow-xs active:scale-95 transition-all cursor-pointer"
              title="Unduh laporan lengkap dalam format PDF"
            >
              <Download className={`w-4 h-4 text-indigo-600 ${isDownloadingPdf ? 'animate-bounce' : ''}`} />
              <span>{isDownloadingPdf ? 'Membuat PDF...' : 'Unduh PDF'}</span>
            </button>

            {/* Share Button */}
            <button
              type="button"
              onClick={handleShare}
              className={`flex-1 lg:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white ${groupMeta.primaryButton} active:scale-95 transition-all cursor-pointer`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
              <span>{copied ? 'Tersalin' : 'Bagikan Hasil'}</span>
            </button>

            {/* Copy Button */}
            <button
              type="button"
              onClick={() => copyToClipboard(generateShareText())}
              className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-800 transition-colors shadow-xs cursor-pointer"
              title="Salin ringkasan ke clipboard"
              aria-label="Salin ringkasan"
            >
              <Copy className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Narrative Description - Gamblang, Diperbanyak & Ramah Orang Awam */}
        <div className="pt-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Gambaran Karakter & Esensi Kepribadian
            </span>
          </div>

          {/* Paragraphs Overview */}
          {profile.overview && profile.overview.length > 0 ? (
            <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
              {profile.overview.map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>
          ) : (
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {profile.description}
            </p>
          )}

          {/* Callout Box: Di Mata Orang Sekitar */}
          {profile.howOthersSeeYou && (
            <div className="p-4 sm:p-5 rounded-xl bg-white/85 border border-slate-200/90 flex items-start gap-3.5 shadow-2xs mt-4">
              <div className={`p-2.5 rounded-xl ${groupMeta.iconBg} shrink-0 mt-0.5`}>
                <Eye className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                  Bagaimana Orang Lain Memandang Anda
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {profile.howOthersSeeYou}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 4 Dimension Visual Progress Bars (Stacked Sequentially Full-Width) */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1">
          <h2 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-2">
            <span>Distribusi Empat Dimensi Preferensi</span>
          </h2>
          <span className="text-xs text-slate-500">
            Dihitung dari 100 butir soal • Setiap sumbu bernilai total 100%
          </span>
        </div>

        {/* Friendly Explanation for Beginners */}
        <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex flex-col sm:flex-row items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
            <Compass className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-sm text-indigo-950">
              Cara Membaca Persentase Spektrum Ini
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Persentase di bawah bukan nilai ujian, melainkan ukuran kekuatan preferensi alami Anda. Misalnya jika Anda memperoleh 65% Ekstrovert (E) dan 35% Introvert (I), ini berarti Anda lebih nyaman mengisi energi melalui interaksi luar, namun Anda tetap memiliki 35% kebutuhan untuk hening dan refleksi diri.
            </p>
          </div>
        </div>

        {/* 4 Dimension Cards sequentially ordered top-to-bottom, spanning full width */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {result.dimensions?.EI && <DimensionBar dimensionData={result.dimensions.EI} />}
          {result.dimensions?.SN && <DimensionBar dimensionData={result.dimensions.SN} />}
          {result.dimensions?.TF && <DimensionBar dimensionData={result.dimensions.TF} />}
          {result.dimensions?.JP && <DimensionBar dimensionData={result.dimensions.JP} />}
        </div>
      </div>

      {/* Deep Personality Dimensions Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-800">Kekuatan Utama (Superpower)</h3>
              <p className="text-xs text-slate-500">Potensi alami yang menjadi modal keberhasilan Anda</p>
            </div>
          </div>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
            {profile.strengths?.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Growth Areas */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-800">Area Pengembangan Diri</h3>
              <p className="text-xs text-slate-500">Tantangan yang dapat ditingkatkan secara bertahap</p>
            </div>
          </div>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
            {profile.growthAreas?.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Communication Style */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm">
          <div className="flex items-center gap-2.5 mb-3">
            <div className={`w-8 h-8 rounded-xl ${groupMeta.iconBg} flex items-center justify-center font-bold`}>
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-800">Gaya Komunikasi & Interaksi</h3>
              <p className="text-xs text-slate-500">Bagaimana Anda menyampaikan pesan kepada orang lain</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {profile.communicationStyle}
          </p>
        </div>

        {/* Work & Learning Style */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm">
          <div className="flex items-center gap-2.5 mb-3">
            <div className={`w-8 h-8 rounded-xl ${groupMeta.iconBg} flex items-center justify-center font-bold`}>
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-800">Gaya Kerja & Rekomendasi Karier</h3>
              <p className="text-xs text-slate-500">Lingkungan yang mendukung produktivitas optimal</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            {profile.workStyle}
          </p>
          {profile.careerPaths && profile.careerPaths.length > 0 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Contoh Bidang yang Selaras:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {profile.careerPaths.map((career, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
                  >
                    {career}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* NEW CARD: Tips Praktis Keseharian untuk Orang Awam */}
        {profile.dailyTips && profile.dailyTips.length > 0 && (
          <div className="md:col-span-2 bg-gradient-to-r from-indigo-50/70 via-white to-purple-50/70 rounded-2xl border border-indigo-100 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shadow-xs">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900">
                  Tips Praktis Keseharian untuk Tipe {profile.code}
                </h3>
                <p className="text-xs text-slate-500">
                  3 Langkah sederhana yang bisa langsung Anda praktekkan mulai hari ini
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              {profile.dailyTips.map((tip, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wide">
                      Aksi #{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-200">
        <div>
          <h4 className="font-bold text-sm text-slate-900">Simpan atau Ulangi Tes</h4>
          <p className="text-xs text-slate-500">
            Anda dapat mengunduh dokumen laporan PDF atau mengulang tes dari soal pertama.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          {/* Download PDF button bottom */}
          <button
            type="button"
            onClick={handleDownloadPdf}
            disabled={isDownloadingPdf}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 shadow-xs cursor-pointer"
          >
            <Download className="w-4 h-4 text-indigo-600" />
            <span>{isDownloadingPdf ? 'Mengunduh...' : 'Unduh PDF'}</span>
          </button>

          <button
            type="button"
            onClick={onNavigateHome}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 shadow-xs cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Beranda</span>
          </button>
          
          <button
            type="button"
            onClick={() => setRetakeConfirmOpen(true)}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm shadow-indigo-200 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Tes Ulang</span>
          </button>
        </div>
      </div>

      {/* Retake Confirmation Dialog */}
      <ConfirmDialog
        isOpen={retakeConfirmOpen}
        title="Ulangi Tes dari Awal?"
        message="Sesi jawaban saat ini akan di-reset dan Anda akan mulai mengerjakan 100 pertanyaan dari nomor 1. Skor lama tidak akan mempengaruhi sesi baru."
        confirmLabel="Ya, Mulai Ulang"
        cancelLabel="Batal"
        onConfirm={() => {
          setRetakeConfirmOpen(false);
          onRetakeQuiz();
        }}
        onCancel={() => setRetakeConfirmOpen(false)}
      />
    </div>
  );
}
