import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import CartProduct from "@/types/CartProduct";
import {HYDRATE} from "next-redux-wrapper";


interface CartState {
    products: CartProduct[];
}

const initialState: CartState = {
    products: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartProduct>) => {
            const item = state.products.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += action.payload.quantity;

            } else {
                state.products.push(action.payload);
            }
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter((item) => item.id !== action.payload);
        },
        resetCart: (state) => {
            state.products = [];
        },
    },
    // extraReducers: {
    //     [HYDRATE]: (state, action) => {
    //         return {
    //             ...state,
    //             ...action.payload,
    //         };
    //     },
    // },
});

export const {addToCart, removeItem, resetCart} = cartSlice.actions;

export default cartSlice.reducer;