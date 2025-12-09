import './App.css';
import { useState, useReducer, useRef, useEffect, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import Notfound from './pages/NotFound';

// reducer 함수
function reducer(state, action) {
  console.log('state ', state);
  // 새로운 State
  let nextState;
  // action의 type에 따라 데이터 추가, 수정, 삭제 후 State를 새로운 State로 설정
  switch (action.type) {
    case 'INIT': {
      return action.data;
    };
    case 'CREATE': {
      nextState = [action.data, ...state];
      break;
    };
    case 'UPDATE': {
      nextState = state.map(
        (item) => String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    };
    case 'DELETE': {
      nextState = state.filter(
        (item) => String(item.id) !== String(action.id)
      );
      break;
    };
    default:
      return state;
  };
  // 웹 스토리지에 새로운 State 저장
  localStorage.setItem('diary', JSON.stringify(nextState));
  // 새로운 State 반환
  return nextState;
};

// 일기 데이터 접근을 위한 Context
export const DiaryStateContext = createContext();

// 일기 데이터 관리 함수 접근을 위한 Context
export const DiaryDispatchContext = createContext();

function App() {

  // useState를 통해 페이지가 로딩 중인지 여부를 State로 정의
  const [isLoading, setIsLoading] = useState(true);

  // useReducer를 통해 일기 리스트를 State로 정의
  const [data, dispatch] = useReducer(reducer, []);

  // useRef를 통해 일기 ID 시퀀스 정의
  const idRef = useRef(0);

  // 컴포넌트 마운트 후 웹 스토리지에 저장된 데이터를 일기 리스트 State로 설정
  useEffect(() => {
    // 웹 스토리지에 저장된 JSON 문자열 데이터 반환
    const storedData = localStorage.getItem('diary');
    // JSON 문자열 데이터가 undefined일 경우에 대한 처리
    if (!storedData) {
      // 데이터 로딩 완료
      setIsLoading(false);
      return;
    }
    // 웹 스토리지에 저장된 JSON 문자열 데이터를 객체 타입으로 변환
    const parsedData = JSON.parse(storedData);
    // parsedData가 배열 형태가 아닐 경우에 대한 처리
    if (!Array.isArray(parsedData)) {
      // 데이터 로딩 완료
      setIsLoading(false);
      return;
    }
    // 일기 리스트의 일기 ID 중 최대값 조회
    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      };
    });
    // 최대값보다 1만큼 큰 값을 일기 시퀀스의 다음 일기 ID로 설정
    idRef.current = maxId + 1;
    // 변환한 객체 타입 데이터를 일기 리스트 State로 설정
    dispatch({
      type: 'INIT',
      data: parsedData,
    });
    // 데이터 로딩 완료
    setIsLoading(false);
  }, []);

  // 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      }
    });
  };

  // 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
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

  // 데이터 로딩이 완료되지 않을 경우 컴포넌트 렌더링 방지
  if (isLoading) {
    return (
      <div>데이터 로딩 중 입니다.</div>
    );
  };

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
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