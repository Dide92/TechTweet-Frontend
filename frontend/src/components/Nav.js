import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/logo.png"

// import { Context } from "./../context/Context";
// import { useContext } from 'react';



function Nav() {
  // const { user, dispatch } = useContext(Context);
  // const handleLogout = () => {
  //   dispatch({ type: ".logout" })
  // }

  return (
    <div className='nav'>
      <section className="navbar">
        <ul>
        <li>
            <Link className='navtext' to="/"><img className='logoNav' src={Logo}></img></Link>
          </li>
          <li>
            <Link className='navtext' to="/">.home</Link>
          </li>
          <li>
            <Link className='navtext' to="/news">.news</Link>
          </li>
          <li>
            <Link className='navtext' to="/tweets">.tweets</Link>
          </li>
          <li>
            <Link className='navtext' to="/new">.new</Link>
          </li>
          {/* <li>
            <Link className='navtext' to="/login">.login</Link>
          </li>
          <li>
            <Link className='navtext' to="/register">.register</Link>
          </li>
          <li onClick={handleLogout}>
            {user && ".logout"}
          </li> */}
          <li>
            {/* <Link to="/contact">Contact</Link> */}
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Nav;
