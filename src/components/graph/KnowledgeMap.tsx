import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as d3 from 'd3';
import { useAppContext } from '@/context/AppContext';
import { getKnowledgePointsByChapter } from '@data/knowledge-points';
import { getChapterById, subjects } from '@data/subjects';
import styles from './KnowledgeMap.module.css';

interface TreeNode {
  name: string;
  id?: string;
  isKP?: boolean;
  completed?: boolean;
  children?: TreeNode[];
}

interface KnowledgeMapProps {
  subject: string;
  chapterId: string;
}

export default function KnowledgeMap({ subject, chapterId }: KnowledgeMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { state } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    const chapter = getChapterById(chapterId);
    if (!chapter) return;

    const kps = getKnowledgePointsByChapter(chapterId);
    const subjectInfo = subjects.find(s => s.chapters.some(c => c.id === chapterId));

    const data: TreeNode = {
      name: `第${chapter.chapter.chapterNum}章 ${chapter.chapter.title}`,
      children: chapter.chapter.sections.map(sec => ({
        name: sec.title,
        children: sec.knowledgePointIds.map(kpId => {
          const kp = kps.find(k => k.id === kpId);
          return {
            name: kp ? kp.title : kpId,
            id: kpId,
            isKP: true,
            completed: state.progress.completedPoints.includes(kpId),
          };
        }),
      })),
    };

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const width = 900;
    const height = 650;
    svg.attr('viewBox', `0 0 ${width} ${height}`);

    const g = svg.append('g').attr('transform', `translate(${width / 2}, ${height / 2})`);

    const root = d3.hierarchy(data);
    const tree = d3.tree<TreeNode>().size([2 * Math.PI, Math.min(width, height) / 2.8]).separation((a, b) => (a.parent === b.parent ? 1 : 1.5) / a.depth);
    tree(root);

    // Links
    g.selectAll('.link')
      .data(root.links())
      .join('path')
      .attr('class', styles.link!)
      .attr('d', d3.linkRadial<any, any>()
        .angle(d => d.x)
        .radius(d => d.y) as any)
      .attr('fill', 'none')
      .attr('stroke', '#ccc')
      .attr('stroke-width', d => d.target.data.isKP ? 1 : 1.5);

    // Nodes
    const node = g.selectAll('.node')
      .data(root.descendants())
      .join('g')
      .attr('class', styles.node!)
      .attr('transform', (d: any) => `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`);

    node.append('circle')
      .attr('r', d => {
        if (d.depth === 0) return 10;
        if (d.data.isKP) return d.data.completed ? 5 : 4;
        return 6;
      })
      .attr('fill', d => {
        if (d.data.isKP) return d.data.completed ? '#16a34a' : (subjectInfo?.color ?? '#4f46e5');
        return d.depth === 0 ? (subjectInfo?.color ?? '#4f46e5') : '#555';
      })
      .attr('stroke', d => d.data.isKP && !d.data.completed ? '#999' : 'none')
      .attr('stroke-width', 1)
      .attr('cursor', d => d.data.isKP ? 'pointer' : 'default')
      .on('click', (_, d) => {
        if (d.data.isKP && d.data.id) {
          navigate(`/knowledge/${subject}/${chapterId}/${d.data.id}`);
        }
      });

    // Labels
    node.append('text')
      .attr('dy', '0.31em')
      .attr('x', (d: any) => d.x < Math.PI ? 12 : -12)
      .attr('text-anchor', (d: any) => d.x < Math.PI ? 'start' : 'end')
      .attr('transform', (d: any) => d.x < Math.PI ? '' : 'rotate(180)')
      .attr('font-size', (d: any) => {
        if (d.depth === 0) return '13px';
        if (d.data.isKP) return '10px';
        return '11px';
      })
      .attr('font-weight', d => d.depth <= 1 ? 'bold' : 'normal')
      .attr('fill', d => d.data.isKP && d.data.completed ? '#16a34a' : '#333')
      .text(d => {
        const maxLen = d.data.isKP ? 16 : 12;
        return d.data.name.length > maxLen ? d.data.name.slice(0, maxLen) + '..' : d.data.name;
      })
      .append('title').text(d => d.data.name);

  }, [subject, chapterId, state.progress.completedPoints, navigate]);

  return (
    <div className={styles.container}>
      <svg ref={svgRef} className={styles.svg} />
    </div>
  );
}
