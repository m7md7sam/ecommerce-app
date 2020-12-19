export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER',
        payload: user
    }
};

export const toggleCartHidden = () => ({type: 'TOGGLE_CART_HIDDEN'});