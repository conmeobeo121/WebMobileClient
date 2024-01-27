import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import CartBtn from './buttons/CartBtn';
import { AuthUser } from './buttons/AuthContext';

const Navbar = () => {
    const { user, logout } = AuthUser();
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleLogoutClick = () => {
        logout();
        // navigate('/');
        navigate('/login');
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                <div className="container-fluid py-2">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link text-black" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-black" to="/products">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-black" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-black" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <NavLink className="navbar-brand mx-auto fw-bold text-black" to="/">APPLE MART</NavLink>
                        <div className="d-flex">
                            {user ? (
                                <>
                                    <span className="text-black me-3 mt-1">{user.name}</span>
                                    {<NavLink to="/protected-profile" className="nav-link text-black me-3 mt-1">Profile</NavLink>}
                                    <button onClick={handleLogoutClick} className="btn btn-outline-primary text-white">Logout</button>
                                </>
                            ) : (
                                <button onClick={handleLoginClick} className="btn btn-outline-primary text-white">Login</button>
                            )}
                            <CartBtn />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
