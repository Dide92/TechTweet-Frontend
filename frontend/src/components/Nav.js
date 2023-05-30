import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    return(
    <div className='nav'>
        <section className="navbar">
            <ul>
                <li>.home</li>
                <li>.news</li>
                <li>.tweets</li>
                <li>.contact</li>
            </ul>
        </section> 
    </div>
    )
}

export default Nav;