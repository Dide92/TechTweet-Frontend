import React, { useState } from 'react';
import axios from 'axios';

function NewTweet({ createTweet }) {
  const [tweetData, setTweetData] = useState({
    title: '',
    author: '',
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
        author: '',
        image: '',
        description: '',
        linkedin: '',
        github: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <section className='new'>
      <h2>Publish a Tweet</h2>
      <div className='new-container'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={tweetData.title}
          placeholder="Title"
          onChange={handleChange}
        /><br></br>
        <input
          type="text"
          name="author"
          value={tweetData.author}
          placeholder="Author"
          onChange={handleChange}
        /><br></br>
        <input
          type="text"
          name="image"
          value={tweetData.image}
          placeholder="Image URL"
          onChange={handleChange}
        /><br></br>
        <input
          type="textarea"
          className='textarea'
          name="description"
          rows="10" 
          cols="50"
          value={tweetData.description}
          placeholder="Description"
          onChange={handleChange}
        /><br></br>
        <input
          type="text"
          name="linkedin"
          value={tweetData.linkedin}
          placeholder="LinkedIn URL"
          onChange={handleChange}
        />
        <input
          type="text"
          name="github"
          value={tweetData.github}
          placeholder="GitHub URL"
          onChange={handleChange}
        /><br></br>
        <button type="submit">Add Tweet</button>
      </form>
      </div>
      </section>
    </div>
  );
}

export default NewTweet;
