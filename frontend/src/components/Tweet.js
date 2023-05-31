import React from 'react';
import NewTweet from '../components/NewTweet';


function Tweet({ tweets, handleDelete, handleUpdate, onTweetClick }) {
    const [editTweet, setEditTweet] = React.useState(null);

  const deleteTweet = async (_id) => {
    try {
      await handleDelete(_id);
    } catch (err) {
      console.error(err);
    }
    
  };
  const updateTweet = async (updatedTweet) => {
    try {
      await handleUpdate(updatedTweet);
    } catch (err) {
      console.error(err);
    }
}
const handleEdit = (tweet) => {
  setEditTweet(tweet);
};

  return (
    <div>
      <section>
        <NewTweet />
      </section>
    <div className="grid-container grid-container--fit">
    {tweets.map((tweet) => (
      <div key={tweet._id} >
        {editTweet && editTweet._id === tweet._id ? (
          <form onSubmit={(e) => {
            e.preventDefault();
            updateTweet(editTweet);
            setEditTweet(null);
          }}>
            <input
              type="text"
              value={editTweet.title}
              onChange={(e) =>
                setEditTweet({ ...editTweet, title: e.target.value })
              }
            />
             <input
              type="text"
              value={editTweet.author}
              onChange={(e) =>
                setEditTweet({ ...editTweet, author: e.target.value })
              }
            />
             <input
              type="text"
              value={editTweet.image}
              onChange={(e) =>
                setEditTweet({ ...editTweet, image: e.target.value })
              }
            />
             <input
              type="text"
              value={editTweet.description}
              onChange={(e) =>
                setEditTweet({ ...editTweet, description: e.target.value })
              }
            />
             <input
              type="text"
              value={editTweet.linkedin}
              onChange={(e) =>
                setEditTweet({ ...editTweet, linkedin: e.target.value })
              }
            />
             <input
              type="text"
              value={editTweet.github}
              onChange={(e) =>
                setEditTweet({ ...editTweet, github: e.target.value })
              }
            />
            <button type="submit">Save</button>
            <button onClick={() => setEditTweet(null)}>Cancel</button>
          </form>
        ) : (
          <>
          <div className="grid-element">
            <p onClick={() => onTweetClick(tweet)}>{tweet.title}</p>
            <p>{tweet.author}</p>
            <img src={tweet.image} alt="Tweet" />
            <p>{tweet.description}</p>
            <p>{tweet.linkedin}</p>
            <p>{tweet.github}</p>
            <button onClick={() => deleteTweet(tweet._id)}>DELETE</button>
            <button onClick={() => handleEdit(tweet)}>EDIT</button>
          </div>
          
          </>
        )}
        
      </div>
    ))}

  </div>
  </div>
  );
}

export default Tweet;
