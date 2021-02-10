import React from "react";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="NavBar">
            <ul>
                <li>
                    {/* to highlight the current router, we should use NavLink, Link or NavLink under the hood have he achor tag only, but it also
                    has a onCLick function it prevent the default behaviour */}
                    <NavLink to="/admin">admin</NavLink>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Product">Product</Link>
                </li>
                <li>
                    <Link to="/posts/2020/03">Posts</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
