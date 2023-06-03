import React from 'react';
import { Link } from 'react-router-dom';
import EditForm from './EditForm';
import Delete from "../images/deleteicon.gif"
import Edit from "../images/editicon.gif"

// import { Context } from "./../context/Context";
// import { useContext } from 'react';


function Tweet({ tweets, handleDelete, handleUpdate }) {
  const [editTweet, setEditTweet] = React.useState(null);
  // const { user } = useContext(Context);

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

  // const handleEditButtonClick = (tweet) => {
  //   setEditTweet(tweet);
  // };

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
              <img className='card_image' src={tweet.image} alt="Tweet" />
              <p>{tweet.description}</p>
              <p>{tweet.linkedin}</p>
              <p>{tweet.github}</p>
              {/* {user && user.username === tweet.username && ( */}
              <div className='buttonContainer'>
              <span className='deleteButton' onClick={() => deleteTweet(tweet._id)}>
                <img src={Delete} onClick={() => deleteTweet(tweet._id)}></img>
              </span>
              {/* )} */}
              {/* {user && user.username === tweet.username && ( */}
              <span className='editButton'><Link to={`/tweets/${tweet?._id}/edit`}><img src={Edit}></img></Link></span>
              </div>
            <button className="button-56" role="button"><Link to={`/tweet/${tweet._id}`}>Read Me!</Link></button>
              {/* )} */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Tweet;
