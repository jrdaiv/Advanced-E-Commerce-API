import React, { useCallback, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, clearCart, loadCart } from '../features/cartListSlice';
import LoginRegisterNav from './LoginRegisterNav';






const ShoppingCart = () => {
    const cartItems = useSelector((state) => state.cartList.cartList);
    const totalItems = useSelector((state) => state.cartList.totalItems);
    const totalPrice = useSelector((state) => state.cartList.totalPrice);
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('totalItems', totalItems);
        localStorage.setItem('totalPrice', totalPrice);
    }, [cartItems, totalItems, totalPrice])

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        const storedTotalItems = parseInt(localStorage.getItem('totalItems'));
        const storedTotalPrice = parseFloat(localStorage.getItem('totalPrice'));

        if (storedCartItems) {
            dispatch(loadCart({
                cartList: storedCartItems,
                totalItems: storedTotalItems,
                totalPrice: storedTotalPrice
            }));
        }
    }, []);

    const handleCheckout = useCallback(() => {
        dispatch(clearCart());
        alert('Thank you for your purchase!');
    }, [dispatch]);

    const totalPriceMemo = useMemo(() => {
        return totalPrice.toFixed(2);
    }, [totalPrice]);



  return (



    <div>
        <LoginRegisterNav />
        <h1>Shopping Cart</h1>
        <ul>
            {cartItems.map((item) => (
                <li key={item.id}>
                    {item.title} - ${item.price}
                    <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                </li>
            ))}
        </ul>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: ${totalPriceMemo}</p>
        <button onClick={handleCheckout}>Checkout</button>

        


    </div>



  )




}

export default ShoppingCart