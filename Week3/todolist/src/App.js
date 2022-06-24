import './App.css';
import { useState } from 'react';

function App() {
  const [action, setAction] = useState("");
  const [update, setUpdate] = useState([]);




  const handleSubmit = (e) => {
    e.preventDefault();

    if(action.length === 0){
      return;
    }

    const actionAddItem = {
      text: action,
      complete: false
    }

    setUpdate([...update, action]);
    setAction("")
  }

  const actionDelete = (action, del) => {
    const newUpdate = update.filter((update, index) => {
      return index !== del;
    })

    setUpdate(newUpdate);
  }

  return (
    <div className="App">
        <form 
            onSubmit={(e) => {handleSubmit(e); }}>
            <h1 className="heading">To Do List</h1>
            <input onChange={(e) => {
              setAction(e.target.value);
              }} 
              placeholder="Get MERN black belt" 
              type="text"
              value={action}
              />
            <div>
                <button className='btn'>Add</button>
            </div>
        </form>

        {
          update.map((actions, index) => {
            return (
            <div key={index}>
              <input type="checkbox" />
              <span>{action.text}</span>
              <button onClick={(index) => {
                actionDelete();
              }} className="btn-2">Delete</button>
            </div>
            );
          })
        }
            {/* <div className="section2">
              <span className="strike">Get Python Black Belt</span>
              <input type='checkbox' />
              <button className="btn-2">Delete</button>
            </div> */}
        
    </div>
  );
}

export default App;
