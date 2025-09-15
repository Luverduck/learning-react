import './App.css';
import { useState, useRef, useReducer } from 'react';
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

// 상태 변화 함수
function reducer(state, action) {
  switch (action.type) {
    // TO-DO 리스트에 새로운 TO-DO 추가
    case 'CREATE':
      return [action.data, ...state];
    // TO-DO 리스트에서 targetId에 해당하는 TO-DO의 체크 상태 토글
    case 'UPDATE':
      return state.map((item) => {
        return item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      });
    // TO-DO 리스트에서 targetId에 해당하는 TO-DO 필터링
    case 'DELETE':
      return state.filter((item) => {
        return item.id !== action.targetId
      });
    default: return state;
  }
};

function App() {

  // useReducer를 통해 상태 변수 선언
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(0);

  // 새로운 TO-DO를 추가하는 함수
  const onCreate = (content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      }
    });
  };

  // TO-DO의 체크 상태를 변경하는 함수
  const onUpdate = (targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    });
  };

  // TO-DO 리스트에서 TO-DO를 제거하는 함수
  const onDelete = (targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  };

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App;