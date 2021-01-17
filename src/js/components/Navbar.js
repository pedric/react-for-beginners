import React from 'react';

// Stateless functional component

const NavBar = ({ numberOfItems }) => {
  return(
    <nav>
      <span>items: { numberOfItems }</span>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar