import * as Types from '../constrants/index';

const load = () => {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

const save = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

const rootReducer = (state = load(), action) => {

    switch (action.type) {

        case Types.add_product:
            const exist = state.find(item => item._id === action.payload._id);

            if (exist) {
                const upState = state.map(item => {
                    if (item._id === action.payload._id) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                });

                save(upState);
                return upState;
            } else {
                const newPr = [...state, { ...action.payload, quantity: 1 }];
                save(newPr);
                return newPr;
            }

        case Types.del_product:
            const prDelete = Array.isArray(state) ? state.filter((item) => item.id !== action.payload.id) : [];
            save(prDelete);
            return prDelete;

        case Types.update_quantity:
            const { id, quantity } = action.payload;
            const newQuantity = Math.max(1, Number(quantity));
            const upState = state.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });

            if (JSON.stringify(upState) !== JSON.stringify(state)) {
                save(upState);
            }

            return upState;

        case Types.clear_cart:
            save([]);
            return [];
        default:
            return state;
    }
}

export default rootReducer;