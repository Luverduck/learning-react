import './App.css';
import { useState, useRef } from 'react';
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

function App() {

  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(0); // ID 설정을 위한 ref

  // 새로운 TO-DO를 생성하는 함수
  const onCreate = (content) => {
    // 새로운 TO-DO 생성
    const newTodo = {
      id: idRef.current++, // 새로운 TO-DO를 생성할 때마다 ID 증가
      isDone: false,
      content: content,
      date: new Date().getTime(),
    }
    // 새로운 TO-DO와 기존 todos의 요소를 합친 배열을 새로운 todos로 설정
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} />
    </div>
  )
}

export default App;