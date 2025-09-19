import './App.css';
import { useRef, useReducer, useCallback, createContext, useMemo } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '노래 연습하기',
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) => {
        return item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      });
    case 'DELETE':
      return state.filter((item) => {
        return item.id !== action.targetId
      });
    default: return state;
  }
};

// Context 생성 및 내보내기 (Context 분리)
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {

  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      }
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  }, []);

  // onCreate, onUpdate, onDelete 함수에 useMemo 적용
  const memoizedDispatch = useMemo(() => {
    return { onCreate, onUpdate, onDelete }
  }, []);

  return (
    <div className='App'>
      <Header />
      {/* Context의 Provider에 하위 컴포넌트에서 사용할 데이터 전달 */}
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          <Editor />
          <List />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  )
}

export default App;