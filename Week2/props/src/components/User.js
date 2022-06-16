import React from 'react';

const User = (props) => {
    const {name, age, email} = props;
    return (
    <div>
        <h1>
            {props.name}
        </h1>
        <p>Age: {props.age}</p>
        <p>Email: {props.email}</p>
        <button onClick={() => alert("This button has been clicked!!")}>Click Me</button>
    </div>
)
}



export default User;