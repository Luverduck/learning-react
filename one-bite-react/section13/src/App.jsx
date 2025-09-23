import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Edit from './pages/Edit';
import Notfound from './pages/NotFound';
import Button from './components/Button';
import Header from './components/Header';

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
      {/* Header 컴포넌트 렌더링 */}
      <Header
        title={'Header'}
        leftChild={<Button text={'Left'} />}
        rightChild={<Button text={'Right'} />}
      />
      {/* Button 컴포넌트 렌더링 */}
      <Button
        text={'일반'}
        onClick={() => { console.log("일반버튼 클릭") }}
      />
      <Button
        text={'긍정'}
        type={'POSITIVE'}
        onClick={() => { console.log("긍정버튼 클릭") }}
      />
      <Button
        text={'부정'}
        type={'NEGATIVE'}
        onClick={() => { console.log("부정버튼 클릭") }}
      />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<New />} />
        <Route path='/diary/:id' element={<Diary />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App;