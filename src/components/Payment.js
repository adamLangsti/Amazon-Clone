import { Link, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './context/StateProvider';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './context/Reducer';
import axios from './Axios';
import { db } from '../firebase';

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate stripe secret that allows to charge customers
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currency subunit ex $10 = 1000cents
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });
            setClientSecret(response.data.clientSecret);
        };
        getClientSecret();
    }, [basket]);

    console.log('The secret is >>', clientSecret);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            })
            .then(({ paymentIntent }) => {
                // paymentIntent = payment confirmation
                db.collection('users')
                    .doc(user?.uid)
                    .collection('orders')
                    .doc(paymentIntent.id)
                    .set({
                        basket: basket,
                        amount: paymentIntent.amount,
                        created: paymentIntent.created,
                    });

                setSucceeded(true);
                setError(null);
                setProcessing(false);

                dispatch({
                    type: 'EMPTY_BASKET',
                });

                history.replace('/orders');
            });
    };

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
                        {basket.map((item, index) => (
                            <div key={index}>
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            </div>
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
                            <div className='payment-priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button
                                    disabled={
                                        processing || disabled || succeeded
                                    }>
                                    <span>
                                        {processing ? (
                                            <p>Processing</p>
                                        ) : (
                                            'Buy Now'
                                        )}
                                    </span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
