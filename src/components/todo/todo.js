import './todo.css';
import React from 'react';
import { useState } from 'react';
import TodoList from '../todolist/todoList';
import TodoCreate from '../todocreate/todoCreate';

// class Todo extends React.Component {
//   render() {
//     return (
//       <div>
//         <h3>Todo List</h3>
//         <TodoList />
//       </div>
//     );
//   }
// }


const Todo = (props) => {
  const [getTodos, setTodos] = useState([
    {id: 1, title: 'Eat'},
    {id: 2, title: 'Sleep'},
    {id: 3, title: 'Code'},
  ]);

  const eventCreateTodo = (todo) => {
    setTodos(getTodos.concat(todo))
    console.log(getTodos);
  };

  return (
    <div>
      <h3>Todo List</h3>
      <TodoCreate onCreateTodo={eventCreateTodo} />
      <TodoList dataTodos={getTodos} />
    </div>
  );
};

export default Todo;
