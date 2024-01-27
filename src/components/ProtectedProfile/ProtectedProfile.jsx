import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthUser } from '../buttons/AuthContext';

const ProtectedProfile = ({ element, requiredRole }) => {
    const { user } = AuthUser();

    if (!user || !user.access) {
        return <Navigate to="/not-Found404" />;
    }

    if (user.access !== requiredRole) {
        switch (user.access) {
            case 'admin':
                return <Navigate to="/admin-profile" />;
            case 'manager':
                return <Navigate to="/manager-profile" />;
            case 'user':
                return <Navigate to="/user-profile" />;
            default:
                return <Navigate to="/not-Found404" />;
        }
    }

    return element;
};

export default ProtectedProfile;
