import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';

const Dashboard = () => {
    const { admin } = useAuth();
    return (
        <div className="d-flex">
            <div className="col-4 col-lg-2 border-end border-dark">
                <div className="d-flex flex-column flex-shrink-0 p-3 bg-light h-100">
                    <Navbar.Brand as={Link} className="d-flex align-items-center m-0 p-0 link-dark text-decoration-none fs-3" to="/home">Homepage</Navbar.Brand>
                    <hr></hr>
                    <ul className="nav nav-pills flex-column mb-auto">

                        {admin && <Nav.Link as={HashLink} className="nav-link link-dark" to={`/dashboard/admin`}>Make Admin</Nav.Link>}

                        <Nav.Link as={HashLink} className="nav-link link-dark" to={`/dashboard/add_story`}>Add Story</Nav.Link>

                        {admin && <Nav.Link as={HashLink} className="nav-link link-dark" to={`/dashboard/manage_stories`}>Manage Stories</Nav.Link>}
                    </ul>
                </div>
            </div>
            <div className="col-8 col-lg-10 bg-transparent">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;