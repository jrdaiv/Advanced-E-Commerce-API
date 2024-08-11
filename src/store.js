import { configureStore } from "@reduxjs/toolkit";
import cartListReducer, { loadCartListState } from "./features/cartListSlice";

const localStorageMiddleware = store => next => action => {
    const result = next(action);
    localStorage.setItem('cartList', JSON.stringify(store.getState().cartList.cartList || []));
    // localStorage.setItem('totalItems', store.getState().cartList.totalItems);
    // localStorage.setItem('totalPrice', store.getState().cartList.totalPrice);

    return result;
};




export const store = configureStore({
    reducer: {
        cartList: cartListReducer,
    },

    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), localStorageMiddleware],
    preloadedState: {
        cartList: loadCartListState(),
    }
})

