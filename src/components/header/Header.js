import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase';
import './Header.scss';
import {ReactComponent as Logo} from '../../assests/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCartHidden } from '../../redux/reducers/cartSelector';
import { selectCurrentUser } from '../../redux/reducers/userSelector';

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">Shop</Link>
                <Link to="/shop" className="option">Contact</Link>
                {currentUser
                ? <div className="option" onClick={() => auth.signOut()}>sign Out</div>
                : <Link to="/signin" className="option">Sin In</Link>
                }
                <CartIcon />
            </div>
            {hidden ? null : <CartDropdown />}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
    }
);

export default connect(mapStateToProps)(Header);