import React, { useEffect, useState } from 'react'
import AppHeader from '../../Components/AppHeader/AppHeader.jsx'
import Sheets from '../../Components/Sheets/sheets.jsx'
import FooterSection from '../../Components/FooterSection/FooterSection.jsx'
import Productos from '../../Components/Cart/Productos.jsx'
import Cart from '../../Components/Cart/Cart.jsx'
import { CartContext, CartProvider } from '../../Components/Context/CartContext.jsx'
import { useParams } from "react-router-dom";
import SheetsItem from '../../Components/Sheets/sheetsItem.jsx'
import './ProductsScreen.css'



const ProductsScreen = () => {
    const [cartItems, setCartItems] = useState([]);
    const [data, setData] = useState([]);
    const { category } = useParams();
    console.log(category);
    console.log(data);

    useEffect(() => {

        fetch("https://api.sheetbest.com/sheets/e257ea57-9460-4131-ac36-c71098d1f987")
            .then((res) => res.json())
            .then((data) => setData(data));

    }, []);
    const filteredProducts = data?.filter(
        (product) => product.category === category
    );
    return (
        <div>
            <CartProvider>
                <AppHeader />
                    <div className='products-container-2'>
                        {filteredProducts.map((product) => (
                            <div className='product-2'>
                                <div className='img-wrapper-2'>
                                    <img src={product.image} alt={name} className="img-2 base" />
                                    <img src={product.image2} alt={name} className="img-2 hover" />
                                </div>
                                <h6>{product.name}</h6>
                                <span>{product.price}</span>
                                <button className='comprar-button' >Comprar</button>
                            </div>
                        ))}
                    </div>
                <FooterSection />
            </CartProvider>
        </div>
    )
}

export default ProductsScreen
