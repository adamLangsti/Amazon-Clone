import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/amazon-logo-black.jpeg';

const Login = () => {
    return (
        <div className='login'>
            <Link to='/'>
                <img src={logo} alt='amazon-logo' />
            </Link>

            <div className='login-container'>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' />

                    <h5>Password</h5>
                    <input type='password' />

                    <button className='login-btn'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the FAKE Amazon's Conditions of
                    Use & Sale. Please see our privacy Privacy Policy, our
                    Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login-registerBtn'>
                    Create your Amazon account
                </button>
            </div>
        </div>
    );
};

export default Login;
