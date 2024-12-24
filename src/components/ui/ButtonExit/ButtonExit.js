import styles from "./ButtonExit.module.css"
import { logoutUser } from "../../../store/features/authSlice/authSlice"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

export default function ButtonExit() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <button
            className={styles.button}
            onClick={() => {
                dispatch(logoutUser())
                navigate('/')
        }}
        >
            Выйти
        </button>
    )
}