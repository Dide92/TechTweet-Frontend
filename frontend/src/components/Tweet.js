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

  return (
    <div>
    <h1 className='tweets'>TWEETS</h1>

    
    <div className="grid-container grid-container--fit">
      
      {tweets.map((tweet) => (
        <div key={tweet._id}>
          
          {editTweet && editTweet._id === tweet._id ? (
            <EditForm tweet={editTweet} handleUpdate={handleUpdateTweet} />
            
          ) : (
            
            <div className="grid-element">
              
              <h1 className='tweetTitle'>{tweet.title}</h1>
              <p>Author: {tweet.username}</p>
              <img className='card_image' src={tweet.image} alt="Tweet" />
              <p className="description">{tweet.description}</p>
              <button className="button-27" role="button">
                <Link style={{textDecoration:'none', color:'black'}} to={`/tweet/${tweet._id}`}>Read Me!</Link>
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
}

export default Tweet;
