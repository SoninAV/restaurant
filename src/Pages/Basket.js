import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/blocks/Header/Header'
import Footer from '../components/blocks/Footer/Footer'
import Card from '../components/elements/Card/Card'
import styles from './Basket.module.css'
import { productsInShoppingCart } from '../store/features/products/productsSlice'

export default function Basket() {
    const basketProducts = useSelector((state) => state.products.basketProducts)
    const dispatch = useDispatch()
    return (
        <>
            <Header
                nameContainer="container-second"
                forBasket
            />
            <main className={styles.main}>
                <div className='container-second'>
                    {basketProducts.map(product => (
                        <Card
                            key={product.id}
                            id={product.id}
                            data={product}
                            forBasket
                            symbol='✕'
                            onClickCircle={(e) => {
                                e.stopPropagation()
                                dispatch(productsInShoppingCart({
                                    id: product.id,
                                    type: -1
                                }))
                            }}
                        />
                    ))
                    }
                </div>
            </main>
            <Footer />
        </>
    )
}