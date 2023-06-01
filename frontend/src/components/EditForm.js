import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function EditForm({ tweets, handleUpdate }) {
  const { id } = useParams();
  const tweet = tweets?.find((tweet) => tweet._id === id);
  const navigate = useNavigate();

  const [editTweet, setEditTweet] = React.useState(tweet);

  const handleChange = (e) => {
    setEditTweet({ ...editTweet, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(editTweet);
    navigate('/tweets');
  };

  return (
    <div>
      <h2>Edit Tweet</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={editTweet.title}
          onChange={handleChange}
        />
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={editTweet.username}
          onChange={handleChange}
        />
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={editTweet.image}
          onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={editTweet.description}
          onChange={handleChange}
        />
        <label htmlFor="linkedin">LinkedIn:</label>
        <input
          type="text"
          id="linkedin"
          name="linkedin"
          value={editTweet.linkedin}
          onChange={handleChange}
        />
        <label htmlFor="github">GitHub:</label>
        <input
          type="text"
          id="github"
          name="github"
          value={editTweet.github}
          onChange={handleChange}
        />
        <button type="submit">Update</button>
        <Link to="/tweets">Cancel</Link>
      </form>
    </div>
  );
}

export default EditForm;
