import './App.css';
import { useReducer, useRef, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import Notfound from './pages/NotFound';

// 초기 데이터
const mockData = [
  {
    id: 1, 
    createDate: new Date().getTime(), 
    emotionId: 1, 
    content: '1번 일기 내용',
  },
  {
    id: 2, 
    createDate: new Date().getTime(), 
    emotionId: 2, 
    content: '2번 일기 내용',
  },
]

// reducer 함수
function reducer(state, action) {
  switch(action.type) {
    case 'CREATE': return [action.data, ...state];
    case 'UPDATE': return state.map((item) => {
      return String(item.id) === String(action.data.id) ? action.data : item
    });
    case 'DELETE': return state.filter((item) => {
      return String(item.id) !== String(action.id);
    });
    default: return state;
  };
};

// 일기 데이터 접근을 위한 Context
const DiaryStateContext = createContext();

// 일기 데이터 관리 함수 접근을 위한 Context
const DiaryDispatchContext = createContext();

function App() {

  // useReducer를 통해 일기 리스트를 State로 정의
  const [data, dispatch] = useReducer(reducer, mockData);
  // useRef를 통해 일기 ID 시퀀스 정의
  const idRef = useRef(3);

  // 일기 추가
  const onCreate = (createDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createDate,
        emotionId,
        content,
      }
    });
  };

  // 일기 수정
  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id, 
        createDate, 
        emotionId, 
        content,
      },
    });
  };

  // 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  };

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App;