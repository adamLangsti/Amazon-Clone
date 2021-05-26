import React from 'react';
import logo from '../images/amazon-logo-white.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './context/StateProvider';

const Header = () => {
    const [{ basket }, dispatch] = useStateValue();

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
                <Link to='/login'>
                    <div className='header-option'>
                        <span className='header-optionLineOne'>
                            Hello Guest
                        </span>
                        <span className='header-optionLineTwo'>Sign In</span>
                    </div>
                </Link>

                <div className='header-option'>
                    <span className='header-optionLineThree'>Returns</span>
                    <span className='header-optionLineFour'>& Orders</span>
                </div>
                <div className='header-option'>
                    <span className='header-optionLineFive'>Your</span>
                    <span className='header-optionLineSix'>Prime</span>
                </div>

                <Link to='/checkout'>
                    <div className='header-optionBasket'>
                        <ShoppingBasketIcon />
                        <span className='header-basketCount'>
                            {basket.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;
