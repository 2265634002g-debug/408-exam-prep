import { useParams, Link } from 'react-router-dom';
import { subjects, getSubjectById } from '@data/subjects';
import { useAppContext } from '@/context/AppContext';
import styles from './KnowledgeList.module.css';

export default function KnowledgeList() {
  const { subject } = useParams<{ subject: string }>();
  const subjectInfo = getSubjectById(subject ?? '');
  const { state } = useAppContext();

  if (!subjectInfo) {
    return <div className={styles.notFound}>科目不存在</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link to="/" className={styles.breadcrumbLink}>总览</Link>
        <span className={styles.breadcrumbSep}>/</span>
        <span className={styles.breadcrumbCurrent}>{subjectInfo.fullName}</span>
      </div>

      <h1 className={styles.title}>{subjectInfo.fullName}</h1>
      <p className={styles.subtitle}>{subjectInfo.chapters.length} 章 · 408统考科目</p>

      <div className={styles.chapterList}>
        {subjectInfo.chapters.map(chapter => {
          const completed = chapter.sections.every(sec =>
            sec.knowledgePointIds.length > 0 &&
            sec.knowledgePointIds.every(id => state.progress.completedPoints.includes(id))
          );
          const partial = chapter.sections.some(sec =>
            sec.knowledgePointIds.some(id => state.progress.completedPoints.includes(id))
          );

          return (
            <Link
              key={chapter.id}
              to={`/knowledge/${subject}/${chapter.id}`}
              className={styles.chapterCard}
            >
              <div className={styles.chapterNum}>第{chapter.chapterNum}章</div>
              <div className={styles.chapterTitle}>{chapter.title}</div>
              <div className={styles.chapterSections}>{chapter.sections.length} 节</div>
              {completed && <span className={styles.badgeDone}>已完成</span>}
              {partial && !completed && <span className={styles.badgeProgress}>进行中</span>}
            </Link>
          );
        })}
      </div>

      <div className={styles.otherSubjects}>
        <h3 className={styles.otherTitle}>其他科目</h3>
        <div className={styles.otherLinks}>
          {subjects.filter(s => s.id !== subject).map(s => (
            <Link key={s.id} to={`/knowledge/${s.id}`} className={styles.otherLink}>
              <span className={styles.dot} style={{ background: s.color }} />
              {s.fullName}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
