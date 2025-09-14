import './Editor.css';
import { useState, useRef } from 'react';

const Editor = ({ onCreate }) => {

  // 새로 추가할 TO-DO의 내용
  const [content, setContent] = useState("");
  // 입력 요소에 대한 ref
  const contentRef = useRef();

  // 입력 요소의 onChange에 대한 이벤트 핸들러
  const onChangeContent = (e) => {
    // 입력 요소의 변경된 입력값을 content로 설정
    setContent(e.target.value);
  };

  // 추가 버튼의 onClick에 대한 이벤트 핸들러
  const onSubmit = () => {
    // content가 빈 값("")일 경우 return
    if (content === '') {
      contentRef.current.focus();
      return;
    }
    // content를 통해 새로운 TO-DO 추가
    onCreate(content);
    // content를 빈 값('')으로 초기화
    setContent('');
  };

  // 입력 요소의 onKeyDown에 대한 이벤트 핸들러
  const onKeyDown = (e) => {
    // 입력한 키의 코드가 13번(엔터)일 경우 onSubmit 함수 실행
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className='Editor'>
      <input
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        onKeyDown={onKeyDown}
        placeholder='새로운 To-Do...'
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;