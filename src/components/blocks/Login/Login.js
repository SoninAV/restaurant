import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../store/features/authSlice/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Authorization.module.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const error = useSelector(state => state.auth.error);
    const error1 = useSelector(state => state.auth.error1);
    const error2 = useSelector(state => state.auth.error2);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated && !error && !error1 && !error2) {
            navigate('/products');
        }
    }, [isAuthenticated, error, error1, error2, navigate]);

    const handleLogin = () => {
        if (username && password) {
            dispatch(login({ username, password }));
        } else {
            alert('Please enter valid credentials');
        }
    };

    return (
        <div className={styles.body}>
            <div className={styles.block}>
                <h2 className={styles.title}>Авторизация</h2>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {/* {error1 && <div className={styles.error}>{error1}</div>} */}
                <input
                    className={styles.input}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label className={styles.label}>
                    <input
                        className={styles.inputCheckbox}
                        type="checkbox"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />Я согласен получать обновления на почту
                </label>
                <button className={styles.button} onClick={handleLogin}>Войти</button>
                <div className={styles.link}>
                    <Link to={"/register"}>Зарегистрироваться</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;