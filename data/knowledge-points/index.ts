import type { KnowledgePoint } from '@/types/knowledge';
import { dsKnowledgePoints } from './ds';
import { coKnowledgePoints } from './co';
import { osKnowledgePoints } from './os';
import { cnKnowledgePoints } from './cn';
import { maKnowledgePoints } from './ma';

export const allKnowledgePoints: KnowledgePoint[] = [
  ...dsKnowledgePoints,
  ...coKnowledgePoints,
  ...osKnowledgePoints,
  ...cnKnowledgePoints,
  ...maKnowledgePoints,
];

export function getKnowledgePointsByChapter(chapterId: string): KnowledgePoint[] {
  return allKnowledgePoints.filter(kp => kp.chapterId === chapterId);
}

export function getKnowledgePointById(id: string): KnowledgePoint | undefined {
  return allKnowledgePoints.find(kp => kp.id === id);
}

export function searchKnowledgePoints(query: string): KnowledgePoint[] {
  const q = query.toLowerCase();
  return allKnowledgePoints.filter(
    kp =>
      kp.title.toLowerCase().includes(q) ||
      kp.keyConcepts.some(tag => tag.toLowerCase().includes(q))
  );
}

// 按科目导出，供需要按科筛选的场景使用
export { dsKnowledgePoints } from './ds';
export { coKnowledgePoints } from './co';
export { osKnowledgePoints } from './os';
export { cnKnowledgePoints } from './cn';
export { maKnowledgePoints } from './ma';
