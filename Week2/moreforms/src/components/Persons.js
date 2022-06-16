import React from 'react'

const Persons = (props) => {
    const {
        firstName, setFirstName, 
        lastName, setLastName,
        email, setEmail,
        confirmEmail, setConfirmEmail,
        password, setPassword
    } 
    = props;
  return (
    <div> 
        {firstName}
        {lastName}
        {email}
        {confirmEmail}
        {password}
    </div>
  )
}

export default Persons;