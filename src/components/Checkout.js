import React from 'react';
import logo from '../images/amazon-checkout.jpg';
import SubTotal from './SubTotal';

const Checkout = () => {
    return (
        <div className='checkout'>
            <div className='checkout-left'>
                <img src={logo} alt='checkout' className='checkout-ad' />
                <div>
                    <h2 className='checkout-title'>Your Shopping Basket</h2>
                </div>
            </div>
            <div className='checkout-right'>
                <SubTotal />
            </div>
        </div>
    );
};

export default Checkout;
