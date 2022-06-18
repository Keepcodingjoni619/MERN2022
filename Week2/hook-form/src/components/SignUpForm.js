import { useState } from 'react';

const SignUpForm = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const formStyle = {
        textAlign: "center",
        width: "500px",
        margin: "auto",
    }

    const inputStyle = {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        border: "1px solid darkgrey",
    }

    const styleButton = {
        marginTop: "10px"
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div>
            <form onSubmit={handleSubmit} style={{ marginTop: "20px"}}>
                <div style={inputStyle}>
                    <label htmlFor="firstName">First Name: </label>
                    <input 
                    type="text" 
                    name="firstName"
                    onChange={(e)=> setFirstName(e.target.value)}
                    />
                    {firstName && firstName.length < 4 && <p>Last Name Is Not Enough</p>}

                </div>
                <div style={inputStyle}>
                    <label htmlFor="lastName">Last Name: </label>
                    <input 
                    type="text" 
                    name="lastName"
                    onChange={(e)=> setLastName(e.target.value)}
                    />
                    {lastName && lastName.length < 4 && <p>Not Long Enough</p>}
                </div>
                <div style={inputStyle}>
                    <label htmlFor="email">Email: </label>
                    <input 
                    type="text" 
                    name="email"
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                    {email && email.length < 8 && <p>Need To Be Eight Characters Long</p>}

                </div>
                <div style={inputStyle}>
                    <label htmlFor="password">Password: </label>
                    <input 
                    type="text" 
                    name="password"
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <div style={inputStyle}>
                    <label htmlFor="confirmPassword">Confirm Password: </label>
                    <input 
                    type="text" 
                    name="confirmPassword"
                    onChange={(e)=> setConfirmPassword(e.target.value)}
                    />
                    {confirmPassword && confirmPassword.length < 8 && <p>Last Name Is Not Enough</p>}
                </div>
                <button style={styleButton}>Submit</button>
            </form>
            <div style={formStyle}>
                <h3 style={{ textAlign: 'center'}}>Your Form Data</h3>
                <p>
                    <label>First Name: </label>{ firstName }
                </p>
                <p>
                    <label>Last Name: </label>{ lastName }
                </p>
                <p>
                    <label>Email: </label>{ email }
                </p>
                <p>
                    <label>Password: </label>{ password }
                </p>
                <p>
                    <label>Confirm Password: </label>{ confirmPassword }
                </p>
            </div>
        </div>
    )
}

export default SignUpForm;
