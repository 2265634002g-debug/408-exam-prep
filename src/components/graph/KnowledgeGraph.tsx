import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as d3 from 'd3';
import { allKnowledgePoints } from '@data/knowledge-points';
import { subjects } from '@data/subjects';
import { useAppContext } from '@/context/AppContext';
import type { Subject } from '@/types/knowledge';
import styles from './KnowledgeGraph.module.css';

interface GraphNode {
  id: string;
  title: string;
  subject: Subject;
  chapterId: string;
  completed: boolean;
}

interface GraphLink {
  source: string;
  target: string;
}

export default function KnowledgeGraph() {
  const svgRef = useRef<SVGSVGElement>(null);
  const { state } = useAppContext();
  const navigate = useNavigate();
  const [filter, setFilter] = useState<Subject | 'all'>('all');

  useEffect(() => {
    // Build graph data
    const nodes: GraphNode[] = allKnowledgePoints.map(kp => {
      const prefix = kp.id.split('-')[0] as Subject;
      return {
        id: kp.id,
        title: kp.title,
        subject: prefix,
        chapterId: kp.chapterId,
        completed: state.progress.completedPoints.includes(kp.id),
      };
    });

    const nodeIds = new Set(nodes.map(n => n.id));
    const links: GraphLink[] = [];
    for (const kp of allKnowledgePoints) {
      for (const relId of kp.relatedPoints) {
        if (nodeIds.has(relId)) {
          links.push({ source: kp.id, target: relId });
        }
      }
    }

    // Filter
    const filteredNodes = filter === 'all' ? nodes : nodes.filter(n => n.subject === filter);
    const filteredIds = new Set(filteredNodes.map(n => n.id));
    const filteredLinks = links.filter(l => filteredIds.has(l.source as string) && filteredIds.has(l.target as string));

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const width = 960;
    const height = 680;
    svg.attr('viewBox', `0 0 ${width} ${height}`);

    const subjectColors: Record<string, string> = {};
    subjects.forEach(s => { subjectColors[s.id] = s.color; });

    const simulation = d3.forceSimulation(filteredNodes as any)
      .force('link', d3.forceLink(filteredLinks).id((d: any) => d.id).distance(80))
      .force('charge', d3.forceManyBody().strength(-150))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(20));

    const g = svg.append('g');

    const link = g.append('g')
      .selectAll('line')
      .data(filteredLinks)
      .join('line')
      .attr('stroke', '#ccc')
      .attr('stroke-width', 1)
      .attr('stroke-opacity', 0.6);

    const node = g.append('g')
      .selectAll('circle')
      .data(filteredNodes)
      .join('circle')
      .attr('r', d => d.completed ? 6 : 5)
      .attr('fill', d => d.completed ? '#16a34a' : (subjectColors[d.subject] ?? '#999'))
      .attr('stroke', d => d.completed ? '#16a34a' : '#fff')
      .attr('stroke-width', 1.5)
      .attr('cursor', 'pointer')
      .on('click', (_, d) => {
        const kp = allKnowledgePoints.find(k => k.id === d.id);
        if (kp) navigate(`/knowledge/${d.subject}/${kp.chapterId}/${d.id}`);
      })
      .call(d3.drag<any, any>()
        .on('start', (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x; d.fy = d.y;
        })
        .on('drag', (event, d) => { d.fx = event.x; d.fy = event.y; })
        .on('end', (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null; d.fy = null;
        }) as any);

    const label = g.append('g')
      .selectAll('text')
      .data(filteredNodes)
      .join('text')
      .attr('font-size', '8px')
      .attr('dx', 8)
      .attr('dy', 3)
      .attr('fill', '#555')
      .text(d => d.title.length > 10 ? d.title.slice(0, 10) + '..' : d.title)
      .append('title').text(d => d.title);

    node.append('title').text(d => `[${d.subject.toUpperCase()}] ${d.title}`);

    simulation.on('tick', () => {
      link.attr('x1', (d: any) => d.source.x).attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x).attr('y2', (d: any) => d.target.y);
      node.attr('cx', (d: any) => d.x).attr('cy', (d: any) => d.y);
      label.attr('x', (d: any) => d.x).attr('y', (d: any) => d.y);
    });

    return () => { simulation.stop(); };
  }, [filter, state.progress.completedPoints, navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <span className={styles.label}>筛选科目：</span>
        <button className={filter === 'all' ? styles.chipActive : styles.chip} onClick={() => setFilter('all')}>全部</button>
        {subjects.map(s => (
          <button key={s.id} className={filter === s.id ? styles.chipActive : styles.chip}
            onClick={() => setFilter(s.id)} style={filter === s.id ? { background: s.color } : {}}>
            <span className={styles.dot} style={{ background: s.color }} />{s.name}
          </button>
        ))}
      </div>
      <svg ref={svgRef} className={styles.svg} />
    </div>
  );
}
