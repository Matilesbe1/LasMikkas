import { useState, React } from "react";

import "./CartScreen.css";
import AppHeader from "../../Components/AppHeader/AppHeader";

function Cart() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Collar Libelula',
            price: 12000,
            image: 'https://res.cloudinary.com/dcijxubv9/image/upload/v1780067905/IMG_9395_gcdvr5.jpg',
            quantity: 1
        },
        {
            id: 2,
            name: 'Aros Brillos',
            price: 6500,
            image: 'https://res.cloudinary.com/dcijxubv9/image/upload/v1780068793/IMG_8918_hnj8nk.jpg',
            quantity: 1

        }
    ]);
    console.log(cartItems);

    const increaseQuantity = (id) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCartItems(
            cartItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div>
            <AppHeader />
            <div className='container2'>
                <h1 className="title2">Carrito</h1>

                {cartItems.length === 0 ? (
                    <p>El carrito está vacío</p>
                ) : (
                    <>
                        {cartItems.map((item) => (
                            <div key={item.id} className="card2">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="image2"
                                />

                                <div className="info">
                                    <h2>{item.name}</h2>
                                    <p>${item.price}</p>

                                    <div className="controls2">
                                        <button
                                            onClick={() =>
                                                decreaseQuantity(item.id)
                                            }
                                        >
                                            -
                                        </button>

                                        <span>{item.quantity}</span>

                                        <button
                                            onClick={() =>
                                                increaseQuantity(item.id)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>

                                    <button
                                        className="removeButton"
                                        onClick={() => removeItem(item.id)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div className="total2">
                            <h2>Total: ${total}</h2>

                            <button className="checkoutButton">
                                Finalizar compra
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}


export default Cart;