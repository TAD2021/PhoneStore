import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item._id === action.payload._id);
            if (itemInCart) {
                itemInCart.quantity += action.payload.quantity;
            } else {
                state.cart.push({ ...action.payload, quantity: action.payload.quantity });
            }
        },
        changeQuantityCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item._id === action.payload._id);
            itemInCart.quantity = action.payload.quantity;
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item._id === action.payload._id);
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item._id === action.payload._id);
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter((item) => item._id !== action.payload._id);
            state.cart = removeItem;
        },
        orderProduct: (state) => {
            state.cart = [];
        },
    },
});

export const { addToCart, changeQuantityCart, incrementQuantity, decrementQuantity, removeItem, orderProduct } =
    cartSlice.actions;

export default cartSlice.reducer;
