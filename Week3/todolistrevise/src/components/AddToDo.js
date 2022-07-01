import { useState } from "react";


const AddToDo = (props) => {
    const {todoList, setToList} = props;
    const [item, setItem] = useState('')

const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
        text: item,
        completed: false,
    };
    setToList([...todoList, todo]);
    setItem('')
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"  value = {item} 
            onChange={(e) => setItem(e.target.value)}/>
            <input type="submit" value="Add" />
        </form>

    </div>
  )
  }

export default AddToDo;
