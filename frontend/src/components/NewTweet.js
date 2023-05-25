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
      <h2>Add New Tweet</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={tweetData.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          value={tweetData.author}
          placeholder="Author"
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          value={tweetData.image}
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={tweetData.description}
          placeholder="Description"
          onChange={handleChange}
        />
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
        />
        <button type="submit">Add Tweet</button>
      </form>
    </div>
  );
}

export default NewTweet;
