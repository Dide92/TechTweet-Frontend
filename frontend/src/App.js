import axios from 'axios';
import React from 'react';
import './App.css';
import NewTweet from './components/NewTweet';
import Tweet from "./components/Tweet";
import Home from "./pages/Home";
import Tweets from "./pages/Tweets";
import News from "./pages/News";
import Footer from "./components/Footer";
import Nav from "./components/Nav";



function App() {
  const [tweets, setTweets] = React.useState([]);
  const fetchTweets = async () => {
    try {
      const res = await axios.get('/tweets');
      setTweets(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createTweet = async (tweetData) => {
    try {
      await axios.post('tweets/new', tweetData);
      fetchTweets();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    // console.log(id)
    try {
      await axios.delete(`/tweets/${id}`);
      fetchTweets();
    } catch (error) {
      console.error(error);
    }

  };

  const handleUpdate = async (updatedTweet) => {
    // console.log(id)
    try {
      await axios.put(`/tweets/${updatedTweet._id}`, updatedTweet);
      fetchTweets();
    } catch (error) {
      console.error(error);
    }

  };
React.useEffect(() => {
    fetchTweets();
  }, []);


  return (
    <div className="App">
      <Nav />
      <Home />
      <Tweet tweets={tweets} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
      <NewTweet createTweet={createTweet} />
      <Footer />
    </div>
  );
}

export default App;
