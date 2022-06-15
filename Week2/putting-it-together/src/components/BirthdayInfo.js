import React, {useState} from 'react'


const BirthdayInfo = (props) => {
    const { update } = props;
    const [age, setCountAge] = useState(update.age)
    const ageClick = () => {
        setCountAge(age + 1)
    }
    return (
        <div>
            <h2>{update.lastName}, {update.firstName}</h2>
            <p>Age: {age}</p>
            <p>hairColor: {update.hairColor}</p>
            <button onClick={ageClick}>Birthday Button for {update.firstName} {update.lastName}</button>
        </div>
    )
}

export default BirthdayInfo;