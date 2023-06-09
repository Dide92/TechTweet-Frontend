import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import Linkedin from "../images/bluelinkedin.png"
import Github from "../images/bluegithub.png"
import Delete from "../images/delete.png"


import { Context } from "./../context/Context";
import { useContext } from 'react';

function TweetDetail({ tweets, handleDelete }) {
  const { id } = useParams();
  const tweet = tweets?.find((tweet) => tweet._id === id);
  const navigate = useNavigate();
  const { user } = useContext(Context);
  const [isClicked, setIsClicked] = useState(false);

  const deleteTweet = async (_id) => {
    try {
      await handleDelete(_id);
      navigate('/tweets');
    } catch (err) {
      console.error(err);
    }
  };
  const toggleColor = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={`new detail ${isClicked ? 'secondary' : 'primary'}`}>
      <div className={`toggle-bar ${isClicked ? 'active' : ''}`} onClick={toggleColor}>
        <div className="toggle-handle"></div>
      </div>
      {/* <img src={Delete} style={{backgroundColor:'white'}} id='icon' onClick={handleClick}></img> */}
    <div key={tweet?._id}>
      <h1 className='tweetTitle'>{tweet?.title}</h1>
      <p>Author: {tweet?.username}</p><br></br>
      <img className='show-image' src={tweet?.image} alt="Tweet" /><br></br><br></br>
      <p className='tweetDescription'>{tweet?.description}</p><br></br><br></br>
      <Link to={tweet?.linkedin}><img className='linkedin-icon1' src={Linkedin}></img></Link>
      <Link to={tweet?.github}><img className='github-icon1' src={Github}></img></Link><br></br><br></br><br></br><br></br>
      {user?.username === tweet?.username && (
        <>
        <button className="button-27" style={{width:'20vw', color:'black'}} role="button" onClick={() => deleteTweet(tweet._id)}>Delete</button>
      <button className="button-27" style={{width:'20vw', color:'black'}} role="button" ><Link style={{textDecoration:'none', color:'black'}} to={`/tweets/${tweet?._id}/edit`}>Edit</Link></button>
        </>
       )} 
    </div>
    </div>
  );
}

export default TweetDetail;
