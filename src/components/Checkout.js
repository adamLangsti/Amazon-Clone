import React from 'react';
import logo from '../images/amazon-checkout.jpg';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './context/StateProvider';
import SubTotal from './SubTotal';

const Checkout = () => {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout-left'>
                <img src={logo} alt='checkout' className='checkout-ad' />

                <div>
                    <h2 className='checkout-title'>Your Shopping Basket</h2>
                </div>
                <div className='checkout-right'>
                    {basket.map((item) => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <SubTotal />
        </div>
    );
};

export default Checkout;
