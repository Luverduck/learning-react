import './List.css';
import { useState, useMemo } from 'react';
import TodoItem from './TodoItem';

const List = ({ todos, onUpdate, onDelete }) => {

  const [keyword, setKeyword] = useState('');

  const onChangeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const getFilteredData = () => {
    if (keyword === '') {
      return todos;
    };
    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(keyword.toLowerCase())
    });
  };

  const filteredTodos = getFilteredData();
  /*
  // TO-DO 리스트의 현황을 계산하는 함수
  const getAnalizedData = () => {
    console.log('getAnalizedData 함수 호출!');
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => { return todo.isDone }).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    }
  };

  // TO-DO 리스트의 현황 계산
  const { totalCount, doneCount, notDoneCount } = getAnalizedData();
  */

  // TO-DO 리스트의 현황 메모이제이션
  // - todos가 변경될 때 TO-DO 리스트의 현황을 계산하여 업데이트
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log('getAnalizedData 함수 호출!');
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => { return todo.isDone }).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    }
  }, [todos]);

  return (
    <div className='List'>
      <h4>To-Do List 🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input
        placeholder='검색어를 입력하세요'
        value={keyword}
        onChange={onChangeKeyword}
      />
      <div className='todos_wrapper'>
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