export const addItem = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

export const delItem = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}

export const loginUser = (user) => ({
    type: 'LOGIN_USER',
    payload: user,
});

export const logoutUser = () => ({
    type: 'LOGOUT_USER',
});

export const deleteUser = (userId) => ({
    type: 'DELETE_USER',
    payload: { userId },
});
