import React, { useEffect, useState } from 'react';
import News from '../components/News';
import axios from 'axios';

function Home() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetchTweets();
  }, []);

  const fetchTweets = async () => {
    try {
      const res = await axios.get('/tweets');
      setTweets(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="home">
      <section className='first'>
        <div className='video'>
          <video autoPlay loop muted playsInline>
            <source src="/images/matrix1.mp4" />
          </video>
        </div>
        <div className='hello'>
          <h1 className='first'>def hello_world(): print("Welcome to Tech Tweet") hello_world()</h1>
        </div>
      </section>
      <section>
        <News />
       
      </section>
    </div>
  );
}

export default Home;
