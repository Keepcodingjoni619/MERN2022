
import { useState } from 'react';
import './App.css';

function App() {
  const [toDoList, setToDoList] = useState("")
  const [todos, setToDos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(toDoList.length === 0){
      return;
    }

    const newItem = {
      text: toDoList,
      complete: false
    };

    setToDos([...todos, newItem])
    setToDoList("")
  }

  const handleDelete = (del) => {
    const doToFilter = todos.filter((todo, index) => {
      return index !== del
    })
    setToDos(doToFilter);
  }
  return (
    <div className="App">
      <h2>To Do List</h2>
      <form onSubmit={(e) => {
        handleSubmit(e);
      }}>
        <input onChange={(e) => {
          setToDoList(e.target.value)
        }} 
        value={toDoList}
        text="text"
        />
      <div>
        <button>Add</button>
      </div>
      </form>

      {
        todos.map((todo, index) => {
          return (
          <div key={index}>
            <input type="checkbox" />
            <span>{todo.text}</span>
            <button onClick={(e) => {
              handleDelete(index);
            }}
            style={{
                marginLeft: "15px"
              }}>
                Delete</button>
              
          </div>
        )
        })
      }
    </div>
  );
}

export default App;
