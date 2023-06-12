import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Linkedin from "../images/bluelinkedin.png"
import Github from "../images/bluegithub.png"
import { Context } from "./../context/Context";
import { useContext } from 'react';

function NewTweet({ createTweet }) {
  const navigate = useNavigate();
  const { user } = useContext(Context)
  const [isClicked, setIsClicked] = useState(false);


  const [tweetData, setTweetData] = useState({
    title: '',
    username: user.username,
    image: '',
    description: '',
    linkedin: '',
    github: '',
  });

  const handleChange = (e) => {
    setTweetData({ ...tweetData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTweet(tweetData);
      setTweetData({
        title: '',
        username: user.username,
        image: '',
        description: '',
        linkedin: '',
        github: '',
      });
      navigate('/tweets');
    } catch (error) {
      console.error(error);
    }
  };
  const toggleColor = () => {
    setIsClicked(!isClicked);
  };
  const formClassName = isClicked ? 'white' : '';

  return (
    <div className='newTweet'>
      <section className='new'>
      <div className='new-container'>
      <form className={formClassName} onSubmit={handleSubmit}>
      <div className={`toggle-bar ${isClicked ? 'active' : ''}`} onClick={toggleColor}>
            <div className="toggle-handle"></div>
          </div>
      <h1>Publish a Tweet</h1>
        <input
          className='first-input'
          type="text"
          name="title"
          value={tweetData.title}
          placeholder="Title"
          onChange={handleChange}
        /><br></br>
        <input
          className='second-input' 
          type="text"
          name="username"
          value={tweetData.username}
          placeholder="Username"
        /><br></br>
        <input
          className='third-input'
          type="text"
          name="image"
          value={tweetData.image}
          placeholder="Image URL"
          onChange={handleChange}
        /><br></br>
        <textarea
          className='textarea forth-input'
          name="description"
          value={tweetData.description}
          placeholder="Description"
          onChange={handleChange}
        /><br></br>
        <label name='linkedin'>
          <img className='linkedin-icon fifth-input' src={Linkedin}></img>
        </label>
        <input
          className='fifth-input'
          type="text"
          name="linkedin"
          value={tweetData.linkedin}
          placeholder="LinkedIn URL"
          onChange={handleChange}
        /><br></br>
        <label name='github'>
          <img className='github-icon sixth-input' src={Github}></img>
        </label>
        <input
          className='sixth-input'
          type="text"
          name="github"
          value={tweetData.github}
          placeholder="GitHub URL"
          onChange={handleChange}
        /><br></br>
        <button type="submit" className="button-27 add" style={{width:'20vw', color:'black', marginTop:'3rem'}} role="button">Tweet</button>
      </form>
      </div>
      </section>
    </div>
  );
}

export default NewTweet;
