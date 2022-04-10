import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleEmailInput = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        /* navigate('/') */
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>The Login Page</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailInput} type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordInput} type="password" name="password" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                    <p style={{ color: 'red' }}>{error?.message}</p>
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to='/register'>Create An Account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;