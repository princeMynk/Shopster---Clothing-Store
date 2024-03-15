import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './Slice'

export const Store = configureStore({
    reducer: {
        cart: cartSlice,
    },
});

export default Store;