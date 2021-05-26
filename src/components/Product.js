import React from 'react';
import { useStateValue } from './context/StateProvider';

const Product = ({ id, title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
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
                <button onClick={addToBasket}>Add to Basket</button>
            </div>
        </div>
    );
};

export default Product;
