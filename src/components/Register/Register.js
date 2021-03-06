import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Register = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value)
    }

    const handleFormSubmit = e => {
        /* So that page does not reload on submit */
        e.preventDefault()
        if (password !== confirmPassword) {
            setError('Please make sure your passwords match');
            return;
        }
        if (password.length < 6) {
            setError('Password should have more than six characters')
            return;
        }
        createUserWithEmailAndPassword(email, password)
            .then(result => {
                console.log(result)
            })
    }

    if (user) {
        navigate('/')
    }


    return (
        <div>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>The Registration Page</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmail} type="email" name="email" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePassword} type="password" name="password" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="confirm-password">Confirm password</label>
                            <input onBlur={handleConfirmPassword} type="password" name="confirm-password" id="" required />
                        </div>
                        <p style={{ color: 'red' }}>{error}</p>
                        <input className='form-submit' type="submit" value="Register" />
                    </form>
                    <p>
                        Already have an account? <Link className='form-link' to='/login'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;