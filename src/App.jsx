import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import LandingPage from './pages/LandingPage.jsx';
import AboutMBTIPage from './pages/AboutMBTIPage.jsx';
import HowItWorksPage from './pages/HowItWorksPage.jsx';
import QuizPage from './pages/QuizPage.jsx';
import ResultPage from './pages/ResultPage.jsx';
import AdminPage from './pages/AdminPage.jsx';

import {
  getStoredQuestions,
  saveQuestions,
  resetQuestionsToDefault,
  getStoredSession,
  saveSession,
  clearSession,
  getLastResult,
  saveLastResult,
  clearLastResult
} from './services/storageService.js';
import { calculateMBTI } from './utils/scoring.js';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [questions, setQuestions] = useState([]);
  const [activeSession, setActiveSession] = useState(null);
  const [lastResult, setLastResult] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize data on mount
  useEffect(() => {
    try {
      const loadedQuestions = getStoredQuestions();
      const loadedSession = getStoredSession();
      const loadedResult = getLastResult();

      setQuestions(loadedQuestions);
      setActiveSession(loadedSession);
      setLastResult(loadedResult);
    } catch (err) {
      console.error('[SiapaSih?] Kesalahan saat inisialisasi aplikasi:', err);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Handlers for Navigation & Quiz Flow
  const handleStartQuiz = () => {
    // If active session exists, resume; otherwise start new
    if (!activeSession) {
      const newSession = {
        sessionId: `session_${Date.now()}`,
        currentQuestionIndex: 0,
        answers: {},
        startTime: new Date().toISOString(),
        isComplete: false
      };
      saveSession(newSession);
      setActiveSession(newSession);
    }
    setCurrentScreen('quiz');
  };

  const handleResumeQuiz = () => {
    setCurrentScreen('quiz');
  };

  const handleResetQuiz = () => {
    clearSession();
    const newSession = {
      sessionId: `session_${Date.now()}`,
      currentQuestionIndex: 0,
      answers: {},
      startTime: new Date().toISOString(),
      isComplete: false
    };
    saveSession(newSession);
    setActiveSession(newSession);
    setCurrentScreen('quiz');
  };

  const handleSaveSession = (sessionData) => {
    saveSession(sessionData);
    setActiveSession(sessionData);
  };

  const handleFinishQuiz = (finalAnswers) => {
    const calculation = calculateMBTI(questions, finalAnswers);
    saveLastResult(calculation);
    setLastResult(calculation);
    clearSession();
    setActiveSession(null);
    setCurrentScreen('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRetakeQuiz = () => {
    clearSession();
    const newSession = {
      sessionId: `session_${Date.now()}`,
      currentQuestionIndex: 0,
      answers: {},
      startTime: new Date().toISOString(),
      isComplete: false
    };
    saveSession(newSession);
    setActiveSession(newSession);
    setCurrentScreen('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveQuestions = (updatedList) => {
    saveQuestions(updatedList);
    setQuestions(updatedList);
  };

  const handleResetQuestionsToDefault = () => {
    const pristine = resetQuestionsToDefault();
    setQuestions(pristine);
  };

  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-500">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-indigo-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-medium">Memuat inventori 100 soal MBTI...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={(screen) => {
          setCurrentScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        activeSession={activeSession}
        onResetSession={handleResetQuiz}
      />

      {/* Dynamic Screen View */}
      <div className="flex-1">
        {currentScreen === 'landing' && (
          <LandingPage
            onStartQuiz={handleStartQuiz}
            onResumeQuiz={handleResumeQuiz}
            onResetQuiz={handleResetQuiz}
            activeSession={activeSession}
            lastResult={lastResult}
            onViewResult={() => setCurrentScreen('result')}
            onNavigate={(screen) => setCurrentScreen(screen)}
          />
        )}

        {currentScreen === 'about-mbti' && (
          <AboutMBTIPage
            onStartQuiz={handleStartQuiz}
          />
        )}

        {currentScreen === 'how-it-works' && (
          <HowItWorksPage
            onStartQuiz={handleStartQuiz}
          />
        )}

        {currentScreen === 'quiz' && (
          <QuizPage
            questions={questions}
            activeSession={activeSession}
            onSaveSession={handleSaveSession}
            onFinishQuiz={handleFinishQuiz}
            onExitQuiz={() => setCurrentScreen('landing')}
          />
        )}

        {currentScreen === 'result' && (
          <ResultPage
            result={lastResult}
            onRetakeQuiz={handleRetakeQuiz}
            onNavigateHome={() => setCurrentScreen('landing')}
          />
        )}

        {currentScreen === 'admin' && (
          <AdminPage
            questions={questions}
            onSaveQuestions={handleSaveQuestions}
            onResetQuestionsToDefault={handleResetQuestionsToDefault}
            onBackToHome={() => setCurrentScreen('landing')}
          />
        )}
      </div>

      {/* Footer (displayed on landing, result, and admin) */}
      {currentScreen !== 'quiz' && (
        <Footer
          onNavigate={(screen) => {
            setCurrentScreen(screen);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      )}
    </div>
  );
}
