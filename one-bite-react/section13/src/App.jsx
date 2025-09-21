import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/NotFound';

// assets 폴더의 이미지 불러오기
import getEmotionImage from './util/get-emotion-image';

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
        {/* assets 폴더에서 불러온 이미지 렌더링 */}
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>
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
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App;