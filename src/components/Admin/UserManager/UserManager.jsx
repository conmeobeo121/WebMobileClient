import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthUser } from '../../buttons/AuthContext';
// import { deleteUser } from '../../../redux/actions';
// import { useDispatch } from 'react-redux';

const UserManager = () => {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const [users, setUsers] = useState([]);
    const { user } = AuthUser();

    const fetchUsers = () => {
        axios.get('http://localhost:3000/mockDataUsers')
            .then(res => {
                const managerUsers = res.data.filter(user => user.access === 'manager');
                setUsers(managerUsers);
            })
            .catch(err => {
                console.error('Error fetching users: ', err.message);
            })
    };

    const handleDeleteUser = (userId) => {

        axios.delete(`http://localhost:3000/mockDataUsers/${userId}`)
            .then(res => {
                // dispatch(deleteUser(userId));
                setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
            })
            .catch(err => {
                console.log(`Error deleting user with ID ${userId}: ${err.message}`);
            });
    };

    useEffect(() => {

        if (!user || user.access !== 'admin') {
            navigate('/not-Found404');
        } else {
            fetchUsers();
        }
    }, [user, navigate]);

    const handleUpdateUser = (userId) => {
        navigate(`/admin-profile/user-management/update/${userId}`);
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className="card m-3">
                        <div className="card-header bg-primary text-white">
                            <h4 className="card-title">User Management</h4>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <Link to='/admin-profile/user-management/add' className='btn btn-danger'>
                                    Add Manager
                                </Link>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-bordered text-center">
                                    <thead>
                                        <tr>
                                            <th className="col-xs-1 col-md-1">ID Manager</th>
                                            <th className="col-xs-2 col-md-2">Name</th>
                                            <th className="col-xs-2 col-md-2">Email</th>
                                            <th className="col-xs-2 col-md-2">Access</th>
                                            <th className="col-xs-3 col-md-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className='align-items-center text-center'>
                                        {users.map((user, index) => (
                                            <tr key={user.id}>
                                                <td className='align-middle'>{user.id}</td>
                                                <td className='align-middle'>
                                                    <div className="d-flex align-items-center text-center gap-3 ms-4">
                                                        <img src={user.avatar} alt="avatar" className="rounded-circle img-fluid" style={{ width: 50 }} />
                                                        <span>{user.name}</span>
                                                    </div>
                                                </td>
                                                <td className='align-middle'>{user.email}</td>
                                                <td className='align-middle'>{user.access}</td>
                                                <td className='align-middle'>
                                                    <button onClick={() => handleUpdateUser(user.id)} className="btn btn-danger me-2">Update</button>
                                                    <button onClick={() => handleDeleteUser(user.id)} className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserManager;
