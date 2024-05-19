import React, { useState } from 'react';
import './login.scss';
import Layout from '../Layout/Layout';
import { SignIn } from '../../Functionalities/Firebase/Authentication';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth } from '../../Functionalities/Features/getAuthdataSlice';
import { getUser } from '../../Functionalities/Features/getUserDataSlice';

const Login = () => {
    const navigate = useNavigate();
    const [authdata, setAuthdata] = useState({ email: "", password: "" });
    const dispatch = useDispatch();

    const handleAuthChange = (e) => {
        setAuthdata({ ...authdata, [e.target.name]: e.target.value });
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await SignIn(authdata.email, authdata.password)
        console.log(user);
        dispatch(getAuth({ result: true, user: user.data.user }))
        dispatch(getUser({ user: user.data.user, doc: user.data.doc, blogs: user.data.blogs  }))
        navigate("/");
    }

    return (
        <>
            <Layout>
                <div className="cb_login">
                    <div className="cb_login-content card">
                        <div className="cb_login-content_title">
                            <h1>Login</h1>
                        </div>
                        <div className="cb_login-content_form">
                            <form onSubmit={handleSubmit}>
                                <input type="email" placeholder="Email" name='email' onChange={handleAuthChange}/>
                                <input type="password" placeholder="Password" name='password' onChange={handleAuthChange}/>
                                <button type="submit" className='cb_login-button'>Login</button>
                            </form>
                        </div>
                        <div className="cb_login-content_forgot">
                            <p>Forgot your password?</p>
                        </div>
                        <div className="cb_login-content_signup">
                            <p>Don't have an account? <a href="#">Sign up</a></p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Login