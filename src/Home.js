import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=''/>

                <div className='home__row'>
                    <Product 
                        id="1234567"
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Business Paperback'
                        price={29.99}
                        image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating= {5}
                    />
                    <Product 
                        id='6459135'
                        title='Kenwood kMix Stand Mixer for Baking, Stylish, Kitchen Mixr with K-beater, Dough Hook and Whisk, 5 Liter Glass Bowl'
                        price={239.00}
                        image = "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                        rating= {4}
                    />

                    {/* <Product /> */}
                </div>

                <div className='home__row'>
                    <Product 
                        title="Fitbit Charge 3 Fitness Activity Tracker"
                        price={113.99}
                        image = "https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                        rating= {3}
                    />
                        <Product
                        id="6546813" 
                        title="Amazon Echo (3rd generation) | Smart speaker with Alex, Charcoal Fabric"
                        price={98.99}
                        image = "https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                        rating= {5}
                    />
                        <Product 
                        id= "34891239"
                        title='EVGA 2.1GHz+ GeForce RTX 3090 iCX3 graphics card'
                        price={1499.00}
                        image = "https://hexus.net/media/uploaded/2020/9/e34da2fe-1c18-4a7e-acd8-834ffca6ba94.jpg"
                        rating= {5}
                    />
                </div>

                <div className='home__row'>
                    <Product 
                        id="124514365"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        image = "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        rating= {4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
