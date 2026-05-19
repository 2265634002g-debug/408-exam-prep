import { Link } from 'react-router-dom';
import KnowledgeGraph from '@/components/graph/KnowledgeGraph';
import styles from './KnowledgeGraphPage.module.css';

export default function KnowledgeGraphPage() {
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumb}>
        <Link to="/" className={styles.link}>总览</Link>
        <span className={styles.sep}>/</span>
        <span className={styles.current}>知识图谱</span>
      </div>

      <h1 className={styles.title}>全局知识图谱</h1>
      <p className={styles.hint}>
        展示全部知识点之间的关联关系。绿色节点 = 已标记掌握。拖拽节点可重新布局，点击跳转到详情。
      </p>

      <KnowledgeGraph />
    </div>
  );
}
