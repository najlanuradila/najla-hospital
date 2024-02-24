import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Single Service</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Contact us</a></li>
                <li class="book"><a href="#">Book Appointment</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;