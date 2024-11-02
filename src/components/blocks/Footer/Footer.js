import styles from './Footer.module.css'
import { useSelector } from 'react-redux'
import ButtonBtm from '../../ui/ButtonBtm/ButtonBtm'

export default function Footer() {
    const allPrice = useSelector((state) => state.products.allPriceInBasket)
    return (
        <footer className={styles.footer}>
            <div className={`container-second ${styles.footerInner}`}>
                <div>
                    Заказ на сумму: <span className={styles.footerPrice}>{allPrice} ₽
                    </span>
                </div>
                <ButtonBtm
                    text={"Оформить заказ"}
                    onClickBtm={() => { }}
                />
            </div>
        </footer>
    )
}