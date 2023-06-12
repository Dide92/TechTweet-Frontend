import React, { useEffect, useState } from 'react';
import News from '../components/News';
import Homesection from '../components/Homesection';

import axios from 'axios';
import Logo from "../images/logo.png"

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
      // console.error(error);
    }
  };

  return (
    <div className="home">
      
      <section className='first'>
        <div className='title'>
          <h1 className='tech'>Tech</h1>
          <h1 className='tweet'>Tweet</h1>
          <img className='logo'src={Logo}/>
          {/* <video autoPlay loop muted playsInline>
            <source src="../techbackground.mp4" />
          </video> */}
        </div> 
        <div className='hello'>
          {/* <h1 className='first'>def hello_world(): print("Welcome to Tech Tweet") hello_world()</h1> */}
        </div>
      </section>
      <section>
        <News />
        <Homesection />
      </section>
    </div>
  );
}

export default Home;
