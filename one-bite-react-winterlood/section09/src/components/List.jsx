import './List.css';
import { useState } from 'react';
import TodoItem from './TodoItem';

const List = ({ todos, onUpdate, onDelete }) => {

  // 검색어
  const [keyword, setKeyword] = useState('');

  // 검색창 입력 요소의 onChange에 대한 이벤트 핸들러
  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  // TO-DO 리스트 필터링 함수
  const getFilteredData = () => {
    if(keyword === '') {
      return todos;
    };
    return todos.filter((todo) => {
      // TO-DO의 content에 검색어가 포함되어있을 경우에만 반환
      return todo.content.toLowerCase().includes(keyword.toLowerCase())
    });
  };

  // TO-DO 리스트 필터링 함수 실행 결과
  const filteredTodos = getFilteredData();

  return (
    <div className='List'>
      <h4>To-Do List 🌱</h4>
      <input 
        placeholder='검색어를 입력하세요' 
        value={keyword} 
        onChange={onChangeKeyword} 
      />
      <div className='todos_wrapper'>
        {/* todos의 각각의 요소에 대하여 TodoItem 컴포넌트 호출 */}
        {filteredTodos.map((todo) => {
          return (
            <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
          );
        })}
      </div>
    </div>
  );
};

export default List;