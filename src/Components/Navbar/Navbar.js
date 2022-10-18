import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About me</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact me</NavLink>
            </li>
        </ul>
    )
}

export default Navbar;