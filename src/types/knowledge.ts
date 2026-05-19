export type Subject = 'ds' | 'co' | 'os' | 'cn';

export interface SubjectInfo {
  id: Subject;
  name: string;
  fullName: string;
  color: string;
  chapters: ChapterMeta[];
}

export interface ChapterMeta {
  id: string;
  chapterNum: number;
  title: string;
  sections: SectionMeta[];
}

export interface SectionMeta {
  id: string;
  title: string;
  knowledgePointIds: string[];
}

export interface KnowledgePoint {
  id: string;
  chapterId: string;
  title: string;
  content: string;
  keyConcepts: string[];
  relatedPoints: string[];
}
