import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import cartReducer from './cartReducer'; // Update the import path

// Define your rootReducer by combining reducers
const rootReducer = combineReducers({
    products: cartReducer,
});

const makeStore = () => configureStore({
    reducer: rootReducer,
});

export const store = makeStore();

// Create an action to handle server-side rendering with next-redux-wrapper
export const hydrate = () => ({ type: HYDRATE, payload: store.getState() });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(makeStore, { debug: true });