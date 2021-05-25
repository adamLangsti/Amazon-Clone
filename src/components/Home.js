import React from 'react';
import Product from './Product';

const Home = () => {
    return (
        <div className='home'>
            <div className='home-container'>
                <img
                    className='home-image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                    alt='hero'
                />
                <div className='home-row'>
                    <Product
                        id={1}
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
                        price={29.99}
                        image={
                            'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                        }
                        rating={5}
                    />
                    <Product
                        id={2}
                        title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-Beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
                        price={239.0}
                        rating={4}
                        image='https://images.unsplash.com/photo-1587560555774-4063ddc3fe25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                    />
                </div>
                <div className='home-row'>
                    <Product
                        id={3}
                        title='Amazon Echo (3rd generation) Smart speaker with Alexa, Charcoal Fabric'
                        price={99.99}
                        rating={5}
                        image='https://images.unsplash.com/photo-1617722694908-9be1092d1bc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=682&q=80'
                    />
                    <Product
                        id={4}
                        title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th generation)'
                        price={899.99}
                        rating={5}
                        image='https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1303&q=80'
                    />
                    <Product
                        id={5}
                        title="The Xbox Series X is Microsoft's latest and greatest gaming console, offering the best Xbox gaming experience there is right now."
                        price={599.99}
                        rating={4}
                        image='https://images.unsplash.com/photo-1612801799022-f5b01a2de996?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
