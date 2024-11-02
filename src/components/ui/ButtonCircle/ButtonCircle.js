import styles from './ButtonCircle.module.css'

export default function ButtonCircle({ onClickCircle, symbol, color = '#D58C51' }) {
    return (
        <span
            onClick={onClickCircle}
            className={styles.button}
            style={{ color: `${color}`, borderColor: `${color}`}}
        >
            {symbol}
        </span>
    )
}