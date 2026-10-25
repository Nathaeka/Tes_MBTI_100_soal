/**
 * MBTI Scoring Engine
 * Calculates 4-letter type, dimension percentages, vote counts, and tie-breakers.
 */

/**
 * Default conventional tie-breaker mapping if scores are equal.
 * Documented explicitly as an implementation choice, not scientific proof.
 */
export const TIE_BREAKER_DEFAULTS = {
  EI: 'I', // Default toward reflective focus when perfectly even
  SN: 'N', // Default toward conceptual synthesis
  TF: 'T', // Default toward objective analysis
  JP: 'J'  // Default toward closure
};

/**
 * Dimension labels and descriptive metadata in Indonesian
 */
export const DIMENSION_INFO = {
  EI: {
    name: 'Orientasi Energi',
    poleA: { code: 'E', label: 'Extraversion', indo: 'Ekstrovert', desc: 'Mendapat energi dari interaksi eksternal dan aksi nyata' },
    poleB: { code: 'I', label: 'Introversion', indo: 'Introvert', desc: 'Mendapat energi dari refleksi mendalam dan ketenangan diri' }
  },
  SN: {
    name: 'Pengolahan Informasi',
    poleA: { code: 'S', label: 'Sensing', indo: 'Sensorik', desc: 'Fokus pada fakta nyata, detail konkret, dan observasi panca indra' },
    poleB: { code: 'N', label: 'Intuition', indo: 'Intuisi', desc: 'Fokus pada gambaran besar, pola tersembunyi, dan potensi masa depan' }
  },
  TF: {
    name: 'Pengambilan Keputusan',
    poleA: { code: 'T', label: 'Thinking', indo: 'Pemikir', desc: 'Membuat keputusan berbasis logika objektif, prinsip, dan analisis' },
    poleB: { code: 'F', label: 'Feeling', indo: 'Perasa', desc: 'Membuat keputusan berbasis empati, nilai moral, dan harmoni sosial' }
  },
  JP: {
    name: 'Gaya Hidup & Pola Kerja',
    poleA: { code: 'J', label: 'Judging', indo: 'Terencana', desc: 'Menyukai kepastian, rencana terstruktur, jadwal rapi, dan ketuntasan' },
    poleB: { code: 'P', label: 'Perceiving', indo: 'Fleksibel', desc: 'Menyukai keterbukaan opsi, spontanitas, adaptif, dan mengalir' }
  }
};

/**
 * Calculates MBTI results based on questions and user answers.
 *
 * @param {Array} questions - Array of normalized questions
 * @param {Object} answers - Object mapping questionId -> selectedOptionId ('A'/'B') or option object
 * @returns {Object} MBTI calculation summary
 */
export function calculateMBTI(questions, answers = {}) {
  if (!Array.isArray(questions) || questions.length === 0) {
    return {
      isValid: false,
      error: 'Data pertanyaan tidak tersedia',
      type: '----',
      scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 },
      dimensions: {},
      answeredCount: 0,
      totalCount: 0,
      completionRate: 0,
      isComplete: false
    };
  }

  const activeQuestions = questions.filter(q => q.isActive !== false);
  const totalCount = activeQuestions.length;

  const scores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  let answeredCount = 0;
  const recordedAnswers = {};

  activeQuestions.forEach(q => {
    const rawAnswer = answers[q.id];
    if (rawAnswer === undefined || rawAnswer === null || rawAnswer === '') {
      return;
    }

    // Determine chosen option
    let selectedOption = null;
    if (typeof rawAnswer === 'object' && rawAnswer.dimension) {
      selectedOption = rawAnswer;
    } else if (typeof rawAnswer === 'string') {
      // Could be option ID ('A' or 'B') or direct pole letter ('E', 'I', etc.)
      if (rawAnswer === 'A' || rawAnswer === 'B') {
        selectedOption = q.options?.find(opt => opt.id === rawAnswer);
      } else {
        selectedOption = q.options?.find(opt => opt.dimension === rawAnswer);
      }
    }

    if (selectedOption && selectedOption.dimension) {
      const pole = selectedOption.dimension.toUpperCase().trim();
      if (scores[pole] !== undefined) {
        scores[pole] += 1;
        answeredCount += 1;
        recordedAnswers[q.id] = {
          optionId: selectedOption.id || 'A',
          dimension: pole
        };
      }
    }
  });

  // Calculate pairs
  const dimensionPairs = [
    { key: 'EI', poleA: 'E', poleB: 'I' },
    { key: 'SN', poleA: 'S', poleB: 'N' },
    { key: 'TF', poleA: 'T', poleB: 'F' },
    { key: 'JP', poleA: 'J', poleB: 'P' }
  ];

  const dimensions = {};
  const dominantLetters = [];
  const tieBreaks = [];

  dimensionPairs.forEach(({ key, poleA, poleB }) => {
    const scoreA = scores[poleA] || 0;
    const scoreB = scores[poleB] || 0;
    const totalVotes = scoreA + scoreB;

    let percentA = 50;
    let percentB = 50;
    let dominant = poleA;
    let isTie = false;

    if (totalVotes > 0) {
      percentA = Math.round((scoreA / totalVotes) * 100);
      percentB = 100 - percentA;

      if (scoreA > scoreB) {
        dominant = poleA;
      } else if (scoreB > scoreA) {
        dominant = poleB;
      } else {
        // Equal scores: Apply documented tie-breaker rule
        isTie = true;
        dominant = TIE_BREAKER_DEFAULTS[key] || poleA;
        tieBreaks.push({
          dimension: key,
          scores: { [poleA]: scoreA, [poleB]: scoreB },
          resolvedTo: dominant,
          rule: `Skor seimbang (${scoreA}-${scoreB}). Sistem menetapkan preferensi ${dominant} berdasarkan kebijakan konvensi tie-break standar.`
        });
      }
    }

    dominantLetters.push(dominant);

    dimensions[key] = {
      axis: key,
      info: DIMENSION_INFO[key],
      poleA: {
        code: poleA,
        score: scoreA,
        percent: percentA
      },
      poleB: {
        code: poleB,
        score: scoreB,
        percent: percentB
      },
      totalVotes,
      dominant,
      isTie,
      margin: Math.abs(percentA - percentB)
    };
  });

  const fourLetterType = dominantLetters.join('');
  const completionRate = totalCount > 0 ? Math.round((answeredCount / totalCount) * 100) : 0;
  const isComplete = answeredCount === totalCount && totalCount > 0;

  return {
    isValid: answeredCount > 0,
    isComplete,
    type: fourLetterType,
    scores,
    dimensions,
    answeredCount,
    totalCount,
    completionRate,
    recordedAnswers,
    tieBreaks,
    calculatedAt: new Date().toISOString()
  };
}
