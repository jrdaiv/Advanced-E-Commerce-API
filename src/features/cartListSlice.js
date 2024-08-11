import { createSlice } from "@reduxjs/toolkit";



export const loadCartListState = () => {
    const cartListState = localStorage.getItem('cartList');

    if (cartListState !== null) {
        try {
            return JSON.parse(cartListState);
        } catch (error) {
            console.error('Error parsing cartList state:', error);
            return initialState;
        }
    }
        else {
        return initialState;
    }
    

}


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
            console.log('current state', state)
            console.log('action', action.payload)
            if (!Array.isArray(state.cartList)) {
                state.cartList = [];
            }
            state.cartList.push(action.payload);
            state.totalItems += 1;
            state.totalPrice += action.payload.price;
        },
        removeItem: (state, action) => {
            if (!Array.isArray(state.cartList)) {
                state.cartList = [];
            }
            const productId = action.payload;
            const existingItem = state.cartList.find(item => item.id === productId);
            if (existingItem) {
                state.totalItems -= 1;
                state.totalPrice -= existingItem.price;
                state.cartList = state.cartList.filter(item => item.id !== productId);
            }
        },

         loadCart: (state, action) => {
            state.cartList = action.payload.cartList || [];
            state.totalItems = action.payload.totalItems || 0;
            state.totalPrice = action.payload.totalPrice || 0;
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



