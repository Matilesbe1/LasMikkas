import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SheetsItem from "./sheetsItem.jsx";
import "./sheets.css"


function Sheets() {
    const [data, setData] = useState([]);
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
        fetch("https://docs.google.com/spreadsheets/d/1K4lktNvf4XaNwkzOfiq-MhOmy3jc3qJr5IIcfdXD9Dk/edit?usp=sharing")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
        <>
            <h1 className="best-title">Productos</h1>
            <div className="products-container">
                {productos.map((product) => (
                    <SheetsItem key={product.id} name={product.nombre} price={product.price} image={product.image} image2={product.image2} />
                ))}
            </div>
        </>
    );
}

export default Sheets;



