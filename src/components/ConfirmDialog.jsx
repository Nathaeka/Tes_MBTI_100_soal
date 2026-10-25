import React from 'react';
import { AlertCircle, AlertTriangle, X } from 'lucide-react';

export default function ConfirmDialog({
  isOpen,
  title,
  message,
  confirmLabel = 'Ya, Lanjutkan',
  cancelLabel = 'Batal',
  isDanger = false,
  onConfirm,
  onCancel
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-fadeIn">
      <div 
        className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden transform transition-all animate-scaleUp"
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-dialog-title"
      >
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                isDanger ? 'bg-rose-100 text-rose-600' : 'bg-indigo-100 text-indigo-600'
              }`}
            >
              {isDanger ? <AlertTriangle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
            </div>

            <div className="flex-1">
              <h3 id="confirm-dialog-title" className="text-base font-bold text-slate-900">
                {title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {message}
              </p>
            </div>

            <button
              onClick={onCancel}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {cancelLabel}
            </button>
            <button
              type="button"
              onClick={onConfirm}
              className={`px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-sm transition-all ${
                isDanger
                  ? 'bg-rose-600 hover:bg-rose-700 shadow-rose-200'
                  : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200'
              }`}
            >
              {confirmLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
