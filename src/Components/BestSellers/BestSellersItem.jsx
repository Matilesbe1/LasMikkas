import React from 'react'

const BestSellersItem = ({ name, price, image, image2 }) => {
    return (
        <div className='product'>
            <div className='img-wrapper'>
                <img src={image} alt={name} className="img base" />
                <img src={image2} alt={name} className="img hover" />
            </div>
            <h6>{name}</h6>
            <span>{price}</span>
            <button className='comprar-button'>Comprar</button>
        </div>
    )
}

export default BestSellersItem
