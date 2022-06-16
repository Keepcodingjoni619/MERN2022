import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Forms from './components/Forms';
import Persons from './components/Persons';




function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="App">
      <h1>More Forms</h1>
      <Forms
        firstName ={firstName} 
        setFirstName={setFirstName}
        lastName = {lastName}
        setLastName={setLastName}
        setEmail={setEmail}
        setConfirmEmail={setConfirmEmail}
        setPassword={setPassword}


      />
      {/* <Persons 
        firstName={firstName} 
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={setEmail}
        confirmEmail={confirmEmail}
      /> */}
    </div>
  );
}


export default App;
