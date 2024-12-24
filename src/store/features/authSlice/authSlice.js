import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) || false,
    isRegistred: JSON.parse(localStorage.getItem('isRegistred')) || false,
    users: JSON.parse(localStorage.getItem('users')) || [],
    error: "Введите данные",
    previousInput: {
        username: '',
        password: '',
    },
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerUser: (state, action) => {
            const { username, password } = action.payload;
        
            // Проверка длины имени и пароля
            if (username.length < 4 || password.length < 4) {
                state.error = 'Поле должно содержать не менее 4-х символов';
                return;
            }
        
            // Проверка на совпадение с предыдущим вводом
            if (state.previousInput.username === username && state.previousInput.password === password) {
                let storedUsers = JSON.parse(localStorage.getItem('users')) || [];
                const userExists = storedUsers.some(user => user.username === username);
        
                if (userExists) {
                    state.error = 'Пользователь уже существует';
                    return;
                }
        
                const user = { username, password };
                storedUsers.push(user);
        
                try {
                    localStorage.setItem('users', JSON.stringify(storedUsers));
                    state.users = storedUsers;
                    state.previousInput.username = "";
                    state.previousInput.password = "";
                    state.error = null;
                } catch (error) {
                    console.error('Error saving users to local storage', error);
                    state.error = 'Ошибка сохранения пользователей';
                }
            } else {
                // Сохранение текущего ввода для последующей проверки
                state.previousInput = { username, password };
                state.error = 'Повторите ввод для подтверждения';
            }
        },

        loginUser: (state, action) => {
            const { username, password } = action.payload;

            if (username.length < 4 || password.length < 4) {
                state.error = 'Поле должно содержать не менее 4-х символов';
                return;
            }

            let storedUsers = JSON.parse(localStorage.getItem('users')) || [];

            const user = storedUsers.find(
                (user) => user.username === username && user.password === password
            );

            if (user) {
                state.isAuthenticated = true;
                localStorage.setItem('isAuthenticated', JSON.stringify(true));
                state.error = null;
            } else {
                state.error = 'Неверные учетные данные';
            }
        },

        logoutUser: (state) => {
            state.isAuthenticated = false;
            localStorage.setItem('isAuthenticated', JSON.stringify(false));
        }
    },
});

export const { registerUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;