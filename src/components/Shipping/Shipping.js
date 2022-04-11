import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shipping = () => {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [address, setAddress] = useState();

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handleName = e => {
        setName(e.target.value)
    }

    const handleAddress = e => {
        setAddress(e.target.value)
    }

    return (
        <div>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>Enter your shipping details</h2>
                    <form>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmail} type="email" name="email" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="text">Name</label>
                            <input onBlur={handleName} type="text" name="name" id="" required />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="confirm-password">Address</label>
                            <input onBlur={handleAddress} type="text" name="address" id="" required />
                        </div>
                        <input className='form-submit' type="submit" value="Submit Details" />
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Shipping;