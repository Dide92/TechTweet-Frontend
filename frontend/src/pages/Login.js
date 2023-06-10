import React, { useRef, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from "./../context/Context";
import axios from 'axios';

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');

  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    dispatch({ type: "LOGIN_START" });
    try {
      const URL = process.env.REACT_APP_API_URL;
      const res = await axios.post(`${URL}/auth/login`, {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError('User does not exist. Please register.');
      } else {
        setError('Something went wrong. Please try again.');
      }
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className='login'>
      <h1>Login</h1>
      {error && <p className="error-message">{error}</p>}
      <form className='loginForm' onSubmit={handleSubmit}>
        <input type="text" name='username' placeholder='Enter your username' ref={userRef} />
        <input type="password" placeholder='Enter your password' ref={passwordRef} />
        <button className="button-27" role="button" type="submit" disabled={isFetching}>Login</button>
      </form>
      <button className="button-27" role="button"><Link to="/register">Register</Link></button>
    </div>
  );
}

export default Login;
