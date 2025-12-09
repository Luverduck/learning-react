import { useState } from 'react';
import useInput from './../hooks/useInput';

//  1. 함수 컴포넌트 안에서만 호출할 수 있다.
// const state = useState();

const HookExam = () => {
  // 2. 조건문이나 반복문 안에서 호출할 수 없다.
  // if(true) {
  //   const state = useState();
  // }

  // 3. 접두사 use로 선언한 함수를 통해 사용자 정의 훅을 정의할 수 있다.
  const [input1, onChange1] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input1} onChange={onChange1} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
}

export default HookExam;