import React from 'react';


function TweetDetail({ tweet }) {


  return (
          <div className="grid-element">
            <p>{tweet.title}</p>
            <p>{tweet.author}</p>
            <img src={tweet.image} alt="Tweet" />
            <p>{tweet.description}</p>
            <p>{tweet.linkedin}</p>
            <p>{tweet.github}</p>
          
          </div>
  )
}

export default TweetDetail;
