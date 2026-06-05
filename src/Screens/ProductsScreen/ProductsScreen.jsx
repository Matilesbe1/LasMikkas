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
    
    const productos = [
        {
            id: 1,
            nombre: "Collar Libelula",
            price: 12000,
            image: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780067905/IMG_9395_gcdvr5.jpg",
            image2: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780067752/IMG_6341_azfdsp.jpg",
            category: "collares"
        },
        {
            id: 2,
            nombre: "Anillo",
            price: 6500,
            image: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780439828/FullSizeRender_10_vdso1a.jpg",
            image2: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780439828/FullSizeRender_10_vdso1a.jpg",
            category: "anillos"
        },
        {
            id: 3,
            nombre: "Pulsera Estrellas",
            price: 9000,
            image: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780439595/FullSizeRender_7_cngchg.jpg",
            image2: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780439589/FullSizeRender_6_dkdput.jpg",
            category: "pulseras"
        },
        {
            id: 4,
            nombre: "Aros Brillos",
            price: 6500,
            image: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780068793/IMG_8918_hnj8nk.jpg",
            image2: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780068745/IMG_8794_jfaw2j.jpg",
            category: "aros"
        },
        {
            id: 5,
            nombre: "Aros Argolla",
            price: 6500,
            image: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780069005/IMG_9388_d5aiqm.jpg",
            image2: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780068995/IMG_8885_ljitiq.jpg",
            category: "aros"
        },
        {
            id: 6,
            nombre: "Collar Inicial",
            price: 9500,
            image: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780438864/FullSizeRender_1_lmvlof.jpg",
            image2: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780438879/IMG_6155_1_jmloov.jpg",
            category: "collares"
        },
        {
            id: 7,
            nombre: "Collar Uma",
            price: 12000,
            image: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780438948/FullSizeRender_2_l9jqgs.jpg",
            image2: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780438959/IMG_8894_fdqiyx.jpg",
            category: "collares"
        },
        {
            id: 8,
            nombre: "Collar Litum",
            price: 12000,
            image: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780439031/FullSizeRender_3_d6vdwu.jpg",
            image2: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780439042/IMG_8905_krxeaq.jpg",
            category: "collares"
        },
        {
            id: 9,
            nombre: "Pulsera Estrella",
            price: 9000,
            image: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780439358/FullSizeRender_4_vtgmbu.jpg",
            image2: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780439359/FullSizeRender_5_vkcmzs.jpg",
            category: "pulseras"
        },
        {
            id: 10,
            nombre: "Collar Almena",
            price: 12000,
            image: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780439575/IMG_6013_aublnv.jpg",
            image2: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780439577/IMG_6194_gxt0vr.jpg",
            category: "collares"
        },
        {
            id: 11,
            nombre: "Aros Circulo",
            price: 6500,
            image: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780439837/FullSizeRender_9_lejzw6.jpg",
            image2: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780439829/IMG_8897_2_fmhgy5.jpg",
            category: "aros"
        },
        {
            id: 12,
            nombre: "Anillo",
            price: 6500,
            image: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780439830/FullSizeRender_11_reqija.jpg",
            image2: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780439830/FullSizeRender_11_reqija.jpg",
            category: "anillos"
        },
        {
            id: 13,
            nombre: "Collar Benito",
            price: 12000,
            image: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780440109/3E13ADFE-A997-40ED-B3A8-D798248678F0_pjvvjk.jpg",
            image2: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780440110/FullSizeRender_12_nqs6ko.jpg",
            category: "collares"
        },
        {
            id: 14,
            nombre: "Anillos",
            price: 6500,
            image: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780440109/FullSizeRender_13_gzfdbd.jpg",
            image2: "https://res.cloudinary.com/dcijxubv9/image/upload/v1780440109/FullSizeRender_13_gzfdbd.jpg",
            category: "anillos"
        }
    ];

    useEffect(() => {

        fetch("https://api.sheetbest.com/sheets/e257ea57-9460-4131-ac36-c71098d1f987")
            .then((res) => res.json())
            .then((data) => setData(data));

    }, []);
    const filteredProducts = productos?.filter(
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
                                <h6>{product.nombre}</h6>
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
