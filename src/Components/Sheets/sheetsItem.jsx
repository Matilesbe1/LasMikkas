import React from 'react'
import { useState } from 'react'

const SheetsItem = ({ name, price, image, image2 }) => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingProduct = cartItems.find(
            (item) => item.id === product.id,
            cartItems.push(product),
            console.log(product),
            console.log(cartItems)
        );
        if (existingProduct) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCartItems([
                ...cartItems,
                { ...product, quantity: 1 }
            ]);
        }
    };
    
    return (
        <div className='product'>
            <div className='img-wrapper'>
                <img src={image} alt={name} className="img base" />
                <img src={image2} alt={name} className="img hover" />
            </div>
            <h6>{name}</h6>
            <span>{price}</span>
            <button className='comprar-button' onClick={() => addToCart({ name, price, image, image2 })}>Comprar</button>
        </div>
    )
}


export default SheetsItem