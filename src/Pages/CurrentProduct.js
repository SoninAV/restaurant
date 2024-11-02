import { useParams } from "react-router-dom"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateCurrentProduct } from "../store/features/products/productsSlice"
import ButtonBtm from "../components/ui/ButtonBtm/ButtonBtm"
import Header from "../components/blocks/Header/Header"
import { addProductsInBasket } from "../store/features/products/productsSlice"
import styles from "./CurrentProduct.module.css"

export default function CurrentProduct() {
    const currentProduct = useSelector((state) => state.products.currentProduct)
    let params = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(updateCurrentProduct(+params.id))
    }, [dispatch, params.id])
    return (
        <div className={styles.body}>
            <div className="container">
                <Header
                    forCurrentProduct
                />
                <div className={styles.main}>
                    <img className={styles.img} src={currentProduct.url} alt={`product ${currentProduct.id}`} />
                    <div className={styles.productData}>
                        <h2 className={styles.title}>{currentProduct.title}</h2>
                        <p className="description">{currentProduct.fullDescription}</p>
                        <div className={styles.dataBottom}>
                            <span className={styles.price}>{`${currentProduct.price} ₽`}</span>
                            <ButtonBtm
                                text={"В корзину"}
                                onClickBtm={(e) => {
                                    e.stopPropagation()
                                    dispatch(addProductsInBasket(currentProduct))
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}