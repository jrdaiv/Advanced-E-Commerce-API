import React, { useCallback, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, calculateTotals } from '../features/cartListSlice';
import LoginRegisterNav from './LoginRegisterNav';

const ShoppingCart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const dispatch = useDispatch();

  const deleteCartItem = useCallback((item) => {
    dispatch(removeFromCart(item));
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch])

  



  return (
    <div>
      <LoginRegisterNav />
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.title} - {item.quantity} - ${item.price}</p>
          <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
        </div>
      ))}
      <h3>Total: ${totalAmount.toFixed(2)}</h3>
      <button onClick={() => {
        dispatch(clearCart());
        
      }}>
        Checkout
      </button>
    </div>
  );
  
}












export default React.memo(ShoppingCart)