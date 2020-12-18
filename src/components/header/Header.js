import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase';
import './Header.scss';
import {ReactComponent as Logo} from '../../assests/crown.svg'

const Header = ({ currentUser }) => {
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
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {currentUser: state.user.currentUser};
};

export default connect(mapStateToProps)(Header);