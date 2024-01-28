import { add_product, clear_cart, del_product, update_quantity } from "../constrants";

export const __addItem = (product) => {
    return {
        type: add_product,
        payload: { ...product, quantity: 1 }
    }
}


export const __deleteItem = (id) => {
    return {
        type: del_product,
        payload: id
    }
}

export const __updateQuantity = (id, quantity) => {
    return {
        type: update_quantity,
        payload: { id, quantity },
    };
};

export const __clearCart = () => {
    return {
        type: clear_cart,
        payload: [],
    };
};