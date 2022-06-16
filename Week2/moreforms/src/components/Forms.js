import React from 'react';
import {Form, Button} from 'react-bootstrap';



const Forms = (props) => {
    const {
        firstName, setFirstName, 
        lastName, setLastName,
        email, setEmail,
        confirmEmail, setConfirmPassword,
        password, setPassword,
    } 
    = props;


    const onSubmitHandler = (e) => {
            e.preventDefault();
        }
    

    return (

    <Form onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3" controlId="">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="First Name" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
        </Form.Group>
        {firstName && firstName.length < 5 && <p>Name must be more than 5 Characters</p>}

        <Form.Group className="mb-3" controlId="">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="Last Name" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
        </Form.Group>
        {lastName && lastName.length < 5 && <p>Last Name Is Not Enough</p>}


        <Form.Group className="mb-3" controlId="">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
        <Form.Label>Confirm Password Address</Form.Label>
        <Form.Control type="email" placeholder="Confirm email"  onChange={(e) => setConfirmPassword(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="">
        <Form.Label>Password</Form.Label>
        <Form.Control type="Password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" type="submit">
        Submit
        </Button>
    </Form>
    )
}

export default Forms;