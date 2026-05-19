import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { subjects } from '@data/subjects';
import type { QuizConfig, QuestionType } from '@/types/question';
import type { Subject } from '@/types/knowledge';
import styles from './QuizConfig.module.css';

const QUESTION_TYPES: { value: QuestionType; label: string }[] = [
  { value: 'single-choice', label: '单选题' },
  { value: 'multi-choice', label: '多选题' },
  { value: 'comprehensive', label: '综合题' },
];

const DIFFICULTIES = [
  { value: 1, label: '简单' },
  { value: 2, label: '中等' },
  { value: 3, label: '困难' },
];

export default function QuizConfigPage() {
  const navigate = useNavigate();
  const [config, setConfig] = useState<QuizConfig>({
    subjects: [],
    chapterIds: [],
    types: ['single-choice'],
    difficulty: [1, 2],
    count: 10,
    timed: false,
    timeLimit: 30,
  });

  const toggleSubject = (s: Subject) => {
    setConfig(prev => ({
      ...prev,
      subjects: prev.subjects.includes(s)
        ? prev.subjects.filter(x => x !== s)
        : [...prev.subjects, s],
    }));
  };

  const toggleType = (t: QuestionType) => {
    setConfig(prev => ({
      ...prev,
      types: prev.types.includes(t)
        ? prev.types.filter(x => x !== t)
        : [...prev.types, t],
    }));
  };

  const toggleDifficulty = (d: number) => {
    setConfig(prev => ({
      ...prev,
      difficulty: prev.difficulty.includes(d)
        ? prev.difficulty.filter(x => x !== d)
        : [...prev.difficulty, d],
    }));
  };

  const handleStart = () => {
    const params = new URLSearchParams();
    if (config.subjects.length > 0) params.set('subjects', config.subjects.join(','));
    if (config.types.length > 0) params.set('types', config.types.join(','));
    if (config.difficulty.length > 0) params.set('difficulty', config.difficulty.join(','));
    params.set('count', String(config.count));
    params.set('timed', String(config.timed));
    if (config.timed && config.timeLimit) params.set('timeLimit', String(config.timeLimit));
    navigate(`/quiz/session?${params.toString()}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>刷题配置</h1>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>选择科目</h3>
        <div className={styles.chipGroup}>
          {subjects.map(s => (
            <button
              key={s.id}
              className={config.subjects.includes(s.id) ? styles.chipActive : styles.chip}
              onClick={() => toggleSubject(s.id)}
            >
              <span className={styles.chipDot} style={{ background: s.color }} />
              {s.name}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>题目类型</h3>
        <div className={styles.chipGroup}>
          {QUESTION_TYPES.map(t => (
            <button
              key={t.value}
              className={config.types.includes(t.value) ? styles.chipActive : styles.chip}
              onClick={() => toggleType(t.value)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>难度</h3>
        <div className={styles.chipGroup}>
          {DIFFICULTIES.map(d => (
            <button
              key={d.value}
              className={config.difficulty.includes(d.value) ? styles.chipActive : styles.chip}
              onClick={() => toggleDifficulty(d.value)}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>题目数量</h3>
        <input
          type="number"
          min={1}
          max={50}
          value={config.count}
          onChange={e => setConfig(prev => ({ ...prev, count: Number(e.target.value) || 10 }))}
          className={styles.numberInput}
        />
      </div>

      <button className={styles.startButton} onClick={handleStart}>
        开始答题
      </button>
    </div>
  );
}
