import React from 'react';
import { Link } from 'react-router-dom';


function Login() {
    return(
    <div className='login'>
        <span className='loginTitle'>Login Title</span>
        <form className='loginForm'>
            <label>Username</label>
            <input type="text" placeholder='Enter your username' />
            <label>Password</label>
            <input type="password" placeholder='Enter your password' />
            <button className='loginButton'>Login</button>
        </form>
        <button className='registerButton'><Link to="/register">Register</Link></button>

    </div>
    )
}

export default Login;