/**
 * LocalStorage Service for SiapaSih? MBTI Application.
 * Handles storage of questions (CRUD), quiz active sessions, and test results.
 */

import defaultQuestions from '../data/questions.json';
import { normalizeQuestions } from '../utils/questionAdapter.js';

const STORAGE_KEYS = {
  QUESTIONS: 'mindtype_questions_v1',
  SESSION: 'mindtype_active_session_v1',
  LAST_RESULT: 'mindtype_last_result_v1'
};

/**
 * Safely parse JSON from localStorage
 */
function safeParse(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (err) {
    console.warn(`[storageService] Gagal membaca key "${key}" dari localStorage:`, err);
    return fallback;
  }
}

/**
 * Safely write JSON to localStorage
 */
function safeSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (err) {
    console.error(`[storageService] Gagal menyimpan key "${key}" ke localStorage:`, err);
    return false;
  }
}

/**
 * Get the current question dataset.
 * Falls back to default 100 questions from questions.json if nothing stored.
 */
export function getStoredQuestions() {
  const stored = safeParse(STORAGE_KEYS.QUESTIONS, null);
  if (Array.isArray(stored) && stored.length > 0) {
    return normalizeQuestions(stored);
  }

  // First time initialization: store and return default questions
  const normalizedDefault = normalizeQuestions(defaultQuestions);
  safeSet(STORAGE_KEYS.QUESTIONS, normalizedDefault);
  return normalizedDefault;
}

/**
 * Save updated question list to localStorage
 */
export function saveQuestions(questionsList) {
  const normalized = normalizeQuestions(questionsList);
  return safeSet(STORAGE_KEYS.QUESTIONS, normalized);
}

/**
 * Reset question list back to pristine default 100 questions
 */
export function resetQuestionsToDefault() {
  const normalizedDefault = normalizeQuestions(defaultQuestions);
  safeSet(STORAGE_KEYS.QUESTIONS, normalizedDefault);
  return normalizedDefault;
}

/**
 * Retrieve active quiz session
 */
export function getStoredSession() {
  return safeParse(STORAGE_KEYS.SESSION, null);
}

/**
 * Save active quiz session
 */
export function saveSession(sessionData) {
  const payload = {
    ...sessionData,
    lastUpdated: new Date().toISOString()
  };
  return safeSet(STORAGE_KEYS.SESSION, payload);
}

/**
 * Clear active quiz session
 */
export function clearSession() {
  try {
    localStorage.removeItem(STORAGE_KEYS.SESSION);
    return true;
  } catch (err) {
    return false;
  }
}

/**
 * Retrieve last completed test result
 */
export function getLastResult() {
  return safeParse(STORAGE_KEYS.LAST_RESULT, null);
}

/**
 * Save completed test result
 */
export function saveLastResult(result) {
  return safeSet(STORAGE_KEYS.LAST_RESULT, result);
}

/**
 * Clear completed test result
 */
export function clearLastResult() {
  try {
    localStorage.removeItem(STORAGE_KEYS.LAST_RESULT);
    return true;
  } catch (err) {
    return false;
  }
}
