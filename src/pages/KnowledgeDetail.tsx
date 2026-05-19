import { useParams, Link } from 'react-router-dom';
import { getChapterById } from '@data/subjects';
import { getKnowledgePointsByChapter } from '@data/knowledge-points';
import { useAppContext } from '@/context/AppContext';
import styles from './KnowledgeDetail.module.css';

export default function KnowledgeDetail() {
  const { subject, chapterId } = useParams<{ subject: string; chapterId: string }>();
  const result = getChapterById(chapterId ?? '');
  const { state, dispatch } = useAppContext();

  if (!result) {
    return <div className={styles.notFound}>章节不存在</div>;
  }

  const { chapter, subject: subjectInfo } = result;
  const knowledgePoints = getKnowledgePointsByChapter(chapterId ?? '');

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link to="/" className={styles.breadcrumbLink}>总览</Link>
        <span className={styles.breadcrumbSep}>/</span>
        <Link to={`/knowledge/${subject}`} className={styles.breadcrumbLink}>{subjectInfo.fullName}</Link>
        <span className={styles.breadcrumbSep}>/</span>
        <span className={styles.breadcrumbCurrent}>{chapter.title}</span>
      </div>

      <h1 className={styles.title}>
        第{chapter.chapterNum}章 {chapter.title}
      </h1>

      <div className={styles.sectionList}>
        {chapter.sections.map(section => {
          const sectionKps = knowledgePoints.filter(kp =>
            section.knowledgePointIds.includes(kp.id)
          );
          const completedCount = sectionKps.filter(
            kp => state.progress.completedPoints.includes(kp.id)
          ).length;

          return (
            <div key={section.id} className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>{section.title}</h3>
                {sectionKps.length > 0 && (
                  <span className={styles.sectionProgress}>
                    {completedCount}/{sectionKps.length}
                  </span>
                )}
              </div>
              {sectionKps.length === 0 ? (
                <p className={styles.emptyHint}>知识点内容将在后续版本中填充</p>
              ) : (
                <div className={styles.kpList}>
                  {sectionKps.map(kp => {
                    const isCompleted = state.progress.completedPoints.includes(kp.id);
                    return (
                      <div key={kp.id} className={styles.kpItem}>
                        <input
                          type="checkbox"
                          checked={isCompleted}
                          onChange={() => dispatch({ type: 'COMPLETE_POINT', pointId: kp.id })}
                          className={styles.checkbox}
                        />
                        <Link
                          to={`/knowledge/${subject}/${chapterId}/${kp.id}`}
                          className={styles.kpLink}
                        >
                          <span className={styles.kpTitle}>{kp.title}</span>
                          <span className={styles.kpTags}>
                            {kp.keyConcepts.slice(0, 3).map(tag => (
                              <span key={tag} className={styles.tag}>{tag}</span>
                            ))}
                          </span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.actions}>
        <Link to={`/quiz?subject=${subject}&chapter=${chapterId}`} className={styles.quizButton}>
          刷本章题目
        </Link>
      </div>
    </div>
  );
}
