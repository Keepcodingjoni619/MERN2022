import { useState } from "react";

const AddToDoList = (props) => {
const {addToDoList, setAddToDoList} = props;
const handleDelete = (deletedToDo) => {
  const filteredList =
  addToDoList.filter(item => item.text !== deletedToDo.text);
};
const handleChecked = (item, completed) => {
  const newList = addToDoList.map(todo => {
    if(todo.text === item.text) {
      return {text:todo.text, completed: completed};
    } else {
      return todo;
    }
    setAddToDoList(newList)
  })
};

  return ( 
    <ul>
      {addToDoList.map((todo, index) => (
        <div key={index}>
          <li className=
          {todo.completed ? 'completed' : ''}>{todo.text}</li>
          <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={(e) => handleChecked(todo, e.target.checked)}/>
          <button onClick={handleDelete(todo)}>Delete</button>
        </div>
      ))}
      </ul>
  );   
}

export default AddToDoList;
