import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/NotFound';

function App() {

  // 페이지 이동 함수 반환
  const nav = useNavigate();
  
  // onClick 이벤트에 대한 이벤트 핸들러 정의
  const onClickButton = () => {
    nav('/new');
  };

  return (
    <>
      <div>
        {/* Link 컴포넌트 정의 */}
        <Link to={'/'}>Home</Link>
        <Link to={'/new'}>New</Link>
        <Link to={'/diary'}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id/:pw" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App;