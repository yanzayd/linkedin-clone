import React from 'react';
import Product from './Product';
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image "
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="" />

                <div className="home__row">

                    {/* PRODUCT 1 1 */}
                    <div className='product'>
                    <Product
                    id = '12345678'
                    title = 'The lean startup: How Constant
                    Innovstion Creates Radicates Radically Successful
                    Businesses Paperback'
                    price = {11.96}
                    image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating = {5}
                    />
                    </div>
                    {/* PRODUCT 1 2 */}
                    <Product 
                    id = '23456781'
                    title = "Kenwood kMix stand Mixer for Baking, Stylish Kitchen
                    Mixer with K-beater, Dough Hook and Whisk 5 Litre Glass Bowl"
                    price = {239.0}
                    rating = {4}
                    image = "data:image/jpeg;base64,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"
                    />
                </div>

                <div className="home__row">

                    {/* PRODUCT 2 1 */}
                    <Product 
                    id = '34567812'
                    title = "Samsung LC4RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price = {199.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    rating = {5}
                    />

                    {/* PRODUCT 2 2 */}
                    <Product 
                    id = '45678123'
                    title = 'Amazon Echo (3rd generation) | Smart speacker with Alexa, charcoal Fabric'
                    price = {98.99}
                    image = "http://mobileimages.lowes.com/productimages/8481d3d8-ced8-4aab-a5e1-d05dce3f9375/12025269.jpg"
                    rating = {5}
                    />

                    {/* PRODUCT 2 3 */}
                    <Product 
                    id = '56781234'
                    title = 'New Apple ipad Pro (12.9-inch, Wi-fi,128GB) - Silver (4th Generation'
                    price = {598.99}
                    image = "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    rating = {4}
                    />
                </div>

                <div className="home__row">
                   
                    {/* PRODUCT 3 */}
                    <Product 
                    id = '67812345'
                    title = "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 X 1440"
                    price = {1094.98}
                    image = "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    rating = {4}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
