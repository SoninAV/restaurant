import ButtonExit from "../../ui/ButtonExit/ButtonExit"
import ButtonCircle from "../../ui/ButtonCircle/ButtonCircle"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function Header({ nameContainer = 'container', forBasket = false, forCurrentProduct = false }) {
    const count = useSelector((state) => state.products.counterInBasket)
    const allPrice = useSelector((state) => state.products.allPriceInBasket)
    const navigate = useNavigate()
    const header = {
        backgroundColor: forCurrentProduct ? 'initinal' : '#161516',
        padding: '52px',
        color: 'white',
    }
    const buttonCircle = {
        display: (forBasket || forCurrentProduct) ? 'initial' : 'none'
    }
    const headerWrapper = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
    const headerTitle = {
        display: forCurrentProduct ? 'none' : 'flex',
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: '30px'
    }
    const headerInner = {
        display: 'flex',
        alignItems: 'center'
    }
    const headerCounterBlock = {
        display: forBasket ? 'none' : 'flex',
    }
    const img = {
        margin: "0 20px"
    }
    const headerCounterText = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'end',
        gap: '4px'
    }
    return (
        <div style={header}>
            <div className={nameContainer} style={headerWrapper}>
                <div style={buttonCircle}>
                    <ButtonCircle
                        symbol={'←'}
                        onClickCircle={() => {
                            navigate('/products')
                        }}
                    />
                </div>
                <h1 style={headerTitle}>
                    {forBasket ? 'Корзина с выбранными товарами' : 'наша продукция'}
                </h1>

                <div style={headerInner}>
                    <div style={headerCounterBlock}>
                        <div style={headerCounterText}>
                            <div>{count} товара</div>
                            <div>на сумму {allPrice} ₽</div>
                        </div>
                        <img
                            style={img}
                            src="./assets/img/basket.png" alt="basket"
                            onClick={() => {
                                navigate('/basket')
                            }}
                        />
                    </div>
                    <ButtonExit />
                </div>
            </div>
        </div>
    )
}