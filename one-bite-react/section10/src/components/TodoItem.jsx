import './TodoItem.css';

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {

  // 체크 박스 입력 요소의 onChange에 대한 이벤트 핸들러
  const onChangeCheckBox = () => {
    onUpdate(id)
  };

  // 삭제 버튼의 onClick에 대한 이벤트 핸들러
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

export default TodoItem;