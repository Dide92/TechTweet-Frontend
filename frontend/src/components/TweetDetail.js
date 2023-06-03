import React from 'react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
// import { Context } from "./../context/Context";
// import { useContext } from 'react';

function TweetDetail({ tweets, handleDelete }) {
  const { id } = useParams();
  const tweet = tweets?.find((tweet) => tweet._id === id);
  const navigate = useNavigate();
  // const { user } = useContext(Context);

  const deleteTweet = async (_id) => {
    try {
      await handleDelete(_id);
      navigate('/tweets');
    } catch (err) {
      console.error(err);
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
      {/* {user && tweet && user.username === tweet.username && ( */}
        <>
        <button onClick={() => deleteTweet(tweet._id)}>DELETE</button>
      <Link to={`/tweets/${tweet?._id}/edit`}>EDIT</Link>
        </>
      {/* )} */}
    </div>
  );
}

export default TweetDetail;
