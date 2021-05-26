import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import logo from '../images/amazon-logo-black.jpeg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const signIn = (event) => {
        event.preventDefault();
        //firebase
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/');
                }
            })
            .catch((err) => console.warn(`Can't sign in ${err.message}`));
    };

    const register = (event) => {
        event.preventDefault();
        //firebase
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                alert('Account created');
                if (auth) {
                    history.push('/');
                }
            })
            .catch((err) =>
                console.warn(`Can't create account ${err.message}`)
            );
    };
    return (
        <div className='login'>
            <Link to='/'>
                <img src={logo} alt='amazon-logo' />
            </Link>

            <div className='login-container'>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type='text'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder='Enter your email'
                    />

                    <h5>Password</h5>
                    <input
                        type='password'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <button
                        className='login-btn'
                        type='submit'
                        onClick={signIn}>
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree to the FAKE Amazon's Conditions of
                    Use & Sale. Please see our privacy Privacy Policy, our
                    Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login-registerBtn' onClick={register}>
                    Create your Amazon account
                </button>
            </div>
        </div>
    );
};

export default Login;
