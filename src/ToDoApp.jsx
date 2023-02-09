import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/apis/todosApi';

export const ToDoApp = () => {
  const [todoId, setTodoId] = useState(1);
  //const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };
  const prevTodo = () => {
    if (todoId !== 1) {
      setTodoId(todoId + 1);
    }
  };

  return (
    <div>
      <h4>ToDos - RTK Query</h4>
      <hr />
      <h5>isLoading:{isLoading ? 'True' : 'False'}</h5>
      <pre>{JSON.stringify(todo)}</pre>
      {/*
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? 'DONE' : 'PENDING'}</strong>
            {todo.title}
          </li>
        ))}
      </ul>
        */}
      <button onClick={prevTodo}>Prev ToDo</button>
      <button onClick={nextTodo}>Next ToDo</button>
    </div>
  );
};
