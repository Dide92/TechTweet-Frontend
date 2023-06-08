import axios from 'axios';
import React, { useContext } from 'react';
import './App.css';
import NewTweet from './components/NewTweet';
import Tweet from "./components/Tweet";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import News from "./components/News";
import Events from "./components/Events";
import TweetDetail from './components/TweetDetail';
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import EditForm from './components/EditForm';
// import { Context } from "./context/Context";



function App() {
  // const { user } = useContext(Context);
  const [tweets, setTweets] = React.useState([]);
  const URL = process.env.REACT_APP_API_URL;
  const fetchTweets = async () => {
    try {
      const res = await axios.get(`${URL}/tweets/`);
      setTweets(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createTweet = async (tweetData) => {
    try {
      await axios.post(`${URL}/tweets/new`, tweetData);
      fetchTweets();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTweet = async (_id) => {
    // console.log(id)
    try {
      await axios.delete(`${URL}/tweets/${_id}`);
      fetchTweets();
    } catch (error) {
      console.error(error);
    }

  };

  const updateTweet = async (updatedTweet) => {
    // console.log(id)
    try {
      await axios.put(`${URL}/tweets/${updatedTweet._id}`, updatedTweet);
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
      <Route exact path="/" element={<><Home /><Tweet tweets={tweets} handleDelete={deleteTweet} handleUpdate={updateTweet} /></>} />
      <Route exact path="/new" element={<NewTweet createTweet={createTweet}/>} />
          <Route exact path="/tweets" element={<Tweet tweets={tweets} createTweet={createTweet} handleDelete={deleteTweet} handleUpdate={updateTweet} /> } />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/events" element={<Events />} />
          <Route exact path="/tweet/:id" element={<TweetDetail tweets={tweets} handleDelete={deleteTweet}/>} />
          <Route exact path="/tweets/:id/edit" element={<EditForm tweets={tweets} handleUpdate={updateTweet} />}/>    
          <Route path="/register" element= {<Register />} />   
          <Route path="/login" element= {<Login />} /> 
          <Route path="/setting" element= {<Setting />} /> 
          {/* <Route exact path="/setting" element={user ? <Setting /> : <Register />} />
          <Route path="/login" element= {user ? <Home/> :<Login />} />
          <Route path="/register" element= {user ? <Home/> :<Register />} /> */}


      </Routes>
      <Footer />
     

      </div>

  );
}

export default App;
