import React, { useState, useMemo, useRef } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  Upload, 
  RotateCcw, 
  Edit3, 
  Trash2, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle,
  HelpCircle,
  X,
  FileJson,
  Layers,
  ArrowLeft
} from 'lucide-react';
import ConfirmDialog from '../components/ConfirmDialog.jsx';
import Toast from '../components/Toast.jsx';
import { 
  validateQuestion, 
  validateQuestionList, 
  normalizeQuestion,
  VALID_POLES,
  inferDimensionPair
} from '../utils/questionAdapter.js';
import { DIMENSION_INFO } from '../utils/scoring.js';

export default function AdminPage({
  questions,
  onSaveQuestions,
  onResetQuestionsToDefault,
  onBackToHome
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [dimensionFilter, setDimensionFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');

  // Modal states
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null); // null if adding new
  const [questionFormData, setQuestionFormData] = useState({
    id: '',
    question: '',
    dimension: 'EI',
    optAText: '',
    optAPole: 'E',
    optBText: '',
    optBPole: 'I',
    isActive: true
  });
  const [formErrors, setFormErrors] = useState([]);

  // Confirm delete dialog
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [questionToDelete, setQuestionToDelete] = useState(null);

  // Confirm reset to default
  const [resetConfirmOpen, setResetConfirmOpen] = useState(false);

  // Import modal
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [importPreview, setImportPreview] = useState(null);
  const fileInputRef = useRef(null);

  // Toast
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');

  // Audit current questions
  const audit = useMemo(() => {
    return validateQuestionList(questions || []);
  }, [questions]);

  // Filtered questions
  const filteredQuestions = useMemo(() => {
    return (questions || []).filter(q => {
      // Search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesQ = q.question.toLowerCase().includes(query);
        const matchesOpts = q.options?.some(opt => opt.text.toLowerCase().includes(query));
        const matchesId = String(q.id).includes(query);
        if (!matchesQ && !matchesOpts && !matchesId) return false;
      }

      // Dimension filter
      if (dimensionFilter !== 'ALL' && q.dimension !== dimensionFilter) {
        return false;
      }

      // Status filter
      if (statusFilter === 'ACTIVE' && q.isActive === false) return false;
      if (statusFilter === 'INACTIVE' && q.isActive !== false) return false;

      return true;
    });
  }, [questions, searchQuery, dimensionFilter, statusFilter]);

  // Open Add Question Form
  const handleOpenAddModal = () => {
    const nextId = (questions && questions.length > 0)
      ? Math.max(...questions.map(q => Number(q.id) || 0)) + 1
      : 1;

    setEditingQuestion(null);
    setQuestionFormData({
      id: nextId,
      question: '',
      dimension: 'EI',
      optAText: '',
      optAPole: 'E',
      optBText: '',
      optBPole: 'I',
      isActive: true
    });
    setFormErrors([]);
    setIsEditModalOpen(true);
  };

  // Open Edit Question Form
  const handleOpenEditModal = (q) => {
    const optA = q.options?.[0] || { text: '', dimension: 'E' };
    const optB = q.options?.[1] || { text: '', dimension: 'I' };

    setEditingQuestion(q);
    setQuestionFormData({
      id: q.id,
      question: q.question,
      dimension: q.dimension || inferDimensionPair(optA.dimension, optB.dimension),
      optAText: optA.text,
      optAPole: optA.dimension,
      optBText: optB.text,
      optBPole: optB.dimension,
      isActive: q.isActive !== false
    });
    setFormErrors([]);
    setIsEditModalOpen(true);
  };

  // Handle Dimension Pair change in Form
  const handleDimensionPairChange = (pair) => {
    let poleA = 'E';
    let poleB = 'I';
    if (pair === 'SN') { poleA = 'S'; poleB = 'N'; }
    else if (pair === 'TF') { poleA = 'T'; poleB = 'F'; }
    else if (pair === 'JP') { poleA = 'J'; poleB = 'P'; }

    setQuestionFormData(prev => ({
      ...prev,
      dimension: pair,
      optAPole: poleA,
      optBPole: poleB
    }));
  };

  // Save Add/Edit Question
  const handleSaveQuestionForm = (e) => {
    e.preventDefault();

    const normalized = normalizeQuestion({
      id: Number(questionFormData.id),
      question: questionFormData.question,
      dimension: questionFormData.dimension,
      options: [
        { id: 'A', text: questionFormData.optAText, dimension: questionFormData.optAPole },
        { id: 'B', text: questionFormData.optBText, dimension: questionFormData.optBPole }
      ],
      isActive: questionFormData.isActive
    });

    const validation = validateQuestion(normalized);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    let updatedList = [...(questions || [])];

    if (editingQuestion) {
      // Edit existing
      updatedList = updatedList.map(q => q.id === editingQuestion.id ? normalized : q);
      setToastMessage(`Pertanyaan #${normalized.id} berhasil diperbarui!`);
    } else {
      // Add new: verify ID uniqueness
      if (updatedList.some(q => q.id === normalized.id)) {
        setFormErrors([`ID #${normalized.id} sudah digunakan oleh pertanyaan lain. Pilih ID lain.`]);
        return;
      }
      updatedList.push(normalized);
      // Sort by ID
      updatedList.sort((a, b) => a.id - b.id);
      setToastMessage(`Pertanyaan #${normalized.id} berhasil ditambahkan!`);
    }

    onSaveQuestions(updatedList);
    setToastType('success');
    setIsEditModalOpen(false);
  };

  // Toggle Active Status
  const handleToggleActive = (qId) => {
    const updated = (questions || []).map(q => {
      if (q.id === qId) {
        return { ...q, isActive: !q.isActive };
      }
      return q;
    });
    onSaveQuestions(updated);
    setToastMessage(`Status pertanyaan #${qId} diperbarui.`);
    setToastType('success');
  };

  // Delete Question
  const handleDeleteQuestion = () => {
    if (!questionToDelete) return;
    const updated = (questions || []).filter(q => q.id !== questionToDelete.id);
    onSaveQuestions(updated);
    setToastMessage(`Pertanyaan #${questionToDelete.id} berhasil dihapus.`);
    setToastType('success');
    setDeleteConfirmOpen(false);
    setQuestionToDelete(null);
  };

  // Export questions to JSON
  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(questions, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `siapasih-mbti-${questions.length}-pertanyaan.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();

    setToastMessage('File pertanyaan JSON berhasil diunduh!');
    setToastType('success');
  };

  // Handle File Input for Import
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const rawJson = JSON.parse(event.target.result);
        const auditResult = validateQuestionList(rawJson);
        setImportPreview(auditResult);
        setIsImportModalOpen(true);
      } catch (err) {
        setToastMessage(`Gagal membaca file JSON: ${err.message}`);
        setToastType('error');
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset input
  };

  // Apply Import
  const handleApplyImport = (mode = 'replace') => {
    if (!importPreview) return;

    if (mode === 'replace') {
      onSaveQuestions(importPreview.normalized);
      setToastMessage(`${importPreview.totalCount} pertanyaan berhasil diimpor (menggantikan data lama).`);
    } else {
      // Merge / Append
      const existingIds = new Set((questions || []).map(q => q.id));
      const newItems = importPreview.normalized.filter(q => !existingIds.has(q.id));
      const merged = [...(questions || []), ...newItems].sort((a, b) => a.id - b.id);
      onSaveQuestions(merged);
      setToastMessage(`${newItems.length} pertanyaan baru berhasil digabungkan.`);
    }

    setToastType('success');
    setIsImportModalOpen(false);
    setImportPreview(null);
  };

  // Reset to Pristine 100 Questions
  const handleResetToDefault = () => {
    onResetQuestionsToDefault();
    setToastMessage('Data pertanyaan berhasil dikembalikan ke 100 soal standar!');
    setToastType('success');
    setResetConfirmOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 animate-fadeIn">
      {/* Toast Feedback */}
      <Toast
        message={toastMessage}
        type={toastType}
        onClose={() => setToastMessage('')}
      />

      {/* Header and Back Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 mb-2 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Beranda</span>
          </button>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Panel Pengelolaan Pertanyaan (CRUD)
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Kelola butir soal, sesuaikan opsi jawaban, dan audit pemetaan 4 dimensi MBTI secara langsung.
          </p>
        </div>

        {/* Global Dataset Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".json,application/json"
            className="hidden"
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs"
            title="Import file JSON pertanyaan"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Import JSON</span>
          </button>

          <button
            type="button"
            onClick={handleExportJSON}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs"
            title="Unduh seluruh pertanyaan saat ini sebagai JSON"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export JSON</span>
          </button>

          <button
            type="button"
            onClick={() => setResetConfirmOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 shadow-xs"
            title="Pulihkan kembali ke 100 pertanyaan standar"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset ke 100 Soal Bawaan</span>
          </button>

          <button
            type="button"
            onClick={handleOpenAddModal}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm shadow-indigo-200"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Soal</span>
          </button>
        </div>
      </div>

      {/* Data Health & Dimension Statistics Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Total Pertanyaan</span>
          <span className="text-2xl font-black font-mono text-slate-900 mt-1 block">
            {audit.totalCount}
          </span>
          <span className="text-[10px] text-slate-400 mt-0.5 block">
            {audit.totalCount === 100 ? '✓ Sesuai standar 100 soal' : `${audit.totalCount} terdaftar`}
          </span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Soal Aktif</span>
          <span className="text-2xl font-black font-mono text-emerald-600 mt-1 block">
            {audit.activeCount}
          </span>
          <span className="text-[10px] text-slate-400 mt-0.5 block">Digunakan dalam tes</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Dimensi E vs I</span>
          <span className="text-2xl font-black font-mono text-indigo-600 mt-1 block">
            {audit.dimensionDistribution.EI}
          </span>
          <span className="text-[10px] text-slate-400 mt-0.5 block">Orientasi Energi</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Dimensi S vs N</span>
          <span className="text-2xl font-black font-mono text-violet-600 mt-1 block">
            {audit.dimensionDistribution.SN}
          </span>
          <span className="text-[10px] text-slate-400 mt-0.5 block">Informasi & Fakta</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Dimensi T vs F</span>
          <span className="text-2xl font-black font-mono text-blue-600 mt-1 block">
            {audit.dimensionDistribution.TF}
          </span>
          <span className="text-[10px] text-slate-400 mt-0.5 block">Keputusan Logis/Hati</span>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Dimensi J vs P</span>
          <span className="text-2xl font-black font-mono text-emerald-600 mt-1 block">
            {audit.dimensionDistribution.JP}
          </span>
          <span className="text-[10px] text-slate-400 mt-0.5 block">Struktur & Fleksibel</span>
        </div>
      </div>

      {/* Validation Warnings / Errors if any */}
      {(!audit.isValid || audit.errors.length > 0 || audit.warnings.length > 0) && (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2">
          <div className="flex items-center gap-2 font-bold text-sm">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Pemberitahuan Audit Data Pertanyaan</span>
          </div>
          {audit.errors.map((err, idx) => (
            <p key={idx} className="text-xs text-rose-700 font-medium">❌ {err}</p>
          ))}
          {audit.warnings.map((warn, idx) => (
            <p key={idx} className="text-xs text-amber-800">⚠️ {warn}</p>
          ))}
        </div>
      )}

      {/* Search & Filter Toolbar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari ID, kata kunci pertanyaan, atau opsi jawaban..."
            className="w-full pl-9 pr-4 py-2 rounded-xl text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 bg-slate-50/50"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3">
          {/* Dimension Filter */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-slate-500 font-medium hidden sm:inline">Dimensi:</span>
            <select
              value={dimensionFilter}
              onChange={(e) => setDimensionFilter(e.target.value)}
              className="px-3 py-2 rounded-xl text-xs font-semibold border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            >
              <option value="ALL">Semua Dimensi</option>
              <option value="EI">E vs I (Energi)</option>
              <option value="SN">S vs N (Informasi)</option>
              <option value="TF">T vs F (Keputusan)</option>
              <option value="JP">J vs P (Gaya Hidup)</option>
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-slate-500 font-medium hidden sm:inline">Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 rounded-xl text-xs font-semibold border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            >
              <option value="ALL">Semua Status</option>
              <option value="ACTIVE">Aktif Saja</option>
              <option value="INACTIVE">Nonaktif Saja</option>
            </select>
          </div>
        </div>
      </div>

      {/* Questions Table / List */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/60">
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            Menampilkan {filteredQuestions.length} dari {questions.length} pertanyaan
          </div>
          <span className="text-xs text-slate-500">
            Perubahan otomatis tersimpan di LocalStorage
          </span>
        </div>

        {filteredQuestions.length === 0 ? (
          <div className="p-12 text-center text-slate-500">
            <p className="font-semibold text-slate-700">Tidak ada pertanyaan yang sesuai filter</p>
            <p className="text-xs text-slate-400 mt-1">Coba sesuaikan kata kunci pencarian atau reset filter.</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {filteredQuestions.map((q) => {
              const optA = q.options?.[0];
              const optB = q.options?.[1];

              return (
                <div 
                  key={q.id}
                  className={`p-4 sm:p-6 transition-colors hover:bg-slate-50/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                    q.isActive === false ? 'opacity-60 bg-slate-50/40' : ''
                  }`}
                >
                  {/* Left: ID & Question Text */}
                  <div className="space-y-2 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="w-8 h-6 rounded-md bg-slate-100 text-slate-700 font-mono font-bold text-xs flex items-center justify-center border border-slate-200">
                        #{q.id}
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-bold font-mono bg-indigo-50 text-indigo-700 border border-indigo-200">
                        {q.dimension}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold border ${
                          q.isActive !== false
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}
                      >
                        {q.isActive !== false ? 'Aktif' : 'Nonaktif'}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                      {q.question}
                    </p>

                    {/* Options Preview */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2">
                        <span className="font-mono font-bold text-indigo-700 bg-indigo-100 px-1.5 py-0.5 rounded text-[10px]">
                          [{optA?.dimension}]
                        </span>
                        <span className="text-slate-600 line-clamp-2">{optA?.text}</span>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2">
                        <span className="font-mono font-bold text-violet-700 bg-violet-100 px-1.5 py-0.5 rounded text-[10px]">
                          [{optB?.dimension}]
                        </span>
                        <span className="text-slate-600 line-clamp-2">{optB?.text}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions Right */}
                  <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                    <button
                      type="button"
                      onClick={() => handleToggleActive(q.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors border ${
                        q.isActive !== false
                          ? 'text-slate-600 hover:text-slate-900 border-slate-200 hover:bg-slate-100'
                          : 'text-emerald-700 bg-emerald-50 border-emerald-200 hover:bg-emerald-100'
                      }`}
                      title={q.isActive !== false ? 'Nonaktifkan sementara dari tes' : 'Aktifkan kembali untuk tes'}
                    >
                      {q.isActive !== false ? 'Nonaktifkan' : 'Aktifkan'}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleOpenEditModal(q)}
                      className="p-2 rounded-lg text-indigo-600 hover:bg-indigo-50 border border-indigo-200 transition-colors"
                      title="Edit pertanyaan"
                      aria-label="Edit pertanyaan"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setQuestionToDelete(q);
                        setDeleteConfirmOpen(true);
                      }}
                      className="p-2 rounded-lg text-rose-600 hover:bg-rose-50 border border-rose-200 transition-colors"
                      title="Hapus pertanyaan"
                      aria-label="Hapus pertanyaan"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Add / Edit Question Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-fadeIn">
          <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <h3 className="font-bold text-slate-900 text-base">
                {editingQuestion ? `Edit Pertanyaan #${editingQuestion.id}` : 'Tambah Pertanyaan Baru'}
              </h3>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveQuestionForm} className="p-6 overflow-y-auto space-y-4 flex-1">
              {formErrors.length > 0 && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs space-y-1">
                  {formErrors.map((err, i) => (
                    <p key={i}>• {err}</p>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Nomor / ID Soal
                  </label>
                  <input
                    type="number"
                    value={questionFormData.id}
                    onChange={(e) => setQuestionFormData({ ...questionFormData, id: e.target.value })}
                    required
                    className="w-full px-3 py-2 rounded-xl text-sm border border-slate-200 font-mono focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Pasangan Dimensi
                  </label>
                  <select
                    value={questionFormData.dimension}
                    onChange={(e) => handleDimensionPairChange(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  >
                    <option value="EI">EI — Ekstrovert vs Introvert</option>
                    <option value="SN">SN — Sensorik vs Intuisi</option>
                    <option value="TF">TF — Pemikir vs Perasa</option>
                    <option value="JP">JP — Terencana vs Fleksibel</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Teks Pertanyaan
                </label>
                <textarea
                  value={questionFormData.question}
                  onChange={(e) => setQuestionFormData({ ...questionFormData, question: e.target.value })}
                  required
                  rows={3}
                  placeholder="Masukkan kalimat situasi atau pertanyaan..."
                  className="w-full px-3 py-2 rounded-xl text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              {/* Option A */}
              <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-900">Pilihan A</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">Kutub Dimensi:</span>
                    <select
                      value={questionFormData.optAPole}
                      onChange={(e) => setQuestionFormData({ ...questionFormData, optAPole: e.target.value })}
                      className="px-2 py-1 rounded-lg text-xs font-bold font-mono border border-indigo-200 bg-white"
                    >
                      {VALID_POLES.map(p => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <input
                  type="text"
                  value={questionFormData.optAText}
                  onChange={(e) => setQuestionFormData({ ...questionFormData, optAText: e.target.value })}
                  placeholder="Teks respon pilihan A..."
                  required
                  className="w-full px-3 py-2 rounded-xl text-sm border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              {/* Option B */}
              <div className="p-4 rounded-2xl bg-violet-50/50 border border-violet-100 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-violet-900">Pilihan B</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">Kutub Dimensi:</span>
                    <select
                      value={questionFormData.optBPole}
                      onChange={(e) => setQuestionFormData({ ...questionFormData, optBPole: e.target.value })}
                      className="px-2 py-1 rounded-lg text-xs font-bold font-mono border border-violet-200 bg-white"
                    >
                      {VALID_POLES.map(p => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <input
                  type="text"
                  value={questionFormData.optBText}
                  onChange={(e) => setQuestionFormData({ ...questionFormData, optBText: e.target.value })}
                  placeholder="Teks respon pilihan B..."
                  required
                  className="w-full px-3 py-2 rounded-xl text-sm border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              {/* Active Toggle */}
              <label className="flex items-center gap-2.5 pt-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={questionFormData.isActive}
                  onChange={(e) => setQuestionFormData({ ...questionFormData, isActive: e.target.checked })}
                  className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                />
                <span className="text-xs font-semibold text-slate-700">
                  Aktifkan pertanyaan ini untuk digunakan dalam tes kuis
                </span>
              </label>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm"
                >
                  Simpan Pertanyaan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Import Preview Modal */}
      {isImportModalOpen && importPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-fadeIn">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <h3 className="font-bold text-slate-900 text-base">Pratinjau Impor JSON</h3>
              <button
                onClick={() => setIsImportModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <p className="font-bold text-slate-900">
                  Total Soal Ditemukan: <span className="font-mono text-indigo-600">{importPreview.totalCount}</span>
                </p>
                <p className="text-slate-600">
                  Distribusi: {importPreview.dimensionDistribution.EI} EI, {importPreview.dimensionDistribution.SN} SN, {importPreview.dimensionDistribution.TF} TF, {importPreview.dimensionDistribution.JP} JP
                </p>
                {importPreview.isValid ? (
                  <p className="text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Seluruh format butir soal valid dan siap diterapkan.
                  </p>
                ) : (
                  <p className="text-rose-700 font-semibold flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4" /> Ditemukan {importPreview.errors.length} kesalahan pada file.
                  </p>
                )}
              </div>

              {importPreview.warnings.length > 0 && (
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs">
                  {importPreview.warnings.map((w, i) => (
                    <p key={i}>• {w}</p>
                  ))}
                </div>
              )}

              <p className="text-xs text-slate-500">
                Pilih metode penerapan data ke dalam aplikasi:
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => handleApplyImport('append')}
                  className="w-full sm:flex-1 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 border border-slate-200"
                >
                  Gabungkan (Append)
                </button>
                <button
                  type="button"
                  onClick={() => handleApplyImport('replace')}
                  className="w-full sm:flex-1 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm"
                >
                  Ganti Semua (Replace)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={deleteConfirmOpen}
        title={`Hapus Pertanyaan #${questionToDelete?.id}?`}
        message={`Teks: "${questionToDelete?.question}". Tindakan ini akan menghapus pertanyaan dari daftar secara permanen.`}
        confirmLabel="Hapus Permanen"
        cancelLabel="Batal"
        isDanger={true}
        onConfirm={handleDeleteQuestion}
        onCancel={() => setDeleteConfirmOpen(false)}
      />

      {/* Reset to Default 100 Questions Confirmation */}
      <ConfirmDialog
        isOpen={resetConfirmOpen}
        title="Kembalikan ke 100 Soal Bawaan?"
        message="Seluruh modifikasi pertanyaan akan di-reset kembali ke 100 soal MBTI terverifikasi bawaan aplikasi. Tindakan ini tidak dapat dibatalkan."
        confirmLabel="Ya, Pulihkan 100 Soal"
        cancelLabel="Batal"
        isDanger={true}
        onConfirm={handleResetToDefault}
        onCancel={() => setResetConfirmOpen(false)}
      />
    </div>
  );
}
