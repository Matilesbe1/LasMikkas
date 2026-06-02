import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SheetsItem from "./sheetsItem.jsx";
import "./sheets.css"


function Sheets() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.sheetbest.com/sheets/e257ea57-9460-4131-ac36-c71098d1f987")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
        <>
            <h1 className="best-title">Productos</h1>
            <div className="products-container">
                {data.map((product)=>(
                    console.log(product),
                    <SheetsItem
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        image2={product.image2}
                        category={product.category}/>
                ))}
            </div>
        </>
    );
}

export default Sheets;



