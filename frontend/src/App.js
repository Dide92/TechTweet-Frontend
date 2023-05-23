import axios from 'axios';
import React from 'react'
import './App.css';

function App() {
  const [tweet, setTweet] = React.useState([]);

  React.useEffect(()=> {
    const fetchTweet = async ()=> {
      const res = await axios.get('/tweets')
      console.log(res)
    }
    fetchTweet()
  },[])
  return (
    <div className="App">
      <h1>Home</h1>
    </div>
  );
}

export default App;
