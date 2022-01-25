import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from './../../../Hooks/useAuth';

// animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const Register = () => {

    //animation
    useEffect(() => {
        AOS.init();
    })

    const { user, registerUser, isLoading, authError } = useAuth();

    const [loginData, setLoginData] = useState({});

    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleRegister = e => {
        if (loginData?.password !== loginData?.password2) {
            alert('Both password did not matched. Try again.');
            return
        }
        registerUser(loginData?.email, loginData?.password, loginData?.name, navigate);
        e.preventDefault();
    }
    return (
        <div className="col-lg-5 col-10 mx-auto border rounded-3 shadow-lg my-5 p-3" data-aos="fade-left" data-aos-duration="3000">
            <h3 className="fw-light fst-italic text-center my-3">User Registration</h3>
            <Form className="px-3" onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text"
                        placeholder="Your Name"
                        name="name"
                        onBlur={handleOnBlur} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                        placeholder="Your Email"
                        name="email"
                        onBlur={handleOnBlur} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="Type Password"
                        name="password"
                        onBlur={handleOnBlur} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword2">
                    <Form.Label>Retype Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="Retype Your Password"
                        name="password2"
                        onBlur={handleOnBlur} />
                </Form.Group>
                <Button variant="warning" type="submit">Register</Button>
            </Form>
            <div className="mx-auto text-center">
                {isLoading && <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}

                {user?.email && <div className="alert alert-success" role="alert">Registered successfully!
                </div>}

                {authError && <div className="alert alert-danger" role="alert">{authError}
                </div>}
            </div>
            <NavLink className="text-decoration-none" to="/login">
                <p className="text-center fw-bold my-3">Already Registered? Please Login.</p>
            </NavLink>

        </div >
    );
};

export default Register;