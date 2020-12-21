import React from 'react';
import {connect} from 'react-redux';

import { toggleCartHidden } from '../../redux/actions';
import { selectCartItemsCount } from '../../redux/reducers/cartSelector';

import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => {
    return {
        itemCount: selectCartItemsCount(state)
    }; 
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);