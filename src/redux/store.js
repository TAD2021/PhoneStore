import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './authSlice';
import cartReducer from './cartSlice';
import productReducer from './productSlice';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'cart', 'product'],
};

const reducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    product: productReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export default store;
