import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
    return (
        <div>
            <h2>nav</h2>
            <Link className='navLink' to='/'>
                Home
            </Link>
            \\\\\\\\\\\\\\\
            <Link className='navLink' to='/about'>
                About
            </Link>
        </div>
    );
};

export default Nav;
