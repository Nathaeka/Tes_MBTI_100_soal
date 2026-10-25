/**
 * Data adapter and validator for MBTI questions.
 * Handles normalization between the raw question source format and the application schema.
 */

export const VALID_POLES = ['E', 'I', 'S', 'N', 'T', 'F', 'J', 'P'];
export const VALID_PAIRS = ['EI', 'SN', 'TF', 'JP'];

/**
 * Infer the dimension axis ('EI', 'SN', 'TF', 'JP') from two poles.
 */
export function inferDimensionPair(poleA, poleB) {
  const pA = (poleA || '').toUpperCase().trim();
  const pB = (poleB || '').toUpperCase().trim();
  const sorted = [pA, pB].sort().join('');

  if (sorted === 'EI') return 'EI';
  if (sorted === 'NS') return 'SN';
  if (sorted === 'FT') return 'TF';
  if (sorted === 'JP') return 'JP';

  return 'UNKNOWN';
}

/**
 * Normalizes a single question into the contract schema:
 * {
 *   id: number,
 *   question: string,
 *   dimension: 'EI' | 'SN' | 'TF' | 'JP',
 *   options: [
 *     { id: 'A', text: string, dimension: string },
 *     { id: 'B', text: string, dimension: string }
 *   ],
 *   isActive: boolean
 * }
 */
export function normalizeQuestion(raw, index = 0) {
  if (!raw || typeof raw !== 'object') {
    throw new Error(`Data pertanyaan tidak valid pada indeks ${index}`);
  }

  const id = raw.id !== undefined && raw.id !== null ? Number(raw.id) : index + 1;
  const question = typeof raw.question === 'string' ? raw.question.trim() : '';

  let options = [];
  if (Array.isArray(raw.options)) {
    options = raw.options.map((opt, optIdx) => {
      const defaultId = optIdx === 0 ? 'A' : 'B';
      const text = typeof opt === 'string' ? opt : (opt?.text || '');
      const dimension = (opt?.dimension || opt?.pole || '').toUpperCase().trim();
      return {
        id: opt?.id || defaultId,
        text: text.trim(),
        dimension
      };
    });
  }

  let dimension = raw.dimension;
  if (!dimension || !VALID_PAIRS.includes(dimension)) {
    if (options.length >= 2) {
      dimension = inferDimensionPair(options[0]?.dimension, options[1]?.dimension);
    } else {
      dimension = 'UNKNOWN';
    }
  }

  const isActive = raw.isActive !== undefined ? Boolean(raw.isActive) : true;

  return {
    id,
    question,
    dimension,
    options,
    isActive
  };
}

/**
 * Normalizes an array of raw questions.
 */
export function normalizeQuestions(rawList) {
  if (!Array.isArray(rawList)) return [];
  return rawList.map((item, idx) => normalizeQuestion(item, idx));
}

/**
 * Validates a single normalized question.
 * Returns { isValid: boolean, errors: string[] }
 */
export function validateQuestion(q) {
  const errors = [];

  if (q.id === undefined || q.id === null || isNaN(q.id)) {
    errors.push('ID pertanyaan tidak valid atau kosong');
  }

  if (!q.question || typeof q.question !== 'string' || q.question.trim().length === 0) {
    errors.push('Teks pertanyaan tidak boleh kosong');
  }

  if (!Array.isArray(q.options) || q.options.length !== 2) {
    errors.push(`Harus memiliki tepat 2 pilihan jawaban (ditemukan: ${q.options?.length || 0})`);
  } else {
    const [optA, optB] = q.options;
    if (!optA?.text || optA.text.trim().length === 0) {
      errors.push('Teks pilihan A tidak boleh kosong');
    }
    if (!optB?.text || optB.text.trim().length === 0) {
      errors.push('Teks pilihan B tidak boleh kosong');
    }

    if (!VALID_POLES.includes(optA?.dimension)) {
      errors.push(`Dimensi pilihan A ("${optA?.dimension}") tidak valid`);
    }
    if (!VALID_POLES.includes(optB?.dimension)) {
      errors.push(`Dimensi pilihan B ("${optB?.dimension}") tidak valid`);
    }

    if (optA?.dimension === optB?.dimension) {
      errors.push(`Pilihan A dan B tidak boleh memiliki dimensi yang sama (${optA?.dimension})`);
    }

    const pair = inferDimensionPair(optA?.dimension, optB?.dimension);
    if (pair === 'UNKNOWN') {
      errors.push(`Kombinasi dimensi ${optA?.dimension} dan ${optB?.dimension} bukan pasangan MBTI yang valid (EI, SN, TF, JP)`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Validates a complete list of questions.
 * Returns comprehensive audit results.
 */
export function validateQuestionList(list) {
  const normalized = normalizeQuestions(list);
  const errors = [];
  const warnings = [];
  const idMap = new Map();
  const duplicateIds = new Set();
  const textMap = new Map();
  const duplicateTexts = new Set();

  const dimensionDistribution = {
    EI: 0,
    SN: 0,
    TF: 0,
    JP: 0,
    UNKNOWN: 0
  };

  const poleDistribution = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  let activeCount = 0;

  normalized.forEach((q, idx) => {
    // Check ID duplicates
    if (idMap.has(q.id)) {
      duplicateIds.add(q.id);
    } else {
      idMap.set(q.id, idx);
    }

    // Check duplicate texts
    const cleanText = q.question.toLowerCase().trim();
    if (cleanText) {
      if (textMap.has(cleanText)) {
        duplicateTexts.add(q.id);
      } else {
        textMap.set(cleanText, q.id);
      }
    }

    // Validate single question
    const singleValidation = validateQuestion(q);
    if (!singleValidation.isValid) {
      errors.push(`Soal #${q.id}: ${singleValidation.errors.join(', ')}`);
    }

    if (q.isActive) {
      activeCount++;
    }

    // Tally dimensions
    if (dimensionDistribution[q.dimension] !== undefined) {
      dimensionDistribution[q.dimension]++;
    } else {
      dimensionDistribution.UNKNOWN++;
    }

    if (Array.isArray(q.options) && q.options.length === 2) {
      const d0 = q.options[0]?.dimension;
      const d1 = q.options[1]?.dimension;
      if (poleDistribution[d0] !== undefined) poleDistribution[d0]++;
      if (poleDistribution[d1] !== undefined) poleDistribution[d1]++;
    }
  });

  if (duplicateIds.size > 0) {
    errors.push(`Ditemukan ID duplikat: ${Array.from(duplicateIds).join(', ')}`);
  }

  if (duplicateTexts.size > 0) {
    warnings.push(`Ditemukan teks pertanyaan serupa/duplikat pada ID: ${Array.from(duplicateTexts).join(', ')}`);
  }

  if (normalized.length !== 100) {
    warnings.push(`Jumlah total pertanyaan saat ini adalah ${normalized.length} (standar tes adalah 100 soal)`);
  }

  return {
    isValid: errors.length === 0,
    totalCount: normalized.length,
    activeCount,
    errors,
    warnings,
    duplicateIds: Array.from(duplicateIds),
    duplicateTexts: Array.from(duplicateTexts),
    dimensionDistribution,
    poleDistribution,
    normalized
  };
}
