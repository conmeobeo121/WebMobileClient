import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartBtn = () => {
    const state = useSelector((state) => state.addItem)
    return (
        <>
            <NavLink to="/cart" className="btn btn-outline-primary ms-2 text-black">
                <i className="bi bi-cart me-1"></i> Cart ({state.length})
            </NavLink>
        </>
    );
};

export default CartBtn;
