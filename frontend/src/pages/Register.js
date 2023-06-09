import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Register() {
    const [username, setUsername] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [error, setError] = React.useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false);
        try{
            const URL = process.env.REACT_APP_API_URL;
            const res = await axios.post(`${URL}/auth/register`, {
                username,
                email,
                password,
            });
            setUsername(res.data)
            res.data && window.location.replace("/login")
        }catch(err){
            setError(true)
    }   
    };
    return(
    <div className='login'>
        <span className='registerTitle'>Register</span>
        <form className='registerForm' onSubmit={handleSubmit}>
            <label>username</label>
            <input type="text" placeholder='Enter your username' onChange={(e=>setUsername(e.target.value))}/>
            <label>Email</label>
            <input type="text" placeholder='Enter your email' onChange={(e=>setEmail(e.target.value))}/>
            <label>Password</label>
            <input type="password" placeholder='Enter your password' onChange={(e=>setPassword(e.target.value))}/>
            <button className='registerButton' type="submit" >Register</button>
        </form>
        <button className='loginButton'><Link to="/login">Login</Link></button>
        {error && <span>User exists, please login</span>}
    </div>
    )
}

export default Register;