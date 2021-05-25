import React from 'react';
import logo from '../images/amazon-logo-white.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
                <img src={logo} alt='amazon' />
            </Link>
            <div className='header-search'>
                <input className='header-search-input' />
                <SearchIcon className='header-search-icon' />
            </div>
            <div className='header-nav'>
                <div className='header-option'>
                    <span className='header-optionLineOne'>Hello Guest</span>
                    <span className='header-optionLineTwo'>Sign In</span>
                </div>
                <div className='header-option'>
                    <span className='header-optionLineThree'>Returns</span>
                    <span className='header-optionLineFour'>& Orders</span>
                </div>
                <div className='header-option'>
                    <span className='header-optionLineFive'>Your</span>
                    <span className='header-optionLineSix'>Prime</span>
                </div>
                <div className='header-optionBasket'>
                    <ShoppingBasketIcon />
                    <span className='header-basketCount'>0</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
