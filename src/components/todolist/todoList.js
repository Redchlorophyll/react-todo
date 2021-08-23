import './todoList.css';
import React from 'react';


// class TodoList extends React.Component {
//   render() {
//     return (
//       <ul>
//         <li>Learn React</li>
//         <li>Build Tools</li>
//         <li>Record</li>
//       </ul>
//     );
//   }
// }

const TodoList = (props) => {
  console.log(props.dataTodos);

  const data = props.dataTodos.map((todo) => {
    return <li key={todo.id}>{todo.title}</li>
  });

  return (
    <ul>
      {data}
    </ul>
  );
};

export default TodoList;
