import './todo.css';
import React from 'react';
import TodoList from '../todolist/todoList';

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
  const todos = [
    {id: 1, title: 'Eat'},
    {id: 2, title: 'Sleep'},
    {id: 3, title: 'Code'},
  ];

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList dataTodos={todos} />
    </div>
  );
};

export default Todo;
