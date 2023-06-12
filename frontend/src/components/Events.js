import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Clock from "../images/clock.png"


function Events() {
  const [isClicked, setIsClicked] = useState(false);
  const toggleColor = () => {
    setIsClicked(!isClicked);
  };
    
    return (
      <div className={`new detail ${isClicked ? 'secondary' : 'primary'}`}>
      <div className={`toggle-bar ${isClicked ? 'active' : ''}`} onClick={toggleColor}>
        <div className="toggle-handle"></div>
      </div>
            <h1 className='tweets'>EVENTS</h1>
      <div className='event-container'>
      <h3 className='year'>2023</h3>

      <div className='event'>
        <div className='event-left'>
            <div className='event-date'>
            <div className='date'>16</div>
            <div className='month'>June</div>
        </div>
      </div>
 
      <div className='event-right'>
        <h3 className='event-title'>Women in Tech</h3>

        <div className='event-description'>
            Lorem ipsum dolor, sit amet consectetur adispisicing elit. Accusamus ratione.
        </div>
        <div className='event-timing'>
            <img src={Clock}/>3:00 pm
        </div>
      </div>

      </div>
      <div className='event'>
        <div className='event-left'>
            <div className='event-date'>
            <div className='date'>23</div>
            <div className='month'>July</div>
        </div>
      </div>
 
      <div className='event-right'>
        <h3 className='event-title'>Tech Networking Happy Hour</h3>

        <div className='event-description'>
            Lorem ipsum dolor, sit amet consectetur adispisicing elit. Accusamus ratione.
        </div>
        <div className='event-timing'>
            <img src={Clock}/>5:30 pm
        </div>
      </div>

      </div>
      <div className='event'>
        <div className='event-left'>
            <div className='event-date'>
            <div className='date'>8</div>
            <div className='month'>Aug</div>
        </div>
      </div>
 
      <div className='event-right'>
        <h3 className='event-title'>Summer Party</h3>

        <div className='event-description'>
            Lorem ipsum dolor, sit amet consectetur adispisicing elit. Accusamus ratione.
        </div>
        <div className='event-timing'>
            <img src={Clock}/>4:30 pm
        </div>
      </div>

      </div>
      <div className='event'>
        <div className='event-left'>
            <div className='event-date'>
            <div className='date'>23</div>
            <div className='month'>Sep</div>
        </div>
      </div>
 
      <div className='event-right'>
        <h3 className='event-title'>Tech World</h3>

        <div className='event-description'>
            Lorem ipsum dolor, sit amet consectetur adispisicing elit. Accusamus ratione.
        </div>
        <div className='event-timing'>
            <img src={Clock}/>7:00 pm
        </div>
      </div>

      </div>
      <h3 className='year'>2024</h3>

<div className='event'>
  <div className='event-left'>
      <div className='event-date'>
      <div className='date'>8</div>
      <div className='month'>January</div>
  </div>
</div>

<div className='event-right'>
  <h3 className='event-title'>UX UI</h3>

  <div className='event-description'>
      Lorem ipsum dolor, sit amet consectetur adispisicing elit. Accusamus ratione.
  </div>
  <div className='event-timing'>
      <img src={Clock}/>5:00 pm
  </div>
</div>

</div>
<div className='event'>
  <div className='event-left'>
      <div className='event-date'>
      <div className='date'>10</div>
      <div className='month'>Feb</div>
  </div>
</div>

<div className='event-right'>
  <h3 className='event-title'>AI World</h3>

  <div className='event-description'>
      Lorem ipsum dolor, sit amet consectetur adispisicing elit. Accusamus ratione.
  </div>
  <div className='event-timing'>
      <img src={Clock}/>7:30 pm
  </div>
</div>

</div>
<div className='event'>
  <div className='event-left'>
      <div className='event-date'>
      <div className='date'>27</div>
      <div className='month'>Feb</div>
  </div>
</div>

<div className='event-right'>
  <h3 className='event-title'>2024 Tech Event</h3>

  <div className='event-description'>
      Lorem ipsum dolor, sit amet consectetur adispisicing elit. Accusamus ratione.
  </div>
  <div className='event-timing'>
      <img src={Clock}/>8:00 pm
  </div>
</div>

</div>
<div className='event'>
  <div className='event-left'>
      <div className='event-date'>
      <div className='date'>23</div>
      <div className='month'>Mar</div>
  </div>
</div>

<div className='event-right'>
  <h3 className='event-title'>Bootcamp Info Session</h3>

  <div className='event-description'>
      Lorem ipsum dolor, sit amet consectetur adispisicing elit. Accusamus ratione.
  </div>
  <div className='event-timing'>
      <img src={Clock}/>10:00 am
  </div>
</div>

</div>
    </div>
    </div>
   
    )
}

export default Events;