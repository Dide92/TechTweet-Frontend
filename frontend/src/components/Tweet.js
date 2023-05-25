import React from 'react';


function Tweet({ tweets, handleDelete }) {
  const deleteTweet = async (_id) => {
    try {
      await handleDelete(_id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="tweets">
      {tweets.map((tweet) => (
        <div key={tweet._id}>
          <p>{tweet.title}</p>
          <p>{tweet.author}</p>
          <img src={tweet.image} alt="Tweet" />
          <p>{tweet.description}</p>
          <p>{tweet.linkedin}</p>
          <p>{tweet.github}</p>
          <button onClick={() => deleteTweet(tweet._id)}>DELETE</button>
          {/* <button onClick={() => editTweet(t.id)}>EDIT</button> */}
        </div>
      ))}
    </div>
  );
}

export default Tweet;
