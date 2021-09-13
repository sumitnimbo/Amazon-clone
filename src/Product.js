import React from 'react';
import CurrencyFormat from 'react-currency-format';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({ id, title, price, image, rating }) {
    const [{ basket }, dispatch ] = useStateValue();


    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
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
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <CurrencyFormat 
                        renderText={(value) => (
                            <>
                                <p><strong>{value}</strong></p>
                            </>
                        )}
                        decimalScale={2}
                        value={price}
                        displayType={"text"}
                        thousandSeparator={true}
                    />           
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i)=> (
                        <p>⭐</p>
                    ))}
                    
                </div>
            </div>
            <img 
                src={image}
                alt=""
            />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
