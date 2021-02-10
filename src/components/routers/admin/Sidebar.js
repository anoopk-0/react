import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <ul>
            <li>
                <NavLink to="/admin/posts">Posts</NavLink>
            </li>
            <li>
                <NavLink to="/admin/users">Users</NavLink>
            </li>
        </ul>
    );
};
export default SideBar;
