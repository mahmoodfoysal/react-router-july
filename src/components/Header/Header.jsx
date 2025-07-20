import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <h2>NavBar</h2>
            <nav>
                <span>My website</span>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </div>
    );
};

export default Header;