import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/users/userSlice';
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState: userReducer,
  },
});
