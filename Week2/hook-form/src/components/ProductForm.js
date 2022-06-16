import { useState } from 'react';

const ProductFrom = (props) => {
    const {firstName, setFirstName} = useState('');
    const {lastName, setLastName} = useState('');
    const {email, setEmail} = useState('');
    const {password, setPassword} = useState('');
    const {confirmPassword, setConfirmPassword} = useState('');


    return (
        <form onSubmit={() => {
                <>
                    <div>
                        <label htmlFor="firstName">FirstName</label>
                        <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="firstName">FirstName</label>
                        <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="firstName">FirstName</label>
                        <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="firstName">FirstName</label>
                        <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="firstName">FirstName</label>
                        <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                </>
            }}>
        </form>
    )
}

export default ProductFrom;

// {
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
// }