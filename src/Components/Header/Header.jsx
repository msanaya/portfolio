import React from "react";
import { NavLink} from 'react-router-dom';
import "./Header.css";


function Header() {
  

  return (
    <div className="header">
      <div id="left-side">
        <NavLink id="header-title" to="/">
          <h1>HOME</h1>
        </NavLink>
        </div>
        <div className="header-links-container">
          <NavLink className="header-links"
            id="header-add-products"
            to="/projects"
          activeStyle={{ color: '#F8B195' }}>Projects</NavLink>
         <NavLink className="header-links"
            id="header-add-products"
            to="/skills"
            activeStyle={{ color: '#F8B195' }}>Skills</NavLink>
        </div>
      </div>

  )
}

// https://github.com/reactjs/react-router-tutorial/tree/master/lessons/05-active-links

export default Header;