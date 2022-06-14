
const PersonCard = (props) => {
    const { person } = props;
  return (
    <div>
        <h2>{ person.lastName },{ person.firstName }</h2>
        <p>Age: { person.age }</p>
        <p>HairColor: { person.hairColor }</p>
    </div>
  )
}

export default PersonCard;