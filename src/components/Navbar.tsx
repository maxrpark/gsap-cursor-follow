import React from "react";
import { NavLink } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <nav>
      <h2>Gsap Cursor follow</h2>

      <div className='links'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? "activeBtn navLink" : "navLink"
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? "activeBtn navLink" : "navLink"
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
