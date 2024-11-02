import { createSlice } from '@reduxjs/toolkit'


const totalForBasket = (state) => {
    state.counterInBasket = state.basketProducts.reduce((acc, item) =>{return acc + item.count}, 0)

    state.allPriceInBasket = state.basketProducts.reduce((acc, item) =>{return acc + (item.price * item.count)}, 0)
}
const fullDescription = 'Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют от нас анализа позиций.Не следует, однако забывать, что консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение новых предложений.'

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [
            {
                id: 1,
                url: './assets/img/product_1.png',
                title: 'Устрицы по рокфеллеровски',
                description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
                fullDescription: fullDescription,
                price: 2700,
                count: 0
            },
            {
                id: 2,
                url: './assets/img/product_2.png',
                title: 'Свиные ребрышки на гриле с зеленью',
                description: 'Не следует, однако забывать, что реализация намеченных плановых',
                fullDescription: fullDescription,
                price: 1600,
                count: 0
            },
            {
                id: 3,
                url: './assets/img/product_3.png',
                title: 'Креветки по-королевски в лимонном соке',
                description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу',
                fullDescription: fullDescription,
                price: 1820,
                count: 0
            },
            {
                id: 4,
                url: './assets/img/product_1.png',
                title: 'Устрицы по рокфеллеровски',
                description: 'Значимость этих проблем настолько очевидна, что укрепление и развитие структуры',
                fullDescription: fullDescription,
                price: 2700,
                count: 0
            },
        ],
        currentProduct: {},
        basketProducts: [],
        counterInBasket: 0,
        allPriceInBasket: 0
    },
    reducers: {
        addProductsInBasket: (state, action) => {
            let currentProduct = { ...action.payload }
            const findIndex = state?.basketProducts.findIndex(item => {
                return item?.id === action.payload.id
            })

            if (findIndex === -1) {
                currentProduct.count++
                state.basketProducts.push(currentProduct)
            } else {
                state.basketProducts[findIndex].count++
            }

            totalForBasket(state)
        },
        updateCurrentProduct: (state, action) => {
            state.currentProduct = state.products.find(item => {
                return item.id === action.payload
            })
        },
        productsInShoppingCart: (state, action) => {
            const findIndex = state?.basketProducts.findIndex(item => {
                return item?.id === action.payload.id
            })
            if (action.payload.type === 1) {
                state.basketProducts[findIndex].count++
            }
            if (action.payload.type === 0) {
                state.basketProducts[findIndex].count--
                if (state.basketProducts[findIndex].count === 0) {
                    state.basketProducts.splice(findIndex, 1)
                }
            }
            if (action.payload.type === -1) {
                state.basketProducts.splice(findIndex, 1)
            }

            totalForBasket(state)
        }
    }
})

export const { addProductsInBasket } = productsSlice.actions
export const { updateCurrentProduct } = productsSlice.actions
export const { productsInShoppingCart } = productsSlice.actions

export default productsSlice.reducer