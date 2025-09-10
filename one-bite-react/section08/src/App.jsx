import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  
  // useEffect(() => {}, [])
  useEffect(()=> {
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]);

  const onClickButton = (value) => {
    setCount(count + value);
    // 비동기로 setCount 함수가 실행되므로 변경 전 count 값 출력
    // console.log(`count: ${count}`);
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
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
