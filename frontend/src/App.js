import axios from 'axios';
import React from 'react';
import './App.css';
import Tweet from "./components/Tweet";

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

  const handleDelete = async (id) => {
    // console.log(id)
    try {
      await axios.delete(`/tweets/${id}`);
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
      <Tweet tweets={tweets} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
