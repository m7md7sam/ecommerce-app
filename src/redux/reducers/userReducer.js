const INITION_STATE = {currentUser: null};
export const userReducer = (state = INITION_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return { ...state, currentUser: action.payload };
        default:
            return state;
    }
};