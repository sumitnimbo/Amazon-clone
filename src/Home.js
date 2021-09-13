import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
                <div className="home__row">
                    <Product 
                        id="54213685"
                        title="Logitech G PRO Wireless Gaming Mouse, Hero 25K Sensor, 25,600 DPI, RGB, Ultra Lightweight, 4-8 Programmable Buttons, Long Battery Life, POWERPLAY-Compatible, Built for Esports, PC/Mac - Black"
                        price="10995.00"
                        image="https://m.media-amazon.com/images/I/51ySu55JzAL._SL1500_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="12548231"
                        title="Dell Alienware m15(R3) 15.6-inch (39.6 cm) FHD Gaming Laptop (10th Gen Core i7-10750H/16GB/512GB SSD/Windows 10 Home & MS Office/6GB NVIDIA GTX 1660 Ti Graphics), Lunar Light"
                        price="174990.00"
                        image="https://m.media-amazon.com/images/I/61m3N4MBaNL._SL1000_.jpg"
                        rating={3}
                    />

                </div>
                <div className="home__row">
                    <Product 
                        id="85545632"
                        title="Fastrack reflex 3.0 Unisex activity tracker - Full touch, color display, Heart rate monitor, Dual- tone silicone strap and up to 10 days battery life"
                        price="2245.00"
                        image="https://m.media-amazon.com/images/I/61u2Rr7tBRL._UL1500_.jpg"
                        rating={4}
                    />
                    <Product
                        id="54562145" 
                        title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black"
                        price="2999.00"
                        image="https://m.media-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
                        rating={5}
                    />
                    <Product 
                        id="12365472"
                        title="OnePlus Nord 2 5G (Gray Sierra, 8GB RAM, 128GB Storage)"
                        price="29999.00"
                        image="https://m.media-amazon.com/images/I/71KVeQql77S._SL1500_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="25712342"
                        title="Sony Bravia 108 cm (43 inches) 4K Ultra HD Smart LED Google TV KD-43X80J (Black) (2021 Model) | with Alexa Compatibility"
                        price="67440.00"   
                        image="https://m.media-amazon.com/images/I/81FLRLCg+4S._SL1500_.jpg"
                        rating={5}
                    />                    
                </div>
            </div>        
        </div>
    )
}

export default Home
