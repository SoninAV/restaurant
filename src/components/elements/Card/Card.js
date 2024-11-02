import styles from "./Card.module.css"
import ButtonCircle from "../../ui/ButtonCircle/ButtonCircle"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { productsInShoppingCart } from "../../../store/features/products/productsSlice"

export default function Card({ id, widthCard = 'initial', heightCard = 'initial', data, onClickCircle, symbol = '🞢', color, forBasket = false, isClickability = false }) {
    const inlineStyle = {
        display: "flex",
        alignItems: "center",
        flexDirection: forBasket ? "row" : "column",
        width: widthCard,
        height: heightCard,
        ...(forBasket ? {
            border: 'none',
            justifyContent: 'space-between',
            alignItems: 'center',
        } : {})
    }
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div
            className={styles.card} style={inlineStyle}
            onClick={(e) => {
                if (isClickability) {
                    navigate(`/${id}`)
                }
            }}
        >
            <img src={data.url} alt={`product ${data.id}`}
                style={{
                    ...(forBasket ? { widh: '112px', height: '112px' } : {})
                }}
            />
            <h2 className={styles.title}
                style={{
                    ...(forBasket ? { margin: '0' } : {})
                }}
            >{data.title}</h2>
            <p className={styles.description}
                style={{ display: forBasket ? 'none' : 'block' }}
            >{data.description}</p>
            <div style={{ display: forBasket ? 'flex' : 'none', gap: '5px'}}>
                <button onClick={(e) => {
                    e.stopPropagation()
                    dispatch(productsInShoppingCart({
                        type: 1,
                        id: id
                    }))
                }}>+</button>
                <div>{data.count}</div>
                <button onClick={(e) => {
                    e.stopPropagation()
                    dispatch(productsInShoppingCart({
                        type: 0,
                        id: id
                    }))
                }}>-</button>
            </div>
            <div className={styles.cardBottom}
                style={{
                    ...(forBasket ? { position: 'static', width: 'initial', gap: '15px' } : {})
                }}
            >
                <div className="card__price"
                    style={{
                        ...(forBasket ? { display: 'flex', alignItems: 'center', color: '#D58C51'} : {})
                    }}
                >{data.price} ₽</div>
                <ButtonCircle
                    onClickCircle={onClickCircle}
                    symbol={symbol}
                    color={color}
                />
            </div>
        </div>
    )
}