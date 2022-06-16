import React from 'react'

const Persons = (props) => {
    const {
        firstName, setFirstName, 
        lastName, setLastName,
        email, setEmail,
        confirmPassword, setConfirmPassword,
        password, setPassword
    } 
    = props;
  return (
    <div> 
        {firstName}
        {lastName}
        {email}
        {confirmPassword}
        {password}
    </div>
  )
}

export default Persons;