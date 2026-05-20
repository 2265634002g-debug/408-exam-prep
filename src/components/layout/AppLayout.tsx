import { useState, useRef, useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { subjects } from '@data/subjects';
import { searchKnowledgePoints } from '@data/knowledge-points';
import styles from './AppLayout.module.css';

export default function AppLayout() {
  const [query, setQuery] = useState('');
  const [focus, setFocus] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const results = query.trim() ? searchKnowledgePoints(query).slice(0, 8) : [];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setFocus(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleSelect = (kpId: string) => {
    const kp = results.find(r => r.id === kpId);
    if (kp) {
      setQuery('');
      setFocus(false);
      navigate(`/knowledge/ds/${kp.chapterId}/${kpId}`);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={styles.layout}>
      <aside className={`${styles.sidebar} ${menuOpen ? styles.sidebarOpen : ''}`}>
        <div className={styles.logo}>
          <span className={styles.logoText}>408</span>
        </div>

        <div className={styles.searchWrap} ref={containerRef}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="搜索知识点..."
            value={query}
            onChange={e => { setQuery(e.target.value); setFocus(true); }}
            onFocus={() => setFocus(true)}
          />
          {focus && results.length > 0 && (
            <div className={styles.searchDropdown}>
              {results.map(kp => (
                <button
                  key={kp.id}
                  className={styles.searchItem}
                  onClick={() => { handleSelect(kp.id); closeMenu(); }}
                >
                  <span className={styles.searchItemTitle}>{kp.title}</span>
                  <span className={styles.searchItemChapter}>
                    {subjects.find(s => s.chapters.some(c => c.id === kp.chapterId))?.name}
                    {' · '}
                    {kp.keyConcepts.slice(0, 2).join(', ')}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        <nav className={styles.nav}>
          <NavLink to="/" end className={({ isActive }) => isActive ? styles.navItemActive : styles.navItem}>
            <span className={styles.navIcon}>⌂</span>
            <span>总览</span>
          </NavLink>
          {subjects.map(s => (
            <NavLink
              key={s.id}
              to={`/knowledge/${s.id}`}
              className={({ isActive }) => isActive ? styles.navItemActive : styles.navItem}
            >
              <span className={styles.navDot} style={{ background: s.color }} />
              <span>{s.name}</span>
            </NavLink>
          ))}
          <div className={styles.navDivider} />
          <NavLink to="/quiz" className={({ isActive }) => isActive ? styles.navItemActive : styles.navItem}>
            <span className={styles.navIcon}>✎</span>
            <span>刷题</span>
          </NavLink>
          <NavLink to="/errorbook" className={({ isActive }) => isActive ? styles.navItemActive : styles.navItem}>
            <span className={styles.navIcon}>☗</span>
            <span>错题本</span>
          </NavLink>
          <div className={styles.navDivider} />
          <NavLink to="/knowledge/ma" className={({ isActive }) => isActive ? styles.navItemActive : styles.navItem}>
            <span className={styles.navDot} style={{ background: '#8b5cf6' }} />
            <span>数学一</span>
          </NavLink>
          <div className={styles.navDivider} />
          <NavLink to="/knowledge-graph" className={({ isActive }) => isActive ? styles.navItemActive : styles.navItem}>
            <span className={styles.navIcon}>◉</span>
            <span>知识图谱</span>
          </NavLink>
        </nav>
      </aside>
      {menuOpen && <div className={styles.overlay} onClick={closeMenu} />}
      <main className={styles.main} onClick={closeMenu}>
        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="菜单">
          <span /><span /><span />
        </button>
        <Outlet />
      </main>
    </div>
  );
}
