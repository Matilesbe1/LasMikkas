function ProductItem({ product, addToCart }) {

    return (
        <div>
            <img
                src={product.image}
                alt={product.name}
                width="200"
            />

            <h2>{product.name}</h2>

            <p>${product.price}</p>

            <button onClick={() => addToCart(product)}>
                Comprar
            </button>
        </div>
    );
}

export default ProductItem;