import type { Subject } from './knowledge';

export type QuestionType = 'single-choice' | 'multi-choice' | 'comprehensive';

export interface Question {
  id: string;
  subject: Subject;
  chapterId: string;
  type: QuestionType;
  difficulty: 1 | 2 | 3;
  stem: string;
  options?: string[];
  answer: string;
  explanation: string;
  tags: string[];
  source?: string;
}

export interface QuizConfig {
  subjects: Subject[];
  chapterIds: string[];
  types: QuestionType[];
  difficulty: number[];
  count: number;
  timed: boolean;
  timeLimit?: number;
}

export interface QuizSession {
  id: string;
  config: QuizConfig;
  questions: Question[];
  answers: Record<string, string>;
  startTime: number;
  endTime?: number;
  completed: boolean;
}

export interface QuizResult {
  sessionId: string;
  totalCount: number;
  correctCount: number;
  wrongCount: number;
  skippedCount: number;
  score: number;
  timeUsed: number;
  details: QuizResultDetail[];
  completedAt: string;
}

export interface QuizResultDetail {
  questionId: string;
  userAnswer: string;
  correct: boolean;
  answeredAt: number;
}
