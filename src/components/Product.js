import React from 'react';

const Product = ({ id, title, image, price, rating }) => {
    return (
        <div className='product'>
            <div className='product-info'>
                <p>{title}</p>
                <p className='product-price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product-rating'>
                    {Array(rating)
                        .fill()
                        .map((star, index) => (
                            <p key={index}>⭐️</p>
                        ))}
                </div>
                <img src={image} alt='lean' />
                <button>Add to Basket</button>
            </div>
        </div>
    );
};

export default Product;
