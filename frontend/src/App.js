import axios from 'axios';
import React from 'react'
import './App.css';
import Tweet from "./components/Tweet"

function App() {
  const [tweets, setTweets] = React.useState([]);

  React.useEffect(()=> {
    const fetchTweet = async ()=> {
      const res = await axios.get('/tweets')
      // console.log(res)  //data fetched
      setTweets(res.data)
    }
    fetchTweet()
  },[])
  return (
    <div className="App">
      <Tweet tweets={tweets} />
    </div>
  );
}

export default App;
