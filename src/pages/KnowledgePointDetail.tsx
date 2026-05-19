import { useParams, Link } from 'react-router-dom';
import { getKnowledgePointById } from '@data/knowledge-points';
import { getChapterById } from '@data/subjects';
import { useAppContext } from '@/context/AppContext';
import Markdown from '@/components/common/Markdown';
import styles from './KnowledgePointDetail.module.css';

export default function KnowledgePointDetail() {
  const { subject, chapterId, kpId } = useParams<{ subject: string; chapterId: string; kpId: string }>();
  const kp = getKnowledgePointById(kpId ?? '');
  const chapterResult = getChapterById(chapterId ?? '');
  const { state, dispatch } = useAppContext();

  if (!kp) {
    return (
      <div className={styles.container}>
        <p className={styles.notFound}>知识点不存在</p>
        <Link to={`/knowledge/${subject}/${chapterId}`} className={styles.backLink}>返回章节</Link>
      </div>
    );
  }

  const isCompleted = state.progress.completedPoints.includes(kp.id);
  const chapter = chapterResult?.chapter;
  const subjectInfo = chapterResult?.subject;

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link to="/" className={styles.breadcrumbLink}>总览</Link>
        <span className={styles.breadcrumbSep}>/</span>
        <Link to={`/knowledge/${subject}`} className={styles.breadcrumbLink}>{subjectInfo?.fullName}</Link>
        <span className={styles.breadcrumbSep}>/</span>
        <Link to={`/knowledge/${subject}/${chapterId}`} className={styles.breadcrumbLink}>
          第{chapter?.chapterNum}章 {chapter?.title}
        </Link>
        <span className={styles.breadcrumbSep}>/</span>
        <span className={styles.breadcrumbCurrent}>{kp.title}</span>
      </div>

      <div className={styles.header}>
        <h1 className={styles.title}>{kp.title}</h1>
        <label className={styles.completeToggle}>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => dispatch({ type: 'COMPLETE_POINT', pointId: kp.id })}
            className={styles.checkbox}
          />
          {isCompleted ? '已掌握' : '标记为已掌握'}
        </label>
      </div>

      <div className={styles.tags}>
        {kp.keyConcepts.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>

      <div className={styles.content}>
        <Markdown content={kp.content} />
      </div>

      <div className={styles.footer}>
        <Link to={`/knowledge/${subject}/${chapterId}`} className={styles.backButton}>
          ← 返回章节
        </Link>
      </div>
    </div>
  );
}
