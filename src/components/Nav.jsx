import React from 'react';
import '../App.css';
import TextField from '@material-ui/core/TextField';


function Nav() {
  return (
    <nav className="main-nav">
      <ul className="nav-links">
        <li>Home</li>
        <li>Ask Community</li>
        <li>Products</li>
        <li>Content</li>
        <li>Events</li>
        <li>
          <TextField id="filled-basic" label="Search" variant="filled" />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
