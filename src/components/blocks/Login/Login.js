import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../../store/features/authSlice/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Authorization.module.css'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const error = useSelector(state => state.auth.error)
    const navigate = useNavigate()

    const handleLogin = () => {
        dispatch(loginUser({ username, password }))
    }

    useEffect (() => {
        if (isAuthenticated) {
            setUsername('')
            setPassword('')
            navigate('/products')
        }
    }, [isAuthenticated])

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
                {error && <div className={styles.error}>{error}</div>}
                <input
                    className={styles.input}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className={styles.checkboxWrapper}>
                    <label className={styles.customCheckbox}>
                        <input
                            className={styles.checkbox}
                            type="checkbox"
                        />
                        <span className={styles.checkmark}></span>
                    </label>
                    <span className={styles.checkboxText}>Я согласен получать обновления на почту</span>
                </div>
                <button className={styles.button} onClick={handleLogin}>Войти</button>
                <div className={styles.link}>
                    <Link to={"/register"}>Зарегистрироваться</Link>
                </div>
            </div>
        </div>
    )
}

export default Login