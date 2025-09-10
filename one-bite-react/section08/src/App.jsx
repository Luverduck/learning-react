import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import { useState } from 'react';

function App() {
  // 현재 카운트
  const [count, setCount] = useState(0);
  // 현재 카운트에 대한 set 함수
  const onClickButton = (value) => {
    setCount(count + value);
  }
  return (
    <div className="App">
      <h1>Simple Counter</h1>
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
