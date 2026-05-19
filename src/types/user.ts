import type { QuizResult } from './question';

export interface UserProgress {
  completedPoints: string[];
  quizHistory: QuizResult[];
  errorBook: ErrorItem[];
}

export interface ErrorItem {
  questionId: string;
  wrongCount: number;
  lastWrongDate: string;
  mastered: boolean;
  userAnswers: string[];
}

export interface ProgressStats {
  totalPoints: number;
  completedPoints: number;
  completionRate: number;
  totalQuestions: number;
  totalCorrect: number;
  accuracyRate: number;
  subjectStats: Record<string, SubjectStats>;
}

export interface SubjectStats {
  completedPoints: number;
  totalPoints: number;
  questionsAnswered: number;
  questionsCorrect: number;
  accuracyRate: number;
}
