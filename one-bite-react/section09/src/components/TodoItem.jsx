import './TodoItem.css';

const TodoItem = ({id, isDone, content, date, onUpdate}) => {

  // 체크 박스 입력 요소의 onChange에 대한 이벤트 핸들러
  const onChangeCheckBox = () => {
    onUpdate(id)
  };

  return (
    <div className='TodoItem'>
      <input type='checkbox' checked={isDone} onChange={onChangeCheckBox} />
      <div className='content'>{content}</div>
      <div className='date'>{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;