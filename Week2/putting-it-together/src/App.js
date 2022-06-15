import './App.css';
import React, { useState } from 'react'
import BirthdayInfo from "./components/BirthdayInfo"

function App() {
  const personBirthdayInfo = [
    {
      lastName: 'Candari',
      firstName: ' Johnnie',
      age: 45,
      hairColor: 'Black',
    },
    {
      lastName: 'Stanford',
      firstName: ' Jacob',
      age: 88,
      hairColor: 'Brown',
    }, 
  ];

  return (
    <div className="App">
      {personBirthdayInfo.map(update =>(
        <BirthdayInfo
        update = {update} 
        />

      ))}
    </div>
  )
}

export default App;
