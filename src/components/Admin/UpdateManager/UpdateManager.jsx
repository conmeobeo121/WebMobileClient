import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateManager = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isAddManagerMode = !id;

    const [manager, setManager] = useState({
        name: '',
        email: '',
        access: '',
        password: '',
        address: '',
        phone: '',
        avatar: '',
    });

    useEffect(() => {
        const fetchManager = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/mockDataUsers/${id}`);
                setManager(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchManager();
    }, [id]);

    const onSave = async (e) => {
        e.preventDefault();

        const managerName = e.target.elements.txtName.value;
        const managerEmail = e.target.elements.txtEmail.value;
        const managerAccess = e.target.elements.txtAccess.value;
        const managerPassword = e.target.elements.txtPassword.value;
        const managerAddress = e.target.elements.txtAddress.value;
        const managerPhone = e.target.elements.txtPhone.value;
        const managerAvatar = e.target.elements.txtAvatar.value;

        if (!managerName || !managerEmail || !managerAccess || !managerPassword || !managerAddress || !managerPhone) {
            alert('Please enter complete information.');
            return;
        }

        try {
            if (isAddManagerMode) {
                const response = await axios.post('http://localhost:3000/mockDataUsers', {
                    name: managerName,
                    email: managerEmail,
                    access: managerAccess,
                    password: managerPassword,
                    address: managerAddress,
                    phone: managerPhone,
                    avatar: managerAvatar
                });

                console.log('New manager has been added:', response.data);
            } else {
                const response = await axios.put(`http://localhost:3000/mockDataUsers/${id}`, {
                    name: managerName,
                    email: managerEmail,
                    access: managerAccess,
                    password: managerPassword,
                    address: managerAddress,
                    phone: managerPhone,
                    avatar: managerAvatar
                });

                console.log('Management has been updated:', response.data);
            }

            navigate('/admin-profile/user-management');
        } catch (error) {
            console.error('Error updating manager:', error);
        }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="my-4">{isAddManagerMode ? 'Add Manager' : 'Update Manager'}</h2>
                    <form onSubmit={onSave}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter manager's name"
                                name='txtName'
                                defaultValue={manager.name}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter manager's email"
                                name='txtEmail'
                                defaultValue={manager.email}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Access</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter access level"
                                name='txtAccess'
                                defaultValue={manager.access}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter manager's password"
                                name='txtPassword'
                                defaultValue={manager.password}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Avatar</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter avatar's password"
                                name='txtAvatar'
                                defaultValue={manager.avatar}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter manager's address"
                                name='txtAddress'
                                defaultValue={manager.address}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone</label>
                            <input
                                type="tel"
                                className="form-control"
                                placeholder="Enter manager's phone number"
                                name='txtPhone'
                                defaultValue={manager.phone}
                            />
                        </div>

                        <div className="d-flex justify-content-between">
                            <Link to='/admin-profile/user-management' className='btn btn-danger'>
                                Cancel
                            </Link>
                            <button type='submit' className='btn btn-primary'>
                                {isAddManagerMode ? 'Add Manager' : 'Save Changes'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateManager;
