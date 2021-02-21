import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => (
    <div class="navbar">
        <nav>
            <ul>
                <li class="nav-option">
                    <Link to="/">Home</Link>
                </li>
                <li class="nav-option">
                    <Link to="/actions">Actions</Link>
                </li>
                <li class="nav-option">
                    <Link to="/calendar">Calendar</Link>
                </li>
                <li class="nav-option">
                    <Link to="/login-signup">Login/Signup</Link>
                </li>
            </ul>
        </nav>
    </div>
);

export default Navbar;