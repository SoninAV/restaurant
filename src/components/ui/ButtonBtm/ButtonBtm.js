import styles from "./ButtonBtm.module.css"

export default function ButtonBtm({onClickBtm, text}) {
    return (
        <button onClick={onClickBtm} className={styles.button}>{text}</button>
    )
}