import { useContext } from 'react';

const Cart=()=> {
    const { cartItems, setCartItems } = useContext();

    return (
        <div>
            <h1>Carrito</h1>

            {cartItems.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>

                    <p>Cantidad: {item.quantity}</p>

                    <p>${item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Cart;
