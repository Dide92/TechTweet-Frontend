import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "./../context/Context";
import axios from 'axios';


function Login() {
    const userRef = useRef()
    const passwordRef = useRef();

    const { user, dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type:"LOGIN_START" });
        try{
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch(err) {
            dispatch({ type: "LOGIN_FAILUIRE" })
        }
    }
    console.log(user)
    return(
    <div className='login'>
        <span className='loginTitle'>Login Title</span>
        <form className='loginForm' onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" placeholder='Enter your username'  ref={userRef}/>
            <label>Password</label>
            <input type="password" placeholder='Enter your password' ref={passwordRef} />
            <button className='loginButton' type="submit" >Login</button>
        </form>
        <button className='registerButton'><Link to="/register">Register</Link></button>

    </div>
    )
}

export default Login;