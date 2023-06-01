import axios from 'axios';
import React from 'react';
import './App.css';
import NewTweet from './components/NewTweet';
import Tweet from "./components/Tweet";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import News from "./components/News";
import TweetDetail from './components/TweetDetail';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import EditForm from './components/EditForm';


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

  const deleteTweet = async (_id) => {
    // console.log(id)
    try {
      await axios.delete(`/tweets/${_id}`);
      fetchTweets();
    } catch (error) {
      console.error(error);
    }

  };

  const updateTweet = async (updatedTweet) => {
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
      <Routes>
          <Route exact path="/" element={<><Home /><NewTweet createTweet={createTweet}/><Tweet tweets={tweets} createTweet={createTweet} handleDelete={deleteTweet} handleUpdate={updateTweet}/></>} /> 
          <Route exact path="/tweets" element={<><NewTweet createTweet={createTweet}/><Tweet tweets={tweets} createTweet={createTweet} handleDelete={deleteTweet} handleUpdate={updateTweet}/></>} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/tweet/:id" element={<TweetDetail tweets={tweets} deleteTweet={deleteTweet}/>} />
          <Route exact path="/tweets/:id/edit" element={<EditForm tweets={tweets} handleUpdate={updateTweet} />}/>      
      </Routes>
      <Footer />

      </div>

  );
}

export default App;
