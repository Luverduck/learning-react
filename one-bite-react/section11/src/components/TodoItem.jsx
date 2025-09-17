import './TodoItem.css';
import { memo } from 'react';

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {

  const onChangeCheckBox = () => {
    onUpdate(id)
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className='TodoItem'>
      <input type='checkbox' checked={isDone} onChange={onChangeCheckBox} />
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// export default TodoItem;
/*
// TodoItem 컴포넌트가 메모이징된 컴포넌트 내보내기
export default memo(TodoItem, (prevProps, nextProps) => {
  // true => props 변경 X=> 리렌더링 X
  // false => props 변경 O => 리렌더링 O
  if(prevProps.id !== nextProps.id) return false;
  if(prevProps.isDone !== nextProps.isDone) return false;
  if(prevProps.content !== nextProps.content) return false;
  if(prevProps.date !== nextProps.date) return false;
  return true;
});
*/

// TodoItem 컴포넌트가 메모이징된 컴포넌트 내보내기 (사용자 정의 비교 함수 제거)
export default memo(TodoItem);