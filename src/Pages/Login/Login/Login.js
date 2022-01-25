import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';

// animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const Login = () => {

    //animation
    useEffect(() => {
        AOS.init();
    })

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData?.email, loginData?.password, location, navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }
    return (
        <div className="col-lg-4 col-10 mx-auto border rounded-3 shadow-lg my-5 p-3" data-aos="fade-left" data-aos-duration="3000">
            <h3 className="fw-light fst-italic text-center my-3">User Login</h3>
            <Form className="px-3" onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                        placeholder="Your Email"
                        name="email"
                        onChange={handleOnChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="Your Password"
                        name="password"
                        onChange={handleOnChange} />
                </Form.Group>
                <Button variant="warning" type="submit">Sign in</Button>
            </Form>


            <NavLink className="text-decoration-none" to="/register">
                <p className="text-center fw-bold my-3">New User? First register, please.</p>
            </NavLink>

            <div className="mx-auto text-center">
                {isLoading && <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}

                {user?.email && <div className="alert alert-success" role="alert">Login successfully!
                </div>}

                {authError && <div className="alert alert-danger" role="alert">{authError}
                </div>}

                <hr />

                <Button variant="outline-primary" onClick={handleGoogleSignIn}>Sign in using Google</Button>
            </div>

        </div >
    );
};

export default Login;