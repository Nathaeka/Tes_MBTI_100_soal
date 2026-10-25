import React from 'react';
import { Compass, BookOpen, HelpCircle, Settings, Play, RefreshCw, Menu, X } from 'lucide-react';

export default function Navbar({ currentScreen, onNavigate, activeSession, onResetSession }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'landing', label: 'Beranda', icon: Compass },
    { id: 'about-mbti', label: 'Tentang MBTI', icon: BookOpen },
    { id: 'how-it-works', label: 'Cara Kerja', icon: HelpCircle },
    { id: 'admin', label: 'Kelola Soal', icon: Settings }
  ];

  const handleNavClick = (item) => {
    setMobileMenuOpen(false);
    onNavigate(item.id);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => onNavigate('landing')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform">
              <span className="font-bold text-lg tracking-wider">S</span>
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
              siapasih
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? 'bg-indigo-50 text-indigo-700' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  <Icon className="w-4 h-4 text-slate-400 group-hover:text-indigo-600" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            {activeSession && currentScreen !== 'quiz' && (
              <button
                onClick={() => onNavigate('quiz')}
                className="flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition-colors"
                title="Lanjutkan tes yang sedang berjalan"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Lanjutkan ({Object.keys(activeSession.answers || {}).length}/100)
              </button>
            )}

            {currentScreen !== 'quiz' && (
              <button
                onClick={() => onNavigate('quiz')}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-200 active:scale-95 transition-all"
              >
                <Play className="w-4 h-4 fill-current" />
                Mulai Tes
              </button>
            )}

            {currentScreen === 'quiz' && (
              <button
                onClick={() => onNavigate('landing')}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
              >
                Simpan & Keluar
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            {currentScreen !== 'quiz' && (
              <button
                onClick={() => onNavigate('quiz')}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm"
              >
                Mulai
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Buka menu navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg animate-fadeIn">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive ? 'bg-indigo-50 text-indigo-700' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-4 h-4 text-slate-400" />
                {item.label}
              </button>
            );
          })}
          {activeSession && currentScreen !== 'quiz' && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('quiz');
              }}
              className="w-full flex items-center justify-center gap-2 mt-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-indigo-700 bg-indigo-50 border border-indigo-200"
            >
              <RefreshCw className="w-4 h-4" />
              Lanjutkan Progres ({Object.keys(activeSession.answers || {}).length}/100 Soal)
            </button>
          )}
        </div>
      )}
    </header>
  );
}
