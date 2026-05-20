import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from '@/context/AppContext';
import AppLayout from '@/components/layout/AppLayout';
import Dashboard from '@/pages/Dashboard';
import KnowledgeList from '@/pages/KnowledgeList';
import KnowledgeDetail from '@/pages/KnowledgeDetail';
import KnowledgePointDetail from '@/pages/KnowledgePointDetail';
import QuizConfigPage from '@/pages/QuizConfig';
import QuizSessionPage from '@/pages/QuizSession';
import QuizResultPage from '@/pages/QuizResult';
import ErrorBookPage from '@/pages/ErrorBook';
import ChapterMapPage from '@/pages/ChapterMap';
import KnowledgeGraphPage from '@/pages/KnowledgeGraphPage';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <AppProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/knowledge/:subject" element={<KnowledgeList />} />
            <Route path="/knowledge/:subject/:chapterId" element={<KnowledgeDetail />} />
            <Route path="/knowledge/:subject/:chapterId/:kpId" element={<KnowledgePointDetail />} />
            <Route path="/quiz" element={<QuizConfigPage />} />
            <Route path="/quiz/session" element={<QuizSessionPage />} />
            <Route path="/quiz/result/:sessionId" element={<QuizResultPage />} />
            <Route path="/errorbook" element={<ErrorBookPage />} />
            <Route path="/knowledge/:subject/:chapterId/map" element={<ChapterMapPage />} />
            <Route path="/knowledge-graph" element={<KnowledgeGraphPage />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}
