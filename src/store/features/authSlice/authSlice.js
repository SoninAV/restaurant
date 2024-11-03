import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) || false,
    users: JSON.parse(localStorage.getItem('users')) || [],
    error: "error",
    error1: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (state, action) => {
            const { username, password } = action.payload;
            
            if (username.length < 4) {
                state.error1 = 'Поле должно содержать не менее 4-х символов'
                return
            }
            
            if (password.length < 4) {
                state.error1 = 'Поле должно содержать не менее 4-х символов'
                return
            }
            
            let storedUsers;
            try {
                storedUsers = JSON.parse(localStorage.getItem('users')) || [];
            } catch (error) {
                console.error('Error parsing users from local storage', error);
                storedUsers = [];
                return
            }
            
            const userExists = storedUsers.some(user => user.username === username);
            if (userExists) {
                state.error = 'Пользователь уже существует'
                return
            }
            
            const user = { username, password};
            storedUsers.push(user);
            
            try {
                localStorage.setItem('users', JSON.stringify(storedUsers));
            } catch (error) {
                state.error = error
                console.error('Error saving users to local storage', error);
                return
            }
            state.users = storedUsers;
            state.error = null;
            state.error1 = null;
            return true;
        },
        
        login: (state, action) => {
            const { username, password } = action.payload;
            
            if (username.length < 4) {
                state.error1 = 'Поле должно содержать не менее 4-х символов'
                return
            }
            
            if (password.length < 4) {
                state.error1 = 'Поле должно содержать не менее 4-х символов'
                return
            }
            
            let storedUsers;
            try {
                storedUsers = JSON.parse(localStorage.getItem('users')) || [];
            } catch (error) {
                storedUsers = []
                return
            }
            
            const user = storedUsers.find(
                (user) => user.username === username && user.password === password
            )

            try {
                if (user) {
                    state.isAuthenticated = true;
                    localStorage.setItem('isAuthenticated', JSON.stringify(true));
                } else {
                    throw new Error('Invalid credentials');
                }
            } catch (error) {
                return
            }
            state.error = null
            state.error1 = null
        },
        logout: (state) => {
            state.isAuthenticated = false;
            localStorage.setItem('isAuthenticated', JSON.stringify(false));
        }
    },
});

export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;