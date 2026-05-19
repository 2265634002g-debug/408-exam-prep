import { useParams, Link } from 'react-router-dom';
import { useAppContext } from '@/context/AppContext';
import styles from './QuizResult.module.css';

export default function QuizResultPage() {
  const { sessionId } = useParams<{ sessionId: string }>();
  const { state } = useAppContext();

  const result = state.progress.quizHistory.find(r => r.sessionId === sessionId);

  if (!result) {
    return (
      <div className={styles.container}>
        <p className={styles.notFound}>未找到答题记录</p>
        <Link to="/quiz" className={styles.backLink}>返回刷题</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>答题结果</h1>

      <div className={styles.scoreCard}>
        <div className={styles.scoreCircle}>
          <span className={styles.scoreNum}>{result.score}</span>
          <span className={styles.scoreUnit}>分</span>
        </div>
        <div className={styles.scoreDetails}>
          <div className={styles.detailItem}>
            <span className={styles.detailValue}>{result.totalCount}</span>
            <span className={styles.detailLabel}>总题数</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailValue} style={{ color: '#16a34a' }}>{result.correctCount}</span>
            <span className={styles.detailLabel}>正确</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailValue} style={{ color: '#dc2626' }}>{result.wrongCount}</span>
            <span className={styles.detailLabel}>错误</span>
          </div>
          <div className={styles.detailItem}>
            <span className={styles.detailValue}>{Math.round(result.timeUsed / 60)}分{result.timeUsed % 60}秒</span>
            <span className={styles.detailLabel}>用时</span>
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <Link to="/quiz" className={styles.btnPrimary}>再来一组</Link>
        <Link to="/errorbook" className={styles.btnSecondary}>查看错题</Link>
      </div>
    </div>
  );
}
