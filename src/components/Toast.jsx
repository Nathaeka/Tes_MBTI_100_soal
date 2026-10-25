import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose, duration = 3000 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  const isSuccess = type === 'success';
  const isError = type === 'error';

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-slideUp">
      <div
        className={`flex items-start gap-3 p-4 rounded-xl shadow-lg border backdrop-blur-sm ${
          isSuccess
            ? 'bg-emerald-900/90 text-white border-emerald-700'
            : isError
            ? 'bg-rose-900/90 text-white border-rose-700'
            : 'bg-slate-900/90 text-white border-slate-700'
        }`}
      >
        <div className="shrink-0 mt-0.5">
          {isSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
          {isError && <AlertCircle className="w-5 h-5 text-rose-400" />}
          {!isSuccess && !isError && <Info className="w-5 h-5 text-indigo-400" />}
        </div>
        <div className="flex-1 text-sm font-medium leading-snug">
          {message}
        </div>
        <button
          onClick={onClose}
          className="shrink-0 text-slate-300 hover:text-white p-0.5"
          aria-label="Tutup notifikasi"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
