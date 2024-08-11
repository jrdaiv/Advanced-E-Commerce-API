import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    cartList: [],
    totalItems: 0,
    totalPrice: 0,
}


export const cartListSlice = createSlice({
    name: 'cartList',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const product = action.payload;
            const existingItem = state.cartList.find((item) => item.id === product.id);
            // alert(`${product.title} has been added to the cart!`);
            if(!existingItem) {
                state.cartList.push({...product, quantity: 1});
                state.totalItems += 1;
                state.totalPrice += product.price;
            }else {
                existingItem.quantity += 1;
                state.totalPrice += product.price;
            }
        },
        removeItem: (state, action) => {
            const productId = action.payload;
            const existingItem = state.cartList.find(item => item.id === productId);
            if (existingItem.quantity === 1) {
                state.totalItems -= 1;
                state.totalPrice -= existingItem.price * existingItem.quantity;
                state.cartList = state.cartList.filter(item => item.id !== productId);
            }
            
        },
        updateItem: (state, action) => {
            const productId = action.payload;
            const existingItem = state.cartList.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity += 1;
            }
         },

         loadCart: (state, action) => {
            const cartData = action.payload;
            state.cartList = cartData.cartList;
            state.totalItems = cartData.totalItems;
            state.totalPrice = cartData.totalPrice;
        },
    
        clearCart: (state) => {
            state.cartList = [];
            state.totalItems = 0;
            state.totalPrice = 0;
        }
    }
});


export const { addItem, removeItem, clearCart , loadCart} = cartListSlice.actions
export default cartListSlice.reducer



