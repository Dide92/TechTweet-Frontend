import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Linkedin from "../images/bluelinkedin.png"
import Github from "../images/bluegithub.png"



function EditForm({ tweets, handleUpdate }) {
  const { id } = useParams();
  const tweet = tweets?.find((tweet) => tweet._id === id);
  const navigate = useNavigate();

  const [editTweet, setEditTweet] = React.useState(tweet);
  const [isClicked, setIsClicked] = useState(false);

  const handleChange = (e) => {
    setEditTweet({ ...editTweet, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(editTweet);
    navigate('/tweets');
  };
  const toggleColor = () => {
    setIsClicked(!isClicked);
  };
  const formClassName = isClicked ? 'white' : '';

  return (
    <div className='new'>
      <form className={formClassName} onSubmit={handleSubmit}>
      <div className={`toggle-bar ${isClicked ? 'active' : ''}`} onClick={toggleColor}>
            <div className="toggle-handle"></div>
      </div>
      <h1>Edit Tweet</h1>
        <label htmlFor="title">Title:</label><br></br>
        <input
          type="text"
          id="title"
          name="title"
          value={editTweet.title}
          onChange={handleChange}
        /><br></br>
        <label htmlFor="username">Username:</label><br></br>
        <input
          type="text"
          id="username"
          name="username"
          value={editTweet.username}
        /><br></br>
        <label htmlFor="image">Image URL:</label><br></br>
        <input
          type="text"
          id="image"
          name="image"
          value={editTweet.image}
          onChange={handleChange}
        /><br></br>
        <label htmlFor="description">Description:</label><br></br>
        <textarea
          id="description"
          name="description"
          className='textarea'
          value={editTweet.description}
          onChange={handleChange}
        /><br></br>
        <label htmlFor="linkedin"><img className='linkedin-icon' src={Linkedin}></img></label>
        <input
          type="text"
          id="linkedin"
          name="linkedin"
          value={editTweet.linkedin}
          onChange={handleChange}
        /><br></br>
        <label htmlFor="github"><img className='github-icon' src={Github}></img></label>
        <input
          type="text"
          id="github"
          name="github"
          value={editTweet.github}
          onChange={handleChange}
        /><br></br><br></br>
        <button className="button-27" style={{width:'20vw', color:'black'}} role="button" type="submit">Update</button>
        <button className="button-27" style = {{width:'20vw'}} role="button"><Link style={{textDecoration:'none', color:'black'}} to="/tweets">Cancel</Link></button>
      </form>
    </div>
  );
}

export default EditForm;
