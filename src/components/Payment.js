import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './context/StateProvider';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = (event) => {};

    const handleChange = (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    };

    return (
        <div className='payment'>
            <div className='payment-container'>
                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items</Link>
                    )
                </h1>
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment-address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment-items'>
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
                <div className='payment-section'>
                    <div className='payment-method'>
                        <h3>Payment method</h3>
                    </div>
                    <div className='payment-details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
