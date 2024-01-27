import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthUser } from './AuthContext';
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { postData, setToken } = AuthUser();
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const ROLES = {
        ADMIN: 'admin',
        CUSTOMER: 'customer'
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let response = await postData('/auth/login', { email, password });
            console.log('Server Response:', response);

            if (response.token && response.role) {
                setToken(response, response.token, response.role);

                console.log('Token:', response.token);
                console.log('User:', response);

                if (response.role === ROLES.ADMIN) {
                    navigate('/admin-profile');
                } else if (response.role === ROLES.CUSTOMER) {
                    navigate('/manager-profile');
                }
            } else {
                console.error('Token or role is missing in the server response.');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0">Login</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        aria-describedby="emailHelp"
                                        autoComplete="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                    <div id="emailHelp" className="form-text">We will never share your email with anyone else</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        autoComplete="current-password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                                    <label className="form-check-label" htmlFor="rememberMe">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Login</button>
                            </form>
                            {error && <div className="alert alert-danger mt-3">{error}</div>}
                            <div className="mt-3">
                                <p>Don t have an account? <button className="btn btn-link">Signup</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
