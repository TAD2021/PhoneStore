import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: [],
        filter: {
            trademark: [],
            color: [],
            memory: [],
            ram: [],
        },
    },
    reducers: {
        filterProduct: (state, action) => {
            state.product = [];
            console.log('trademark:', state.filter.trademark.length);
            if (state.filter.trademark.length !== 0) {
                const result = action.payload
                    .filter((product) => state.filter.trademark.includes(product.trademark))
                    .slice(0);
                if (state.product.length === 0) {
                    state.product = result.slice(0);
                } else {
                    state.product = result
                        .filter((element) => {
                            const stateP = state.product.map((stateProduct) => stateProduct._id);
                            return stateP.indexOf(element._id) >= 0 ? true : false;
                        })
                        .slice(0);
                }
            }
            console.log('color:', state.filter.color.length);
            if (state.filter.color.length !== 0) {
                const result = action.payload.filter((product) => state.filter.color.includes(product.color)).slice(0);
                if (state.product.length === 0) {
                    state.product = result.slice(0);
                } else {
                    state.product = result
                        .filter((element) => {
                            const stateP = state.product.map((stateProduct) => stateProduct._id);
                            return stateP.indexOf(element._id) >= 0 ? true : false;
                        })
                        .slice(0);
                }
            }

            console.log('memory:', state.filter.memory.length);
            if (state.filter.memory.length !== 0) {
                const result = action.payload
                    .filter((product) => state.filter.memory.includes(product.memory))
                    .slice(0);
                if (state.product.length === 0) {
                    state.product = result.slice(0);
                } else {
                    state.product = result
                        .filter((element) => {
                            const stateP = state.product.map((stateProduct) => stateProduct._id);
                            return stateP.indexOf(element._id) >= 0 ? true : false;
                        })
                        .slice(0);
                }
            }
            console.log('ram:', state.filter.ram.length);
            if (state.filter.ram.length !== 0) {
                const result = action.payload.filter((product) => state.filter.ram.includes(product.ram)).slice(0);
                if (state.product.length === 0) {
                    state.product = result.slice(0);
                } else {
                    state.product = result
                        .filter((element) => {
                            const stateP = state.product.map((stateProduct) => stateProduct._id);
                            return stateP.indexOf(element._id) >= 0 ? true : false;
                        })
                        .slice(0);
                }
            }
        },
        addTrademark: (state, action) => {
            state.filter.trademark.push(action.payload);
        },
        removeTrademark: (state, action) => {
            const removeItem = state.filter.trademark.filter((item) => item !== action.payload);
            state.filter.trademark = removeItem;
        },
        addColor: (state, action) => {
            state.filter.color.push(action.payload);
        },
        removeColor: (state, action) => {
            const removeItem = state.filter.color.filter((item) => item !== action.payload);
            state.filter.color = removeItem;
        },
        addMemory: (state, action) => {
            state.filter.memory.push(action.payload);
        },
        removeMemory: (state, action) => {
            const removeItem = state.filter.memory.filter((item) => item !== action.payload);
            state.filter.memory = removeItem;
        },
        addRam: (state, action) => {
            state.filter.ram.push(action.payload);
        },
        removeRam: (state, action) => {
            const removeItem = state.filter.ram.filter((item) => item !== action.payload);
            state.filter.ram = removeItem;
        },
        addPrice: (state, action) => {
            state.filter.price.push(action.payload);
        },
        removePrice: (state, action) => {
            const removeItem = state.filter.price.filter((item) => item !== action.payload);
            state.filter.price = removeItem;
        },
    },
});

export const {
    filterProduct,
    addTrademark,
    removeTrademark,
    addColor,
    removeColor,
    addMemory,
    removeMemory,
    addRam,
    removeRam,
    addPrice,
    removePrice,
} = productSlice.actions;

export default productSlice.reducer;
