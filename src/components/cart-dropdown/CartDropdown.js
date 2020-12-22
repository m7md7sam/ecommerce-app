import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/reducers/cartSelector';
import { toggleCartHidden } from '../../redux/actions'


import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    :
                    <span className="empty-message">Your Cart is Empty</span>
                }
            </div>
            <CustomButton
                onClick={
                    () => {
                        history.push('/checkout');
                        dispatch(toggleCartHidden())
                    }
                }
            >Go To Check Out
            </CustomButton>
        </div>
    );
};

const mapStateToProps = state => ({cartItems: selectCartItems(state)});


export default withRouter(connect(mapStateToProps)(CartDropdown));