import {createSlice} from '@reduxjs/toolkit';
import {toast} from 'react-toastify'



const themes = {
    winter: 'winter',
    dracula: 'dracula',
}
const getUserFromLocalStorage = () =>{
    return JSON.parse(localStorage.getItem('user')) || null;
}
const firstValue = () =>{
    const theme = localStorage.getItem('theme' || themes.winter);
    document.documentElement.setAttribute('data-theme', theme);
    return theme

  }

const initialState = {
    user: getUserFromLocalStorage(),
    theme: firstValue()
};





const userReducer = createSlice({
    name:'user',
    initialState,
    reducers: {
        loginUser:(state, action) =>{
            console.log(action.payload);
            const user = {...action.payload.user, token: action.payload.jwt}
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user))
        },
        logoutUser:(state, action) =>{
            state.user = null;
            toast.success('logged out successfully');
        },
     

    }
})

export const {loginUser, logoutUser, toggleTheme} = userReducer.actions;

export default userReducer.reducer;