import { createContext, useContext, useReducer, useEffect, type ReactNode, type Dispatch } from 'react';
import type { UserProgress, ErrorItem } from '@/types/user';
import type { QuizResult } from '@/types/question';
import { loadProgress, saveProgress } from '@/utils/storage';

interface AppState {
  progress: UserProgress;
}

type AppAction =
  | { type: 'COMPLETE_POINT'; pointId: string }
  | { type: 'ADD_QUIZ_RESULT'; result: QuizResult }
  | { type: 'ADD_ERROR_ITEM'; questionId: string; userAnswer: string }
  | { type: 'MASTER_ERROR'; questionId: string }
  | { type: 'RESET_PROGRESS' };

function createInitialProgress(): UserProgress {
  return { completedPoints: [], quizHistory: [], errorBook: [] };
}

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'COMPLETE_POINT': {
      if (state.progress.completedPoints.includes(action.pointId)) return state;
      return {
        ...state,
        progress: {
          ...state.progress,
          completedPoints: [...state.progress.completedPoints, action.pointId],
        },
      };
    }
    case 'ADD_QUIZ_RESULT': {
      return {
        ...state,
        progress: {
          ...state.progress,
          quizHistory: [...state.progress.quizHistory, action.result],
        },
      };
    }
    case 'ADD_ERROR_ITEM': {
      const existing = state.progress.errorBook.find(
        e => e.questionId === action.questionId
      );
      if (existing) {
        return {
          ...state,
          progress: {
            ...state.progress,
            errorBook: state.progress.errorBook.map(e =>
              e.questionId === action.questionId
                ? {
                    ...e,
                    wrongCount: e.wrongCount + 1,
                    lastWrongDate: new Date().toISOString(),
                    userAnswers: [...e.userAnswers, action.userAnswer],
                  }
                : e
            ),
          },
        };
      }
      return {
        ...state,
        progress: {
          ...state.progress,
          errorBook: [
            ...state.progress.errorBook,
            {
              questionId: action.questionId,
              wrongCount: 1,
              lastWrongDate: new Date().toISOString(),
              mastered: false,
              userAnswers: [action.userAnswer],
            },
          ],
        },
      };
    }
    case 'MASTER_ERROR': {
      return {
        ...state,
        progress: {
          ...state.progress,
          errorBook: state.progress.errorBook.map(e =>
            e.questionId === action.questionId ? { ...e, mastered: true } : e
          ),
        },
      };
    }
    case 'RESET_PROGRESS': {
      return { progress: createInitialProgress() };
    }
    default:
      return state;
  }
}

interface AppContextValue {
  state: AppState;
  dispatch: Dispatch<AppAction>;
  errorBook: ErrorItem[];
  activeErrors: ErrorItem[];
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, {
    progress: loadProgress() || createInitialProgress(),
  });

  useEffect(() => {
    saveProgress(state.progress);
  }, [state.progress]);

  const errorBook = state.progress.errorBook;
  const activeErrors = errorBook.filter(e => !e.mastered);

  return (
    <AppContext.Provider value={{ state, dispatch, errorBook, activeErrors }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useAppContext must be used within AppProvider');
  return ctx;
}
