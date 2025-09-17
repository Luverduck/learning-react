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