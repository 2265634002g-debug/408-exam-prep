import { useNavigate } from 'react-router-dom';
import { getChapterById, subjects } from '@data/subjects';
import { getKnowledgePointsByChapter } from '@data/knowledge-points';
import { useAppContext } from '@/context/AppContext';
import styles from './KnowledgeMap.module.css';

interface KnowledgeMapProps {
  subject: string;
  chapterId: string;
}

export default function KnowledgeMap({ subject, chapterId }: KnowledgeMapProps) {
  const navigate = useNavigate();
  const { state } = useAppContext();
  const chapter = getChapterById(chapterId);
  if (!chapter) return <div className={styles.notFound}>章节不存在</div>;

  const kps = getKnowledgePointsByChapter(chapterId);
  const subjectInfo = subjects.find(s => s.chapters.some(c => c.id === chapterId));

  return (
    <div className={styles.container}>
      <div className={styles.chapterTitle} style={{ borderLeftColor: subjectInfo?.color ?? '#4f46e5' }}>
        第{chapter.chapter.chapterNum}章 {chapter.chapter.title}
      </div>

      {chapter.chapter.sections.map(section => {
        const sectionKps = section.knowledgePointIds.map(id => kps.find(k => k.id === id)).filter(Boolean);
        const completedCount = section.knowledgePointIds.filter(id => state.progress.completedPoints.includes(id)).length;

        return (
          <div key={section.id} className={styles.sectionBlock}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTitle}>{section.title}</span>
              <span className={styles.sectionProgress}>{completedCount}/{section.knowledgePointIds.length}</span>
            </div>

            {sectionKps.length > 0 ? (
              <div className={styles.kpList}>
                {sectionKps.map(kp => {
                  if (!kp) return null;
                  const completed = state.progress.completedPoints.includes(kp.id);
                  return (
                    <div
                      key={kp.id}
                      className={`${styles.kpCard} ${completed ? styles.kpCompleted : ''}`}
                      onClick={() => navigate(`/knowledge/${subject}/${chapterId}/${kp.id}`)}
                    >
                      <div className={styles.kpLeft}>
                        <span className={styles.kpDot} style={{
                          background: completed ? '#16a34a' : (subjectInfo?.color ?? '#4f46e5'),
                        }} />
                      </div>
                      <div className={styles.kpRight}>
                        <div className={styles.kpTitleRow}>
                          <span className={styles.kpTitle}>{kp.title}</span>
                          {completed && <span className={styles.doneBadge}>✓</span>}
                        </div>
                        <div className={styles.kpConcepts}>
                          {kp.keyConcepts.slice(0, 4).map(c => (
                            <span key={c} className={styles.conceptTag}>{c}</span>
                          ))}
                        </div>
                        {kp.content && (
                          <div className={styles.kpPreview}>
                            {kp.content.slice(0, 120).replace(/[#*`|>\-$\\\n]/g, ' ').trim()}...
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className={styles.emptySection}>本节知识点待补充</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
