import { Link } from 'react-router-dom';
import { useAppContext } from '@/context/AppContext';
import { getQuestionById } from '@data/questions/index';
import { subjects } from '@data/subjects';
import Markdown from '@/components/common/Markdown';
import styles from './ErrorBook.module.css';
import type { Subject } from '@/types/knowledge';

export default function ErrorBookPage() {
  const { activeErrors, errorBook, dispatch } = useAppContext();

  const subjectCount: Record<string, number> = {};
  for (const err of activeErrors) {
    const prefix = err.questionId.split('-')[0] as Subject;
    subjectCount[prefix] = (subjectCount[prefix] ?? 0) + 1;
  }

  const masteredErrors = errorBook.filter(e => e.mastered);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>错题本</h1>
      <p className={styles.subtitle}>
        共 <strong>{activeErrors.length}</strong> 道待消灭错题
      </p>

      {Object.keys(subjectCount).length > 0 && (
        <div className={styles.subjectBreakdown}>
          {subjects
            .filter(s => subjectCount[s.id])
            .map(s => (
              <span key={s.id} className={styles.badge}>
                <span className={styles.dot} style={{ background: s.color }} />
                {s.name}: {subjectCount[s.id]} 题
              </span>
            ))}
        </div>
      )}

      {activeErrors.length === 0 ? (
        <div className={styles.empty}>
          <p className={styles.emptyText}>暂无错题，继续保持!</p>
          <Link to="/quiz" className={styles.startLink}>去刷题</Link>
        </div>
      ) : (
        <div className={styles.errorList}>
          {activeErrors.map(err => {
            const question = getQuestionById(err.questionId);
            const lastAnswer = err.userAnswers[err.userAnswers.length - 1];
            return (
              <div key={err.questionId} className={styles.errorCard}>
                <div className={styles.errorHeader}>
                  <span className={styles.errorSource}>
                    {question?.source ?? err.questionId}
                  </span>
                  <span className={styles.errorCount}>错 {err.wrongCount} 次</span>
                </div>
                <div className={styles.errorStem}>
                  {question ? (
                    <Markdown content={question.stem} />
                  ) : (
                    <span className={styles.missing}>题目加载失败 ({err.questionId})</span>
                  )}
                </div>
                {question && lastAnswer && (
                  <div className={styles.answerRow}>
                    <span className={styles.answerLabel}>你的答案：</span>
                    <span className={styles.answerWrong}>{lastAnswer}</span>
                    <span className={styles.answerLabel}>正确答案：</span>
                    <span className={styles.answerCorrect}>{question.answer}</span>
                  </div>
                )}
                {question && (
                  <details className={styles.explanationToggle}>
                    <summary>查看解析</summary>
                    <div className={styles.explanationContent}>
                      <Markdown content={question.explanation} />
                    </div>
                  </details>
                )}
                <button
                  className={styles.masterButton}
                  onClick={() => dispatch({ type: 'MASTER_ERROR', questionId: err.questionId })}
                >
                  标记为已掌握
                </button>
              </div>
            );
          })}
        </div>
      )}

      {masteredErrors.length > 0 && (
        <details className={styles.masteredSection}>
          <summary className={styles.masteredToggle}>已掌握 ({masteredErrors.length})</summary>
          <div className={styles.masteredList}>
            {masteredErrors.map(err => {
              const question = getQuestionById(err.questionId);
              return (
                <div key={err.questionId} className={styles.masteredItem}>
                  <span className={styles.masteredId}>{err.questionId}</span>
                  <span className={styles.masteredTitle}>
                    {question?.stem.slice(0, 50) ?? '题目已移除'}...
                  </span>
                </div>
              );
            })}
          </div>
        </details>
      )}
    </div>
  );
}
