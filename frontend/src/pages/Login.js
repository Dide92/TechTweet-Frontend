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
            const URL = process.env.REACT_APP_API_URL;
            const res = await axios.post(`${URL}/auth/login`, {
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
        <h1>Login</h1>
        <form className='loginForm' onSubmit={handleSubmit}>
            {/* <label style={{color:'white'}} name='username'>Username</label> */}
            <input type="text" name='username' placeholder='Enter your username' ref={userRef}/>
            {/* <label style={{color:'white'}}>Password</label> */}
            <input type="password" placeholder='Enter your password' ref={passwordRef} />
            <button className="button-27" role="button" type="submit" disabled={isFetching}>Login</button>
        </form>
        <button className="button-27" role="button"><Link to="/register">Register</Link></button>

    </div>
    )
}

export default Login;