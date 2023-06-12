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
    <div className='new detail'>
        <h1 style={{position:'relative', left:'2rem'}}>Register</h1>
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" placeholder='Enter your username' onChange={(e=>setUsername(e.target.value))}/>
            <label style={{position:'relative', marginRight:'2rem'}}>Email:</label>
            <input type="text" placeholder='Enter your email' onChange={(e=>setEmail(e.target.value))}/>
            <label>Password:</label>
            <input type="password" placeholder='Enter your password' onChange={(e=>setPassword(e.target.value))}/>
            <button className="button-27" role="button" type="submit" >Register</button><br></br><br></br>
            <Link style={{textDecoration:'none', color:'white', textAlign:'left'}} to="/login">Click here to <span style={{color:'rgb(255, 128, 0)'}}>login</span></Link>

        </form>
        {error && <span>User exists, please login</span>}
    </div>
    )
}

export default Register;