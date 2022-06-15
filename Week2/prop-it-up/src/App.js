import './App.css';
import PersonCard from "./component/PersonCard"

function App() {
  const personCards = [
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
    {
      lastName: 'Bell',
      firstName: ' Stacy',
      age: 50,
      hairColor: 'Brown',
    },
    {
      lastName: 'Green',
      firstName: ' Sam',
      age: 62,
      hairColor: 'Blonde',
    },
  ];
  
  return (
    <div className="App">
      {personCards.map(person =>(
        <PersonCard 
        person = {person} 
        />

      ))}
    </div>
  );
}

export default App;
