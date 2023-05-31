import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='nav'>
      <section className="navbar">
        <ul>
          <li>
            <Link to="/">.home</Link>
          </li>
          <li>
            <Link to="/news">.news</Link>
          </li>
          <li>
            <Link to="/tweets">.tweets</Link>
          </li>
          <li>
            {/* <Link to="/contact">Contact</Link> */}
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Nav;
