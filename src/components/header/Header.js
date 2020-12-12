import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import {ReactComponent as Logo} from '../../assests/crown.svg'

const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">Shop</Link>
                <Link to="/shop" className="option">Contact</Link>
            </div>
        </div>
    );
};

export default Header;