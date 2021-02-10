import React from "react";
import { Route } from 'react-router-dom';
import Users from './Users';
import SideBar from './Sidebar';
import Posts from './Posts';

const Dashboard = ({ match }) => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <SideBar />
            <div className="container">
                <Route path="/admin/users" component={Users} />
                <Route path="/admin/posts" component={Posts} />
            </div>
        </div>
    );
};
export default Dashboard;
