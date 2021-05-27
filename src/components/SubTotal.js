import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router';
import { getBasketTotal } from './context/Reducer';
import { useStateValue } from './context/StateProvider';

const SubTotal = () => {
    const [{ basket }, dispatch] = useStateValue();
    const history = useHistory();
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className='subtotal-gift'>
                            <input type='checkbox' />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button onClick={(event) => history.push('/payment')}>
                Proceed to Checkout
            </button>
        </div>
    );
};

export default SubTotal;
