import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { pickQuestions, generateSessionId } from '@/utils/quiz-generator';
import { allQuestions } from '@data/questions/index';
import { useAppContext } from '@/context/AppContext';
import Markdown from '@/components/common/Markdown';
import type { Question, QuizConfig, QuestionType } from '@/types/question';
import type { Subject } from '@/types/knowledge';
import styles from './QuizSession.module.css';

export default function QuizSessionPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { dispatch } = useAppContext();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [sessionId] = useState(generateSessionId);
  const [startTime] = useState(Date.now());
  const [finished, setFinished] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    const config: QuizConfig = {
      subjects: (searchParams.get('subjects')?.split(',').filter(Boolean) ?? []) as Subject[],
      chapterIds: [],
      types: (searchParams.get('types')?.split(',').filter(Boolean) ?? ['single-choice']) as QuestionType[],
      difficulty: (searchParams.get('difficulty')?.split(',').filter(Boolean).map(Number) ?? [1, 2, 3]),
      count: Number(searchParams.get('count')) || 10,
      timed: searchParams.get('timed') === 'true',
      timeLimit: Number(searchParams.get('timeLimit')) || 30,
    };

    const picked = pickQuestions(allQuestions, config);
    setQuestions(picked);
  }, [searchParams]);

  const current = questions[currentIndex];
  const isLast = currentIndex >= questions.length - 1;

  const handleSelect = useCallback((optionIndex: string) => {
    if (showExplanation) return;
    setSelectedOption(optionIndex);
    setAnswers(prev => ({ ...prev, [current.id]: optionIndex }));
    setShowExplanation(true);
  }, [current, showExplanation]);

  const handleNext = useCallback(() => {
    if (showExplanation) {
      const correct = selectedOption === current.answer;
      if (!correct) {
        dispatch({ type: 'ADD_ERROR_ITEM', questionId: current.id, userAnswer: selectedOption ?? '' });
      }
    }

    if (isLast) {
      const correctCount = questions.filter(
        (q) => {
          const userAns = answers[q.id] ?? '';
          return userAns === q.answer;
        }
      ).length;

      dispatch({
        type: 'ADD_QUIZ_RESULT',
        result: {
          sessionId,
          totalCount: questions.length,
          correctCount,
          wrongCount: questions.length - correctCount,
          skippedCount: 0,
          score: Math.round((correctCount / questions.length) * 100),
          timeUsed: Math.round((Date.now() - startTime) / 1000),
          details: questions.map(q => ({
            questionId: q.id,
            userAnswer: answers[q.id] ?? '',
            correct: answers[q.id] === q.answer,
            answeredAt: Date.now(),
          })),
          completedAt: new Date().toISOString(),
        },
      });
      setFinished(true);
    } else {
      setCurrentIndex(prev => prev + 1);
      setShowExplanation(false);
      setSelectedOption(null);
    }
  }, [showExplanation, isLast, current, selectedOption, questions, answers, sessionId, startTime, dispatch]);

  if (finished) {
    return (
      <div className={styles.container}>
        <div className={styles.finishedCard}>
          <h2>答题完成!</h2>
          <p>结果已保存，可前往错题本查看</p>
          <div className={styles.finishedActions}>
            <button className={styles.btnPrimary} onClick={() => navigate('/quiz/result/' + sessionId)}>
              查看结果
            </button>
            <button className={styles.btnSecondary} onClick={() => navigate('/quiz')}>
              再来一组
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className={styles.container}>
        <p className={styles.emptyHint}>题库中暂无匹配题目，请调整筛选条件后重试。</p>
        <button className={styles.btnSecondary} onClick={() => navigate('/quiz')}>
          返回配置
        </button>
      </div>
    );
  }

  if (!current) return null;

  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        <span>{currentIndex + 1} / {questions.length}</span>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} />
        </div>
      </div>

      <div className={styles.questionCard}>
        <div className={styles.questionMeta}>
          <span className={styles.questionTag}>{current.subject.toUpperCase()}</span>
          <span className={styles.questionTag}>
            {current.difficulty === 1 ? '简单' : current.difficulty === 2 ? '中等' : '困难'}
          </span>
          {current.source && <span className={styles.questionTag}>{current.source}</span>}
        </div>
        <div className={styles.stem}>
          <Markdown content={current.stem} />
        </div>

        {current.options && (
          <div className={styles.options}>
            {current.options.map((opt, idx) => {
              const label = String.fromCharCode(65 + idx);
              const isSelected = selectedOption === label;
              const isCorrect = label === current.answer;
              let optionClass = styles.option;
              if (showExplanation) {
                if (isCorrect) optionClass = styles.optionCorrect;
                else if (isSelected && !isCorrect) optionClass = styles.optionWrong;
              } else if (isSelected) {
                optionClass = styles.optionSelected;
              }

              return (
                <button
                  key={label}
                  className={optionClass}
                  onClick={() => handleSelect(label)}
                  disabled={showExplanation}
                >
                  <span className={styles.optionLabel}>{label}</span>
                  <span className={styles.optionText}>
                    <Markdown content={opt} />
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {showExplanation && (
          <div className={styles.explanation}>
            <div className={styles.explanationTitle}>解析</div>
            <Markdown content={current.explanation} />
          </div>
        )}
      </div>

      {showExplanation && (
        <button className={styles.nextButton} onClick={handleNext}>
          {isLast ? '完成' : '下一题'}
        </button>
      )}
    </div>
  );
}
