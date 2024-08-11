import React, { useCallback, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, clearCart, loadCart } from '../features/cartListSlice';
import LoginRegisterNav from './LoginRegisterNav';







const ShoppingCart = () => {
    const cartItems = useSelector((state) => Array.isArray(state.cartList.cartList) ? state.cartList.cartList : []);
    const totalItems = useSelector((state) => state.cartList.totalItems || 0);
    const totalPrice = useSelector((state) => state.cartList.totalPrice || 0);

    const memoCartItems = useMemo(() => cartItems, [cartItems]);
    const memoTotalItems = useMemo(() => totalItems, [totalItems]);
    const memoTotalPrice = useMemo(() => totalPrice, [totalPrice]);

    const dispatch = useDispatch();

    useEffect (() => { 
        localStorage.setItem('cartList', JSON.stringify(memoCartItems));
        localStorage.setItem('totalItems', memoTotalItems);
        localStorage.setItem('totalPrice', memoTotalPrice);
    }, [memoCartItems, memoTotalItems, memoTotalPrice])

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartList') || '[]');
        const storedTotalItems = parseInt(localStorage.getItem('totalItems'));
        const storedTotalPrice = parseFloat(localStorage.getItem('totalPrice'));
    
        if (Array.isArray(storedCartItems) && storedCartItems.length > 0) {
          dispatch(loadCart({
            cartList: storedCartItems,
            totalItems: storedTotalItems,
            totalPrice: storedTotalPrice,
          }));
        }
      }, [dispatch]);

    const handleCheckout = useCallback(() => {
        dispatch(clearCart());
        alert('Thank you for your purchase!');
    }, [dispatch]);

    const totalPriceMemo = useMemo(() => (memoTotalPrice ? memoTotalPrice.toFixed(2) : '0.00'), [memoTotalPrice]);


  return (



    <div>
        <LoginRegisterNav />
        <h1>Shopping Cart</h1>
        <ul>
            {memoCartItems.map((item) => (
                <li key={item.id}>
                    {item.title} - ${item.price}
                    <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
                </li>
            ))}
        </ul>
        <p>Total Items: {memoTotalItems}</p>
        <p>Total Price: ${totalPriceMemo}</p>
        <button onClick={handleCheckout}>Checkout</button>

        


    </div>



  )




}

export default React.memo(ShoppingCart)