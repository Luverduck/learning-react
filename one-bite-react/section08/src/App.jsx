import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const isMount = useRef(false);
  
  // 마운트 (Mount)
  useEffect(() => {
    console.log('mount');
  }, []);

  // 업데이트 (Update)
  // - 의존성 배열을 전달하지 않을 경우
  useEffect(() => {
    if(!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log('update');
  });
  // - 의존성 배열에 특정 변수를 요소로 포함하여 전달할 경우
  useEffect(() => {
    console.log('update');
  }, [count]);

  const onClickButton = (value) => {
    setCount(count + value);
  }
  
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e) => {
          setInput(e.target.value);
        }} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
