import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../store/features/authSlice/authSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from '../Login/Authorization.module.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error1 = useSelector(state => state.auth.error1);
    const error2 = useSelector(state => state.auth.error2);

    const handleRegister = () => {
        if (username && password) {
            dispatch(register({ username, password }));
            if (!(error1 || error2)) {
                setUsername('');
                setPassword('');
                navigate('/login');
            }
        } else {
            alert('Введите корректные данные');
        }
    };

    return (
        <div className={styles.body}>
            <div className={styles.block}>
                <h2 className={styles.title}>Регистрация</h2>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Логин"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {error1 && <div className={styles.error}>{error1}</div>}
                <input
                    className={styles.input}
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label className={styles.label}>
                    <input
                        className={styles.inputCheckbox}
                        type="checkbox"
                    />Я согласен получать обновления на почту
                </label>
                <button className={styles.button} onClick={handleRegister}>Зарегистрироваться</button>
                <div className={styles.link}>
                    <Link to={"/login"}>Авторизоваться</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;