import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { subjects } from '@data/subjects';
import { allKnowledgePoints, getKnowledgePointById } from '@data/knowledge-points';
import { useAppContext } from '@/context/AppContext';
import Markdown from '@/components/common/Markdown';
import type { Subject } from '@/types/knowledge';
import styles from './KnowledgeGraph.module.css';

export default function KnowledgeGraph() {
  const navigate = useNavigate();
  const { state } = useAppContext();
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [selectedKP, setSelectedKP] = useState<string | null>(null);
  const [filter, setFilter] = useState<Subject | 'all'>('all');

  const filteredSubjects = filter === 'all' ? subjects : subjects.filter(s => s.id === filter);

  const toggle = (id: string) => {
    setExpanded(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const kp = selectedKP ? getKnowledgePointById(selectedKP) : null;

  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <span className={styles.label}>筛选科目：</span>
        <button className={filter === 'all' ? styles.chipActive : styles.chip} onClick={() => setFilter('all')}>全部</button>
        {subjects.map(s => (
          <button key={s.id} className={filter === s.id ? styles.chipActive : styles.chip}
            onClick={() => setFilter(s.id)} style={filter === s.id ? { background: s.color, borderColor: s.color } : {}}>
            <span className={styles.dot} style={{ background: s.color }} />{s.name}
          </button>
        ))}
        <span className={styles.count}>{allKnowledgePoints.filter(k => filter === 'all' || k.id.startsWith(filter)).length} 个知识点</span>
      </div>

      <div className={styles.mainArea}>
        <div className={styles.treePanel}>
          {filteredSubjects.map(subject => (
            <div key={subject.id} className={styles.subjectBlock}>
              <div className={styles.subjectHeader} onClick={() => toggle(subject.id)} style={{ borderLeftColor: subject.color }}>
                <span className={styles.arrow}>{expanded.has(subject.id) ? '▼' : '▶'}</span>
                <span className={styles.subjectDot} style={{ background: subject.color }} />
                <span className={styles.subjectName}>{subject.fullName}</span>
                <span className={styles.badge}>
                  {subject.chapters.reduce((sum, ch) =>
                    sum + ch.sections.reduce((s2, sec) => s2 + sec.knowledgePointIds.filter(id => state.progress.completedPoints.includes(id)).length, 0), 0)}
                  /
                  {subject.chapters.reduce((sum, ch) =>
                    sum + ch.sections.reduce((s2, sec) => s2 + sec.knowledgePointIds.length, 0), 0)}
                </span>
              </div>

              {expanded.has(subject.id) && subject.chapters.map(chapter => (
                <div key={chapter.id} className={styles.chapterBlock}>
                  <div className={styles.chapterHeader} onClick={() => toggle(chapter.id)}>
                    <span className={styles.arrow}>{expanded.has(chapter.id) ? '▼' : '▶'}</span>
                    <span className={styles.chapterName}>第{chapter.chapterNum}章 {chapter.title}</span>
                  </div>

                  {expanded.has(chapter.id) && chapter.sections.map(section => (
                    <div key={section.id} className={styles.sectionBlock}>
                      <div className={styles.sectionHeader} onClick={() => toggle(section.id)}>
                        <span className={styles.arrow}>{expanded.has(section.id) ? '▼' : '▶'}</span>
                        <span className={styles.sectionName}>{section.title}</span>
                        <span className={styles.kpCount}>{section.knowledgePointIds.length}</span>
                      </div>

                      {expanded.has(section.id) && section.knowledgePointIds.map(kpId => {
                        const kpData = allKnowledgePoints.find(k => k.id === kpId);
                        const completed = state.progress.completedPoints.includes(kpId);
                        return (
                          <div
                            key={kpId}
                            className={`${styles.kpItem} ${selectedKP === kpId ? styles.kpSelected : ''} ${completed ? styles.kpCompleted : ''}`}
                            onClick={() => setSelectedKP(kpId)}
                          >
                            <span className={styles.kpDot} style={{
                              background: completed ? '#16a34a' : subject.color,
                              opacity: completed ? 1 : 0.5,
                            }} />
                            <span className={styles.kpTitle}>{kpData?.title ?? kpId}</span>
                            <span className={styles.kpTags}>
                              {kpData?.keyConcepts.slice(0, 2).map(t => (
                                <span key={t} className={styles.miniTag}>{t}</span>
                              ))}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.detailPanel}>
          {kp ? (
            <>
              <div className={styles.detailHeader}>
                <h3 className={styles.detailTitle}>{kp.title}</h3>
                <div className={styles.detailTags}>
                  {kp.keyConcepts.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                </div>
                <button className={styles.detailBtn} onClick={() => {
                  const prefix = kp.id.split('-')[0];
                  navigate(`/knowledge/${prefix}/${kp.chapterId}/${kp.id}`);
                }}>进入完整页面 →</button>
              </div>
              <div className={styles.detailContent}>
                <Markdown content={kp.content} />
              </div>
            </>
          ) : (
            <div className={styles.emptyHint}>
              <p>← 点击左侧知识点查看详情</p>
              <p>展开科目 → 章节 → 节 → 知识点</p>
              <p>绿色 = 已标记掌握</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
