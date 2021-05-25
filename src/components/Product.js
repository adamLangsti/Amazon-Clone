import React from 'react';

const Product = () => {
    return (
        <div className='product'>
            <div className='product-info'>
                <p>The lean startup</p>
                <p className='product-price'>
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className='product-rating'>
                    <p>⭐️</p>
                </div>
                <img
                    src='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                    alt='lean'
                />
                <button>Add to Basket</button>
            </div>
        </div>
    );
};

export default Product;
