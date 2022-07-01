import './App.css';
import AddToDoList from './components/AddToDoList';
import AddToDo from './components/AddToDo';
import {useState} from 'react';

function App() {
  const [todoList, setToDoList] = useState([])
  return (
    <div className="App">
      <AddToDo  todoList = {todoList} setToDoList={setToDoList}/>
      <AddToDoList todoList = {todoList} setToDoList={setToDoList}/>
    </div>
  );
}

export default App;
