import { useParams, Link } from 'react-router-dom';
import { getChapterById } from '@data/subjects';
import KnowledgeMap from '@/components/graph/KnowledgeMap';
import styles from './ChapterMap.module.css';

export default function ChapterMapPage() {
  const { subject, chapterId } = useParams<{ subject: string; chapterId: string }>();
  const chapterResult = getChapterById(chapterId ?? '');

  if (!chapterResult) {
    return <div className={styles.notFound}>章节不存在</div>;
  }

  const { chapter, subject: subjectInfo } = chapterResult;

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link to="/" className={styles.link}>总览</Link>
        <span className={styles.sep}>/</span>
        <Link to={`/knowledge/${subject}`} className={styles.link}>{subjectInfo.fullName}</Link>
        <span className={styles.sep}>/</span>
        <Link to={`/knowledge/${subject}/${chapterId}`} className={styles.link}>{chapter.title}</Link>
        <span className={styles.sep}>/</span>
        <span className={styles.current}>知识导图</span>
      </div>

      <h1 className={styles.title}>第{chapter.chapterNum}章 {chapter.title} — 知识导图</h1>
      <p className={styles.hint}>点击节点可跳转到对应知识点。绿色 = 已标记掌握。</p>

      <KnowledgeMap subject={subject!} chapterId={chapterId!} />

      <div className={styles.backRow}>
        <Link to={`/knowledge/${subject}/${chapterId}`} className={styles.backButton}>← 返回章节</Link>
      </div>
    </div>
  );
}
