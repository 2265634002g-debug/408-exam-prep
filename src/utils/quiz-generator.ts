import type { Question, QuizConfig } from '@/types/question';

/**
 * Fisher-Yates shuffle — in-place, returns same array.
 */
function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Pick `count` questions from the pool matching the config.
 * Questions are shuffled before selection.
 */
export function pickQuestions(pool: Question[], config: QuizConfig): Question[] {
  let filtered = pool.filter(q => {
    if (config.subjects.length > 0 && !config.subjects.includes(q.subject)) return false;
    if (config.chapterIds.length > 0 && !config.chapterIds.includes(q.chapterId)) return false;
    if (config.types.length > 0 && !config.types.includes(q.type)) return false;
    if (config.difficulty.length > 0 && !config.difficulty.includes(q.difficulty)) return false;
    return true;
  });

  filtered = shuffle([...filtered]);

  if (config.count > 0 && config.count < filtered.length) {
    filtered = filtered.slice(0, config.count);
  }

  return filtered;
}

/**
 * Generate a unique session ID.
 */
export function generateSessionId(): string {
  return `quiz-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
