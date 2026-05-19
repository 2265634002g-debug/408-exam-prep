import type { Question } from '@/types/question';
import { dsQuestions } from './ds-questions';

/** 全部题库（分科合并） */
export const allQuestions: Question[] = [
  ...dsQuestions,
  // TODO: add coQuestions, osQuestions, cnQuestions
];

/** 根据 ID 查找题目 */
export function getQuestionById(id: string): Question | undefined {
  return allQuestions.find(q => q.id === id);
}

/** 获取所有题目（可按科目过滤） */
export function getQuestions(subject?: string): Question[] {
  if (!subject) return allQuestions;
  return allQuestions.filter(q => q.subject === subject);
}
