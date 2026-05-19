import { Link } from 'react-router-dom';
import { subjects } from '@data/subjects';
import { useAppContext } from '@/context/AppContext';
import styles from './Dashboard.module.css';

export default function Dashboard() {
  const { state, activeErrors } = useAppContext();
  const { progress } = state;

  const totalQuestions = progress.quizHistory.reduce((sum, r) => sum + r.totalCount, 0);
  const totalCorrect = progress.quizHistory.reduce((sum, r) => sum + r.correctCount, 0);
  const accuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>学习总览</h1>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{progress.completedPoints.length}</div>
          <div className={styles.statLabel}>已学知识点</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{totalQuestions}</div>
          <div className={styles.statLabel}>累计刷题</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{accuracy}%</div>
          <div className={styles.statLabel}>总正确率</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{activeErrors.length}</div>
          <div className={styles.statLabel}>待消灭错题</div>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>科目进度</h2>
      <div className={styles.subjectList}>
        {subjects.map(s => {
          const totalPoints = s.chapters.reduce(
            (sum, ch) => sum + ch.sections.reduce((s2, sec) => s2 + sec.knowledgePointIds.length, 0), 0
          );
          const completed = s.chapters.reduce(
            (sum, ch) => sum + ch.sections.reduce((s2, sec) => s2 + sec.knowledgePointIds.filter(id => state.progress.completedPoints.includes(id)).length, 0), 0
          );
          const pct = totalPoints > 0 ? Math.round((completed / totalPoints) * 100) : 0;
          return (
            <Link key={s.id} to={`/knowledge/${s.id}`} className={styles.subjectCard}>
              <div className={styles.subjectHeader}>
                <span className={styles.subjectDot} style={{ background: s.color }} />
                <span className={styles.subjectName}>{s.fullName}</span>
                <span className={styles.subjectChapters}>{s.chapters.length} 章</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${pct}%`, background: s.color }} />
              </div>
            </Link>
          );
        })}
      </div>

      <div className={styles.quickActions}>
        <Link to="/quiz" className={styles.actionButton}>
          开始刷题
        </Link>
        <Link to="/errorbook" className={styles.actionButtonSecondary}>
          查看错题本
        </Link>
      </div>
    </div>
  );
}
