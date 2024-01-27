import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthUser } from './AuthContext';

const Signup = () => {
    const navigate = useNavigate();

    // State for form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { postData } = AuthUser();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleSignupSubmit = async (event) => {
        event.preventDefault();

        try {
            let response = await postData('/auth/register', { name, email, password });
            console.log('Server Response:', response);

            console.log('User:', response);

            navigate('/login');

        } catch (error) {
            console.error(error);
        }
        // Perform signup logic here, e.g., send data to server
        // You can add validation and error handling as needed

        // After successful signup, you can navigate to another page
        // navigate('/dashboard');
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-0">Signup</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSignupSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        aria-describedby="emailHelp"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <div id="emailHelp" className="form-text">Well never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Signup</button>
                            </form>
                            <div className="mt-3">
                                <p>Already have an account? <button onClick={handleLoginClick} className="btn btn-link">Login</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
