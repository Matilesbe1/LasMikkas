import React from 'react'
import './BestSellers.css'
import BestSellersItem from './BestSellersItem'
import products from '../Sheets/sheets.jsx'

const BestSellers = () => {

    return (
        <>
            <h3 className='best-title'>Mas vendidos</h3>
            <div className='products-container'>
                {products.map((product) => (
                    <BestSellersItem key={product.id} name={product.name} price={product.price} image={product.image} image2={product.image2} />
                ))}
            </div>
        </>
    )
}

export default BestSellers
