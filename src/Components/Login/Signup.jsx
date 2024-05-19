import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import { useNavigate } from 'react-router-dom';
import { SignUp } from '../../Functionalities/Firebase/Authentication';

const Signup = () => {

    const navigate = useNavigate();
    const [authdata, setAuthdata] = useState({ email: "", password: "" });
    const [data, setData] = useState({ first_name: "", last_name: "", user_name: "", mobile_no: "" });

    const handleAuthChange = (e) => {
        setAuthdata({ ...authdata, [e.target.name]: e.target.value });
    }

    const handleDataChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const callResult = await SignUp(authdata.email, authdata.password, data);
        console.log(callResult);
        navigate('/');
    }

    return (
        <>
            <Layout>
                <div className="cb_login">
                    <div className="cb_login-content card">
                        <div className="cb_login-content_title">
                            <h1>Sign up</h1>
                        </div>
                        <div className="cb_login-content_form">
                            <form onSubmit={handleSubmit}>
                                <input type="text" name="first_name" id="first_name" placeholder='First name' onChange={handleDataChange} required />
                                <input type="text" name="last_name" id="last_name" placeholder='Last name' onChange={handleDataChange} required />
                                <input type="text" name="user_name" id="user_name" placeholder='Username' onChange={handleDataChange} required />
                                <input type="email" name="email" id="email" placeholder='Email' onChange={handleAuthChange} required />
                                <input type="password" name="password" id="password" placeholder='Password' onChange={handleAuthChange} required />
                                <input type="text" name="mobile_no" id="mobile_no" placeholder='Mobile no' onChange={handleDataChange} required />
                                <button type="submit" className='cb_login-button'>Signup</button>
                            </form>
                        </div>
                        <div className="cb_login-content_signup">
                            <p>Already have an account? <a href="#">Login</a></p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Signup