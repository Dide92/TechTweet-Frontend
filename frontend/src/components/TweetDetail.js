import React from 'react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';


function TweetDetail({ tweets, deleteTweet }) {
  const { id } = useParams();
  const tweet = tweets?.find((tweet) => tweet._id === id);
  const navigate = useNavigate();

  const handleDelete = async (_id) => {
    try {
      await deleteTweet(_id);
      navigate('/tweets');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div key={tweet?._id}>
      <p>{tweet?.title}</p>
      <p>{tweet?.username}</p>
      <img src={tweet?.image} alt="Tweet" />
      <p>{tweet?.description}</p>
      <p>{tweet?.linkedin}</p>
      <p>{tweet?.github}</p>
      <button onClick={() => handleDelete(tweet?._id)}>DELETE</button>
      <Link to={`/tweets/${tweet?._id}/edit`}>EDIT</Link>
    </div>
  );
}

export default TweetDetail;
