import './TodoItem.css';
import { memo, useContext } from 'react';
import { TodoContext } from '../App';

const TodoItem = ({ id, isDone, content, date }) => {

  // TodoContext에서 onUpdate, onDelete 함수 반환
  const { onUpdate, onDelete } = useContext(TodoContext);

  const onChangeCheckBox = () => {
    onUpdate(id);
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

export default memo(TodoItem);