import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../../store/features/authSlice/authSlice'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styles from '../Login/Authorization.module.css'

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const error = useSelector(state => state.auth.error)

    const handleRegister = () => {
        dispatch(registerUser({ username, password }))
    }

    useEffect (() => {
        if (!error) {
            navigate('/login')
        }
        console.log(error)
    },[error, navigate])

    
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
                {error && <div className={styles.error}>{error}</div>}
                <input
                    className={styles.input}
                    type="password"
                    placeholder="Пароль"
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
                <button className={styles.button} onClick={handleRegister}>Зарегистрироваться</button>
                <div className={styles.link}>
                    <Link to={"/login"}>Авторизоваться</Link>
                </div>
            </div>
        </div>
    )
}

export default Register