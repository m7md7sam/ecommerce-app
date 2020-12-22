import { addItemToCart, removeItemFromCart } from './cartUtils';

const INITION_STATE = {hidden: true, cartItems: []};

const cartReducer = (state = INITION_STATE, action) => {
    switch (action.type) {
        case 'TOGGLE_CART_HIDDEN':
            return {
                ...state,
                hidden: !state.hidden
            };
        case 'ADD_ITEM' :
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case 'REMOVE_ITEM':
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case 'CLEAR_ITEM_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            };
        default:
            return state;
    }
};

export default cartReducer;