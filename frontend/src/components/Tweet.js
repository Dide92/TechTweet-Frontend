import React from 'react';
import { Link } from 'react-router-dom';
import EditForm from './EditForm';

function Tweet({ tweets, handleDelete, handleUpdate }) {
  const [editTweet, setEditTweet] = React.useState(null);

  const deleteTweet = async (_id) => {
    try {
      await handleDelete(_id);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateTweet = async (updatedTweet) => {
    try {
      await handleUpdate(updatedTweet);
      setEditTweet(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditButtonClick = (tweet) => {
    setEditTweet(tweet);
  };

  return (
    <div className="grid-container grid-container--fit">
      {tweets.map((tweet) => (
        <div key={tweet._id}>
          {editTweet && editTweet._id === tweet._id ? (
            <EditForm tweet={editTweet} handleUpdate={handleUpdateTweet} />
          ) : (
            <div className="grid-element">
              <Link to={`/tweet/${tweet._id}`}>{tweet.title}</Link>
              <p>{tweet.username}</p>
              <img src={tweet.image} alt="Tweet" />
              <p>{tweet.description}</p>
              <p>{tweet.linkedin}</p>
              <p>{tweet.github}</p>
              <button onClick={() => deleteTweet(tweet._id)}>DELETE</button>
              <Link to={`/tweets/${tweet?._id}/edit`}>EDIT</Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Tweet;
