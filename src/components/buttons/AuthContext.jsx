import axios from 'axios';
import { useState } from 'react';

export const AuthUser = () => {

    const getToken = () => localStorage.getItem('token');
    const getUser = () => localStorage.getItem('user');
    const getRole = () => localStorage.getItem('role');

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());
    const [role, setRole] = useState(getRole());

    const saveToken = (user, token, role) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('role', JSON.stringify(role));

        setToken(token);
        setUser(user);
        setRole(role);
    };

    const http = axios.create({
        baseURL: 'http://localhost:5000/api',
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        },
    });

    const postData = async (endpoint, data, headers = {}) => {
        try {
            const response = await http.post(endpoint, data, { headers });
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    const getData = async (endpoint, params = {}, headers = {}) => {
        try {
            const response = await http.get(endpoint, { params, headers });
            return response;
        } catch (error) {
            throw error;
        }
    };

    return {
        setToken: saveToken,
        token,
        user,
        role,
        getToken,
        postData,
        getData,
    };
};