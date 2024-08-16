import React, { useCallback, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, calculateTotals } from '../features/cartListSlice';
import LoginRegisterNav from './LoginRegisterNav';
import '../App.css'

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
    <>
      <LoginRegisterNav />
    <div className='cart-container'>
      <h2 className='mt-5 mb-5 text-white'>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <p className='mt-4 text-white'>{item.title} - {item.quantity} - ${item.price} <br/> {item.category}</p>
          {/* <P>{item.category}</P> */}
          <button className="btn btn-danger" onClick={() => dispatch(removeFromCart(item))}>Remove</button>
        </div>
      ))}
      <h3 className='mt-5 mb-3 text-white'>Total: ${totalAmount.toFixed(2)}</h3>
      <button className='btn btn-primary' onClick={() => {
        dispatch(clearCart());
        
      }}>
        Checkout
      </button>
    </div>
    </>
  );
  
}












export default React.memo(ShoppingCart)