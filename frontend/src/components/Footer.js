import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/logo.png"


function Footer() {
    return(
        <div>
            <section className="footer">
            <p className='copyright'>&copy; {new Date().getFullYear()} Tech <img className='footer-logo' src={Logo}></img> Tweet. All rights reserved.</p>
            <img className='footer-l' src={Logo}></img>
              <div className='footer-ul'>
                    <ul className='first-ul'>
                        <li>Home</li><br></br>
                        <li>News</li><br></br>
                        <li>Tweets</li><br></br>
                        <li>Publish</li><br></br>
                        <li>Contact</li><br></br>
                        
                    </ul>
                    <ul className='second-ul'>
                        <li>World</li><br></br>
                        <li>Connect</li><br></br>
                        <li>Publishers</li><br></br>
                        <li>Blog</li><br></br>
                        <li>Jobs</li><br></br>
                    </ul>
                    <ul className='third-ul'>
                        <li>Hiring</li><br></br>
                        <li>Network</li><br></br>
                        <li>Search</li><br></br>
                        <li>Articles</li><br></br>
                        <li>Technology</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Footer;