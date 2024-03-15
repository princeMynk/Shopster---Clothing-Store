import { createSlice } from "@reduxjs/toolkit";

// Helper function to update local storage
const updateLocalStorage = (state) => {
    localStorage.setItem("cartItems", JSON.stringify(state));
};

// Retrieve cart items from local storage if available
const initialState = JSON.parse(localStorage.getItem("cartItems")) || [];


const Slice = createSlice({
    name: "slice",
    initialState,
    reducers: {
        add: (state, action) => {
                state.push({ ...action.payload, quantity: 1 });
                updateLocalStorage(state); // Update local storage
        },
        remove: (state, action) => {
            const newState = state.filter((e) => e.id !== action.payload);
            updateLocalStorage(newState); // Update local storage
            return newState;
        },
        increaseQuantity: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            if (item) {
                item.quantity = item.quantity + 1;
                console.log("the updated quantity", JSON.stringify(localStorage.getItem("cartItems")));
                updateLocalStorage(state); // Update local storage
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity = item.quantity - 1;
                console.log("the updated quantity", JSON.stringify(localStorage.getItem("cartItems")));
                updateLocalStorage(state); // Update local storage
            }
        }
    }
});

export const { add, remove, increaseQuantity, decreaseQuantity } = Slice.actions;
export default Slice.reducer;
