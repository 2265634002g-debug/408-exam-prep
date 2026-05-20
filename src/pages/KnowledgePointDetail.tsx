import { useParams, Link } from 'react-router-dom';
import { getKnowledgePointById, getKnowledgePointsByChapter } from '@data/knowledge-points';
import { getChapterById } from '@data/subjects';
import { useAppContext } from '@/context/AppContext';
import Markdown from '@/components/common/Markdown';
import { examRefs } from '@data/exam-refs';
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

  // Related knowledge points
  const relatedKPs = kp.relatedPoints
    .map(id => getKnowledgePointById(id))
    .filter(Boolean);

  // Previous / Next navigation within the chapter
  const chapterKPs = getKnowledgePointsByChapter(chapterId ?? '');
  const currentIndex = chapterKPs.findIndex(k => k.id === kp.id);
  const prevKP = currentIndex > 0 ? chapterKPs[currentIndex - 1] : null;
  const nextKP = currentIndex < chapterKPs.length - 1 ? chapterKPs[currentIndex + 1] : null;

  // Find subject/chapter context for related KPs
  const getSubjectForKp = (kpId: string) => {
    const prefix = kpId.split('-')[0];
    return prefix;
  };

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
        <div className={styles.headerActions}>
          <Link to={`/knowledge/${subject}/${chapterId}/map`} className={styles.mapLink}>
            查看导图
          </Link>
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
      </div>

      <div className={styles.tags}>
        {kp.keyConcepts.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>

      {examRefs[kp.id] && examRefs[kp.id].length > 0 && (
        <div className={styles.refSection}>
          <span className={styles.refLabel}>真题：</span>
          {examRefs[kp.id].map((ref, i) => (
            <span key={i} className={styles.refBadge}>{ref}</span>
          ))}
        </div>
      )}

      <div className={styles.content}>
        <Markdown content={kp.content} />
      </div>

      {/* Related Knowledge Points */}
      {relatedKPs.length > 0 && (
        <div className={styles.relatedSection}>
          <h3 className={styles.relatedTitle}>相关知识点</h3>
          <div className={styles.relatedGrid}>
            {relatedKPs.map(rkp => {
              const rSubject = getSubjectForKp(rkp!.id);
              const rChapter = getChapterById(rkp!.chapterId);
              return (
                <Link
                  key={rkp!.id}
                  to={`/knowledge/${rSubject}/${rkp!.chapterId}/${rkp!.id}`}
                  className={styles.relatedCard}
                >
                  <span className={styles.relatedSubject}>{rSubject.toUpperCase()}</span>
                  <span className={styles.relatedName}>{rkp!.title}</span>
                  {rChapter && (
                    <span className={styles.relatedChapter}>第{rChapter.chapter.chapterNum}章</span>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Previous / Next Navigation */}
      <div className={styles.navRow}>
        {prevKP ? (
          <Link
            to={`/knowledge/${subject}/${chapterId}/${prevKP.id}`}
            className={styles.navPrev}
          >
            ← {prevKP.title}
          </Link>
        ) : <span />}
        {nextKP ? (
          <Link
            to={`/knowledge/${subject}/${chapterId}/${nextKP.id}`}
            className={styles.navNext}
          >
            {nextKP.title} →
          </Link>
        ) : <span />}
      </div>

      <div className={styles.footer}>
        <Link to={`/knowledge/${subject}/${chapterId}`} className={styles.backButton}>
          ← 返回章节
        </Link>
      </div>
    </div>
  );
}
