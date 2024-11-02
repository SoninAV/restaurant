import { useDispatch, useSelector } from "react-redux"
import Header from "../components/blocks/Header/Header"
import Card from "../components/elements/Card/Card"
import styles from "./Products.module.css"
import { addProductsInBasket } from "../store/features/products/productsSlice"

export default function Products() {
    const products = useSelector((state) => state.products.products)
    const dispatch = useDispatch()
    const addProduct =(e,product) => {
        e.stopPropagation()
        dispatch(addProductsInBasket(product))
    }
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={`${styles.mainProducts} container`}>
                    {products.map(product => (
                        <Card
                            key={product.id}
                            id={product.id}
                            widthCard="312px"
                            heightCard="522px"
                            data={product}
                            isClickability
                            color='white'
                            onClickCircle={(e) => {addProduct(e, product)}}
                        />
                    ))}
                    {products.map(product => (
                        <Card
                            key={product.id}
                            id={product.id}
                            widthCard="312px"
                            heightCard="522px"
                            data={product}
                            isClickability
                            color='white'
                            onClickCircle={(e) => {addProduct(e, product)}}
                        />
                    ))
                    }
                </div>
            </main>
        </>
    )
}