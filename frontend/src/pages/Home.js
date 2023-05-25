import React from 'react';

function Home() {
  return (
    <div className="home">
   
        <section className='first'>
            <div>
            <video autoPlay loop muted playsInline>
            <source src="/images/matrix1.mp4" />
            </video>
            </div>
            <div className='hello'>
            <h1>def hello_world(): <br></br> <span className='print'>print("Welcome to Tech Tweet")<br></br><br></br></span>hello_world()</h1>
            </div>
        </section>
    
    </div>
  );
}

export default Home;
