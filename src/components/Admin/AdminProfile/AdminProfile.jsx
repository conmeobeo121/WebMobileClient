import React from 'react'
import { AuthUser } from '../../buttons/AuthContext'
import { NavLink, useNavigate } from 'react-router-dom';

const AdminProfile = () => {
    const { user } = AuthUser();
    const navigate = useNavigate();

    if (!user || user.access !== 'admin') {
        navigate('/not-Found404');
        return null;
    }

    const handleMassage = () => {
        navigate('/admin-message');
    }

    return (
        <>
            <div>
                &lt;<div style={{ backgroundColor: '#eee' }}>
                    <div className="container py-5">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/" aria-current="page">User Profile</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to='/admin-profile/user-management'>User Manager</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card mb-4">
                                    <div className="card-body text-center">
                                        <img src={user.avatar} alt="avatar" className="rounded-circle img-fluid" style={{ width: 150 }} />
                                        <h5 className="my-3">{user.name}</h5>
                                        <p className="text-muted mb-1">Full Stack Developer</p>
                                        <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                        <div className="d-flex justify-content-center mb-2">
                                            <button type="button" className="btn btn-primary">Follow</button>
                                            <button
                                                type="button"
                                                className="btn btn-outline-primary ms-1"
                                                onClick={handleMassage}
                                            >
                                                Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-4 mb-lg-0">
                                    <div className="card-body p-0">
                                        <ul className="list-group list-group-flush rounded-3">
                                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                <i className="fas fa-globe fa-lg text-warning" />
                                                <p className="mb-0">https://mdbootstrap.com</p>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                <i className="fab fa-github fa-lg" style={{ color: '#333333' }} />
                                                <p className="mb-0">mdbootstrap</p>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }} />
                                                <p className="mb-0">@mdbootstrap</p>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }} />
                                                <p className="mb-0">mdbootstrap</p>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                <i className="fab fa-facebook-f fa-lg" style={{ color: '#3b5998' }} />
                                                <p className="mb-0">mdbootstrap</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Full Name</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{user.name}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Email</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{user.email}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Phone</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{user.phone}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Mobile</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{user.phone}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Address</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <p className="text-muted mb-0">{user.address}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card mb-4 mb-md-0">
                                            <div className="card-body">
                                                <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                                                </p>
                                                <p className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                                                <div className="progress rounded" style={{ height: 5 }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</p>
                                                <div className="progress rounded" style={{ height: 5 }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</p>
                                                <div className="progress rounded" style={{ height: 5 }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</p>
                                                <div className="progress rounded" style={{ height: 5 }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</p>
                                                <div className="progress rounded mb-2" style={{ height: 5 }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card mb-4 mb-md-0">
                                            <div className="card-body">
                                                <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                                                </p>
                                                <p className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</p>
                                                <div className="progress rounded" style={{ height: 5 }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</p>
                                                <div className="progress rounded" style={{ height: 5 }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: '72%' }} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</p>
                                                <div className="progress rounded" style={{ height: 5 }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: '89%' }} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</p>
                                                <div className="progress rounded" style={{ height: 5 }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                                <p className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</p>
                                                <div className="progress rounded mb-2" style={{ height: 5 }}>
                                                    <div className="progress-bar" role="progressbar" style={{ width: '66%' }} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminProfile
