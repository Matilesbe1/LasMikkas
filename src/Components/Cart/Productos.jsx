import ProductItem from "./ProductItem";

function Productos({ cartItems, setCartItems }) {

    const products = [{
        id: 1,
        name: 'collar',
        price: 10,
        image: 'https://res.cloudinary.com/dcijxubv9/image/upload/v1780067905/IMG_9395_gcdvr5.jpg'
    },
    {
        id: 2,
        name: 'aros',
        price: 20,
        image: 'https://res.cloudinary.com/dcijxubv9/image/upload/v1780068793/IMG_8918_hnj8nk.jpg'
    }];

    const addToCart = (product) => {

        const existingProduct = cartItems.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {

            const updatedCart = cartItems.map((item) =>
                item.id === product.id
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            );

            setCartItems(updatedCart);

        } else {

            setCartItems([
                ...cartItems,
                {
                    ...product,
                    quantity: 1
                }
            ]);
        }
    };

    return (
        <div>
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                />
            ))}
        </div>
    );
}

export default Productos;