import './Editor.css';
import { useState, useRef, useContext } from 'react';
import { TodoContext } from '../App';

const Editor = () => {

  const [content, setContent] = useState("");
  const contentRef = useRef();
  // TodoContext에서 onCreate 함수 반환
  const { onCreate } = useContext(TodoContext);

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === '') {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };

  const onKeyDown = (e) => {
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